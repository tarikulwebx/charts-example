import { Link } from "react-router-dom";
import {
	AreaChart,
	AreaRechart,
	BarChart,
	BarRechart,
	LineChart,
	LineRechart,
	MixBarRechart,
	PieChart,
	PieRechart,
	RedialBarRechart,
} from "../components";

const Home = () => {
	return (
		<div className="grid grid-cols-12 gap-x-5 gap-y-5">
			<section className="md:col-span-6 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Bar chart</h3>
						<Link
							to="https://react-chartjs-2.js.org/"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Chart Js
						</Link>
					</div>
					<div className="p-5">
						<BarChart />
					</div>
				</div>
			</section>
			<section className="md:col-span-6 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Line chart</h3>
						<Link
							to="https://react-chartjs-2.js.org/"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Chart Js
						</Link>
					</div>
					<div className="p-5">
						<LineChart />
					</div>
				</div>
			</section>
			<section className="md:col-span-4 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Pie chart</h3>
						<Link
							to="https://react-chartjs-2.js.org/"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Chart Js
						</Link>
					</div>
					<div className="p-5">
						<PieChart />
					</div>
				</div>
			</section>
			<section className="md:col-span-8 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Area chart</h3>
						<Link
							to="https://react-chartjs-2.js.org/"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Chart Js
						</Link>
					</div>
					<div className="p-5">
						<AreaChart />
					</div>
				</div>
			</section>
			<section className="md:col-span-6 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Line chart</h3>
						<Link
							to="https://recharts.org/en-US"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Rechart
						</Link>
					</div>
					<div className="p-5">
						<LineRechart />
					</div>
				</div>
			</section>
			<section className="md:col-span-6 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Area chart</h3>
						<Link
							to="https://recharts.org/en-US"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Rechart
						</Link>
					</div>
					<div className="p-5">
						<AreaRechart />
					</div>
				</div>
			</section>
			<section className="md:col-span-8 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Bar chart</h3>
						<Link
							to="https://recharts.org/en-US"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Rechart
						</Link>
					</div>
					<div className="p-5">
						<BarRechart />
					</div>
				</div>
			</section>
			<section className="md:col-span-4 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Pie chart</h3>
						<Link
							to="https://recharts.org/en-US"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Rechart
						</Link>
					</div>
					<div className="p-5">
						<PieRechart />
					</div>
				</div>
			</section>
			<section className="md:col-span-6 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Radial chart</h3>
						<Link
							to="https://recharts.org/en-US"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Rechart
						</Link>
					</div>
					<div className="p-5">
						<RedialBarRechart />
					</div>
				</div>
			</section>
			<section className="md:col-span-6 col-span-12">
				<div className="bg-white shadow-sm rounded-xl">
					<div className="flex items-center justify-between border-b px-5 py-4 border-b-gray-100">
						<h3 className="text-xl font-bold ">Mix-bar chart</h3>
						<Link
							to="https://recharts.org/en-US"
							target="_blank"
							className="text-sm text-gray-400 hover:text-primary"
						>
							Rechart
						</Link>
					</div>
					<div className="p-5">
						<MixBarRechart />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
