import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import CommentList from "../list/CommentList";
// import KeyWordList from "../list/KeyWordList";
// import CommentItem from '../list/CommentItem';
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

// import data from "../../data.json";//사용 안할거임
import {db} from "../../firebase.js" //설정 가져오기

const Wrapper = styled.div`
    width: 988px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Container = styled.div`
`;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    padding: 0 10px 28px 10px;
    border-bottom: 1px solid #7C71FE;
`;

const TitleText = styled.p`
    font-size: 54px;
    font-weight:bold;
    margin:0;
`;

const InfoText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-contents:left;
    gap:100px;
    font-size: 18px;
    height:60px;
`;

const Date = styled.div`
   
`;

const KeywordListWrapper  = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:10px;
`;

const ContentText = styled.p`
    width:100%;
    font-size: 18px;
    font-weight: 100;
`; 

const UserImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    overflow:hidden;
    border-radius: 50%;
  
`;

const WriteComment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 22px 0 12px 0;
    gap:10px;
    margin-bottom:12px;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom:20px;
`

const Styles = {
    UserImage: {
        width: "50px",
        height: "50px",
    }
};


function PostViewPage(props){

    const [post, setPost] = useState({
        id:0,
        title:'',
        content:'',
        comments:[],
    })
    
    useEffect(function(){
        db.collection('post').doc(postId).get().then(function(doc){
            setPost(doc.data())
        })
    }, [])

    const navigate = useNavigate();
    const postId = useParams().id

    // const post = data.find((item)=>{
    //     return item.id === postId; 
    // })

    const [comment, setComment] = useState('');

    return (
        <Wrapper>
            <Container>
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    
                    <InfoText>
                        <Date>{post.Date}</Date>
                        <KeywordListWrapper>
                            {post.Keword && post.KeyWord.map((keyword) => (
                                <span key={keyword}>{keyword}</span>
                            ))}
                        </KeywordListWrapper >
                    </InfoText>

                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <WriteComment>
                    <UserImage><img src={process.env.PUBLIC_URL + "/" + post.UserImage} style={Styles.UserImage} alt=""/></UserImage>
                    <TextInput fontWeight={"300"} fontSize={18} placeholder="댓글 추가..." height="22px" value={comment} onChange={function(e) {setComment(e.target.value)}}></TextInput>
                </WriteComment>
                
                <CommentList comments={post.comments}></CommentList>
            
            </Container>
        </Wrapper>
    )
}

export default PostViewPage;