<script>
    import { Marker } from "@beyonk/svelte-mapbox";
    import { Button } from "sveltestrap";
    import { useNavigate } from "svelte-navigator";

    const navigate = useNavigate();
    export let tree;

    function dateRepresentation(date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return [
            (dd > 9 ? "" : "0") + dd,
            (mm > 9 ? "" : "0") + mm,
            date.getFullYear()
        ].join("/");
    }
</script>

<Marker color="#38848a" lat={tree.coordinates[0]} lng={tree.coordinates[1]}>
    <div class="content" slot="popup">
        <h2>{"Tree " + tree.id}</h2>
        <h3>Planted</h3>
        <p>{dateRepresentation(tree.plantDate)}</p>
        <h3>Updated</h3>
        <p>{dateRepresentation(tree.updateDate)}</p>
        <h3>Growth stage</h3>
        <p>{tree.growth}</p>
        <button class="btn-block" on:click={() => navigate("/trees/" + tree.id)}>Modify</button>
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