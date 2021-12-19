<script>
  import { Container, Row, Col, Icon, Figure, Image } from 'sveltestrap';
	import { useNavigate } from "svelte-navigator";
  import { v4 as uuidv4 } from 'uuid';
  import Navbar from "./Navbar.svelte";
  import GrowthChangeForm from './GrowthChangeForm.svelte';

	const navigate = useNavigate();
  const getImageSrc = (seed) => `https://picsum.photos/seed/${seed}/800/800`
  let randomSeed = 'sus';

  const getNewImage = () => {
    randomSeed = uuidv4();
  }

  let processStep = 0
  let pictureTaken = false

  $: image_src = getImageSrc(randomSeed)
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
</svelte:head>

<Navbar targetSlug="/" barText="New " />
<Container>
  {#if processStep !== 3}
    <Row xs-12 class="mt-1">
      <div class="img-container">
        <img class="img-fill" alt="location" src={image_src} />
      </div>
    </Row>
  {/if}
  {#if processStep === 0}
    <Row class="info-card mt-2">
      <Col class="">
        <div class="info-card">     
          Can you locate this place in your surroundings? If you do not recognize the location, request another image.
          <Row class="pt-3">
            <Col>
              <button class="asdfg" on:click={getNewImage}>
                Show another image
              </button> 
            </Col>
            <Col>
              <button class="asdfg" on:click={() => processStep = 1}>
                Yes
              </button>  
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  {:else if processStep === 1}
    <GrowthChangeForm onSubmit={() => processStep = 2} />
  {:else if processStep === 2}
    <Row class="info-card mt-2">
      <Col class="">
        <div class="info-card">
          {#if pictureTaken }     
            Please submit the observation if you are satisfied with your picture
          {:else}
            Please take a new picture of the place shown above.
          {/if}
          <Row class="pt-3">
            <Col>
              <button class="asdfg" on:click={() => {
                getNewImage()
                pictureTaken = true;
              }}>
                {#if pictureTaken }     
                  Re-take Picture
                {:else}
                  Take Picture
                {/if}
              </button> 
            </Col>
            {#if pictureTaken }
            <Col>
              <button class="asdfg" on:click={() => processStep = 3}>
                Submit
              </button>  
            </Col>
            {/if}
          </Row>
        </div>
      </Col>
    </Row>
  {:else}
  <Row class="info-card mt-2">
    <Col class="">
      <div class="info-card">
        Your observation has been submitted. Thanks for your work!
      </div>
    </Col>
  </Row>


  <Row class="">
    <Col>
      <button class="asdfg" on:click={() => navigate('/map')}>
        Back to the map
      </button>  
    </Col>
  </Row>


  {/if}
</Container>


<style>
  .img-container {
    max-height: 60vh;
  }

  img {
    max-height: 60vh;
    margin-top: 12px;
    max-width: 100%;
    border-radius: 1rem;
  }

  :global(body) {
		background-color: #5CDB95 !important;
	}

  .info-card {
    max-width: 60vh;
    padding: 8px 8px 8px 8px;
    background-color: hsl(147, 31%, 80%);
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
  }
  .asdfg {
    min-height: 80px;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    margin: auto;
  }
  button {
    background-color: #EDF5E1;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
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

  button > span {
    align-self: center;
  }
</style>
