const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const cardValidator = require('../lib/index');

describe('lib', () => {
  describe('#cardValidator', () => {
    describe('Quando o cartao for valido', () => {
      it('deve me retornar true', () => {
        expect(cardValidator(4417123456789113)).to.equal(true);
      });
    });
  });
});

describe('lib', () => {
  describe('#cardValidator', () => {
    describe('Quando o cartao for invalido', () => {
      it('deve me retornar false', () => {
        expect(cardValidator(4417123456789111)).to.equal(false);
      });
    });
  });
});

describe('lib', () => {
  describe('#cardValidator', () => {
    describe('Quando o campo estiver vazio', () => {
      it('Deve me retornar um erro', () => {
        expect(() => cardValidator()).to.throw('O campo não pode ser vazio');
      });
    });
  });
});

describe('lib', () => {
  describe('#cardValidator', () => {
    describe('Quando o numero digitado for uma string', () => {
      it('Deve me retornar um erro', () => {
        expect(() => cardValidator('ola')).to.throw('O campo precisa ser apenas números');
      });
    });
  });
});

describe('lib', () => {
  describe('#cardValidator', () => {
    describe('Quando o numero digitado for uma string', () => {
      it('Deve me retornar um erro', () => {
        expect(() => cardValidator(123)).to.throw('O campo precisa ser preenchido com o numero inteiro do cartao maior que 13 digitos ou menor que 16 digitos');
      });
    });
  });
});

describe('lib', () => {
  describe('#cardValidator', () => {
    describe('Quando o numero digitado for uma string', () => {
      it('Deve me retornar um erro', () => {
        expect(() => cardValidator(1237790909675554433)).to.throw('O campo precisa ser preenchido com o numero inteiro do cartao maior que 13 digitos ou menor que 16 digitos');
      });
    });
  });
});
