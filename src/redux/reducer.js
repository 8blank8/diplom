const initialState = {
    transport: null,
    marsh: null,
    marshList: [],
    busStop: [],  
    trasses: [],
    selectTitle: {},
    startDate: null,
    lastDate: null,
    statisticName: null,
    startStop: null,
    lastStop: null
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
        case 'SET_BUS_STOP':
            return {
                ...state,
                busStop: action.payload
            }
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.payload
            }
        case 'SET_LAST_DATE': 
            return {
                ...state,
                lastDate: action.payload
            }
        case 'SET_STATISTIC_NAME':
            return {
                ...state,
                statisticName: action.payload
            }
        case 'SET_START_STOP':
            return {
                ...state,
                startStop: action.payload
            }
        case 'SET_LAST_STOP':
            return {
                ...state,
                lastStop: action.payload
            }
        default: 
            return state
    }
}