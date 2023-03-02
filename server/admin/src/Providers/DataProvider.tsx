import type {
  CreateParams,
  DeleteManyParams,
  DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  UpdateManyParams,
  UpdateParams,
} from "react-admin";
import { User } from "../types";
import { adaptaders, fetchJson } from "./utils";

const apiUrl = import.meta.env.VITE_URL;

export const dataProvider = {
  getList: (resource: string, params: GetListParams) => {
    const { q: filter } = params.filter;
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = `filter=${filter ? filter : ""}&from=${
      (page - 1) * perPage
    }&to=${perPage}`;

    const url = `${apiUrl}/${resource}/all?${query}`;

    return fetchJson(url).then(({ headers, json }) => {
      return {
        data: adaptaders.GET(json, resource),
        total: parseInt(headers.get("content-range")!, 10),
      };
    });
  },

  getOne: (resource: string, params: GetOneParams) => {
    const url = `${apiUrl}/${resource}/all`;

    return fetchJson(url).then(({ json }) => {
      const one = adaptaders
        .GET(json, resource)
        .find((e: User) => e.id === params.id
        );

      if (one.attached?.length > 0) {
        one.attached.forEach((item: string, i: number) => {
          one.attached.shift();
          one.attached.push({ url: item });
        });
      }
      return {
        data: one,
      };
    });
  },

  // getMany: (resource: string, params: GetManyParams) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
  //   return fetchJson(url).then(({ json }) => ({ data: json }));
  // },

  // getManyReference: (resource: string, params: GetManyReferenceParams) => {
  //   const { page, perPage } = params.pagination;
  //   const { field, order } = params.sort;
  //   const query = {
  //     sort: JSON.stringify([field, order]),
  //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //     filter: JSON.stringify({
  //       ...params.filter,
  //       [params.target]: params.id,
  //     }),
  //   };
  //   const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;

  //   return fetchJson(url).then(({ headers, json }) => ({
  //     data: json,
  //     total: parseInt(headers.get("content-range")!.split("/").pop()!, 10),
  //   }));
  // },

  update: (resource: string, params: UpdateParams) => {
    const { createdAt, updatedAt, id, ...data } = params.data;

    if (data.attached) {
      data.attached = data.attached.map((item: Record<string,string>) => {
        return item.url;
      });
    }
    const res=adaptaders.UPDATE(resource)
    return fetchJson(`${apiUrl}/${res}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }).then(({ json }) => {
      if (json.data.uid) json.data.id = json.data?.uid;
      return { data: json.data };
    });
  },

  // updateMany: (resource: string, params: UpdateManyParams) => {
  //   const query = {
  //     filter: JSON.stringify({ id: params.ids }),
  //   };
  //   return fetchJson(`${apiUrl}/${resource}?${JSON.stringify(query)}`, {
  //     method: "PUT",
  //     body: JSON.stringify(params.data),
  //   }).then(({ json }) => ({ data: json }));
  // },

  create: (resource: string, params: CreateParams) => {
const res=adaptaders.CREATE(resource, params.data.channel)
    return fetchJson(`${apiUrl}/${res}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },

  delete: (resource: string, params: DeleteParams) => {
    return fetchJson(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  }

//   deleteMany: (resource: string, params: DeleteManyParams) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     };
//     return fetchJson(`${apiUrl}/${resource}?${JSON.stringify(query)}`, {
//       method: "DELETE",
//     }).then(({ json }) => ({ data: json }));
//   },
};


// Generated by https://quicktype.io

// Generated by https://quicktype.io
