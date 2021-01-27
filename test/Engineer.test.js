const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("github", () => {
    it("should recognize a new engineer github username has been generated", () => {
      const github = "joshrehanek";
      const engineerGithub = new Engineer ("Josh", 123, "josh@gmail.com", github)
      expect(engineerGithub.github).toEqual(github);
    });
  });
  
});
// test("Can set GitHUb account via constructor", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.github).toBe(testValue);
// });

// test("getRole() should return \"Engineer\"", () => {
//   const testValue = "Engineer";
//   const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get GitHub username via getGithub()", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.getGithub()).toBe(testValue);
// });
