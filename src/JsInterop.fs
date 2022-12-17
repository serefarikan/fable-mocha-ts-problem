module App.JsInterop

type User = {
    name: string
    age: int
}    
let consumeUserRecord (ur:User) =
    let {name = userName; age = userAge} = ur
    userAge + 1
    
    