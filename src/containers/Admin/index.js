import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as actions from '../../store/actions/index';
import * as ROLES from '../../constants/roles';
import AdminJugadoras from "../../components/AdminJugadoras/AdminJugadoras";
import AdminEquipos from "../../components/AdminEquipos/AdminEquipos";
import AdminStats from "../../components/AdminStats/AdminStats";
import './AdminPage.css'
import SectionHeader from "../../components/SectionHeader/SectionHeader";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    if (!this.props.jugadoras.length) {
      this.props.onFetchJugadoras();
    }

    if (!this.props.equipos.length) {
      this.props.onFetchEquipos();
    }

    if (!this.props.stats.length) {
      this.props.onFetchStats();
    }

    /* if(!this.props.jugadoras.length) {
      this.props.firebase.jugadoras().once("value", snapshot => {
        const jugadoras = snapshot.val();
        if(jugadoras) {
          // this.props.onFetchJugadoras(jugadoras);
        }
      });
    } */
    

    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    const jugadoras = this.props.jugadoras && !this.props.loadingJugadoras ?
          (<AdminJugadoras jugadoras={this.props.jugadoras} clicked={this.props.onSetJugadora} />)
          : null;

    const equipos = this.props.equipos && !this.props.loadingEquipos ?
          (<AdminEquipos equipos={this.props.equipos} clicked={this.props.onSetEquipo} />)
          : null;

    const stats = (this.props.jugadoras && !this.props.loadingJugadoras) /* && 
                  (this.props.stats && !this.props.loadingStats)  */ ?
                  (<AdminStats 
                      jugadoras={this.props.jugadoras}
                      stats={this.props.stats}
                      clicked={this.props.onSetStats}
                  />) : null;


    return (
      <div className={'AdminPage'}>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        {/* <UserList users={users} /> */}
        <SectionHeader titulo={'Jugadoras'} clase={'Posiciones'} />
        { jugadoras }
        <SectionHeader titulo={'Equipos'} clase={'Posiciones'} />
        { equipos }
        <SectionHeader titulo={'Stats'} clase={'Posiciones'} />
        { stats }
        <SectionHeader titulo={'Staff'} clase={'Posiciones'} />

      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
  return {
      equipos: state.equipos.equipos,
      loadingEquipos: state.equipos.loading,
      jugadoras: state.jugadoras.jugadoras,
      loadingJugadoras: state.jugadoras.loading,
      stats: state.stats.stats,
      loadingStats: state.stats.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchJugadoras: () => dispatch( actions.fetchJugadoras() ),
    onSetJugadora: (jugadora) => dispatch( actions.setJugadora(jugadora) ),
    onFetchEquipos: () => dispatch( actions.fetchEquipos() ),
    onSetEquipo: (equipo) => dispatch( actions.setEquipo(equipo) ),
    onFetchStats: () => dispatch( actions.fetchStats() ),
    onSetStats: (stats) => dispatch( actions.setStats(stats) ),
  };
};

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withAuthorization(condition),
  withFirebase,
)(AdminPage);