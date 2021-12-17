<script>
    export let buttonText;
</script>

<button on:click>
	{buttonText}
</button>
<style>
	button {
		height: 6rem;
		width: 30rem;
		background-color: black;
		border-color: rgb(231, 227, 0);
		color:white;
		font-size: 38px;
		background-image: linear-gradient(45deg, #b3ca98 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
		transition: background 300ms ease-in-out;
	}
	button:hover {
		background-position: 0;
		color: black;
	}
</style>