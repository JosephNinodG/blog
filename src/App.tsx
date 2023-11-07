import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import WorldForge from './pages/WorldForge';
import './App.css';



const App = () => {
  return (
     <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/worldforge" element={<WorldForge />} />
        </Routes>
     </>
  );
 };

// const App: React.FC = () => (
//   <div className="App">
//     <NavBar />
//     <Home />
//   </div>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/blog" element={<Blog />} />
    //     {/* <Route path="/about" element={<About />} />
    //     <Route path="/worldforge" element={<WorldForge />} /> */}
    //   </Routes>
    // </Router>
//);

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog" element={<Blog />} />
//         {/* <Route path="/about" element={<About />} />
//         <Route path="/worldforge" element={<WorldForge />} /> */}
//       </Routes>
//     </Router>

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Hello World Edit <code>src/App.tsx</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

export default App;
