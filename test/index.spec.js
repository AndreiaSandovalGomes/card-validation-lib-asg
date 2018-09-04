const mocha = require("mocha");
const chai = require("chai");
const lib = require("../lib/index");
const expect = chai.expect;

describe("lib", () => {
  describe("#cardValidator", () => {
    describe("Quando o cartao for valido", () => {
      it("deve me retornar true", () => {
        expect(lib.cardValidator("4417123456789113")).to.equal(true);
      });
    });
  });
});

describe("lib", () => {
  describe("#cardValidator", () => {
    describe("Quando o cartao for invalido", () => {
      it("deve me retornar false", () => {
        expect(lib.cardValidator("4417123456789111")).to.equal(false);
      });
    });
  });
});
