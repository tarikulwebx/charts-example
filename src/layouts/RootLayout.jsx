import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { layout } from "../styles";

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<main className="mb-10">
				<div className={layout.container}>
					<Outlet />
				</div>
			</main>
		</>
	);
};

export default RootLayout;
