<script>
  import { Container, Row, Icon, Figure, Image } from 'sveltestrap';
	import { useNavigate } from "svelte-navigator";

	const navigate = useNavigate();
  const getImageSrc = (seed) => `https://picsum.photos/seed/${seed}/300/300`

</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
</svelte:head>

<p>sus</p>
<Container>
  <Row xs-12>
    <div class="img-container">
      <img class="img-fill" src={getImageSrc('sus')} />
    </div>
  </Row>
  <Row cols={{xs: 1, sm: 2, lg: 4}}>
  </Row>
</Container>


<style>
  .asdfg {
    min-height: 80px;
    font-size: 1.3rem;
  }

  .img-container {
    max-height: 60vh;
  }

  .img-fill {
    width: 100%;
    height: 100%;
    object-fit: contain;

  }

  :global(body) {
		background-color: #5CDB95 !important;
	}

  .welcome-message {
    color: #05386B;
  }

  button {
    background-color: #EDF5E1;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
  }

  button:hover {
    background-color: #379683;;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    color: #EDF5E1;
    transform: translateY(-3px);
  }

  button > span {
    align-self: center;
  }
</style>
