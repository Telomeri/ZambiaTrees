<script>
    export let menu = 1;
    export let barText;
</script>
<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
    .navbar{
        max-width: 100%;
        max-height: 20%;
        overflow: hidden;
        background-color: #333;
    }
    .navbar .backButton{
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 0rem 1rem;
        text-decoration: none;
        max-width: 15%;
        font-size: 32px;
    }
    .navbar .backButton:hover {
        transition: background 300ms ease-in-out;
        background-color: grey;
        color: black;
    }
    .navbar .dataTitle{
        float: right;
        color: #f2f2f2;
        text-align: right;
        padding-right: 45%;
        text-decoration: none;
        font-size: 32px;
    }
    .navbar .dataTitle:hover {
        transition: background 300ms ease-in-out;
        background-color: grey;
        color: black;
    }
</style>

<div class="navbar" style = "margin:0">
    <a class="backButton" href="/" >←</a>
    <a class = "dataTitle" href="/data">{barText}</a>
</div>
