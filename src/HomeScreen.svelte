<script>
  import { Col, Container, Row, Icon } from 'sveltestrap';
	import { useNavigate } from "svelte-navigator";

	const navigate = useNavigate();

  const navOptions = [
    {
      name: 'Map', 
      slug: '/map',
      iconName: 'map'
    },
    {
      name: 'Observations',
      slug: '/observations',
      iconName: 'eyeglasses'
    },
    {
      name: 'History',
      slug: '/history',
      iconName: 'hourglass'
    },
    {
      name: 'Data',
      slug: '/data',
      iconName: 'bar-chart-line'
    }
  ]
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
</svelte:head>


<Container>
  <Row xs-12>
    <span class="welcome-message my-5">
<h1>     welcome to tree app yes</h1>

    </span>
  </Row>
  <Row cols={{xs: 1, sm: 2, lg: 4}}>
    {#each navOptions as opt}
      <div class="my-2 asdfg mt-lg-5"> 
        <button role="link" on:click="{() => navigate(opt.slug)}">
          <Icon class="mx-2" name={opt.iconName} />
          <span>
            {opt.name}
          </span>
        </button>
      </div>
    {/each}
  </Row>
</Container>

<style>
  .asdfg {
    min-height: 80px;
    font-size: 1.3rem;
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
