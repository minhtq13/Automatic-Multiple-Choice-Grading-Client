import React, { useState } from "react";
import axios from "axios";

const ExamList = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      axios
        .post("/api/v1/upload", formData)
        .then((response) => {
          console.log(response.data); // Xử lý phản hồi từ backend (nếu cần)
        })
        .catch((error) => {
          console.error(error);
        });
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
