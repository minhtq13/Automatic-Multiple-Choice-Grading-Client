import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Select, Space, Upload } from "antd";
import { useState } from "react";
import iconCheck from "../..//assets/images/iconCheck.svg";
import exportIcon from "../../assets/images/export-icon.svg";
import iconArrow from "../../assets/images/arrow-under-header.svg";
import iconCheckAct from "../../assets/images/arrow-under.svg";
import useAI from "../../hooks/useAI";
import "./ExamList.scss";
import TableResult from "./TableResult";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const ExamList = () => {
  const [urlImg, setUrlImg] = useState();
  const [numberAnswer, setNumberAnswer] = useState(120);
  const { getModelAI, resultAI, loading } = useAI();
  const props = {
    name: "files",
    listType: "picture",
    action: "http://localhost:8000/api/v1/student-test/uploads?exam-class=exam-class1",
    beforeUpload: (file) => {
      const isPNG =
        file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg";
      if (!isPNG) {
        message.error(`${file.name} is not a image file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        setUrlImg(info.file.name);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {
    setNumberAnswer(values.numberAnswer);
    if (urlImg) {
      getModelAI({
        pathImg: urlImg,
        numberAnswer: values.numberAnswer,
      });
    }
  };
  const [type, setType] = useState("ktdtvt");
  const [secondType, setSecondType] = useState("Chọn mã học phần");
  const [isActive, setIsActive] = useState(0);

  const handleChangeFirstSelect = (value) => {
    setType(value);
    setSecondType("Chọn mã học phần");
  };
  const handleChangeSecondSelect = (value) => {
    setSecondType(value);
  };
  const dataSelectCTDT = [
    {
      title: "CT chuẩn Kỹ thuật Điện tử Viễn thông",
      value: "ktdtvt",
    },
    {
      title: "CT liên kết quốc tế với Đại học Leibniz Hannover, CHLB Đức",
      value: "lkqt",
    },
    {
      title: "CTTN Hệ thống Điện tử thông minh và IoT",
      value: "iot",
    },
    {
      title: "CTTT Kỹ thuật Điện tử Viễn thông (ET-E4)",
      value: "dtvttt",
    },
    {
      title: "CTTT Hệ thống nhúng thông minh và IoT (ET-E9)",
      value: "ttiot",
    },
    {
      title: "CTTT Kỹ thuật Y sinh (ET-E5)",
      value: "ktys",
    },
    {
      title: "CTTT Truyền thông số và Kỹ thuật Đa phương tiện (ET-E16)",
      value: "ttdpt",
    },
  ];
  const dataSelectKTDTVT = [
    {
      title: "Hệ thống Nhúng",
      value: "ET123",
    },
    {
      title: "KTMT",
      value: "ET133",
    },
  ];
  const dataSelectLKQT = [
    {
      title: "Tiếng Anh",
      value: "ET465",
    },
    {
      title: "Điện tử tương tự",
      value: "ET231",
    },
  ];
  const getDataMap = () => {
    switch (type) {
      case "ktdtvt":
        return dataSelectKTDTVT;
      case "lkqt":
        return dataSelectLKQT;
      default:
        return dataSelectKTDTVT;
    }
  };

  return (
    <div className="exam-list-wrapper">
      <div className="header-exam-list">
        <h2>Chấm điểm tự động</h2>
      </div>
      <div className="block-select">
        <div className="name-school">Trường Điện - Điện Tử</div>
        <div className="block-button">
          <Space>
            <div className="detail-button">CTDT: </div>
            <Select
              optionLabelProp="label"
              suffixIcon={<img src={iconArrow} alt="" />}
              className="custom-select-antd"
              defaultValue="ktdtvt"
              onChange={handleChangeFirstSelect}
              style={{ width: 400 }}
            >
              {dataSelectCTDT.map((item, index) => {
                return (
                  <Option value={item.value} label={item.title} key={index}>
                    <div
                      className="d-flex item_DropBar dropdown-option"
                      onMouseEnter={() => {
                        setIsActive(index);
                      }}
                    >
                      <div
                        className="dropdown-option-item text-14"
                        style={isActive === index ? { color: "#8c1515" } : {}}
                      >
                        {item.title}
                      </div>
                      {type === item.value ? (
                        <img src={isActive === index ? iconCheckAct : iconCheck} alt="" />
                      ) : (
                        ""
                      )}
                    </div>
                  </Option>
                );
              })}
            </Select>
          </Space>

          <Space>
            <div className="detail-button">Mã học phần: </div>
            <Select
              value={secondType}
              optionLabelProp="label"
              onChange={handleChangeSecondSelect}
              className="custom-select-antd"
              suffixIcon={<img src={iconArrow} alt="" />}
              style={{ width: 200 }}
            >
              {getDataMap().map((item, index) => {
                return (
                  <Option value={item.value} label={item.title} key={index}>
                    <div
                      className="d-flex item_DropBar dropdown-option"
                      onMouseEnter={() => {
                        setIsActive(index);
                      }}
                    >
                      <div
                        className="dropdown-option-item text-14"
                        style={isActive === index ? { color: "#8c1515 " } : {}}
                      >
                        {item.title}
                      </div>
                      {secondType === item.value ? (
                        <img src={isActive === index ? iconCheckAct : iconCheck} alt="" />
                      ) : (
                        ""
                      )}
                    </div>
                  </Option>
                );
              })}
            </Select>
          </Space>
          <Button className="options">
            <img src={exportIcon} alt="Export Icon" />
            Export
          </Button>
        </div>
      </div>
      <div className="content-exam-list">
        <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
          <div className="upload">
            <Form.Item name="pathImg">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </div>
          <div className="number-answer">
            <Form.Item
              name="numberAnswer"
              label="Number Answer"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: "100px" }}>
            Submit
          </Button>
        </Form>
        <div className="result-ai">
          <TableResult resultAI={resultAI} numberAnswer={numberAnswer} />
        </div>
      </div>
    </div>
  );
};

export default ExamList;
