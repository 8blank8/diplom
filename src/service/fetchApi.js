export const getMarsh = async ()=>{
    const response = await fetch('37.194.210.121:4721/routes?type=0&route=1', {method: 'GET'} )
            .then(data => console.log(data))
    return response
}

// eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNjgyMjQ3OTQ0LCJzdWIiOiIiLCJpc3MiOiLQk9C-0YHRgtGMIiwiZXhwIjoxNjgyMjQ5NzQ0fQ.NJZdi7-Oc6_w1Bkvs-_me7hNWGLJC8tBrEWhVpzBg3c