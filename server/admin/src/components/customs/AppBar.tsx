import { defaultTheme, Layout, AppBar, ToggleThemeButton, AppBarProps, LayoutProps } from "react-admin";
import { createTheme, Box, Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

// interface AppBarProps {
//   open?: boolean 
//   title: string;
// }

const MyAppBar = (props: AppBarProps) => {
  return (
    <AppBar {...props}>
      <Box flex="1">
        <Typography variant="h6" id="react-admin-title"></Typography>
      </Box>
      <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
    </AppBar>
  );
};

export const MyLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={MyAppBar} />
);
