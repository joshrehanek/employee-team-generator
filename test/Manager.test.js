const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  describe("officeNumber", () => {
    it("should recognize a new office number has been generated", () => {
      const officeNumber = 456;
      const managerOfficeNumber = new Manager ("Josh", 123, "josh@gmail.com", officeNumber)
      expect(managerOfficeNumber.officeNumber).toEqual(officeNumber);
    });
  });
  describe("getRole", () => {
    it("should return 'Manager' when getRole() is run", () => {
      const role = "Manager";
      const managerRole = new Manager ("Josh", 123, "josh@gmail.com", 456)
      expect(managerRole.getRole()).toEqual(role);
    });
  });
  describe("getOfficeNumber", () => {
    it("should return office number when getOfficeNumber() is run", () => {
      const officeNumber = 456;
      const managerOfficeNumber = new Manager ("Josh", 123, "josh@gmail.com", officeNumber)
      expect(managerOfficeNumber.getOfficeNumber()).toEqual(officeNumber);
    });
  });
});

// test("Can set office number via constructor argument", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.officeNumber).toBe(testValue);
// });

// test('getRole() should return "Manager"', () => {
//   const testValue = "Manager";
//   const e = new Manager("Foo", 1, "test@test.com", 100);
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get office number via getOffice()", () => {
//   const testValue = 100;
//   const e = new Manager("Foo", 1, "test@test.com", testValue);
//   expect(e.getOfficeNumber()).toBe(testValue);
// });
