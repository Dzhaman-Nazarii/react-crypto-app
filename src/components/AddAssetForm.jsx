import { Select, Space, Typography, Flex, Divider } from "antd";
import { useState } from "react";
import { useCrypto } from "../context/cryptoContext";

export default function AddAssetForm() {
	const { crypto } = useCrypto();
	const [coin, setCoin] = useState(null);

	if (!coin) {
		return (
			<Select
				style={{ width: "100%" }}
				onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
				placeholder="Select coin"
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
		);
	}

	return (
		<form>
			<Flex align="center">
				<img
					src={coin.icon}
					alt={coin.name}
					style={{ width: "40px", marginRight: 10 }}
				/>
				<Typography.Title
					level={2}
					style={{ margin: 0 }}>
					{coin.name}
				</Typography.Title>
			</Flex>
			<Divider/>
		</form>
	);
}
