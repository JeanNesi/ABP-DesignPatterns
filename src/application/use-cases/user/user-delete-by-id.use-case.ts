import { Inject, Injectable } from '@nestjs/common';
import { UserDeleteByIdDTO } from '../../../application/dtos/user';
import { IUserRepository } from '../../../domain/user';

@Injectable()
export class UserDeleteByIdUseCase {
  @Inject('IUserRepository')
  private readonly userRepository: IUserRepository;

  public async execute(dto: UserDeleteByIdDTO) {
    return this.userRepository.deleteById(dto);
  }
}
