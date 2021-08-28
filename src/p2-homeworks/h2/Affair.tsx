import React from 'react'
import {AffairType} from "./HW2";
import c from "./Affairs.module.css"
import s from "../h3/Greeting.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void
}

function Affair (props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) }// need to fix
    const affairClass = c.afP + " " +c[props.affair.priority]

    return (
        <div>
             <div className={c.afId}> {props.affair._id}</div>
            <div className={c.afN}> {props.affair.name}</div>
            <div className={c.afP + " " + affairClass}> {props.affair.priority}</div>
            <button className={c.but}
                onClick={deleteCallback}>X</button>
        </div>
)}
export default Affair