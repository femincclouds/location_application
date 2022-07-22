export const SET_CURRENT_LOCATION = "SET_CURRENT_LOCATION";
export const SET_LOCATION_HISTORY = "SET_LOCATION_HISTORY";

export const initState: any = {
    current: {
        name: "",
        time: "",
        coords: {
            latitude: 0,
            longitude: 0
        }
    },
    history: []
}

export const reducer = (state = initState, action: any): any => {

    switch (action.type) {
        case SET_CURRENT_LOCATION:
            return action.payload;
        case SET_LOCATION_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        default:
            return state;
    }
}