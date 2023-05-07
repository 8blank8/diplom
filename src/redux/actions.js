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
