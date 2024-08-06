"use client";
import React, { useState } from "react";
import {
  Input,
  InputNumber,
  Select,
  Row,
  Col,
  Flex,
  Table,
  Button,
} from "antd";
import { CategoryDataType } from "@/app/AdminInterface";
import type { ColumnsType } from "antd/es/table";

const TemplateMenu1 = ({
  ojtCategory,
  setCategoryHandler,
  changeCategoryHandler,
  data,
  insertData,
  updateData,
  removeData,
}: {
  ojtCategory: CategoryDataType;
  setCategoryHandler: (data: CategoryDataType) => void;
  changeCategoryHandler: (name: string, value: string | number | null) => void;
  data: CategoryDataType[];
  insertData: (data: CategoryDataType) => void;
  updateData: (data: CategoryDataType) => void;
  removeData: (key: number) => void;
}) => {
  const [isCreate, setIsCreate] = useState<boolean>(true);
  const options = [
    { key: 1, value: 1, label: "계획" },
    {
      key: 2,
      value: 2,
      label: "중간",
    },
    {
      key: 3,
      value: 3,
      label: "실시",
    },
  ];
  const columns: ColumnsType<CategoryDataType> = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "카테고리",
      dataIndex: "category",
      render: (_, record) => {
        return options.find((item) => item.value === record.category)!.label;
      },
    },
    {
      title: "전체",
      dataIndex: "all",
    },
    {
      title: "bim",
      dataIndex: "bim",
    },
    {
      title: "이름",
      dataIndex: "name",
    },
    {
      title: "",
      render: (value, record) => {
        return (
          <Button
            onClick={() => {
              setCategoryHandler(record);
              setIsCreate(false);
            }}
          >
            수정
          </Button>
        );
      },
    },
    {
      title: "",
      render: (value, record) => {
        return <Button onClick={() => removeData(record.key)}>제거</Button>;
      },
    },
  ];
  return (
    <div>
      TemplateMenu1
      <Row>
        <Col>
          <Table dataSource={data} columns={columns} />
        </Col>
      </Row>
      <Row style={{ margin: "12px", padding: "12px", gap: "6px" }}>
        <Col span={2}>입력</Col>
        <Col span={8}>
          <Flex style={{ gap: "12px" }} align={"center"}>
            <Select
              value={ojtCategory.category}
              options={options}
              onSelect={(value) => changeCategoryHandler("category", value)}
              style={{ width: 300 }}
            />
            <InputNumber
              value={ojtCategory.all}
              onChange={(value) => changeCategoryHandler("all", value)}
              style={{ width: 150 }}
            />
            <InputNumber
              value={ojtCategory.bim}
              onChange={(value) => changeCategoryHandler("bim", value)}
              style={{ width: 150 }}
            />
            <Input
              value={ojtCategory.name}
              onChange={(e) => changeCategoryHandler("name", e.target.value)}
            />
          </Flex>
        </Col>
        <Col span={4}>
          <Button
            onClick={() => {
              setCategoryHandler({
                key: data.length ? data.length + 1 : 0,
                category: null,
                all: 0,
                bim: 0,
                name: "",
              });
            }}
          >
            취소
          </Button>
          <Button
            onClick={() => {
              if (isCreate) {
                insertData({ ...ojtCategory, key: data.length + 1 });
                setCategoryHandler({
                  key: data.length ? data.length + 1 : 0,
                  category: null,
                  all: 0,
                  bim: 0,
                  name: "",
                });
              } else {
                updateData(ojtCategory);
                setCategoryHandler({
                  key: data.length ? data.length + 1 : 0,
                  category: null,
                  all: 0,
                  bim: 0,
                  name: "",
                });
                setIsCreate(true);
              }
            }}
          >
            {isCreate ? "추가" : "수정"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TemplateMenu1;
