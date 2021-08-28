import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import c from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={c.style}>
            {mappedAffairs}
            <span className={c.entryfield}>
                <button className={props.filter==="all"? c.activeButton: c.buttonfilter} onClick={setAll}>All</button>
            <button className={props.filter==="high"? c.activeButton: c.buttonfilter} onClick={setHigh}>High</button>
            <button className={props.filter==="middle"? c.activeButton: c.buttonfilter} onClick={setMiddle}>Middle</button>
                <button className={props.filter==="low"? c.activeButton: c.buttonfilter} onClick={setLow}>Low</button>
            </span>
        </div>
    )
}

export default Affairs
