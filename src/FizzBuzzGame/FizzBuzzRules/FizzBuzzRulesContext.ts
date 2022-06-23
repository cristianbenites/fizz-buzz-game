import Buzz from "./Buzz";
import BuzzFoo from "./BuzzFoo";
import Default from "./Default";
import Fizz from "./Fizz";
import FizzBuzz from "./FizzBuzz";
import FizzBuzzFoo from "./FizzBuzzFoo";
import FizzFoo from "./FizzFoo";
import Foo from "./Foo";
import IFizzBuzzRules from "./IFizzBuzzRules";

export default class FizzBuzzRulesContext {
  private _rules: IFizzBuzzRules[]

  constructor() {
    this._rules = [
      new FizzBuzzFoo(),
      new BuzzFoo(),
      new FizzFoo(),
      new FizzBuzz(),
      new Buzz(),
      new Fizz(),
      new Foo(),
      new Default(),
    ]
  }

  findRule(value: number): IFizzBuzzRules | undefined {
    return this._rules.find((rule) => rule.validate(value))
  }
}
