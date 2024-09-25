import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Authorized from '../../component/Authorized/Authorized'
import SimpleMenu from '../../component/SimpleMenu/SimpleMenu'
import LeftRight from '../../layout/LeftRight'
import UserManage from './UserManage'

const Admin = () => {
    const [path, setPath] = useState(null);
    const location = useLocation();

    const paths = [
        {
            id: "user",
            element: <UserManage />,
            name: "회원 관리",
            link: "user"
        },
        {
            id: "board",
            element: <></>,
            name: "게시판 관리",
            link: "board"
        },
        {
            id: "ad",
            element: <></>,
            name: "광고 배너 관리",
            link: "ad"
        },
    ];

    useEffect(() => {
        let sub = location.pathname.split("/");
        sub = sub.length > 2 ? sub[2] : '';
        if (sub === '')
            sub = 'user';
        setPath(sub);
    }, [location]);

    return (
        <Authorized>
            <LeftRight left={
                <SimpleMenu title="관리자" selected={path} menus={paths} />
            } right={
                <Routes>
                    <Route index element={<UserManage />} />
                    {
                        paths.map((path) => {
                            return (<Route key={path.id} path={path.link} element={path.element}></Route>);
                        })
                    }
                </Routes>
            } />
        </Authorized>
    )
}

export default Admin