import ALLmeeting from './Pages/ALLmeeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/styles/index.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route  path="/" element={<ALLmeeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
