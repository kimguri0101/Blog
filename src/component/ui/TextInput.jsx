import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    height: ${props => props.height};
    font-size:  ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    background-color: #141020;
    color: white;
    overflow: hidden;

    &::placeholder {
        color: rgb(255,255,255,0.4);
        font-size:  ${props => props.fontSize}px;
        height: ${props => props.height};
        font-weight: regular;
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

    }
`;

function TextInput(props){
    const { fontWeight,fontSize,height, value, onChange, placeholder } =props;

    return (
        <StyledTextArea fontWeight={fontWeight} fontSize={fontSize} placeholder={placeholder} height={height || 40} value={value} onChange={onChange} ></StyledTextArea>
    );
}

export default TextInput;