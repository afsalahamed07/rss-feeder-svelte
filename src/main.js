import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;