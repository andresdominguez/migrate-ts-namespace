goog.module('foo.bar.baz.FooMan');

const JuanCamaneyModule = goog.require('foo.bar.baz.JuanCamaneyModule');
const ArmandoMaradonaModule = goog.require('foo.bar.baz.ArmandoMaradonaModule');

const FooMan = angular.module('foo.bar.baz.FooMan', [
  JuanCamaneyModule.name,
  ArmandoMaradonaModule.name
]);
