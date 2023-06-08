import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
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
			<Footer />
		</>
	);
};

export default RootLayout;
