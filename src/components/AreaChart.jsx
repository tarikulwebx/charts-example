import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom",
		},
		title: {
			display: false,
			text: "Chart.js Bar Chart",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
	labels,
	datasets: [
		{
			fill: true,
			label: "Dataset 1",
			data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
			borderColor: "rgba(255, 99, 132, 1)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

const AreaChart = () => {
	return <Line options={options} data={data} />;
};

export default AreaChart;
