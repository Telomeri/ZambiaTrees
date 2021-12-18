<script>
    import { Map, Marker } from "@beyonk/svelte-mapbox";
    import { onMount } from "svelte";
    import initData from "../data.js";
    import { Button } from "sveltestrap";
    import { useNavigate } from "svelte-navigator";
    import MapMarker from "./MapMarker.svelte";
    import Navbar from "../Navbar.svelte"

    const navigate = useNavigate();
    let mapComponent;
    let data;
    export let lat;
    export let lon;
    export let zoom;

    onMount(() => {
        data = initData();
        console.log(data);
    });

    function onReady() {}

    function handleButtonClick(id) {
        console.log("Clicked");
        navigate("/trees/" + id);
    }
</script>

<div class="fullscreen">
    <Navbar barText="Map" />
    <Map
        accessToken="pk.eyJ1IjoidGh5dm9uZW4iLCJhIjoiY2tjYnN3NW5tMjd6NjJ2bWdscG1vNHNoeSJ9.OAMTF0xUTjnyRFdJVzJy5g"
        style="mapbox://styles/mapbox/satellite-v9"
        center={[lon, lat]}
        {zoom}
        bind:this={mapComponent}
        on:ready={onReady}
    >
        <!-- <div class="mapboxgl-ctrl-bottom-right">
        <Button>ASD</Button>
    </div> -->
        {#if data}
            {#each data as tree}
                <MapMarker {tree} />
            {/each}
        {/if}
    </Map>
</div>

<style>
    .fullscreen {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
</style>