import { Inject, Injectable } from '@nestjs/common';
import { UserFindByIdDTO } from '../../../application/dtos/user';
import { IUserRepository } from '../../../domain/user';

@Injectable()
export class UserFindByIdUseCase {
  @Inject('IUserRepository')
  private readonly userRepository: IUserRepository;

  public async execute(dto: UserFindByIdDTO) {
    return this.userRepository.findById(dto);
  }
}
