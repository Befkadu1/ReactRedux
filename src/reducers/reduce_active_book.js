// State argument is not application state, only the state
// this reducer is responsible for

export default function (state = null, action) { // if state = undefined, set it to null
    switch (action.type) {
        case 'BOOK_SELECTED': return action.payload;
        default:
    }
    return state;
}