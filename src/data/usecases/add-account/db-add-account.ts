import { AccountModel } from '../../../domain/models/Account'
import { AddAccountModel, AddAccount } from '../../../domain/usecases/add-account'
import { Encrypter } from '../../protocols/encypter'

export class DbAdAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve(null))
  }
}
