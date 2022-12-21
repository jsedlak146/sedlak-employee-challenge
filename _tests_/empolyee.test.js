const Employee = require("../lib/employee");

describe("this tests employee objects", () => {
  let employ1 = new Employee("jerry", "4", "jerry@gmail.com", "Employee")
  it("test employee name", () => {
    expect(employ1.name).toBe("jerry")
  })
  it("test employee id", () => {
    expect(employ1.id).toBe("4")
  })
  it("test employee email", () => {
    expect(employ1.email).toBe("jerry@gmail.com")
  })
  it("test employee get name", () => {
    expect(employ1.getName()).toBe("jerry")
  })
  it("test employee get id", () => {
    expect(employ1.getId()).toBe("4")
  })
  it("test employee get role", () => {
    expect(employ1.getRole()).toBe("Employee")
  })
  it("test employee get email", () => {
    expect(employ1.getEmail()).toBe("jerry@gmail.com")
  })
});