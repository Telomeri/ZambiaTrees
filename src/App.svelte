<script>
    export let name;
    import Map from "./Map/Map.svelte";
    import { Router } from "svelte-navigator";
</script>

<div class="fullscreen">
    <Router>
        <Map lat={-15.908235} lon={25.957893} zoom={15} />
    </Router>
</div>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    .fullscreen {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
</style>
