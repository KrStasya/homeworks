import React from 'react'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";



export type valuesType = number | number[]

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: valuesType) => void
    onChangeRange2?: (value: valuesType) => void
    value?: valuesType
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        ...restProps//
    }
) => {

    const onChangeCallback = (event: Event,newValue: valuesType) => {
        onChangeRange && onChangeRange(newValue as number[])
    }

    return (
        <Box sx={{ width: 150 }}>
            <Slider
                onChange={onChangeCallback}
                value={value}
                getAriaLabel={() => 'Super Double Range'}
              // getAriaLabel={() => 'Minimum distance'}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    )
}

export default SuperDoubleRange