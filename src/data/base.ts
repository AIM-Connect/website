const API_URL = <string>import.meta.env.PUBLIC_WORDPRESS_API_ENDPOINT;

interface WPGraphQLParams {
	query: string;
	variables?: object;
}

export async function fetchAPI(params: WPGraphQLParams) {
	const { query = '', variables = {} } = params;
	const headers = { 'Content-Type': 'application/json' };

	const res = await fetch(API_URL, {
		headers,
		method: 'POST',
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}
	return json.data;
}
