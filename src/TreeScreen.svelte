<script>
  import {
    Col,
    Container,
    Row,
    Icon,
    ListGroup,
    ListGroupItem,
  } from "sveltestrap";
  import { useNavigate } from "svelte-navigator";
  import Navbar from "./Navbar.svelte";
  import { onMount } from "svelte";
  import initData from "./data.js";

  const id = window.location.pathname.split("/").pop();
  console.log(id);
  const navigate = useNavigate();
  const labels = ["Seed","Sapling","Mature","Decline"];
  let data;
  let tree_data;
  onMount(() => {
    data = initData();
    tree_data = data[id];
    console.log(tree_data);
  });

  const navOptions = [
    {
      name: "New observation",
      slug: "/observe/" + id,
      iconName: "eyeglasses",
    },
  ];
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
  />
  <link href="https://fonts.googleapis.com/css?family=Gelasio" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@500&display=swap" rel="stylesheet"> 
</svelte:head>

<Navbar back_href="/map" barText={"Tree " + id} />
<Container>
  <img
    alt="Tree {id}"
    src="https://arbortrue.com/wp-content/uploads/2018/04/planted-tree-inhouston-tx.jpg"
  />
  {#if data}
  <div class="infoCard">
    <Row class="infoGroup" cols={2}>
      <Col>
        <div class="info">
          <p class="label">Planted by</p>
          <p class="value">{tree_data["planter"]}</p>
        </div>
      </Col>
      <Col>
        <div class="info">
          <p class="label">Plant date</p>
          <p class="value">
            {tree_data["plantDate"].toLocaleDateString("fi-FI")}
          </p>
        </div></Col
      >
      <Col>
        <div class="info-last">
          <p class="label">Growth</p>
          <p class="value">{labels[tree_data["growth"]]+" (" + tree_data["growth"] + ")"}</p>
        </div></Col
      >
      <Col>
        <div class="info-last">
          <p class="label">Last update</p>
          <p class="value">
            {tree_data["updateDate"].toLocaleDateString("fi-FI")}
          </p>
        </div></Col
      >
    </Row>
</div>
  {/if}

        <button class="asdfg" role="link" on:click={() => navigate("/observe/" + id)}>
            <div>
                <Icon class="mx-2" name="eyeglasses" />
                <span>
                  New observation
                </span>
            </div>

</Container>

<style>
      .infoCard {
          padding: 8px 8px 8px 8px;
          background-color: hsl(147, 31%, 80%);
        margin-top: 12px;
        margin-bottom: 12px;
        border-radius: 1rem;
  }
  .label {
    margin-bottom: 0px;
    text-transform: uppercase;
    font-family: 'Readex Pro', sans-serif;
    color: hsl(147, 31%, 35%);
  }
  .value {
    margin-bottom: 0px;
  }
  .info {
    border-radius: 0.5rem;
      padding: 8px;
      margin-bottom: 12px;
    text-align: left;
  }
  .info-last {
    border-radius: 0.5rem;
      padding: 8px;
    text-align: left;
  }
  .asdfg {
    min-height: 80px;
    font-size: 1.3rem;
    font-weight: 700;
  }

  :global(body) {
    background-color: #7bb997 !important;
  }

  img {
    margin-top: 12px;
    max-width: 100%;
    border-radius: 1rem;
  }

  .welcome-message {
    color: #05386b;
  }

  button {
    background-color: #edf5e1;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    display: grid;
    justify-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
  }

  button:hover {
    background-color: #379683;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    color: #edf5e1;
    transform: translateY(-3px);
  }

  button > span {
    align-self: center;
  }
</style>
