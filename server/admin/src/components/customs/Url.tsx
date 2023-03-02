import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export const MyUrlField = ({ source }: any) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <Link sx={{ textDecoration: "none" }} href={record[source]}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  );
};
