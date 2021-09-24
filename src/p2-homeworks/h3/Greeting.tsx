import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from  './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperEditableSpan from "../h6/common/c4-SuperEditableSpan/SuperEditableSpan";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onPress: (e: KeyboardEvent <HTMLInputElement>)=> void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback,onPress, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${s.input} ${error? s.errorInput: s.imput}` // need to fix with (?:)

    return (
        <div className={s.own}>
            <div>
             <input
                    value={name}
                    onKeyPress={onPress}
                    onChange={setNameCallback}
                    className={inputClass}
                    onBlur={setNameCallback}/>
                <button
                        className={error? s.eb: s.b}
                        onClick={addUser}>add</button>
                <span className={s.total}>{totalUsers}</span>
            </div>
            <div className={s.error}>{error}</div>
        </div>
    )
}

export default Greeting
