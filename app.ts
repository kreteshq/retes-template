import { ServerApp } from 'retes';
import { Response } from 'retes/response';
import { GET } from 'retes/route';

const routes = [
	GET('/', () => Response.OK('Hello, World')),
];

const app = new ServerApp(routes);
await app.start(3000);