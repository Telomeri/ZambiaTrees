<script>
    export let targetSlug;
    export let barText;


    import { useNavigate } from "svelte-navigator";
    const navigate = useNavigate();
    const onBackButtonClick = () => {
      targetSlug && navigate(targetSlug)
    }
</script>




<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
    .navbar{
        max-width: 100%;
        max-height: 20%;
        height: 4rem;
        overflow: hidden;
        color: #f2f2f2;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
        /* background-color: #333; */

        /* background-color:#8EE4AF; */
    }
    .navbar .backButton{
        float: left;
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
    <a
      class="backButton"
      href="/"
      on:click|preventDefault={onBackButtonClick}
    >
      ←
    </a>
    <a class = "dataTitle" href="/">{barText}</a>
</div>
