import { Link } from "react-router-dom";
import { layout } from "../styles";

const Footer = () => {
	return (
		<footer className="bg-white py-6">
			<div className={layout.container}>
				<p className="text-sm text-center text-gray-500 font-light">
					Copyright &copy;2023-{new Date().getFullYear()} All Rights
					Reserved by{" "}
					<Link
						to="https://www.linkedin.com/in/tarikulwebx/"
						target="_blank"
						className="hover:underline hover:text-primary hover:underline-offset-2"
					>
						Tarikul
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
