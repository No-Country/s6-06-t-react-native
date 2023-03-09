import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  ImageField,
  ArrayInput,
  SimpleFormIterator,
  DateField,
  ReferenceInput,
} from "react-admin";


const filter = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="author" label="User" reference="user" />,
];

export const ListU = () => {
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
          <TextField source="fullName" label="Name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <BooleanField source="isOnline" label="Online" />
          <BooleanField source="emailisvalidated" label="Email vaefified" />
          <BooleanField source="selected" label="Selected" />
          <DateField source="createdAt" label="Date registered" />
          <TextField source="id" />
        </Datagrid>
      )}
    </List>
  );
};

export const EditU = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />

      <ImageField source="img_avatar" />
      <TextInput source="fullName" />
      <BooleanInput label="Active User" source="active" />
      <BooleanInput source="admin" label="Admin User" />
      <BooleanInput source="selected" label="Selected User" />
      <BooleanInput source="emailisvalidated" label="Email Verified" />
      <TextInput source="position" disabled />
      <TextInput source="availability" disabled />
      <TextInput source="phone" disabled />
      <ArrayInput source="channels">
        <SimpleFormIterator inline>
          
          <ReferenceInput source="channels.name" reference="channel"/>
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="postulations">
        <SimpleFormIterator inline>
          <TextInput source="body" helperText={false} disabled />
          
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="favorites">
        <SimpleFormIterator inline>
          <TextInput source="body" helperText={false} disabled />
          
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
