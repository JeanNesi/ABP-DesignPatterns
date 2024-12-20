import { Inject, Injectable } from '@nestjs/common';

import { UserPermissionCreateDTO } from '../../../application/dtos/user-permission';
import { IUserPermissionRepository } from '../../../domain/userPermission';
import { UserPermissionEntity } from '../../../domain/userPermission/user-permission.entity';

@Injectable()
export class UserPermissionCreateUseCase {
  @Inject('IUserPermissionRepository')
  private readonly userPermissionRepository: IUserPermissionRepository;

  public async execute(dto: UserPermissionCreateDTO) {
    const permissionEntity = new UserPermissionEntity(dto);

    const permission =
      await this.userPermissionRepository.create(permissionEntity);

    return { permission };
  }
}
