import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Experience from "./pages/Experience.tsx";
import Projects from "./pages/Projects.tsx";
import "./index.css";
import Blogs from "./pages/Blogs.tsx";
import Blog from "./pages/Blog.tsx";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme.tsx";

function App() {
  console.log("App rendered");
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/blog/1-name"
            element={<Blog title={"1-name"} src={""} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
