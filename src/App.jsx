import Layout from "./components/layout/Layout";
import { CryptoContextProvider } from "./context/cryptoContext";

export default function App() {
	return (
		<CryptoContextProvider>
			<Layout />
		</CryptoContextProvider>
	);
}
