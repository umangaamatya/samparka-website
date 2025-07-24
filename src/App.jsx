import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// Import your Layout and Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
// Import other pages as you create them

const muiTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* 1. Create a parent route that renders your Layout component */}
          <Route path="/" element={<Layout />}>
            
            {/* 2. Nest your page routes inside. They will now render inside the Layout */}
            <Route index element={<Home />} /> {/* 'index' is the default page for the parent's path ('/') */}
            <Route path="blog" element={<Blog />} />
            
            {/* Add other nested routes here */}
            {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}

          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
