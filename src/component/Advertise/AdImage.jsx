import React from 'react'
import styled from 'styled-components'

const AdImageDiv = styled.div`
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 350px;
    `;

const AdImage = ({ src }) => {
    return (
        <AdImageDiv style={ { backgroundImage: `url(${src})` } }/>
    )
}

export default AdImage