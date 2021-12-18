<script>
  import { Container, Row, Col, Icon, Figure, Image } from 'sveltestrap';
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
  <Row>
    <Col class="pt-3">
      Can you recognize this image from your surroundings?
    </Col>
  </Row>
  <Row class="pt-3">
    <Col>
      <button>
        no
      </button> 
    </Col>
    <Col>
      <button>
        yes
      </button>  
    </Col>
  </Row>
</Container>


<style>
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

  button {
    background-color: #EDF5E1;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    text-align: center;
    /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    /* transition: all 0.3s ease 0s; */
  }

  button:active {
    /* background-color: #379683;; */
    /* box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1); */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 13px -3px inset, rgba(0, 0, 0, 0.2) 0px 3px 0px inset; 
    background-color: #C7CFBB;
    /* transform: translateY(3px); */
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-color: #FAFFEE;
    transform: translateY(-2px);
  }
</style>
