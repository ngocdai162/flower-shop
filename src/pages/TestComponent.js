import { React, useState } from "react";
import styled from "styled-components";
import { AvatarCustom } from "../components/commonModules/AvatarCustom";
import { ButtonCustom } from "../components/commonModules/ButtonCustom";
import { InputItem } from "../components/commonModules/InputItem";
import { InputSearch } from "../components/commonModules/InputSearch";
import { SelectCustom } from "../components/commonModules/SelectCustom";
import { TableCustom } from "../components/commonModules/TableCustom";
import { MenuSideBar } from "../components/sideBar/MenuSideBar";
import { Menu } from 'antd'
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import AdaptModal from "../components/commonModules/ModalApp";
import { ModalApp } from "../components/commonModules/ModalApp";

const TestComponentStyled = styled.div`
    margin-left:  25% ;
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center ;
    align-items: center ;
    flex-direction: column ;
`

// SELECT CUSTOM
const dataSelect = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '5' },

]


// TABLE
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

// MENU SIDEBAR
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />), // key là '1'
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
];
const handleClick = (keyItem) => {
  console.log(keyItem);
}



export const TestComponent = () => {

  //MODAL
  const [isOpen, setIsOpen] = useState(false)
  const close = () => {
    setIsOpen(false);
  }
  const open = () => {
    setIsOpen(true)
  }

  return (
    <TestComponentStyled>
      <ButtonCustom type='' text='OK' />
      <br />

      <SelectCustom dataSelect={dataSelect} />
      <br />

      <InputSearch />
      <br />

      <InputItem placeholder='test placeholder' title='name' vertical />
      <br />

      <InputItem placeholder='test placeholder' title='Số lượng nhập' />
      <br />

      <AvatarCustom src="https://joeschmoe.io/api/v1/random" />
      <br />

      <TableCustom dataTable={dataSource} columnsTable={columns} pageSize={1} />
      <br />

      <MenuSideBar items={items} handleClick={handleClick} />
      <br />

      <button onClick={open}>Open modal</button>
      <ModalApp title="title" isOpen={isOpen} close={close} />
    </TestComponentStyled>
  )
}