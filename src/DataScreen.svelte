<script>
	import Chart from "svelte-frappe-charts";
	import Counter from 'svelte-counter';
	import { update_keyed_each } from "svelte/internal";
	export let data;
	//show the amount planted per person?
	//show the amount planted and checked per month? as a heatmap?
	//show a scatter plot of the coordinates??
	//show the amount of pictures uploaded? Maybe?

	// inspiration from https://stackoverflow.com/questions/30464628/javascript-get-all-months-between-two-dates/30465299
	function dateRange(startDate, endDate) {
		let labelsDate = []
		let start = new Date(startDate);
		let end = new Date(endDate);
		while ((start.getUTCFullYear() != end.getUTCFullYear()) || (start.getMonth() != end.getMonth())){
			labelsDate.push(`${start.getMonth()}/${start.getUTCFullYear()}`);
			start = new Date(start.setMonth(start.getMonth()+1));
		}
		return labelsDate;
	}


	let growthAmount = [0,0,0,0];
	let planterAmount = {};
	let updated = [0,0];
	let amountOfPictures = 0;
	let oldestDate = new Date(Date.now());
	let newestDate = new Date();
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
			updated[1] += 1;
		} 
		else {
			updated[0] += 1;
		}
		if (x.plantDate < oldestDate) {
			oldestDate = x.plantDate;
		}
		if (x.plantDate > newestDate) {
			newestDate = x.plantDate;
		}
		amountOfPictures += x.pictures.length;
	});
	let dateLabels = dateRange(oldestDate, newestDate);
	let plantedOnDate = new Array(dateLabels.length).fill(0);
	data.forEach((x,i) =>{
		let date = x.plantDate;
		dateLabels.forEach((d,k) => {
			if (`${date.getMonth()}/${date.getUTCFullYear()}` == d) {
				plantedOnDate[k] += 1;
				return;
			}
		});
	});
	let growthData = {
		labels : ["Seed","Sapling","Mature","Decline"],
		datasets: [{
			values: growthAmount
		}]
	};
	let updateData = {
		labels : ["Up To Date","Outdated"],
		datasets: [{
			values: updated
		}]
	};
	let plantDateData = {
		labels: dateLabels,
		datasets: [{
			values: plantedOnDate
		}]
	}

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
		'planters' : Object.keys(planterAmount).length,
		'pictures': amountOfPictures
	};
  </script>
  <body>
	<div class = "columns">
		<div class="pieChart">
			<h1 class="pieText">Trees that require an update</h1>
			<Chart data={updateData} type='pie' maxSlices={2} height={300} colors={['#94FBAB','#464e3c']} />
		</div>
		<div class = "counterText">
			<Counter values={counters} duration="2000" random="false" minspeed="10" let:counterResult>
				<h1 class="trees">{counterResult.trees} Trees Planted</h1>
				<h1 class="pictures">{counterResult.pictures} Pictures Uploaded</h1>
				<h1 class="planter">{counterResult.planters} Volunteers Active</h1>
			</Counter>
		</div>		
	</div>
	<div class="chartPlanted">
	<h1 class="pieText">Trees planted per month</h1>
	<Chart data={plantDateData} type='line' 
	axisOptions= {{
		xIsSeries: true // default: false
	}}
	lineOptions = {{
		heatline: 1,
          regionFill: 1,
          hideDots: 1,
          hideLine: 0,
	}}
	colors={['#058C42']}
	/>
	</div>
	<div class="chartGrowth">
		<h1>Growth state</h1>
		<Chart data={growthData} type='percentage' barOptions ={{height: 25, depth: 10}} colors={['#7F675B','#94FBAB','#058C42','#464e3c']} height={150} maxSlices = {5}/>
	</div>
	</body>
	<style>

	body {
		background-color: #c9cfc0;
		width: 100%;
		margin: 0px;
		padding: 0px;
		overflow-x: hidden;
	}
	.chartGrowth{
		margin-left: 2%;
		margin-right: 2%;
		text-align: center;
		float: center;
	}
	.columns {
		column-count: 2;
	}
	.chartGrowth h1{
		font-size: 20px;
		font-family:"Lucida Console", "Courier New", monospace;
	}
	.chartPlanted{
		margin-left: 1%;
		margin-right: 1%;
		text-align: center;
		float: center;
	}
	.chartPlanted h1{
		font-size: 20px;
		font-family:"Lucida Console", "Courier New", monospace;
	}
	.columns .pieChart {
		max-width: 100%;
	} 
	.pieChart .pieText{
		text-align: center;
		padding-top: 2rem;
		float: center;
		font-size: 20px;
		font-family:"Lucida Console", "Courier New", monospace;
	}
	.counterText .trees{
		margin: 0;
		text-align: center;
		padding-top: 10rem;
		float: center;
		font-size: 30px;
		font-family:"Lucida Console", "Courier New", monospace;
	}
	.counterText .pictures{
		font-size: 20px;
		float: center;
		text-align: center;
		font-family:"Lucida Console", "Courier New", monospace;
	}
	.counterText .planter{
		font-size: 18px;
		float: center;
		text-align: center;
		font-family:"Lucida Console", "Courier New", monospace;
	}
</style>