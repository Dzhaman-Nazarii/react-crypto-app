import { useEffect, useState } from "react";
import {
	Layout as LayoutANTD,
	Select,
	Space,
	Button,
	Modal,
	Drawer,
} from "antd";
import { useCrypto } from "../../context/cryptoContext";
import CoinInfoModal from "../CoinInfoModal";
import AddAssetForm from "../AddAssetForm";

const headerStyle = {
	width: "100%",
	textAlign: "center",
	height: 60,
	paffing: "1rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};

export default function Header() {
	const [select, setSelect] = useState(false);
	const [modal, setModal] = useState(false);
	const [coin, setCoin] = useState(null);
	const [drawer, setDrawer] = useState(true);
	const { crypto } = useCrypto();

	useEffect(() => {
		const keyPress = (evt) => {
			if (evt.key === "/") {
				setSelect((prev) => !prev);
			}
		};
		document.addEventListener("keypress", keyPress);
		return () => document.removeEventListener("keypress", keyPress);
	}, []);

	const handleSelect = (value) => {
		setModal(true);
		setCoin(crypto.find((c) => c.id === value));
	};

	return (
		<LayoutANTD.Header style={headerStyle}>
			<Select
				style={{
					width: "250px",
				}}
				open={select}
				onSelect={handleSelect}
				onClick={() => setSelect((prev) => !prev)}
				value="press / to open"
				options={crypto.map((coin) => ({
					label: coin.name,
					value: coin.id,
					icon: coin.icon,
				}))}
				optionRender={(option) => (
					<Space>
						<img
							src={option.data.icon}
							alt={option.data.label}
							width="20px"
						/>
						{option.data.label}
					</Space>
				)}
			/>
			<Button
				type="primary"
				onClick={() => setDrawer(true)}>
				Add Asset
			</Button>
			<Modal
				open={modal}
				onCancel={() => setModal(false)}
				footer={null}>
				<CoinInfoModal coin={coin} />
			</Modal>
			<Drawer
				width="600px"
				title="Add Asset"
				onClose={() => setDrawer(false)}
				open={drawer}
				destroyOnClose>
				<AddAssetForm/>
			</Drawer>
		</LayoutANTD.Header>
	);
}
