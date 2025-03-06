export const appDataReducer = (state, action) => {

    switch (action.type) {

        case 'interests':
            return { ...state, interests: action.payload }

        case 'locations':
            return { ...state, locations: action.payload }

        case 'gifts':
            return { ...state, gifts: action.payload }

        case 'data':
            return { ...state, data: action.payload }

        case 'ip':
            return { ...state, ip: action.payload }

    }

}
