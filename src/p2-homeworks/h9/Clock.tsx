import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'



function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
       setShow(true) // show
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }

    const stringTime =date.toTimeString().replace(/ .*/,'') // fix with date
    const stringDate = date.toDateString() // fix with date

    return (
        <div className={styles.clock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
               {stringTime}
            </div>

            {show && (
                <div className={styles.day}>
                    {stringDate}
                </div>
            )}

            <div className={styles.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
