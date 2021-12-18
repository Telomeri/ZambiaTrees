<script>
  import { Router, Link, Route } from "svelte-navigator";
  import HomeScreen from './HomeScreen.svelte';
  import DataScreen from './DataScreen.svelte';
  import initData from './data.js'
  import Map from "./Map/Map.svelte";
</script>

<main>
  <Router>
    <Route path="map">
        <Map lat={-15.908235} lon={25.957893} zoom={15} />
    </Route>
    <Route path="data">
      <DataScreen />
    </Route>
    <Route path="/">
      <HomeScreen />
    </Route>
    <Route>
      404 nothing here
    </Route>
  </Router>
</main>

<style>
	main {
		text-align: center;
		margin: 0;
	}

	h1 {
		color: #05386B;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
