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
import AdminStaff from "../../components/AdminStaff/AdminStaff";
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

    if (!this.props.staff.length) {
      this.props.onFetchStaff();
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

      

      this.setState({
        users: usersObject,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  aprobarSocio = (uid) => {
    this.props.firebase.user(uid).update({
      ...this.state.users[uid],
      socioVerified: true
    });
  }

  render() {
    const { users, loading } = this.state;

    const jugadoras = this.props.jugadoras && !this.props.loadingJugadoras ?
          (<AdminJugadoras jugadoras={this.props.jugadoras} clicked={this.props.onSetJugadora} />)
          : null;

    const equipos = this.props.equipos && !this.props.loadingEquipos ?
          (<AdminEquipos equipos={this.props.equipos} clicked={this.props.onSetEquipo} />)
          : null;

    const stats = this.props.jugadoras && !this.props.loadingJugadoras ?
          (<AdminStats 
              jugadoras={this.props.jugadoras}
              stats={this.props.stats}
              clicked={this.props.onSetStats}
          />) : null;

    const staff = this.props.staff && !this.props.loadingStaff ?
          (<AdminStaff staff={this.props.staff} clicked={this.props.onSetStaffMember} />)
          : null;
    
    const pendingUsersList = !!this.state.users ? Object.keys(this.state.users)
          .map(key => ({
          ...this.state.users[key],
          uid: key
        })).filter(user => user.nro_socio && !user.socioVerified) 
        : null;    
        
    const usersList = pendingUsersList ?
      <UserList users={pendingUsersList} aprobarSocio={(uid) => this.aprobarSocio(uid)} />
      : null;

    return (
      <div className={'AdminPage'}>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        { usersList }

        <SectionHeader titulo={'Jugadoras'} clase={'Posiciones'} />
        { jugadoras }
        <SectionHeader titulo={'Equipos'} clase={'Posiciones'} />
        { equipos }
        <SectionHeader titulo={'Stats'} clase={'Posiciones'} />
        { stats }
        <SectionHeader titulo={'Staff'} clase={'Posiciones'} />
        { staff }

      </div>
    );
  }
}




const UserList = ({ users, aprobarSocio }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>N° de socia:</strong> {user.nro_socio}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
        <button onClick={() => aprobarSocio(user.uid)} >
            Aprobar
        </button>
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
      staff: state.staff.staff,
      loadingStaff: state.staff.loading,
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
    onFetchStaff: () => dispatch( actions.fetchStaff() ),
    onSetStaffMember: (staff) => dispatch( actions.setStaffMember(staff) ),
  };
};

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withAuthorization(condition),
  withFirebase,
)(AdminPage);