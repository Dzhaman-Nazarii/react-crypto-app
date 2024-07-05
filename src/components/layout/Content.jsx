import { Layout as LayoutANTD, Typography } from "antd";
import { useCrypto } from "../../context/cryptoContext";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
	textAlign: "center",
	minHeight: "calc(100vh - 60px)",
	color: "#fff",
	backgroundColor: "#001529",
	padding: "1rem",
};

export default function Content() {
	const { assets, crypto } = useCrypto();

	const cryptoPriceMap = crypto.reduce((acc, coin)=>{
		acc[coin.id] = coin.price;
		return acc
	},{})

	const portfolio = assets
		.map((asset) => asset.amount * cryptoPriceMap[asset.id])
		.reduce((acc, value) => (acc += value), 0)
		.toFixed(2);

	return (
		<LayoutANTD.Content style={contentStyle}>
			<Typography.Title
				level={3}
				style={{ textAlign: "left", color: "#fff" }}>
				Portfolio: {portfolio}$
			</Typography.Title>
			<PortfolioChart/>
			<AssetsTable/>
		</LayoutANTD.Content>
	);
}
