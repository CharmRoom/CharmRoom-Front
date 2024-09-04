import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './simpleTable.css'

const SimpleTable = ({ title, link, content, errMsg = "..." }) => {
    const lineHeight = 41;
    const verticalHeight = lineHeight * 5;

    return (
        <Table className='table-ellipsis'>
            <thead>
                <tr>
                    <th width="60%">{title}</th>
                    <th width="40%" className='text-end'><Link to={link}>더보기</Link></th>
                </tr>
            </thead>
            <tbody>
                {content ?
                    <>
                        {content.map((c) => {
                            return (
                                <tr key={c.id}>
                                    <td style={{ textOverflow: 'ellipsis' }}>{c.title}</td>
                                    <td className='text-end'>{c.createdAt.split(" ")[0]}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td colSpan={2}>
                                <div style={{ minHeight: verticalHeight - lineHeight * content.length }} />
                            </td>
                        </tr>
                    </>
                    :
                    <tr className='text-center align-middle'>
                        <td colSpan={2}>
                            <div style={{ minHeight: verticalHeight, alignContent: "center" }}>
                                {errMsg}
                            </div>
                        </td>
                    </tr>

                }
            </tbody>
        </Table>

    )
}

export default SimpleTable