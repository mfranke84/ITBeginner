function isInvalidEmail(userObj){
    return !userObj.email.includes("@")
}

function isEmptyObject(userObj){
    Object.keys(userObj).length === 0 
}

module.exports = {
    isInvalidEmail,
    isEmptyObject
}
