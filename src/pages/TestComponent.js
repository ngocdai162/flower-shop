import React from "react";
import styled from "styled-components";
import { ButtonCustom } from "../components/commonModules/ButtonCustom";
import { InputItem } from "../components/commonModules/InputItem";
import { InputSearch } from "../components/commonModules/InputSearch";
import { SelectCustom } from "../components/commonModules/SelectCustom";
const  TestComponentStyled = styled.div`
    margin-left:  25% ;
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center ;
    align-items: center ;
    flex-direction: column ;
`
const dataSelect = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},

]
export const  TestComponent = () => {

    return  (
        <TestComponentStyled>
            <ButtonCustom type = '' text = 'OK'/> 
            <br/>

            <SelectCustom dataSelect = {dataSelect}/>
            <br/>

            <InputSearch/>
            <br/>

            <InputItem placeholder = 'test placeholder' title= 'name' vertical/>
            <br/>

            <InputItem placeholder = 'test placeholder' title= 'Số lượng nhập'/>
            
        </TestComponentStyled>
    )
}