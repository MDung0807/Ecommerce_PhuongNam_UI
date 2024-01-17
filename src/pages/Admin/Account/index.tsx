import { Input, Layout, Pagination, Table } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import { useEffect } from "react";
import { GetAll } from "../../../services/CustomerServices";

const Account = () => {
  // const changePage = (pageIndex, pageSize) => {
  //     console.log('changePage', pageIndex, pageSize);
  // }

  useEffect(() => {
    const fetchData  = async() => {
      const response = await GetAll() as any;
      if (!response.isError && response.isError !== undefined ){
        console.log(response.data)
        return response.data
      }
    }
    fetchData();
  }, [])


  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  
  const handleChange = (value: any) => {
    console.log(value);
  }

  return (
    <div style={{margin: 0, padding: 0}}>
      <Title level={3}>Danh sách tài khoản người dùng</Title>
      <Input.Search
      placeholder="input search text"
      allowClear
        style={{ width: 500 }}
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    onChange={e => handleChange(e.target.value)}
    />
      <Table style={{minHeight: 500, maxHeight: 2000}}/>
      <Pagination
        total={85}
        //   showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={10}
        defaultCurrent={1}
      />
    </div>
  );
};

export default Account;
