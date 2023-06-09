/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table } from "antd";
import React from "react";

const TableResult = ({ resultAI, numberAnswer }) => {
  const columnsAnswer = [];
  for (var i = 0; i < numberAnswer; i++) {
    columnsAnswer.push({
      title: `Câu ${i + 1}`,
      dataIndex: `answer${i + 1}`,
      key: `${i + 1}`,
      width: 100,
    });
  }
  const columnsInfo = [
    {
      title: "Số báo danh",
      width: 150,
      dataIndex: "sbd",
      key: "sbd",
      fixed: "left",
    },
    {
      title: "Mã đề thi",
      width: 100,
      dataIndex: "mdt",
      key: "mdt",
      fixed: "left",
    },
  ];
  const columnsMark = [
    {
      title: "Điểm",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>10</a>,
    },
  ];
  const columns1 = [...columnsInfo, ...columnsAnswer];
  const columns = [...columns1, ...columnsMark];

  const data = [];
  const item = {
    key: i,
    sbd: resultAI?.sbd,
    mdt: resultAI?.mdt,
  };
  for (let j = 0; j <= numberAnswer; j++) {
    item[`answer${j + 1}`] = resultAI ? resultAI?.listAnswer[j]?.answer : `Answer${j}`;
  }
  data.push(item);

  return (
    <div className="table-result-component">
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />
    </div>
  );
};

export default TableResult;
