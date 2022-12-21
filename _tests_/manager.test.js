const Manager = require("../lib/manager");

describe("this tests manager objects", () =>
 {
    let mng1 = new Manager("bob", "2", "bob@gmail.com", "113", "Manager")
    it("test mananger name", () => {
        expect(mng1.name).toBe("bob")
    })
    it("test manager id", () => {
        expect(mng1.id).toBe("2")
    })
    it("test manager email", () => {
        expect(mng1.email).toBe("bob@gmail.com")
    })
    it("test manager office", () => {
        expect(mng1.getofficeNumber()).toBe("113")
    })
    it("test manager get name", () => {
        expect(mng1.getName()).toBe("bob")
    })
    it("test manager get id", () => {
        expect(mng1.getId()).toBe("2")
    })
    it("test manager get role", () => {
        expect(mng1.getRole()).toBe("Manager")
    })
    it("test manager get email", () => {
        expect(mng1.getEmail()).toBe("bob@gmail.com")
    })
});