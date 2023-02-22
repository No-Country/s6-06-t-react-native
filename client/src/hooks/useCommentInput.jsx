import { useEffect, useState } from "react";

export const useCommentInput = ()=> {
    const [Focus, setFocus] = useState(false);
    useEffect(() => {
    }, [Focus]);
    return{
        Focus,
        setFocus
    }
}