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

  it('should recursively remove undefined properties when recursive is truthy', function () {
    const testObjs = new Map();
    testObjs.set({ a: undefined, b: { c: undefined } }, { b: {} });
    testObjs.set({ a: undefined, b: { c: 1, d: undefined } }, { b: { c: 1 } });
    for (let [input, output] of testObjs) {
      expect(rundef(input, false, true)).to.eql(output);
      expect(rundef(input, true, true)).to.eql(output);
    }
  })
  it('should recursively remove undefined properties from the object itself when mutate and recursive are truthy', function () {
    const testObj = { a: undefined, b: { c: 1, d: undefined } };
    expect(rundef(testObj, false, true)).to.not.equal(testObj);
    expect(rundef(testObj, true, true)).to.equal(testObj);
  });
})
