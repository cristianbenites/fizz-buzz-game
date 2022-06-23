import IFizzBuzzRules from "./IFizzBuzzRules";

export default class FizzBuzzFoo implements IFizzBuzzRules {
  private _fizzBuzzFoo = 'FizzBuzzFoo'

  validate(value: number): boolean {
    return value % 2 === 0 && value % 3 === 0 && value % 5 === 0;
  }

  perform(value: number): string {
    return this.validate(value) ? this._fizzBuzzFoo : ''
  }
}
