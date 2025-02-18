<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ALLmeeting from './Pages/ALLmeeting';
import MeetingSchedule from './Pages/MeetingSchedule';
import './assets/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meetingnotes" element={<ALLmeeting />} />
        <Route path="/schedule" element={<MeetingSchedule />} />
      </Routes>
      
    </BrowserRouter>
  );
=======
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
>>>>>>> 6b8a961cf6058894772c0bc90a6632d84a845834
}

export default App;
