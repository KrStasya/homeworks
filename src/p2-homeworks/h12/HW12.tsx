import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, themesType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some', 'fire'];

function HW12() {

    const dispatch=useDispatch()
    const theme=useSelector<AppStoreType,themesType > (state=>state.themes.theme)
    const setTheme = (theme: themesType) => {
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                onChangeOption={setTheme}
                options={themes}
                value={theme}/>
            <hr/>
        </div>
    );
}

export default HW12;
