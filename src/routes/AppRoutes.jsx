import { Route } from "react-router-dom";
import { RootLayout } from "../layouts";
import { About, Error, Home, Loader } from "../pages";

const AppRoutes = (
	<Route
		path="/"
		element={<RootLayout />}
		loader={Loader}
		errorElement={<Error />}
	>
		<Route index element={<Home />} />
		<Route path="about" element={<About />} />
	</Route>
);

export default AppRoutes;
