export type themesType =string

const initState = {
    theme: 'some'
}


export const themeReducer = (state = initState, action:ActionType): typeof initState=> {
    switch (action.type) {
        case "SET_THEMES":
        { debugger
            return {...state, theme:action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:themesType): changeThemeType => {
    return {type:'SET_THEMES',theme}
};


export type ActionType= changeThemeType
export type changeThemeType={
    type: 'SET_THEMES',
    theme:themesType
}