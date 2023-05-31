import React, { useState } from "react";
import axios from "axios";

const ExamList = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      // Gửi request POST đến server để lưu ảnh vào database
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("/api/upload", formData);

      // Xử lý response từ server (nếu cần)

      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload} disabled={!selectedImage}>
        Upload
      </button>
    </div>
  );
};

export default ExamList;
