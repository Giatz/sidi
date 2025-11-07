export function getHandler(api, endpoint, callback) {
    fetch(`${api}${endpoint}`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
    .then((response) => response.json())
    .then((ans) => { 
        //callback(ans.result)
        callback(ans.data)
    })
}