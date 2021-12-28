import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import style from "./Reguest.module.css"
import {ReguestApi} from "./ReguestAPI";


function Reguest() {
    let [success,setsuccess]=useState(false)

    const setReguest = () => {
        setsuccess(true)
        ReguestApi.postReguest(true)
    };

    return (
        <div className={style.reguest}>
            <SuperButton onClick={setReguest}>Reguest</SuperButton>
            <SuperCheckbox checked={success}/>
        </div>
    )
}

export default Reguest;