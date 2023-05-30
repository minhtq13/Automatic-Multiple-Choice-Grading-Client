import { Input, Space } from "antd";
import "./Searchbox.scss";
import { FaSearch } from "react-icons/fa";
const Searchbox = (props) => {
  return (
    <div className="a-search-wrapper">
      <Space.Compact compact="true" className="a-search">
        <Input.Search
          {...props}
          placeholder="Search here"
          allowClear={true}
          style={{ width: 300 }}
        />
        <FaSearch
          style={{
            color: "#8c1515",
            position: "absolute",
            zIndex: 1000,
            top: 12,
            right: 12,
          }}
        />
      </Space.Compact>
      {props.isErrorMessage && (
        <span className="a-search-error-message">Không có kết quả phù hợp</span>
      )}
    </div>
  );
};
export default Searchbox;
