//This file is the test for my Intern.js

const Intern = require("../lib/intern");

describe("this tests intern objects", () => 
{
    let int1 = new Intern("joe", "1", "joe@gmail.com", "Yale", "Intern")
    it("test intern name", () => {
        expect(int1.name).toBe("joe")
    })
    it("test intern id", () => {
        expect(int1.id).toBe("1")
    })
    it("test intern email", () => {
        expect(int1.email).toBe("joe@gmail.com")
    })
    it("test intern school", () => {
        expect(int1.school).toBe("Yale")
    })
    it("test intern get name", () => {
        expect(int1.getName()).toBe("joe")
    })
    it("test intern get id", () => {
        expect(int1.getId()).toBe("1")
    })
    it("test intern get role", () => {
        expect(int1.getRole()).toBe("Intern")
    })
    it("test intern get email", () => {
        expect(int1.getEmail()).toBe("joe@gmail.com")
    })
});