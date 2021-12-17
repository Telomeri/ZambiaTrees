<script>
    import { onDestroy, setContext } from "svelte";
    import { mapbox, key } from "./mapbox.js";
    import MapMarker from "./MapMarker.svelte";
    import initData from "../data.js";

    setContext(key, {
        getMap: () => map,
    });

    export let lat;
    export let lon;
    export let zoom;

    let container;
    let map;
    let data;
    

    function load() {
        data = initData();
        console.log(data);
        map = new mapbox.Map({
            container,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [lon, lat],
            zoom,
        });
    }

    onDestroy(() => {
        if (map) map.remove();
    });
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
        on:load={load}
    />
</svelte:head>

<div bind:this={container}>
    {#if map}
        {#each data as tree}
            <MapMarker lat={tree.coordinates[0]} lon={tree.coordinates[1]} label={"Tree " + tree.id} />
        {/each}
    {/if}
</div>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>
