import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios-instance";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { AuthUserContext } from "../Session";
import * as actions from "../../store/actions/index";

import AcademiaLogged from "../../components/AcademiaLogged/AcademiaLogged";
import AcademiaPublic from "../../components/AcademiaPublic/AcademiaPublic";
import Spinner from "../../components/UI/Spinner/Spinner";
import entrenamientoInicial from "../../assets/images/entrenamiento_inicial.png";
import entrenamientoIntermedio from "../../assets/images/entrenamiento_intermedio.png";
import entrenamientoAvanzado from "../../assets/images/entrenamiento_avanzado.png";
import "./Academia.css";

class Academia extends Component {
  parrafos = [
    {
      imagen: entrenamientoInicial,
      titulo: "INICIAL",
      texto: ['acercamiento al deporte',
        'conocimiento de las posiciones',
        'psicomotricidad',
        'juegos pre deportivos'
      ]
    },
    {
      imagen: entrenamientoIntermedio,
      titulo: "INTERMEDIO",
      texto: ['introducción a táctica y estrategia',
        'aplicación técnica individual y grupal',
        'psicomotricidad II',
        'introducción a la competencia'
      ]
    },
    {
      imagen: entrenamientoAvanzado,
      titulo: "AVANZADO",
      texto: [
        "dominio técnico-táctico",
        "creación y aplicación de estrategias",
        "resolución de diversas situaciones de juego",
        "destreza individual"
      ]
    }
  ];
  jugador = {
    ficha: {
      foto: "http://www.fillmurray.com/100/100",
      nombre: "Bill Murray",
      edad: "68 años",
      equipo: "Cazafantasmas",
      nro_socio: "314159265358",
      ala: true
    },
    stats: [
      { skill: "Conduccion", level: "10" },
      { skill: "Pase y recepcion", level: "10" },
      { skill: "Definicion", level: "7" },
      { skill: "Fisico", level: "4" },
      { skill: "Conducta", level: "8" },
      { skill: "Tactica Grupal", level: "6" }
    ]
  };

  componentDidMount() {
    if (!this.props.jugadoras.length) {
      this.props.onFetchJugadoras();
    }

    if (!this.props.equipos.length) {
      this.props.onFetchEquipos();
    }
  }
  nextSlide() {
    this.refs.slider.slickNext();
  }
  prevSlide() {
    this.refs.slider.slickPrev();
  }
  render() {
    if (this.props.equipos.length) {
      this.jugador.ficha = {
        ...this.jugador.ficha,
        escudo: this.props.equipos.filter(eq => {
          return eq.nombre === "Medusas F.C.";
        })[0].escudo
      };
    }
    const acade = this.props.equipos.length ? (
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <AcademiaLogged
              authUser={authUser}
              jugador={this.jugador}
              jugadores={this.props.jugadoras}
              equipos={this.props.equipos}
            />
          ) : (
            <AcademiaPublic
              jugadores={this.props.jugadoras}
              parrafos={this.parrafos}
            />
          )
        }
      </AuthUserContext.Consumer>
    ) : (
      <Spinner />
    );

    return <>{acade}</>;
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.authUser,
    equipos: state.equipos.equipos,
    loadingEquipos: state.equipos.loading,
    jugadoras: state.jugadoras.jugadoras,
    loadingJugadoras: state.jugadoras.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchEquipos: () => dispatch(actions.fetchEquipos()),
    onFetchJugadoras: () => dispatch(actions.fetchJugadoras())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Academia, axios));
