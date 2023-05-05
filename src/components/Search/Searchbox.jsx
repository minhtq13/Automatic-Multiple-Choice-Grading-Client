import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./Searchbox.scss";
const Searchbox = (props) => {
	return (
		<div className="a-search-wrapper">
			<Input
				{...props}
				placeholder="Search..."
				allowClear={true}
				style={{ width: 300 }}
				prefix={<SearchOutlined />}
			/>
			{props.isErrorMessage && (
				<span className="a-search-error-message">
					Không có kết quả phù hợp
				</span>
			)}
		</div>
	);
};
export default Searchbox;
