import React from 'react'
import m from './Message.module.css'

export type messageData = {
    avatar: any
    name: string
    message: string
    time: string
}

function Message(props: messageData) {
    return (
        <div>
            <div className={m.avatar}><img src={props.avatar}/></div>
            <div className={m.message}>
            <div className={m.name}>{props.name}</div>
            <div className={m.text}>{props.message}</div>
            <div className={m.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message


/*var timeInMs = Date.now();*/