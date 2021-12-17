import DataScreen from './DataScreen.svelte';
import Navbar from './Navbar.svelte'
import initData from './data.js'

/*const homepage = new HomePage({
	target: document.body,
	props: {
		data: initData()
	}
});*/

const datascreen = new DataScreen({
	target: document.body,
	props: {
		data: initData()
	}
});

export default {datascreen};