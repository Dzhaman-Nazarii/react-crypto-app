import { Layout as LayoutANTD, Spin } from "antd";
import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";
import { useCrypto } from "../../context/cryptoContext";

export default function Layout() {

	const {loading} = useCrypto();
	if (loading) {
		return <Spin fullscreen />;
	}

	return (
		<LayoutANTD>
			<Header />
			<LayoutANTD>
				<Sider />
				<Content />
			</LayoutANTD>
		</LayoutANTD>
	);
}
