import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";


export default class ImageSlider extends Component {

    render() {
        return (
            <>
               
                    <Carousel pause={false} interval={3000} style={{ height: 500, width: "100%", overflow: "hidden" }}>
                        <Carousel.Item >
                            <img src={require(`../../images/2.jpg`)} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require(`../../images/3.jpg`)} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require(`../../images/4.jpg`)} class="d-block w-100" alt="..." />
                        </Carousel.Item>
                    </Carousel>
            </>
        )
    }
}
