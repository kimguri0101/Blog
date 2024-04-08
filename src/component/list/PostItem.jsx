import React from "react";
import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

    border-bottom:1px solid #7C71FE;
    padding: 28px 20px;
    color:#7C71FE;
    width: 969px;
    cursor:pointer;
`;

const Title = styled.div`
    font-size:20px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const Date = styled.div`
    font-size:18px;
    margin-bottom: 8px;
    color:#7C71FE;
`;

function PostItem(props) {

    const { post, onClick }= props;
    
    return (
        <Container onClick={onClick}>
            <Title>{post.title}</Title>
            <Date>{post.Date}</Date>
        </Container>
    );
}

export default PostItem;
