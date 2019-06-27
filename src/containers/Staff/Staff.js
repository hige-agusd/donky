import React from 'react';

import staffStatic from "../../assets/images/staff_static_photo.png";
import { Container, Row, Col } from "react-bootstrap";
import './Staff.css';
import StaffMembers from '../../components/StaffMembers/StaffMembers';

const staff = props => {

      return (
        <Container fluid={true} className={'Staff-section'}>
          <Row className={'Staff-row'}>
            <Col className={'col-xs-12 Staff-col Staff-static-image'}  md={6} style={{ backgroundImage: `url(${staffStatic})`}}></Col>
            <Col className={'col-xs-12 Staff-col'} md={6}><StaffMembers staffMembers={props.staff} /></Col>
          </Row>
        </Container>
      );
  };

export default staff;