<script>
    import { Router, Link, Route } from "svelte-navigator";
    import HomeScreen from "./HomeScreen.svelte";
    import DataScreen from "./DataScreen.svelte";
    import TreeScreen from "./TreeScreen.svelte";
    import initData from "./data.js";
    import Map from "./Map/Map.svelte";
    import NewObservationScreen from "./NewObservationScreen.svelte";
    import GrowthChangeForm from "./GrowthChangeForm.svelte";
</script>

<main>
    <Router>
        <Route path="map">
            <Map lat={-15.908235} lon={25.957893} zoom={15} />
        </Route>
        <Route path="data">
            <DataScreen />
        </Route>
        <Route path="trees/:id">
            <TreeScreen/>
        </Route>
        <Route path="/observe/:id">
          <NewObservationScreen />
        </Route>
        <!-- <Route path="sus">
          <GrowthChangeForm />
        </Route> -->
        <Route path="/">
            <HomeScreen />
        </Route>
        <Route>404 nothing here</Route>
    </Router>
</main>

<style>
    main {
        text-align: center;
        margin: 0;
    }

    h1 {
        color: #05386b;
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
