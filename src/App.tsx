import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import theme from "./core/layouts/themes/theme";
import { router } from "./router";
import Provider from "./store/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <div className="App">
          <CssBaseline />
          <RouterProvider router={router} />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
