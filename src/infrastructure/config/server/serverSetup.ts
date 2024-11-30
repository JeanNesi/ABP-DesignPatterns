import { env } from '../env';
import { configApi } from './configApi';
import { configSecurity } from './configSecurity';
import { configSwagger } from './configSwagger';

export async function serverSetup() {
  const app = await configApi();
  await configSwagger(app);
  await configSecurity(app);
  await app.listen(env.get('PORT'));
}