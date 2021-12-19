<script>
    export let targetSlug;
    export let barText;


    import { useNavigate } from "svelte-navigator";
    const navigate = useNavigate();
    const onBackButtonClick = () => {
      targetSlug && navigate(targetSlug)
    }
</script>

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

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .navbar {
    max-width: 100%;
    max-height: 20%;
    overflow: hidden;
    border-radius: 0 0 1rem 1rem;
    background-color: #333;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .navbar .backButton {
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
  .navbar .dataTitle {
    float: right;
    color: #f2f2f2;
    text-align: right;
    padding-right: 45%;
    margin: 0%;
    text-decoration: none;
    font-size: 32px;
  }
</style>
