import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import СompanyInfoBlock from './components/СompanyInfoBlock';

const workSectionStyle = {
  paddingLeft: '25%',
  paddingTop: '2%',
}

 
function App() {
  const [submitCompanyId, setSubmitCompanyId] = useState('');
  function onSubmitNumber(companyId) {
    setSubmitCompanyId(companyId);
  }

  return (
    <>
      <div>
        <Navbar onSubmitNumber={onSubmitNumber}/>
      </div>
      <div className="main-section">
        <div className="work-section" style={workSectionStyle}>
          <СompanyInfoBlock companyId={submitCompanyId}/>
        </div>
      </div>
    </>
  );
}

export default App;
