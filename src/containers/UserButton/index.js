import React from 'react';
import UserButton from './UserButton';
import UserButtonMobile from './UserButtonMobile';

const userButton = props => (
    <>
        <UserButton authUser={props.authUser}/>
        <UserButtonMobile authUser={props.authUser}/>
    </>
)

export default userButton;