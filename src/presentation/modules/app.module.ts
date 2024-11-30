//#region IMPORTS
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
//#endregion

//#region MODULES
import { AccessModule } from './access.module';
import { BoardTaskModule } from './board-task.module';
import { BoardModule } from './board.module';
import { GlobalModule } from './global.module';
import { RegisterModule } from './register.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
//#endregion

@Module({
  imports: [
    GlobalModule,
    AccessModule,
    BoardModule,
    BoardTaskModule,
    RouterModule.register([
      {
        path: 'access',
        module: AccessModule,
      },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'infrastructure', 'config', 'static'),
      serveRoot: '/docs', 
    }),
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
