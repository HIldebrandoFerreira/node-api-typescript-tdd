import { DbAdAccount } from './db-add-account'

class EncrpterStub {
  async encrypt (value: string): Promise<string> {
    return await new Promise(resolve => resolve('hashed_password'))
  }
}

describe('DbAddAccoount Usecase', () => {
  test('should call Encrypter with corrrect password', async () => {
    const encrpterStub = new EncrpterStub()
    const sut = new DbAdAccount(encrpterStub)
    const encryptSpy = jest.spyOn(encrpterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
