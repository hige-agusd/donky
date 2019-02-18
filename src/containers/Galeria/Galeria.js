import React, { Component } from 'react';

import img1 from "../../assets/images/galeria_1.png";
import img2 from "../../assets/images/galeria_2.png";
import img3 from "../../assets/images/galeria_3.png";
import img4 from "../../assets/images/amistoso.png";
import { Container, Row } from "react-bootstrap";
import Slider from 'react-slick';
import './Galeria.css';
import { NavLink } from 'react-router-dom';

class Novedades extends Component {

  render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const imagenes = [img1, img2, img3, img4];
      return (
        <Container fluid={true} className={'Galeria-section'}>
          <Row className={'Galeria-header'}>
            <h3 className={'Galeria-titulo'}>GALERIA</h3> 
            <h6 className={'Galeria-subtitulo'}>DONKY FUTBOL</h6>
            <NavLink to={'/galeria'} className={'Galeria-btn Galeria-ver-fotos-btn'} >Ver Fotos</NavLink>
          </Row>
          <Row className={'Galeria-row'}>
            <Slider {...settings}>
              {imagenes.map((imagen,i) => <div className={'Galeria-img-wrapper'} ><div className={'Galeria-img'} key={i} style={{backgroundImage: `url(${imagen})`}} ></div></div>)}
            </Slider>
          </Row>
        </Container>
      );
  }

}

export default Novedades;