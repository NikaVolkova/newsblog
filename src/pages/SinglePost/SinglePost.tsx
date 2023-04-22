import React, {useEffect} from "react";
import ContentPage from "../ContentPage/ContentPage";
import {useDispatch, useSelector} from "react-redux";
import {getSinglePost, PostSelectors} from "../../redux/reducers/postSlice";
import {useParams} from "react-router-dom";

const SinglePost=()=>{
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const singlePost = useSelector(PostSelectors.getSinglePost);

    useEffect(() => {
        if (id) {
            dispatch(getSinglePost(id));
        }
    }, []);

    return singlePost ? <ContentPage post={singlePost} /> : null
}
export default SinglePost;