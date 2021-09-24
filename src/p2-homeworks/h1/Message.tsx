import React from 'react'
import style from './Message.module.css'

export type messageData = {
    avatar: any
    name: string
    message: string
    time: string
}

function Message(props: messageData) {
    return (
        <div className={style.messages}>
            <img className={style.avatar} src={props.avatar}/>
            <div className={style.message}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>

            </div>
        </div>
    )
}

export default Message


/*var timeInMs = Date.now();*/