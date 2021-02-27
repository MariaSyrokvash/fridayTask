import React from 'react';
import style from './Profile.module.css'
import {PATH} from "../05_routes/Routes";
import {NavLink} from "react-router-dom";
import Logout from "../02_auth/logout/Logout";


type ProfileType = {

}

export const Profile = (props: ProfileType) => {


    return (
        <div>
            <h2>Profile</h2>
            <div className={style.wrap}>

            </div>
        </div>
    );
}
