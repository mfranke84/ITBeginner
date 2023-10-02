const { isInvalidEmail, isEmptyObject } = require('./validator')

test('valid email', function(){
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "testing"
    }

    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})

test('invalid email', function(){
    const testInvalidPayload = {
        name: "test name",
        email: "test.emailexample.com",
        interests: "testing"
    }

    const result = isInvalidEmail(testInvalidPayload)
    expect(result).toBe(true)
})