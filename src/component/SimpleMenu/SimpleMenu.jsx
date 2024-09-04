import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SimpleMenu = ({ title, selected, menus = [], divider = [] }) => {
    return (
        <>
            <Row>
                {title}
            </Row>
            {
                menus.map((menu) => {
                    const isDivided = divider.includes(menu.id);
                    return (
                        <Row key={menu.id}>
                            <Link to={menu.link}>
                                {selected === menu.id ?
                                    <strong>{menu.name}</strong>
                                    :
                                    <>{menu.name}</>
                                }
                            </Link>
                            {isDivided && <hr className='my-2 divider'></hr>}
                        </Row>
                    );
                })
            }
        </>
    );
}

export default SimpleMenu