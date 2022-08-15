let parse = json => JSON.parse(json)
let resultArr = []

function getRequest (fileName, callback) {
    let request = new XMLHttpRequest
    request.open('GET', fileName, false)
    request.send();
    let response = request.response
    let children = parse(response).children;
    callback(children);
}
 

function getNamesArray (response) {
    response.forEach((item) => {
        resultArr.push(item)
    })
    return resultArr
}

getRequest('data.json', getNamesArray)
getRequest('data2.json', getNamesArray);
console.log(resultArr);