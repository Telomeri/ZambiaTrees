<script>
  import { Router, Link, Route } from "svelte-navigator";
  import HomeScreen from './HomeScreen.svelte';
	export let name;
</script>

<main>
  <Router>
    <Route path="map">
      <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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