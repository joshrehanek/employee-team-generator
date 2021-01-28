//import Engineer module
const Engineer = require("../lib/Engineer");
//testing for Engineer module; read it method statements for each tests function
describe("Engineer", () => {
  describe("github", () => {
    it("should recognize a new engineer github username has been generated", () => {
      const github = "joshrehanek";
      const engineerGithub = new Engineer ("Josh", 123, "josh@gmail.com", github)
      expect(engineerGithub.github).toEqual(github);
    });
  });
  describe("getRole", () => {
    it("should return 'Engineer' when getRole() is run", () => {
      const role = "Engineer";
      const engineerRole = new Engineer ("Josh", 123, "josh@gmail.com", "joshrehanek")
      expect(engineerRole.getRole()).toEqual(role);
    });
  });
  describe("getGithub", () => {
    it("should return github username when getGithub() is run", () => {
      const github = "joshrehanek";
      const engineerGithub = new Engineer ("Josh", 123, "josh@gmail.com", github)
      expect(engineerGithub.getGithub()).toEqual(github);
    });
  });
});