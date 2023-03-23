import React,{useState} from 'react'
import postToShowContext from './postToShowContext';

const PostToShowContextProvider = (props) => {
     const [posts, setPosts] = useState("All post");

    const setStatus = (data) => {
        setPosts(data)
    }

    const initialData = {
        status:posts,
        setStatus
    }

    return(
        <postToShowContext.Provider value={initialData}>{props.children}</postToShowContext.Provider>
    )
}

export default PostToShowContextProvider