//import Manager module
const Manager = require("../lib/Manager");
//testing for Manager module; read it method statements for each tests function
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