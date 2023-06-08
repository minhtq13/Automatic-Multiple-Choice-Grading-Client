import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Upload } from "antd";
import { useState } from "react";
import useAI from "../../hooks/useAI";

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
  const { getModelAI, resultAI } = useAI();
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
        // console.log(info.file);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {
    console.log(values);
    if (urlImg) {
      getModelAI({
        pathImg: urlImg,
        numberAnswer: values.numberAnswer,
      });
    }
  };
  console.log(resultAI);

  return (
    <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
      <Form.Item name="pathImg">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
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
      <Button type="primary" htmlType="submit" style={{ width: "100px" }}>
        Submit
      </Button>
    </Form>
  );
};

export default ExamList;
