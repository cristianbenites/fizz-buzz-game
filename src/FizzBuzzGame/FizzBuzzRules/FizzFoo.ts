import IFizzBuzzRules from "./IFizzBuzzRules";

export default class FizzFoo implements IFizzBuzzRules {
  private _fizzFoo = 'FizzFoo'

  validate(value: number): boolean {
    return value % 2 === 0 && value % 3 === 0;
  }

  perform(value: number): string {
    return this.validate(value) ? this._fizzFoo : ''
  }
}
