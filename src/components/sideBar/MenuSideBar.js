import { Menu } from 'antd'
import React, { useState } from 'react';
import styled from 'styled-components';

const MenuSideBarStyled = styled.div`
    width: 100%;
`
// props:   items +  handleClick
export const  MenuSideBar = (props) => {
  const items = props.items;
  const handleClick = props.handleClick;
  const onClick = (e) => {
        console.log('click ', e);
        handleClick(e.key);
      };

  return (
    <MenuSideBarStyled>
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        onClick={onClick}
        // theme="dark"
      />
    </MenuSideBarStyled>
  )
}
