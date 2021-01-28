const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("school", () => {
    it("should recognize a new intern school has been generated", () => {
      const school = "University of Oregon";
      const internSchool = new Intern ("Josh", 123, "josh@gmail.com", school)
      expect(internSchool.school).toEqual(school);
    });
  });
  describe("getRole", () => {
    it("should return 'Intern' when getRole() is run", () => {
      const role = "Intern";
      const internRole = new Intern ("Josh", 123, "josh@gmail.com", "joshrehanek")
      expect(internRole.getRole()).toEqual(role);
    });
  });
  describe("getSchool", () => {
    it("should return intern school when getSchool() is run", () => {
      const school = "University of Oregon";
      const internSchool = new Intern ("Josh", 123, "josh@gmail.com", school)
      expect(internSchool.getSchool()).toEqual(school);
    });
  });
});