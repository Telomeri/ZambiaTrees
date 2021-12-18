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
        <p>Planted: {dateRepresentation(tree.plantDate)}</p>
        <p>Updated: {dateRepresentation(tree.updateDate)}</p>
        <p>Growth stage: {tree.growth}</p>
        <Button on:click={() => navigate("/trees/" + tree.id)}>Modify</Button>
    </div>
</Marker>
