export default interface IHashProvider {
  generateHash(paylad: string): Promise<string>;
  compareHash(paylad: string, hashed: string): Promise<boolean>;
}
