function isInvalidEmail(userObj){
    return !userObj.email.includes("@")
}

function isEmptyObject(userObj){
    return Object.keys(userObj).length === 0 
}

module.exports = {
    isInvalidEmail,
    isEmptyObject
}
