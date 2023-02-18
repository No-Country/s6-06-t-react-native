import { fetchUtils } from "react-admin";

export const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
    new Headers({
      Accept: "application/json",
    })) as Headers;

  const token = localStorage.getItem("token")!;

  customHeaders.set("x-token", token);
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
};