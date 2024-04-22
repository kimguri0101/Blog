import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import {db} from "../../firebase.js" //설정 가져오기

const Wrapper = styled.div`
    width: 988px;
    display: flex;
    flex-direction: column;
`;

const TitleInputWrapper = styled.div`
    font-size: 54px;
    font-weight:bold;
    color:#7C71FE;
    padding:28px 20px;
    border-bottom:1px solid #7C71FE;

`;
const InputWrapper = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: row;
    gap:100px;
    align-items: center;
    padding:32px 20px;
    border-bottom:1px solid #7C71FE;
`;
const ContentWrapper = styled.div`
    font-size: 18px;
    padding:32px 20px;
    height:380px;
`;

const Label = styled.div`
    font-size: 20px;
    font-weight:bold;
    color:#7C71FE;
    width:100px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap:16px;
    justify-content: right;
`;
// const Styles = {
//     TitleStyle: {
//         &::placeholder {
//             fontSize: "54px",
//             fontWeight:"bold",
//         }
//     }
// };


function PostWritePage(props){

    const [Title, setTitle] = useState('');
    const [Date, setDate] = useState('');
    const [Keyword, setKeyword] = useState('');
    const [Content, setContent] = useState('');
    
    const navigate = useNavigate();

    return(
        <Wrapper>
                <TitleInputWrapper>
                    <TextInput fontWeight={"bold"} fontSize={54} height="66px" placeholder="제목없음" value={Title} onChange={function(e) {setTitle(e.target.value)}}></TextInput>
                </TitleInputWrapper>    

                <InputWrapper>
                    <Label>작성일시</Label>
                    <TextInput  fontSize={18} height="22px" placeholder="2024년 4월 12일" value={Date} onChange={function(e) {setDate(e.target.value)}}></TextInput>
                </InputWrapper>
                <InputWrapper>
                    <Label>키워드</Label>
                    <TextInput  fontSize={18}  height="22px" placeholder="#여행 #요리" value={Keyword} onChange={function(e) {setKeyword(e.target.value)}}></TextInput>
                </InputWrapper>

                <ContentWrapper>
                    <TextInput  fontSize={18}  height="380px" placeholder="새로운 글을 작성해보세요." value={Content} onChange={function(e) {setContent(e.target.value)}}></TextInput>
                </ContentWrapper>

                <ButtonWrapper>
                    {/* <Button title="업로드" onClick={()=> {alert('업로드 하시겠습니까?')}}></Button> */}
                    {/* <Button title="업로드" onClick={function(){
                        let timestamp = 
                    }} */}
                    <Button title="취소" onClick={()=> {navigate('/')}}></Button>
                </ButtonWrapper>
                
        </Wrapper>
    )
}

export default PostWritePage;