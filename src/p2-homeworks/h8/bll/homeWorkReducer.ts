import {UserType} from '../HW8'


type ActionType = SortActionType | checkActionType

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type checkActionType = {
    type: 'check'
    payload: number
}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const NewState= [...state.sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })]
            return action.payload==='up'?NewState:NewState.reverse()
        }
        case 'check': {
            return [...state.filter(m => m.age > action.payload)]

        }
        default:
            return state
    }
}



