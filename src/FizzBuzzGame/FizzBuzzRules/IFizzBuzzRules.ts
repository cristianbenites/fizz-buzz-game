export default interface IFizzBuzzRules {
  validate(value: number): boolean
  perform(value: number): string
}
