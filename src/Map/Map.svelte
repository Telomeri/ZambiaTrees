<script>
    import { Map, Marker } from "@beyonk/svelte-mapbox";
    import { onMount } from "svelte";
    import initData from "../data.js";
    import { Button } from "sveltestrap";
    import { useNavigate } from "svelte-navigator";
    import MapMarker from "./MapMarker.svelte";
    import Navbar from "../Navbar.svelte";
    import "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

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

<div>
    <Navbar barText="Map" />
    <div class="map">
        <Map
            accessToken="pk.eyJ1IjoidGh5dm9uZW4iLCJhIjoiY2tjYnN3NW5tMjd6NjJ2bWdscG1vNHNoeSJ9.OAMTF0xUTjnyRFdJVzJy5g"
            style="mapbox://styles/mapbox/satellite-v9"
            center={[lon, lat]}
            {zoom}
            bind:this={mapComponent}
            on:ready={onReady}
        >
            {#if data}
                {#each data as tree}
                    <MapMarker {tree} />
                {/each}
            {/if}
        </Map>
        <div class="container">
            <div class="btn-holder">
                <button type="button" class="btn-circle">+</button>
            </div>
        </div>
    </div>
</div>

<style>
    .map {
        position: absolute;
        left: 0px;
        top: 43px;
        right: 0px;
        bottom: 0px;
    }

    .btn-circle {
        width: 46px;
        height: 46px;
        padding: 0px 0px 0px 0px;
        border-radius: 23px;
        font-size: 25px;
        text-align: center;
    }

    .container {
        position: relative;
        right: 20px;
        bottom: 100px;
        justify-content: space-between;
        flex-direction: column;
        height: 100vh;
        display: flex;
    }
    .container .btn-holder {
        justify-content: flex-end;
        display: flex;
    }
</style>
