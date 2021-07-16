const Intern = require('../lib/intern');


const intern = new Intern(1, '@', 'john', 'uncc');
test('creates a employee object', () => {
    
    expectNum   (intern.id);
    expectToStr  (intern.Name,'John');
    expectStr   (intern.email, '@');
    expectToBe  (intern.role, 'intern');
    
});
test('gets intern\'s name', () => {
    expectStr(intern.getName(), `${intern.name}`);
});
test('gets intern\'s ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});
test('gets intern\'s email', () => {
    expectStr(intern.getEmail(), `${intern.email}`);
});
test('gets intern\'s school', () => {
    expectStr(intern.getSchool(), `${intern.school}`);
});

test('gets intern\'s role', () => {
    expectStr(intern.getRole(), intern.role);
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