import { Link, NavLink } from "react-router-dom";
import { ComboChartIcon } from "../assets/icons";
import { layout } from "../styles";
import { navbarNavItems } from "../data";

const Navbar = () => {
	return (
		<header className="bg-white shadow-inner sticky top-0 mb-5">
			<div className={layout.container}>
				<div className="h-16 flex flex-row items-center gap-8">
					<Link
						to={"/"}
						className="text-2xl font-bold text-primary flex flex-row items-center gap-2"
					>
						<ComboChartIcon className="text-3xl" /> Charts
					</Link>
					<nav className="flex items-center gap-5">
						{navbarNavItems.map((item, index) => (
							<NavLink
								key={index}
								to={item.path}
								className="uppercase text-sm text-gray-500/90 hover:underline hover:underline-offset-4 font-medium hover:text-primary [&.active]:text-primary"
							>
								{item.name}
							</NavLink>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
