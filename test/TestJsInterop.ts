import {describe, it} from "mocha";
import {consumeUserRecord} from "../src/JsInterop.fs.js";
import {expect} from "chai";

// define a record type for users
interface User {
    name: string;
    age: number;
}

// create an instance of the User record
const user: User = {
    name: "John Doe",
    age: 25
}

describe("User module", () => {
    it("increments user age", () => {
        let incrementedUserAge = consumeUserRecord(user);
        expect(incrementedUserAge).to.equal(26);
    })

});

describe("User module2", () => {
    it("increments user age2", () => {
        expect(26).to.equal(26);
    })

});