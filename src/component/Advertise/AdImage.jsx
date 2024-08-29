import React from 'react'
import styled from 'styled-components'

const AdImage = ({ background }) => {
    const AdImageDiv = styled.div`
        background-image: url(${background});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 350px;
    `;

    return (
        <AdImageDiv />
    )
}

export default AdImage