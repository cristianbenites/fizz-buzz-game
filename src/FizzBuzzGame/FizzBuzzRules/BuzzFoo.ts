import IFizzBuzzRules from "./IFizzBuzzRules";

export default class BuzzFoo implements IFizzBuzzRules {
  private _buzzFoo = 'BuzzFoo'

  validate(value: number): boolean {
    return value % 2 === 0 && value % 5 === 0;
  }

  perform(value: number): string {
    return this.validate(value) ? this._buzzFoo : ''
  }
}
