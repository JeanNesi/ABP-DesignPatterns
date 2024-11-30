// IMPORTS
import { Inject, Injectable } from '@nestjs/common';
import { jwt } from '../../../infrastructure/security/jwt';
//#endregion

//#region REPOSITORIES
import { IUserRepository } from '../../../domain/user';
//#endregion

//#region DTOS
import { AccessUpdatePasswordDTO } from '../../../application/dtos/access';
//#endregion

@Injectable()
export class AccessUpdatePasswordUseCase {
  @Inject('IUserRepository')
  private readonly userRepository: IUserRepository;

  public async execute(dto: AccessUpdatePasswordDTO) {
    const { token, ...data } = dto;
    const { userId } = jwt.verify<{ userId: string }>(token);

    await this.userRepository.updatePassword({
      id: userId,
      ...data,
    });
  }
}
