import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    border-top:1px solid #7C71FE;
`

function PostList(props){
    const { posts, onClickItem} = props;

    const navigate = useNavigate();

    return(
        <Wrapper>
            {posts.map((post, index)=>{
                return(
                    <PostItem key={post.id} post={post} Date={post.Date} title={post.title} onClick={()=>onClickItem(post)}></PostItem>
                )
            })}
        </Wrapper>
    )
}
// onClick={()=>onClickItem(post)}
export default PostList;