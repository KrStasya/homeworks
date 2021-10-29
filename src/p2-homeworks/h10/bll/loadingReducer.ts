const initState= {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionType): typeof initState=> { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, loading:action.loading}
        }
        default: return state
    }
}


export const loadingAC = (loading:boolean): loadingACType => {
    return  {type: 'SET_LOADING', loading}
}

export type ActionType= loadingACType
export type loadingACType={
    type: 'SET_LOADING',
    loading:boolean
}
