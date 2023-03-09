import { reqResApi } from "../config/axiosConfig";

export const usePostJobs = () => {
  let getPosts = async (url, token, setList) => {
    let response;
    let data = [];
    try {
      response = await reqResApi.get(url, {
        headers: { "x-token": `${token}` },
      });
    } catch (error) {
      console.warn(error);
    }
    if (response.status == 200) {
      data.push(...response.data.data);
      setList(data);
    }
  };
  return {
    getPosts,
  };
};
