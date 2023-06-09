/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import addIcon from "../../../assets/images/add-icon.svg";
import deleteIcon from "../../../assets/images/delete-icon.svg";
import exportIcon from "../../../assets/images/export-icon.svg";
import { appPath } from "../../../config/appPath";
import useNotify from "../../../hooks/useNotify";
import useTeachers from "../../../hooks/useTeachers";
import { setSelectedItem } from "../../../redux/slices/appSlice";
import { deleteTeachersService } from "../../../services/teachersServices";
import "./TeacherList.scss";

const TeacherList = () => {
  const [deleteDisable, setDeleteDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const { allTeachers, getAllTeachers, tableLoading } = useTeachers();
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
    navigate(appPath.teacherEdit);
  };
  useEffect(() => {
    getAllTeachers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const notify = useNotify();
  const navigate = useNavigate();

  const columns = [
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
  const dataFetch = allTeachers.map((obj, index) => ({
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
      console.log(dataFetch.find((item) => item.key === newSelectedRowKeys[0]));
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
    navigate("/teacher-add");
  };
  const handleDelete = () => {
    setLoading(true);
    deleteTeachersService(
      deleteKey,
      null,
      (res) => {
        setLoading(false);
        notify.success("Xoá giảng viên thành công!");
        getAllTeachers();
        setSelectedRowKeys([]);
      },
      (error) => {
        setLoading(false);
        notify.error("Lỗi xoá giảng viên!");
      }
    );
  };
  // const handleExport = () => {
  // 	axios({
  // 		url: "http://localhost:8000/api/v1/teacher/export", // Replace with your API endpoint
  // 		method: "GET",
  // 		responseType: "blob", // Set the response type to 'blob'
  // 	})
  // 		.then((response) => {
  // 			// Create a download link
  // 			const url = window.URL.createObjectURL(new Blob([response.data]));
  // 			const link = document.createElement("a");
  // 			link.href = url;
  // 			link.setAttribute("download", `Teachers-${Date.now()}.xlsx`); // Set the desired file name
  // 			document.body.appendChild(link);
  // 			link.click();
  // 		})
  // 		.catch((error) => {
  // 			notify.error("Error downloading Excel file!");
  // 			console.error("Error downloading Excel file:", error);
  // 		});
  // };

  return (
    <div className="a-teacher-list">
      <div className="header-teacher-list">
        <p>Danh sách giảng viên</p>
        <div className="block-button">
          <Button className="options">
            <img src={exportIcon} alt="Export Icon" />
            Export
          </Button>
          <Button
            className="options"
            disabled={deleteDisable}
            onClick={handleDelete}
            loading={loading}
          >
            <img src={deleteIcon} alt="Delete Icon" />
            Delete
          </Button>
          <Button className="options" onClick={handleClickAddStudent}>
            <img src={addIcon} alt="Add Icon" />
            Add Teacher
          </Button>
        </div>
      </div>
      <div className="teacher-list-wrapper">
        <Table
          className="teacher-list-table"
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
export default TeacherList;
