<script>
    export let name;
    import Map from "./Map/Map.svelte";
    import MapMarker from "./Map/MapMarker.svelte";
</script>

<div class="overlay">
    <Map lat={-15.908235} lon={25.957893} zoom={15}>
        <MapMarker lat={-15.908235} lon={25.957893} label="Tree 1" />
        <MapMarker
            lat={-15.908235}
            lon={25.96}
            label="Tree 2"
        />
    </Map>
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

    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
</style>
