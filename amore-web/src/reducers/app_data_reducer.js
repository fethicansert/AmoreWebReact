export const appDataReducer = (state, action) => {

    switch (action.type) {

        case 'interests':
            return { ...state, interests: action.payload }

        case 'locations':
            return { ...state, locations: action.payload }

        case 'gifts':
            return { ...state, gifts: action.payload }

        case 'data':
            return { ...state, interests: action.payload }
    }

}


//  const [interests, setInterests] = useState([]);
//     const [locations, setLocations] = useState([]);
//     const [gifts, setGifts] = useState([]);
//     const [data, setData] = useState({});