export const setTransportAction = (type)=>{
    return {
        type: 'SET_TRANSPORT',
        payload: type
    }
}

export const setMarshAction = (marsh) =>{
    return {
        type: 'SET_MARSH',
        payload: marsh
    }
}

export const setMarshListAction = (marshList) =>{
    return{
        type: 'SET_MARSH_LIST',
        payload: marshList
    }
}

export const setTrassesAction = (trasses)=>{
    return {
        type: 'SET_TRASSES',
        payload: trasses
    }
}

export const setBusStopAction = (stop) =>{
    return {
        type: 'SET_BUS_STOP',
        payload: stop
    }
}

export const setStartDateAction = (date) =>{
    return {
        type: 'SET_START_DATE',
        payload: date
    }
}

export const setLastDateAction = (date) => {
    return {
        type: 'SET_LAST_DATE',
        payload: date
    }
}

export const setStatisticNameAction = (name) => {
    return {
        type: 'SET_STATISTIC_NAME',
        payload: name
    }
}

export const setStartStopAction = (stop) => {
    return {
        type: 'SET_START_STOP',
        payload: stop
    }
}

export const setLastStopAction = (stop) => {
    return {
        type: 'SET_LAST_STOP',
        payload: stop
    }
}