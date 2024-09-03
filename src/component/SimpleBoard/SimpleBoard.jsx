import React, { useEffect, useState } from 'react';
import BoardApi from '../../apis/BoardApi';
import SimpleTable from '../SimpleTable/SimpleTable';

const SimpleBoard = ({ boardId, page = 0, size = 5 }) => {

    const [boardInfo, setBoardInfo] = useState(null);
    const [articles, setArticles] = useState(null);

    const fetchBoardInfo = async () => {
        let response;
        try {
            response = await BoardApi.getInfo(boardId);
        } catch (e) {
            return;
        }
        setBoardInfo(response.data.data);
    }

    const fetchArticles = async () => {
        let response;
        try {
            response = await BoardApi.getArticleList({ boardId, page, size });
        } catch (e) {
            return;
        }
        setArticles(response.data.data);
    }

    useEffect(() => {
        fetchBoardInfo();
        fetchArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                boardInfo &&
                articles &&
                <SimpleTable title={boardInfo.name} link={`/board/${boardId}`} content={articles.content}></SimpleTable>
            }
        </>
    )
}

export default SimpleBoard