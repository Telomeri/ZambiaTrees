<script>
	import Chart from "svelte-frappe-charts";
	export let data;
	//show the amount planted per person?
	//show the amount planted and checked per month? as a heatmap?
	//show a scatter plot of the coordinates??
	//show the amount of pictures uploaded? Maybe?
	let growthAmount = [0,0,0,0];
	data.forEach((x,i) => growthAmount[x.growth] += 1);
	let growthData = {
		labels : ["Seed","Sapling","Mature","Decline"],
		datasets: [{
			values: growthAmount
		}]
		
	};
  </script>
<div class="chartGrowth">
	<p>Growth state</p>
	<Chart data={growthData} type='percentage' colors={['#7F675B','#94FBAB','#058C42','#464e3c']} height={150} maxSlices = {5}/>
</div>
<style>
	.chartGrowth{
		text-align: center;
		float: center;
		padding-top: 2rem;
	}
	.chartGrowth p{
		font-size: 20px;
	}
</style>