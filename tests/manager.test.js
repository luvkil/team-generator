const Mananger = require('../lib/manager');


const manager = new Employee(1, '@', 'john',1);
test('creates a employee object', () => {
    
    expectNum   (manager.id);
    expectToStr  (manager.Name,'John');
    expectStr   (manager.email, '@');
    expectToBe  (manager.role, 'manager');
    expectNum   (manager.officeNumber)

    
});
test('gets employee\'s name', () => {
    expectStr(manager.getName(), `${manager.name}`);
});
test('gets employee\'s ID', () => {
    expectStr(manager.getId(), `${manager.id}`);
});
test('gets employee\'s email', () => {
    expectStr(manager.getEmail(), `${manager.email}`);
});
test('gets employee\'s role', () => {
    expectStr(manager.getRole(), manager.role);
});


test('gets employee\'s role', () => {
    expectStr(manager.officeNumber(), `${manager.officeNumber}`);
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