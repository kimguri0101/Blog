import React from "react";
import styled from "styled-components";
// import CommentItem from './CommentItem';
// import NumberInfo from './NumberInfo';
// import Profile from './Profile';

const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:12px;
    gap:12px;
`;

const IdText = styled.p`
    font-size:18px;
    font-size: 16px;
    margin:0;
    line-height:24px;
    font-weight:bold;
`;

const Image = styled.div`
    width: 40px;
    height: 40px;
    overflow:hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#ffffff;
`

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:10px;
`
const ContentText = styled.div`
    box-sizing: border-box;
    padding-left: 14px;
    font-size: 18px;
    margin-left: 18px;
    line-height:24px;
    border-left: 1px solid #ffffff;
    font-weight:100;
`;


const Styles = {
    image: {
        width: "60px",
        height: "auto",
    },
}



function CommentList(props) {

    const { comments } = props; // props에서 comments를 추출

    return (
        <div>
            {comments.map(function (a) {
                return (
                    <CommentContainer key={a.id}> 
                        <Profile>
                            <Image><img src={process.env.PUBLIC_URL + "/" + a.image} style={Styles.image} alt=""/></Image>
                            <IdText>{a.id}</IdText>
                        </Profile>
                        <ContentText>{a.content} </ContentText>
                    </CommentContainer>
                );
            })}
        </div>
    );
}
export default CommentList;