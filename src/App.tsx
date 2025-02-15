import ALLmeeting from './Pages/ALLmeeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/styles/index.css"
import MeetingSchedule from './Pages/MeetingSchedule';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/ALLmeeting" element={<ALLmeeting />} />
        <Route path="/m_schedule" element={<MeetingSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
