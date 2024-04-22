import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
// import data from "../../data.json";
import { useNavigate } from "react-router-dom";

import { LuSun } from "react-icons/lu";
import { LuBrush } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
import { LuCalendarCheck } from "react-icons/lu";
// import data from "../../data.json";//사용 안할거임
import {db} from "../../firebase.js" //설정 가져오기

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-item: center;
    gap:120px;
    width: 1208px;
    overflow:hidden;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const MainWord = styled.div`
    font-size:120px;
    font-weight:900;
    margin:0;
    line-height: 0.8;
    color: #7C71FE;

    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 70px;
`
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap:38px;
`
const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size:24px;
    font-weight:bold;
    gap:12px;
    cursor:pointer;
    
`
const Icon = styled.div`
    width:36px;
    height:36px;
    border:1px solid white;
    border-radius:50%;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    ${List}:hover & {
        color: #ffffff;
        background-color: #7C71FE;
        border: 1px solid #7C71FE;
    }
`
const Category = styled.div`
    ${List}:hover & {
        color: #7C71FE;
    }
`
const MainFunction = styled.div`
    display: flex;
    flex-direction: column;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom:20px;
`

const Styles = {
    FirstIcon: {
        backgroundColor: "#7C71FE",
        border: "none",
    },
    FirstText: {
        color:"#7C71FE"
    }
};


function MainPage(props){

    const [data, setData] = useState([])

    useEffect(function(){
        let tempData = []
        db.collection('post').get().then(function(qs){
            qs.forEach(function(doc){
                tempData.push(doc.data())
            })
            setData(tempData);
        })
    }, [])

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Menu>
                <List>
                    <Icon style={Styles.FirstIcon}><LuSun /></Icon>
                    <Category style={Styles.FirstText}>Daily</Category>
                </List>
                <List>
                    <Icon><LuBrush /></Icon>
                    <Category>Study</Category>
                </List>
                <List>
                    <Icon><FiBook /></Icon>
                    <Category>Book</Category>
                </List>
                <List>
                    <Icon><LuCalendarCheck /></Icon>
                    <Category>Plan</Category>
                </List>
            </Menu>
            <Container>
                <MainWord><div>HAVE A GOOD</div><div>DAY ALWAYS</div></MainWord>
                <MainFunction>
                    <ButtonWrapper>
                        <Button title="글쓰기" onClick={()=>{navigate ('/write')}}></Button>
                    </ButtonWrapper>
                    <PostList posts={data} onClickItem={(p)=>{navigate ('/post/'+p.id)}}></PostList>
                </MainFunction>
            </Container>
        </Wrapper>
    )
}

export default MainPage;