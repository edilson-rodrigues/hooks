export function reducer(state, action) {
    switch (action.type) {
        case "number_add2":
            return { ...state, number: state.number + 2 };
        case "login":
            return { ...state, user: action.name };
        case "logout":
            return { ...state, user: action.logout };
        case "number_mult7":
            return { ...state, number: state.number * 7 };
        case "number_div25":
            return { ...state, number: parseInt(state.number / 25) };
        case "add_number":
            return { ...state, number: action.number };
        default:
            return state;
    }
}
