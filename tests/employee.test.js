const Employee = require('../lib/employee');


const employee = new Employee(1, '@', 'john');
test('creates a employee object', () => {
    
    expectNum(employee.id);
    expectTotsr(employee.name,'John');
    expectStr(employee.email, '@');
    expectToBe(employee.role, 'Employee');
    
});
test('gets employee\'s name', () => {
    expectStr(employee.getName(), `${employee.name}`);
});
test('gets employee\'s ID', () => {
    expectStr(employee.getId(), `${employee.id}`);
});
test('gets employee\'s email', () => {
    expectStr(employee.getEmail(), `${employee.email}`);
});
test('gets employee\'s role', () => {
    expectStr(employee.getRole(), employee.role);
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