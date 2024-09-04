import React from 'react'
import { Col, Row } from 'react-bootstrap'

const LeftRight = ({left, right, ratioL = 3, ratioR = 7}) => {
  return (
    <>
        <Row>
            <Col xs={ratioL}>{left}</Col>
            <Col xs={ratioR}>{right}</Col>
        </Row>
    </>
  )
}

export default LeftRight