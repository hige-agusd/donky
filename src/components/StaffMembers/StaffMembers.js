import React from "react";
import Slider from 'react-slick';
import StaffMember from './StaffMember';
import './StaffMembers.css'

const staffMembers = props => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={'StaffMembers-wrapper'}>
        <div className={'StaffMembers-header'}>
          CONOCE A NUESTRO STAFF
        </div>
        <Slider {...settings}>
          {props.staffMembers.filter(stafMember => stafMember.activo).map((member, i) => <StaffMember key={`sm${i}`} {...member} />)}
        </Slider>
      </div>
    );
  };

export default staffMembers;
