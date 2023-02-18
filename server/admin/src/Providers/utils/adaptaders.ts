import { User } from "../../types";

export const GET= (json: any, res: string) => {
  switch (res) {
    case "channel":
      return json.data.channels;
    case "job-offer":
      return json.data;
    case "user":
      const user = json.data.map((it: User) => {
        it.id = it.uid;
        return it;
      });
      return user
    case "post":
      return json.data;

    default:
      return;
  }
};


export  const UPDATE = (res: string) => {
  switch (res) {
    case "channel":
      return res;
    case "job-offer":
      return `${res}/edit`;
    case "user":
      return res;
    case "post":
      return `${res}/update`;

    default:
      return;
  }
};

export const CREATE = (res: string, id?: string) => {
  switch (res) {
    case "post":
      return `${res}/new/${id}`;

    default:
      return `${res}/new`;
  }
};