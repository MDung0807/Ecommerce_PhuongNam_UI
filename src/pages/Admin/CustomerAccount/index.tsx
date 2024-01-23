import { Input, Layout, Pagination, Table } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { GetAll } from "../../../services/CustomerServices";
import Paging from "../../../interfaces/Paging";

const CustomerAccount = () => {

  const [pageTotal, setPageTotal] = useState(Number);
  const changePage = (pageIndex : number, pageSize : number) => {
    CustomerPaging.PageIndex = pageIndex;
    CustomerPaging.PageSize = pageSize; 
    console.log(CustomerPaging.PageIndex)
    fetchData();
  }

  const columns = [
    {
      title: "Tên tài khoản",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Ngày tạo",
      dataIndex: "dateCreate",
      key: "dateCreate",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "dateUpdate",
      key: "dateUpdate",
    },
  ];

  const CustomerPaging: Paging = {
    PageIndex: 1,
    PageSize: 10,
  };

  const [dataSources, setDataSources] = useState([{}]);

  const fetchData = async () => {
    const response = (await GetAll(CustomerPaging)) as any;
    if (!response.isError && response.isError !== undefined) {
      // Clear the dataSources array and then push new data
      setDataSources(response.data.items);
      setPageTotal(response.data.pageTotal)
    }
  };
  useEffect(() => {
    
    fetchData();
  }, []);

  useEffect(() => {
    console.log(dataSources);
  }, [dataSources]);


  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  const handleChange = (value: any) => {
    console.log(value);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Title level={3}>Danh sách tài khoản người dùng</Title>
      <Input.Search
        placeholder="input search text"
        allowClear
        style={{ width: 500 }}
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Table
        style={{ minHeight: 500, maxHeight: 2000 }}
        columns={columns}
        dataSource={dataSources}
        pagination={false}
      />
      <Pagination
        total={pageTotal}
        onChange={(page, pageSize) => {
          changePage(page, pageSize);
        }}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={10}
        defaultCurrent={1}
      />
    </div>
  );
};

export default CustomerAccount;
