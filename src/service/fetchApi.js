
export const getAllTransport = async () =>{
    const response = await fetch('http://37.194.210.121:4721/routes', {method: 'GET'})
        .then(data => data.json())
        .then(res => res)
    return response.routes.map(_transformAllMarsh)
}

const _transformAllMarsh = ({id, route,name, transportType, firstStop, lastStop}) =>{
    return {
        id,
        route,
        name,
        transportType, 
        firstStop: {
            id: firstStop.id,
            name: firstStop.name,
            latLng: {
                lat: firstStop.latLng.lat,
                lng: firstStop.latLng.lng
            }
        },
        lastStop: {
            id: lastStop.id,
            name: lastStop.name,
            latLng: {
                lat: lastStop.latLng.lat,
                lng: lastStop.latLng.lng
            }
        }
    }
}

export const getBusTrasses = async (id)=>{
    const response = await fetch(`http://37.194.210.121:4721/routes/${id}`, {method: 'GET'})
        .then(data => data.json())
        .then(res => res)
    return response
}
// eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjgyMjQ3OTQ0LCJzdWIiOiIiLCJpc3MiOiLQk9C-0YHRgtGMIiwiZXhwIjoxNjgyMjQ5NzQ0fQ.NJZdi7-Oc6_w1Bkvs-_me7hNWGLJC8tBrEWhVpzBg3c