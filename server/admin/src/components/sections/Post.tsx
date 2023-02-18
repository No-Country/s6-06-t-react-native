import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  Create,
  BooleanInput,
  ImageField,
  SelectInput,
} from "react-admin";
import { useRecordContext } from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="author" label="User" reference="user" />,
];

export const ListP = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      {/* <ReferenceField source="userId" reference="users" /> */}

      <TextField source="title" />
      <TextField source="author.fullName" />
      <TextField source="channel.name" />
      <TextField source="id" />
    </Datagrid>
  </List>
);

export const EditP = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <BooleanInput label="Active Post" source="active" />
      <BooleanInput label="Pinned Post" source="important" />
      <BooleanInput label="Users can comment" source="permissions" />
      <TextInput source="author.fullName" label="Author" />
      <TextInput source="title" />
      <TextInput source="description" multiline rows={5} />
      <ImageField source="attached" src="url" title="Attached Files" />
    </SimpleForm>
  </Edit>
);

export const CreateP = () => (
  <Create>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <BooleanInput label="Active Post" source="active" />
      <BooleanInput label="Pinned Post" source="important" />
      <BooleanInput label="Users can comment" source="permissions" />
      <TextInput source="title" />
      <TextInput source="description" multiline rows={5} />
      <SelectInput
        source="channel"
        choices={[
          { id: "63e3dc46a5dd297fac1ca2a2", name: "General" },
          { id: "63e7f448a2801292083251d5", name: "Requerimientos" },
        ]}
      />
      {/* //CONFIGURAR DATA PROVIDER */}
      {/* <ImageInput source="attached" label="Attached files (Images)"  >
        <ImageField source="src"/>
        </ImageInput> */}
    </SimpleForm>
  </Create>
);
