// import React, { useState } from "react";
// import axios from "axios";

// const ExamList = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     setSelectedImage(event.target.files[0]);
//     if (event.target.files[0]) {
//       const formData = new FormData();
//       formData.append("files", event.target.files[0]);
//       axios
//         .post("http://localhost:8000/api/v1/student-test/uploads?exam-class=exam-class1", formData)
//         .then((response) => {
//           console.log(response.data); // Xử lý phản hồi từ backend (nếu cần)
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   const handleSubmit = async () => {};

//   return (
//     <div>
//       <h2>Image Upload</h2>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={handleSubmit} disabled={!selectedImage}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default ExamList;
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, message, Upload } from "antd";
import useAI from "../../hooks/useAI";
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
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const ExamList = () => {
  const { getModelAI, resultAI } = useAI();
  const onFinish = (values) => {
    console.log(values);
    console.log(resultAI);
    getModelAI();
  };

  return (
    <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
      <Form.Item name="image" wrapperCol={{}}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: "100px" }}>
        "Submit"
      </Button>
    </Form>
  );
};

export default ExamList;
