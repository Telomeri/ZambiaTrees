<script>
  import { Container, Row, Col, Icon, Figure, Image } from 'sveltestrap';
	import { useNavigate } from "svelte-navigator";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
</svelte:head>

<Row class="info-card mt-2">
  <Col class="">
    <div class="info-card">     
      How does the current situation compare to the picture?
      Select one.
    <Row cols={3} class="my-2">
      <!-- <input type="radio" lass="btn-check" id="opt1" name="tree-growth-options">
      <label class="btn btn-outline-success" for="btn-check-2-outlined">Checked</label><br>
      <input type="radio" id="opt2" name="tree-growth-options">
      <input type="radio" id="opt3" name="tree-growth-options">
      <input type="radio" id="opt4" name="tree-growth-options"> -->
      <Col>
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off">
        <label class="asd asdfg" for="option1">cut down</label>
      </Col>
      <Col>
        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
        <label class="asd asdfg" for="option2">no change</label>
      </Col>
      <Col>
        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
        <label class="asd asdfg" for="option3">growth</label>
      </Col>
      </Row>
    </div>
  </Col>
</Row>

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
    min-height: 40px;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin: auto;
  }
  button, .asd {
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

  button:active, input[type="radio"]:checked+label {
    /* background-color: #379683;; */
    /* box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1); */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 13px -3px inset, rgba(0, 0, 0, 0.2) 0px 3px 0px inset; 
    background-color: #C7CFBB;
    /* transform: translateY(3px); */
  }

  button:hover, .asd:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-color: #FAFFEE;
    transform: translateY(-2px);
  }

  button > span {
    align-self: center;
  }
</style>
