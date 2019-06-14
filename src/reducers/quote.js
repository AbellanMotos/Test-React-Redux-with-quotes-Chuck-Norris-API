const initialState = {
    quotes: []
}

function quotes (state = initialState, action){
    switch (action.type){
        case 'addQuote':
            return { ...state,
                quotes: [...state.quotes, {text: action.text, id: action.id}]
            }
            default: 
                return state
    }
}

export default quotes
