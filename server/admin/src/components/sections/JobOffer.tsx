import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  BooleanField,
  BooleanInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  ChipField,
} from "react-admin";


const filter = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="author" label="User" reference="user" />,
];

export const ListJ = () => {
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
          <TextField source="title" />
          <BooleanField source="active" />
          <ChipField source="countCandidates" />
          <ChipField source="countComments" />
          <TextField source="id" />
        </Datagrid>
      )}
    </List>
  );
};

export const EditJ = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />

      <TextInput source="title" />
      <TextInput source="description" />
      <BooleanInput label="Active offer" source="active" />
      <ArrayInput source="candidates">
        <SimpleFormIterator inline>
          <TextInput source="fullName" helperText={false} disabled />
          <TextInput source="_id" helperText={false} disabled />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="comments">
        <SimpleFormIterator inline>
          <TextInput source="body" helperText={false} disabled />
          <TextInput source="_id" helperText={false} disabled />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const CreateJ = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <SelectInput
        source="type"
        choices={[
          { id: "front", name: "Front-End" },
          { id: "back", name: "Banc-End" },
          { id: "ui", name: "UI/UX" },
        ]}
      />
    </SimpleForm>
  </Create>
);
