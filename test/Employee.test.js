const { it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("generate", () => {
    it("should recognize a new employee object has been generated", () => {
      const newEmployee = new Employee();
      expect(typeof (newEmployee)).toEqual("object");
    });
  });
  describe("name", () => {
    it("should recognize when an employee name has been added", () => {
      const name = "Josh"
      const employeeName = new Employee(name);
      expect(employeeName.name).toEqual(name);
    });
  });
  describe("id", () => {
    it("should recognize when an employee id has been added", () => {
      const id = 123;
      const employeeId = new Employee("Josh", id);
      expect(employeeId.id).toEqual(id);
    });
  });
  describe("email", () => {
    it("should recognize when an employee email has been added", () => {
      const email = "josh@gmail.com"
      const employeeEmail = new Employee("Josh", 123, email);
      expect(employeeEmail.email).toEqual(email);
    });
  });
  describe("getName", () => {
    it("should get name using getName()", () => {
      const name = "Josh"
      const employeeName = new Employee(name);
      expect(employeeName.getName()).toEqual(name);
    });
  });
  describe("getName", () => {
    it("should get ID using getId()", () => {
      const id = 123;
      const employeeId = new Employee("Josh", id);
      expect(employeeId.getId()).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should get email using getEmail()", () => {
      const email = "josh@gmail.com";
      const employeeEmail = new Employee("Josh", 123, email);
      expect(employeeEmail.getEmail()).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should get ID using getId()", () => {
      const role = "Employee";
      const employeeRole = new Employee("Josh", 123, "josh@gmail.com");
      expect(employeeRole.getRole()).toEqual(role);
    });
  });
});

// test("Can instantiate Employee instance", () => {
//   const e = new Employee();
//   expect(typeof(e)).toBe("object");
// });