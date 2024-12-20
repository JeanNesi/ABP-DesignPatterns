import { Global, Module } from '@nestjs/common';
import { ErrorCollector } from '../../utilities/error';

@Global()
@Module({
  providers: [ErrorCollector],
  exports: [ErrorCollector],
})
export class GlobalModule {}
