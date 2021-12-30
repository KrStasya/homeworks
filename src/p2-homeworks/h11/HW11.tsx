import React, {useCallback, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange2  from './common/c8-SuperDoubleRange/SuperDoubleRange2';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeDoubleRange = useCallback((newValues: number | number[]) => {
        let arr = [...newValues as number[]]
        setValue1(arr[0])
        setValue2(arr[1])
    }, [setValue1, setValue2])


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange2
                    value={[value1,value2]}
                    onChangeRange={onChangeRangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
