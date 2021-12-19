<script>
    import { Marker } from "@beyonk/svelte-mapbox";
    import { Button } from "sveltestrap";
    import { useNavigate } from "svelte-navigator";

    const navigate = useNavigate();
    export let tree;
    const needsUpdate = Math.random() > 0.7 ? true : false;
    const color = needsUpdate ? "#f24e4e" : "#38848a";

    function dateRepresentation(date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return [
            (dd > 9 ? "" : "0") + dd,
            (mm > 9 ? "" : "0") + mm,
            date.getFullYear(),
        ].join(".");
    }
</script>

<Marker color={color} lat={tree.coordinates[0]} lng={tree.coordinates[1]}>
    <div class="content" slot="popup">
        <h3>Planted</h3>
        <p>{dateRepresentation(tree.plantDate)}</p>
        <h3>Updated</h3>
        <p>{dateRepresentation(tree.updateDate)}</p>
        <h3>Growth stage</h3>
        <p>{tree.growth}</p>
        {#if needsUpdate}
            <p><b>Requires update</b></p>
        {/if}
        <button on:click={() => navigate("/trees/" + tree.id)}>Details</button>
    </div>
</Marker>

<style>
    h3 {
        text-align: left;
        margin-bottom: -10px;
        margin-top: -5px;
    }

    p {
        text-align: left;
    }

    button {
        width: 100%;
    }
</style>
