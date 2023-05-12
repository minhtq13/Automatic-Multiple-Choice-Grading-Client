import { Input } from "antd";
import "./Searchbox.scss";
const Searchbox = (props) => {
	return (
		<div className="a-search-wrapper">
			<Input.Group compact>
				<Input.Search
					{...props}
					placeholder="Search here"
					allowClear={true}
					style={{ width: 300 }}
				/>
			</Input.Group>
			{props.isErrorMessage && (
				<span className="a-search-error-message">
					Không có kết quả phù hợp
				</span>
			)}
		</div>
	);
};
export default Searchbox;
