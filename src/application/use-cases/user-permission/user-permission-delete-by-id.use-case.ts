import { Inject, Injectable } from '@nestjs/common';
import { UserPermissionDeleteByIdDTO } from '../../../application/dtos/user-permission';
import { IUserPermissionRepository } from '../../../domain/userPermission';

@Injectable()
export class UserPermissionDeleteByIdUseCase {
  @Inject('IUserPermissionRepository')
  private readonly userPermissionRepository: IUserPermissionRepository;

  public async execute({ id }: UserPermissionDeleteByIdDTO) {
    return this.userPermissionRepository.delete(id);
  }
}
