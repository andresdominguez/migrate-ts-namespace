const FooMan = goog.require('foo.bar.baz.FooMan');
const JuanCamaney = goog.require('foo.bar.baz.JuanCamaney');
const ArmandoMaradona = goog.require('foo.bar.baz.ArmandoMaradona');

class Foo {
  /**
   *
   * @param {!JuanCamaney} juanCamaney
   */
  constructor(juanCamaney) {
    /**
     * @type {JuanCamaney}
     */
    this.juanCamaney = juanCamaney;
  }

  /**
   *
   * @param {!JuanCamaney} juanCamaney
   */
  foo(juanCamaney) {
  }

  /**
   *
   * @param {JuanCamaney} juanCamaney
   */
  foo(juanCamaney) {
  }
}
