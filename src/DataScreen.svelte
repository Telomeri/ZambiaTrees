<script>
	import Chart from "svelte-frappe-charts";
	import Counter from 'svelte-counter';
import { update_keyed_each } from "svelte/internal";
	export let data;
	//show the amount planted per person?
	//show the amount planted and checked per month? as a heatmap?
	//show a scatter plot of the coordinates??
	//show the amount of pictures uploaded? Maybe?
	let growthAmount = [0,0,0,0];
	let planterAmount = {};
	let updated = [0,0];
	data.forEach((x,i) =>{
		growthAmount[x.growth] += 1
		if (x.planter in planterAmount) {
			planterAmount[x.planter] += 1;
		}
		else {
			planterAmount[x.planter] = 1;
		}
		var diff = new Date(x.updateDate.getTime() - x.plantDate.getTime());
		if ((diff.getUTCFullYear() - 1970) >= 1) {
			updated[1] += 1
		} 
		else {
			updated[0] += 1
		}
	});
	let growthData = {
		labels : ["Seed","Sapling","Mature","Decline"],
		datasets: [{
			values: growthAmount
		}]
	};
	let updateData = {
		labels : ["Updated","Outdated"],
		datasets: [{
			values: updated
		}]
	};
	/*data = {
    yMarkers: [
        {
            label: "Amount planted",
            value: 4,
            options: { labelPos: 'left' } // default: 'right'
			}
		]
	}*/

	let counters = {
		'trees' : data.length,
		'planters' : Object.keys(planterAmount).length
	};
  </script>
  <body>
	<div class = "counterText">
		<Counter values={counters} duration="2000" random="false" minspeed="10" let:counterResult>
			<h1 class="trees">{counterResult.trees} Trees Planted</h1>
			<h1 class="planter">{counterResult.planters} Volunteers Active</h1>
		</Counter>
	</div>
	<div class="pieChart"><Chart data={updateData} type='pie' maxSlices={2} height={300} colors={['#94FBAB','#464e3c']} font-family = {"Lucida Console", "Courier New", 'monospace'}/></div>
	<div class="chartGrowth">
		<p>Growth state</p>
		<Chart data={growthData} type='percentage' barOptions ={{height: 25, depth: 10}} colors={['#7F675B','#94FBAB','#058C42','#464e3c']} height={150} maxSlices = {5}/>
	</div>
</body>
<style>
	/*body {
		background-color: #465a27;
	}*/
	.chartGrowth{
		margin-left: 10%;
		margin-right: 10%;
		text-align: center;
		float: center;
	}
	.pieChart {
		padding-left: 25%;
		padding-right: 25%;
		max-width: 50%;
	} 
	.chartGrowth p{
		font-size: 30px;
	}
	.counterText .trees{
		margin: 0;
		text-align: center;
		padding-top: 3rem;
		float: center;
		font-size: 30px;
		font-family:"Lucida Console", "Courier New", monospace;
	}
	.counterText .planter{
		font-size: 25px;
		float: center;
		text-align: center;
		font-family:"Lucida Console", "Courier New", monospace;
	}
</style>