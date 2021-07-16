const { describe } = require('yargs');
const Engineer = require('../lib/engineer');


const engineer = new Engineer(1, '@', 'john','jamescode');

describe('engineer', () =>{
    test('creates a engineer object', () => {

        expectNum   (engineer.id);
        expectToStr  (engineer.name,'John');
        expectStr   (engineer.email, '@');
        expectToBe  (engineer.role, 'engineer');
        expectToBe  (engineer.github)
    });
    test('gets employee\'s name', () => {
        expectStr(engineer.getName(), `${engineer.name}`);
    });
    test('gets employee\'s ID', () => {
        expectStr(engineer.getId(), `${engineer.id}`);
    });
    test('gets employee\'s email', () => {
        expectStr(engineer.getEmail(), `${engineer.email}`);
    });
    test('gets employee\'s role', () => {
        expectStr(engineer.getRole(), engineer.role);
    });

    test('gets employee\'s role', () => {
        expectStr(engineer.getgitHub(), `${engineer.github}`);
    });

    });

//jest documentation

/*const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});*/