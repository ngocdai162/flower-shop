import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import {style} from "../../constants/style";

const InputStyled = styled.div`
  height: 100% !important;
  input {
    height: 100% !important;
  }
  &.input-custom {
    height: ${style.heightModule} !important;
  }
`
export const InputCustom = (props) => {
  return (
    <InputStyled className='input-custom'>
      <Input placeholder={props.placeholder} />
    </InputStyled>
  )
}
