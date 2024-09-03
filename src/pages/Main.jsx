import React from "react";
import Advertise from "../component/Advertise/Advertise";
import SimpleBoard from "../component/SimpleBoard/SimpleBoard";
import { Col, Row } from "react-bootstrap";
import SimpleFeed from "../component/SimpleFeed/SimpleFeed";

function Main(){
    
    return (
        <>
        <Advertise></Advertise>
        <Row>
            <Col style={ {marginBottom: "20px"} } md={6}>
                <SimpleBoard boardId={1}></SimpleBoard>
            </Col>
            <Col style={ {marginBottom: "20px"} } md={6}>
                <SimpleFeed></SimpleFeed>
            </Col>
        </Row>
        </>
    );
}

export default Main;