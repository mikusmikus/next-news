import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Toolbar from "../components/toolbar";

// here can use global providers/ state etc
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Toolbar />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
