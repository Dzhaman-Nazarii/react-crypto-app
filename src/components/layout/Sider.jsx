import { Layout as LayoutANTD, Card, Statistic, List, Typography, Tag } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { capitalize } from "../../utils";
import { useCrypto } from "../../context/cryptoContext";

const siderStyle = {
	padding: "1rem",
};

export default function Sider() {

	const {assets} = useCrypto();

	return (
		<LayoutANTD.Sider
			width="25%"
			style={siderStyle}>
			{assets.map((asset) => (
				<Card
					key={asset.id}
					style={{ marginBottom: "1rem" }}>
					<Statistic
						title={capitalize(asset.id)}
						value={asset.totalAmount}
						precision={2}
						valueStyle={{
							color: asset.grow ? "#3f8600" : "#cf1322",
						}}
						prefix={
							asset.grow ? (
								<ArrowUpOutlined />
							) : (
								<ArrowDownOutlined />
							)
						}
						suffix="$"
					/>
					<List
						size="small"
						dataSource={[
							{
								title: "Total ptofit",
								value: asset.totalProfit,
								withTag: true,
							},
							{
								title: "Asset amount",
								value: asset.amount,
								isPlain: true,
							}
						]}
						renderItem={(item) => (
							<List.Item>
								<span>{item.title}</span>
								<span>
									{item.withTag && <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>}
									{item.isPlain && <span>{item.value}</span>}
									{!item.isPlain && (
										<Typography.Text
											type={
												asset.grow
													? "success"
													: "danger"
											}>
											{item.value.toFixed(2)}$
										</Typography.Text>
									)}
								</span>
							</List.Item>
						)}
					/>
				</Card>
			))}
		</LayoutANTD.Sider>
	);
}
