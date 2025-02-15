<<<<<<< HEAD
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
=======

function App() {
  return <></>;
>>>>>>> 48979b422e03693f5529f759fa31c9a935b254a2
}

export default App;
