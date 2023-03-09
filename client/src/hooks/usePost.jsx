import { reqResApi } from "../config/axiosConfig";
import { useDispatch } from "react-redux";
import { updateImgUser } from "../redux/actions/loginActions";

export const usePost = () => {
  let getPosts = async (url, token, setList) => {
    let response;
    let data = [];
    try {
      response = await reqResApi.get(url, {
        headers: { "x-token": token },
      });
    } catch (error) {
      console.warn(error);
    }
    if (response.status === 200) {
      data.push(...response.data.data.posts);
      setList(data);
    }
  };
  return {
    getPosts,
  };
};

export const usePostCreate = () => {
  let create = async (url, token, data) => {
    let response;
    try {
      response = await reqResApi.post(url, data, {
        headers: { "x-token": token },
      });
    } catch (error) {
      console.warn(error);
    }
    return response;
  };

  return {
    create,
  };
};
export const useReaction = () => {
  let addReaction = async (url, token, type) => {
    let response;
    try {
      response = await reqResApi.post(url, type, {
        headers: { "x-token": token },
      });
    } catch (error) {
      console.warn(error);
    }
  };

  let removeReaction = async (url, token, type) => {
    let response;
    try {
      response = await reqResApi.put(url, type, {
        headers: { "x-token": token },
      });
    } catch (error) {
      console.warn(error);
    }
  };
  return {
    addReaction,
    removeReaction,
  };
};

export const useComment = () => {
  let addComment = async (url, token, type) => {
    let response;
    try {
      response = await reqResApi.post(url, type, {
        headers: { "x-token": token },
      });
    } catch (error) {
      console.warn(error);
    }
  };
  return {
    addComment,
  };
};

export const useUpdatePic = () => {
  const dispatch = useDispatch();
  let updatePic = async (token, fileUri) => {
    let filename = fileUri.split("/").pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    let formData = new FormData();
    formData.append("pic", { uri: fileUri, name: filename, type });

    try {
      let response = await reqResApi.put(
        "/profile/edit/profile-pic",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            "x-token": token,
          },
        }
      );
      dispatch(updateImgUser(response.data.data.img_avatar));
    } catch (error) {
      console.warn(error);
    }
  };
  return {
    updatePic,
  };
};
