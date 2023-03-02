import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  BooleanField,
  BooleanInput,
  SelectInput,
  ChipField,
} from "react-admin";


const filter = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="author" label="User" reference="user" />,
];

export const ListC = () => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={filter}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="name" />
          <BooleanField source="active" />
          <ChipField source="typechannel" />
          <TextField source="id" />
        </Datagrid>
      )}
    </List>
  );
};

export const EditC = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />

      <TextInput source="name" />
      <BooleanInput label="Active channel" source="active" />
      <SelectInput
        source="typechannel"
        choices={[
          { id: "public", name: "Public" },
          { id: "private", name: "Private" },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export const CreateC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput
        source="typechannel"
        choices={[
          { id: "public", name: "Public" },
          { id: "private", name: "Private" },
        ]}
      />
    </SimpleForm>
  </Create>
);
