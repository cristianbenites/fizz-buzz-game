import IFizzBuzzRules from "./IFizzBuzzRules";

export default class FizzBuzz implements IFizzBuzzRules {
  private _fizzBuzz = 'FizzBuzz'

  validate(value: number): boolean {
    return value % 3 === 0 && value % 5 === 0;
  }

  perform(value: number): string {
    return this.validate(value) ? this._fizzBuzz : ''
  }
}
