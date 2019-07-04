import React, { Component } from 'react';
import axios from 'axios';

import { Container, Row } from "react-bootstrap";
import Slider from 'react-slick';
import Modal from '../../components/UI/Modal/Modal';
import './Galeria.css';
import { NavLink } from 'react-router-dom';

class Novedades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: false
    }
  }

  openImage = (link) => {
    axios.get(`https://api.instagram.com/oembed/?url=${link}`)
      .then( res => {
        console.log(res);
        this.setState({post: res.data.html}, () => {
          if (window.instgrm) {
              window.instgrm.Embeds.process()
          }
      });
      })
      .catch( err => console.log(err));
  }

  closeImage = () => {
    this.setState({post: false});
  }

  embedProcess = () => {
    window.instgrm.Embeds.process();
  }

  componentDidMount() {
    console.log(123);
  }

  render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const imagenes = this.props.fotos && this.props.fotos.length ? 
      this.props.fotos.map((imagen,i) => <div key={`w${i}`} className={'Galeria-img-wrapper'} >
        <div className={'Galeria-img'} style={{backgroundImage: `url(${imagen.images.low_resolution.url})`}} onClick={() => this.openImage(imagen.link)} ></div>
      </div>)
      :null;
      const post = this.state.post ? <Modal classes={'ig'} show={this.state.post} modalClosed={this.closeImage}><div dangerouslySetInnerHTML={{__html:this.state.post}}></div></Modal> : null;
      return (
        <Container fluid={true} className={'Galeria-section'}>
          {post}
          <Row className={'Galeria-header'}>
            <h3 className={'Galeria-titulo'}>GALERIA</h3> 
            <h6 className={'Galeria-subtitulo'}>DONKY FUTBOL</h6>
            <NavLink to={'/galeria'} className={'Galeria-btn Galeria-ver-fotos-btn'} >Ver Fotos</NavLink>
          </Row>
          <Row className={'Galeria-row'}>
            <Slider {...settings}>
              {imagenes}
            </Slider>
          </Row>
        </Container>
      );
  }

}

export default Novedades;