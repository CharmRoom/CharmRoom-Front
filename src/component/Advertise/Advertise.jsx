import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import AdApi from '../../apis/AdApi';
import SpringConstants from '../../constants/SpringConstants';
import Logo from '../../resources/image/logo.svg';
import AdImage from './AdImage';

function Advertise() {
    const [ads, setAds] = useState("");

    const fetchAds = async () => {
        let response;
        try {
            response = await AdApi.getAll();
        } catch (e) {
            return;
        }
        setAds(response.data.data);
    }

    useEffect(() => {
        fetchAds();
    }, []);

    return (

        <Carousel variant="dark" interval={5000} controls={false} indicators={ads && ads.length > 0}>
            {
                ads && ads.length > 0 ?
                    ads.map((ad) => {
                        return (
                            <Carousel.Item key={ad.id}>
                                <AdImage src={SpringConstants.server + ad.image.path} />
                            </Carousel.Item>
                        )
                    })
                    :
                    <Carousel.Item>
                        <AdImage background={Logo} />
                    </Carousel.Item>
            }
        </Carousel>

    )
}

export default Advertise