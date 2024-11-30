//#IMPORTS
import { Module } from '@nestjs/common';
//#endregion

//#REGION REPOSITORIES
import { UserRepository } from '../../infrastructure/database/prisma/repositories';
//#endregion

//#REGION CONTROLLERS
import { AccessController } from '../controllers/access';
//#endregion

//#REGION USE CASES
import {
  AccessLoginUseCase,
  AccessLogoutUseCase,
  AccessRefreshAccessTokenUseCase,
  AccessUpdatePasswordUseCase,
  AccessSendEmailForUpdatePasswordUseCase,
} from '../../application/use-cases/access';
//#endregions

@Module({
  controllers: [AccessController],
  providers: [
    UserRepository,
    AccessLoginUseCase,
    AccessLogoutUseCase,
    AccessRefreshAccessTokenUseCase,
    AccessUpdatePasswordUseCase,
    AccessSendEmailForUpdatePasswordUseCase,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class AccessModule {}
