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
        <Route path="schedule" element={<MeetingSchedule />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
