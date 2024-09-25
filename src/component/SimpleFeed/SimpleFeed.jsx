import React, { useContext, useEffect, useState } from 'react'
import SimpleTable from '../SimpleTable/SimpleTable';
import UserApi from '../../apis/UserApi';
import LoginContext from '../../context/LoginContext';

const SimpleFeed = () => {
    const { isLogin } = useContext(LoginContext);
    const [ articles, setArticles ] = useState(null);

    const fetchArticles = async () => {
        let response;
        try {
            response = await UserApi.feed();
        } catch(e){
            console.log(e);
        }
        setArticles(response.data.data);
    }

    useEffect(() => {
        if (isLogin) {
            fetchArticles();
        }
    }, [isLogin])

    return (
        articles ? 
        <SimpleTable title="내 구독 글" link="" content={articles.content}/>
        :
        <SimpleTable title="내 구독 글" errMsg={"로그인 해주세요"} />
    )
}

export default SimpleFeed