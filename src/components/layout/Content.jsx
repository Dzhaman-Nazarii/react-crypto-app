import { Layout as LayoutANTD } from "antd";

const contentStyle = {
	textAlign: 'center',
	minHeight: 'calc(100vh - 60px)',
	color: '#fff',
	backgroundColor: '#001529',
	padding: '1rem',
  };

export default function Content() {
	return (
		<LayoutANTD.Content style={contentStyle}>Content</LayoutANTD.Content>
	)
}