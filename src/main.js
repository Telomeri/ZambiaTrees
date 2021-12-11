import DataScreen from './DataScreen.svelte';
import Navbar from './Navbar.svelte'
import initData from './data.js'

const navbar = new Navbar({
	target: document.body,
	props: {
		name: 'world'
	}
});

const datascreen = new DataScreen({
	target: document.body,
	props: {
		data: initData()
	}
});

export default {datascreen, navbar};