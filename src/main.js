import App from './App.svelte';
import 'bulma/css/bulma.min.css';
import './style.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;