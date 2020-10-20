import isDomainValid from './../src/domain-validator';
import sampleDomainsList from './sample-domains-list';

describe('Domain validator tests', () => {
  describe('Max length', () => {
    it('Should be invalid if domain contains more than 253 characters', () => {
      expect(isDomainValid('ocai6oiz9ezsrgjvrsdo1lakvxvqrtpcwixeljjyknbqjnyo9ajryikbk2kswtwoywvoeci72kzzdrpeqcdddyc2nocd2jqfiigtuck8lmfqnsdg2a8htnjijkn0x5p3fco1yz2makd2mvjznfdjzejhdah5qyyityivskocmdkrjfgwa94gkhnnqqztafehhizzsxs35drae9xwlavfesgpgwb1owjzzovhthtvmnsosreweeoybtzv02pfqr'))
        .toEqual({
          result: false,
          message: 'Domain contains more than 253 characters'
        });
    });

    it('Should be valid if domain contains exactly 253 characters', () => {
      expect(isDomainValid('ocai6oiz9ezsrgjvrsdo1lakvxvqrtpcwixeljjyknbqjnyo9ajryikbk2kswtw.oywvoeci72kzzdrpeqcdddyc2nocd2jqfiigtuck8lmfqnsdg2a8htnjijkn0x5.p3fco1z2makd2mvjznfdjzejhdah5qyyityivskocmdkrjfgwa94gkhnnqqztaf.ehhizzsxs35drae9xwlavfesgpgwb1owjzzovhthtvmnsosreweeob02pf.eu'))
        .toEqual({
          result: true
        });
    });
  });

  describe('Labels num', () => {
    it('Should be invalid if domain does not contain at least two labels', () => {
      expect(isDomainValid('example'))
        .toEqual({
          result: false,
          message: 'Domain has to contain at least two labels'
        });
    });

    it('Should be valid if domain contains exactly two labels', () => {
      expect(isDomainValid('example.technology'))
        .toEqual({
          result: true
        });
    });
  });

  describe('Labels length', () => {
    it('Should be invalid if a label contains more than 63 characters', () => {
      expect(isDomainValid('ocai6oiz9ezsrgjvrsdo1lakvxvqrtpcwixeljjyknbqjnyo9ajryikbk2kswtwo.com'))
        .toEqual({
          result: false,
          message: 'Label ocai6oiz9ezsrgjvrsdo1lakvxvqrtpcwixeljjyknbqjnyo9ajryikbk2kswtwo contains more than 63 characters'
        });
    });

    it('Should be valid if a label contains exactly 63 characters', () => {
      expect(isDomainValid('ocai6oiz9ezsrgjvrsdo1lakvxvqrtpcwixeljjyknbqjnyo9ajryikbk2kswtw.de'))
        .toEqual({
          result: true
        });
    });
  });

  describe('Labels characters', () => {
    it('Should be invalid if a label contains not allowed characters', () => {
      expect(isDomainValid('exam_ple.com'))
        .toEqual({
          result: false,
          message: 'Label exam_ple contains a invalid character(s)'
        });
    });

    it('Should be invalid if a label begins with hyphen', () => {
      expect(isDomainValid('-example.com'))
        .toEqual({
          result: false,
          message: 'Label -example begins with hyphen'
        });
    });

    it('Should be invalid if a label ends with hyphen', () => {
      expect(isDomainValid('example-.com'))
        .toEqual({
          result: false,
          message: 'Label example- ends with hyphen'
        });
    });

    it('Should be invalid if a label contains consecutive hyphens', () => {
      expect(isDomainValid('exa--mple.com'))
        .toEqual({
          result: false,
          message: 'Label exa--mple contains consecutive hyphens'
        });
    });

    it('Should be valid if a label contain a single hyphen in the middle', () => {
      expect(isDomainValid('exa-mple.com'))
        .toEqual({
          result: true
        });
    });
  })

  describe('Tld', () => {
    it('Should be invalid if domain\'s tld is not allowed', () => {
      expect(isDomainValid('example.unknowntld'))
        .toEqual({
          result: false,
          message: 'Tld unknowntld is not allowed'
        });
    });

    it('Should be valid if domain\'s tld is allowed', () => {
      expect(isDomainValid('example.academy'))
        .toEqual({
          result: true
        });
    });
  });

  it('Sample domains list tests', () => {
    sampleDomainsList.forEach((domain) => {
      expect(isDomainValid(domain)).toEqual({
        result: true
      });
    });
  });
});
