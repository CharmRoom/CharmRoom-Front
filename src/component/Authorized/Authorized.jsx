import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../../context/LoginContext';

const Authorized = ({ admin = false, children }) => {

    const [authorized, setAuthorized] = useState(false);
    const { isLogin, userInfo } = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        let check = true;
        
        if (!isLogin)
            check = false;
        else if (admin)
            if (userInfo.level !== 'ROLE_ADMIN')
                check = false;

        console.log(check);

        if (check) {
            setAuthorized(true);
        }
        else {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            {authorized && children}
        </>
    )
}

export default Authorized