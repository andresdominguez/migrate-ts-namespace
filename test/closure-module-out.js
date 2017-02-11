goog.module('foo.bar.baz.FooMan');

const juanCamaneyModule = goog.require('google3.test.foo.ts_file');
const ArmandoMaradonaModule = goog.require('foo.bar.baz.ArmandoMaradonaModule');

const FooMan = angular.module('foo.bar.baz.FooMan', [
  juanCamaneyModule.juanCamaneyModule.name,
  ArmandoMaradonaModule.name
]);
