//#region IMPORTS
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
//#endregion

//#region MODULES
import { AccessModule } from './access.module';
import { BoardModule } from './board.module';
import { GlobalModule } from './global.module';
import { RegisterModule } from './register.module';
//#endregion

@Module({
  imports: [
    GlobalModule,
    AccessModule,
    BoardModule,
    RouterModule.register([
      {
        path: 'access',
        module: AccessModule,
      },
    ]),

    RegisterModule,
    RouterModule.register([
      {
        path: 'register',
        module: RegisterModule,
      },
    ]),
  ],
})
export class AppModule { }
