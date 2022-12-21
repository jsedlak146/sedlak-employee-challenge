const Engineer = require("../lib/engineer");

describe("this tests engineer objects", () =>
{
  let eng1 = new Engineer("bill", "3", "bill@gmail.com", "bill123", "Engineer")
  it("test engineer name", () => {
    expect(eng1.name).toBe("bill")
  })
  it("test engineer id", () => {
    expect(eng1.id).toBe("3")
  })
  it("test engineer email", () => {
    expect(eng1.email).toBe("bill@gmail.com")
  })
  it("test employee github", () => {
    expect(eng1.getGithub()).toBe("bill123")
  })
  it("test employee get name", () => {
    expect(eng1.getName()).toBe("bill")
  })
  it("test engineer get id", () => {
    expect(eng1.getId()).toBe("3")
  })
  it("test engineer get role", () => {
    expect(eng1.getRole()).toBe("Engineer")
  })
  it("test employee get email", () => {
    expect(eng1.getEmail()).toBe("bill@gmail.com")
  })
 
});