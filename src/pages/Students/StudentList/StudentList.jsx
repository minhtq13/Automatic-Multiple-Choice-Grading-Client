/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./StudentList.scss";
import { Button, Space, Table, Tag } from "antd";
import useStudents from "../../../hooks/useStudents";
import exportIcon from "../../../assets/images/export-icon.svg";
import deleteIcon from "../../../assets/images/delete-icon.svg";
import addIcon from "../../../assets/images/add-icon.svg";
import deletePopUpIcon from "../../../assets/images/delete-popup-icon.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useNotify from "../../../hooks/useNotify";
import { appPath } from "../../../config/appPath";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../../redux/slices/appSlice";

import { deleteStudentsService } from "../../../services/studentsService";
import ModalPopup from "../../../components/ModalPopup/ModalPopup";

const StudentList = () => {
  const [deleteDisable, setDeleteDisable] = useState(true);
  const { allStudents, getAllStudents, tableLoading } = useStudents();
  const [deleteKey, setDeleteKey] = useState(null);
  const dispatch = useDispatch();
  const onRow = (record) => {
    return {
      onClick: () => {
        dispatch(setSelectedItem(record));
      },
    };
  };
  const handleEdit = () => {
    navigate(appPath.studentEdit);
  };
  useEffect(() => {
    getAllStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const notify = useNotify();
  const navigate = useNavigate();

  const columns = [
    {
      title: "MSSV",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      render: (_, { gender }) => (
        <>
          {gender.map((gender) => {
            let color = "geekblue";
            if (gender === "MALE") {
              color = "green";
            } else if (gender === "FEMALE") color = "geekblue";
            else color = "red";
            return (
              <Tag color={color} key={gender}>
                {gender ? gender?.toUpperCase() : "UNKNOWN"}
              </Tag>
            );
          })}
        </>
      ),
      filters: [
        {
          text: "Male",
          value: "MALE",
        },
        {
          text: "Female",
          value: "FEMALE",
        },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
      filterSearch: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" style={{ cursor: "pointer" }}>
          <Button danger onClick={handleEdit}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];
  const dataFetch = allStudents.map((obj, index) => ({
    key: (index + 1).toString(),
    fullName: obj.fullName,
    username: obj.username,
    email: obj.email,
    phoneNumber: obj.phoneNumber,
    birthday: obj.birthday,
    gender: [obj.gender],
    code: obj.code,
    id: obj.id,
  }));
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    if (newSelectedRowKeys.length === 1) {
      setDeleteKey(dataFetch.find((item) => item.key === newSelectedRowKeys[0]).id);
      setDeleteDisable(false);
      // console.log(dataFetch.find((item) => item.key === newSelectedRowKeys[0]));
    } else {
      setDeleteDisable(true);
    }
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL],
  };
  const handleClickAddStudent = () => {
    navigate("/student-add");
  };
  const handleDelete = () => {
    deleteStudentsService(
      deleteKey,
      null,
      (res) => {
        notify.success("Xoá sinh viên thành công!");
        getAllStudents();
      },
      (error) => {
        notify.error("Lỗi xoá sinh viên!");
      }
    );
  };
  const handleExport = () => {
    axios({
      url: "http://localhost:8000/api/v1/student/export", // Replace with your API endpoint
      method: "GET",
      responseType: "blob", // Set the response type to 'blob'
    })
      .then((response) => {
        // Create a download link
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Students-${Date.now()}.xlsx`); // Set the desired file name
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        notify.error("Error downloading Excel file!");
        console.error("Error downloading Excel file:", error);
      });
  };

  return (
    <div className="a-student-list">
      <div className="header-student-list">
        <p>Danh sách sinh viên</p>
        <div className="block-button">
          <Button className="options" onClick={handleExport}>
            <img src={exportIcon} alt="Export Icon" />
            Export
          </Button>
          <ModalPopup
            buttonOpenModal={
              <Button className="options" disabled={deleteDisable}>
                <img src={deleteIcon} alt="Delete Icon" />
                Delete
              </Button>
            }
            title="Delete Student"
            message={"Are you sure to remove this student and all of its related data? "}
            confirmMessage={"This action cannot be undone"}
            icon={deletePopUpIcon}
            ok={"Ok"}
            onAccept={handleDelete}
          />
          <Button className="options" onClick={handleClickAddStudent}>
            <img src={addIcon} alt="Add Icon" />
            Add Student
          </Button>
        </div>
      </div>
      <div className="student-list-wrapper">
        <Table
          className="student-list-table"
          columns={columns}
          dataSource={dataFetch}
          rowSelection={rowSelection}
          pagination={{
            pageSize: 8,
          }}
          onRow={onRow}
          loading={tableLoading}
        />
      </div>
    </div>
  );
};
export default StudentList;
