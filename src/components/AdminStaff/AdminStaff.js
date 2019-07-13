import React from "react";
import { Container } from "react-bootstrap";
import AdminNewStaff from '../AdminNewStaff/AdminNewStaff';
// import Partido from './Partido';
import "./AdminStaff.css";

const adminStaff = props => {

    const staffMemberVacio = {
        rol: '',
        foto: '',
        bio: '',
        nombre: '',
        activo: true ,
        isInvalid: true     
    };

    const onClicked = staffMember => {
        const {index, nombre, rol, foto, bio, activo } = staffMember;
        const newStaffMember = {
            index: index !== undefined ? index : props.staff && props.staff.length ? props.staff.length : 0,
            value: {
                nombre,
                rol,
                foto,
                bio,
                activo
            }
        }
        props.clicked(newStaffMember);
    }

    const staff = props.staff && props.staff.length ? 
        props.staff.map( (staffMember, i) => 
            <AdminNewStaff key={`anj${i}`} staffMember={staffMember} index={i} clicked={onClicked} />)  
            : null;

    return (
        <Container fluid={true} className={`Partido-wrapper NewStaff-grid ${props.even}`}>
            <AdminNewStaff staffMember={staffMemberVacio} clicked={onClicked} />
            { staff }
        </Container>
    );
};

export default adminStaff;
