import { combineReducers } from 'redux'

function townReducer(state = 'icekeep', action) {
    const currentTown = state.currentTown
    switch (action.type) {
        case 'CHANGE_TOWN':
            return action.town;
        default:
            return state
    }
}

function materialReducer(state = 'wood', action) {
    const currentMaterial = state.currentMaterial
    switch (action.type) {
        case 'CHANGE_MATERIAL':
            return action.material
        default:
            return state
    }
}



const rootReducer = combineReducers({
    currentTown: townReducer,
    currentMaterial: materialReducer
});

export default rootReducer;