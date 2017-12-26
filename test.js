const expect = require('chai').expect;
const rundef = require('.');

describe('rundef', function () {
  it('should remove top-level undefined property from the object', function () {
    const testObjs = new Map();
    testObjs.set({ a: undefined }, {});
    testObjs.set({ a: undefined, b: 1 }, { b: 1 });
    for (let [input, output] of testObjs) {
      expect(rundef(input)).to.eql(output);
    }
  })
  it('should return a new object when mutate is undefined or false', function () {
    const testObj = { a: undefined};
    const returnedVal = rundef(testObj);
    expect(returnedVal).to.eql({})
    expect(testObj).to.not.equal(returnedVal);
  });

  it('should mutate the object passed in when mutate is truthy', function () {
    const testObj = { a: undefined};
    const returnedVal = rundef(testObj, true);
    expect(returnedVal).to.eql({});
    expect(testObj).to.equal(returnedVal);
  });
})
