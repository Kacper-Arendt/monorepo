import cors from 'cors';
import express from 'express';

const app = express();
const port = 5000;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/workspaces', (_, response) => {
	const workspaces: any[] = [
		{ name: 'api', version: '1.0.0' },
		{ name: 'types', version: '1.0.0' },
		{ name: 'web', version: '1.0.0' },
	];
	response.json({ data: workspaces });
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
