import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.Er}>
            <div className={s.number404}>404</div>
            <div className={s.warning}>Page not found!</div>
            <div className={s.picture}>      {/*—ฅ/ᐠ.̫ .ᐟ\ฅ—*/}
                <img src={'https://raskrasil.com/wp-content/uploads/raskraski-kotikov-56-min.jpg'}/>  </div>
        </div>
    )
}

export default Error404
