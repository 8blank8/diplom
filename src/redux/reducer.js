const initialState = {
    transport: null,
    marsh: null,
    marshList: [],
    trasses: [],
    selectTitle: {}
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_TRANSPORT':
            return {
                ...state,
                transport: action.payload
            }
        case 'SET_MARSH':
            return {
                ...state,
                marsh: action.payload
            }
        case 'SET_MARSH_LIST':
            return{
                ...state,
                marshList: action.payload
            }
        case 'SET_TRASSES':
            return{
                ...state,
                trasses: action.payload
            }
        default: 
            return state
    }
}