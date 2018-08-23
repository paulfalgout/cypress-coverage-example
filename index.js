function Test() {
  this.setFoo('hello');
}

Test.prototype.setFoo = (msg) => {
  this.foo = 'hello'
};

Test.prototype.notCovered = (msg) => {
  this.bar = 'not tested';
};

Test.prototype.testBranches = () => {
  if(this.foo === 'hello') {
    this.bar = 'world';
  } else {
    this.bar = 'Branch not tested';
  }
};

window.Test = Test;