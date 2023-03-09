import { Admin, DataProvider, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Dashboard } from "./components/sections/Home";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import GroupsIcon from "@mui/icons-material/Groups";
import { MyLayout } from "./components/customs/AppBar";
import { authProvider, dataProvider } from "./Providers";
import { Channel, JobOffer, User, Post } from "./components/sections";

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    layout={MyLayout}
    authProvider={authProvider}
    dataProvider={dataProvider as DataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="channel"
      list={Channel.ListC}
      edit={Channel.EditC}
      create={Channel.CreateC}
      recordRepresentation={(record) => `${record.name} edit properties`}
      icon={GroupsIcon}
    />

    <Resource
      name="job-offer"
      list={JobOffer.ListJ}
      edit={JobOffer.EditJ}
      create={JobOffer.CreateJ}
      recordRepresentation={(record) => `${record.title} edit properties`}
      icon={WorkIcon}
    />

    <Resource 
      name="user" 
      list={User.ListU} 
      edit={User.EditU} 
      icon={UserIcon} 
    />

    <Resource
      name="post"
      list={Post.ListP}
      edit={Post.EditP}
      create={Post.CreateP}
      icon={PostIcon}
    />
  </Admin>
);

export default App;
