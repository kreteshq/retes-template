import { ServerApp } from 'retes';
import { Response } from 'retes/response';
import { GET, POST } from 'retes/route';

const routes = [
	GET('/', () => Response.OK('Hello, World')),
	GET('/welcome/:name', ({ params }) => {
		return { status: 200, body: `Hello, ${params.name}` };
	}),
	POST('/user', ({ params: { name } }) => Response.OK(`Received: '${name}'`)),
	POST('/widget', ({ params: { name, count } }) => {
		// validate `params`
		// save the widget to database ...
		return Response.Created(); // returns `201 Created` response
	}),
];

async function main() {
	const app = new ServerApp(routes);
	await app.start(3000);

	console.log('Started');
}

main();
