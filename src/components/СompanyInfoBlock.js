import React from 'react';
import CompanyCard from './CompanyCard';
import data from '../data/data.json';

// check tax number and return object
function getCompany(requestedValue) {
  if(requestedValue === ''){
    return null;
  }
  
  const companyInfo = data.organizations;
  for(let i=0; i < companyInfo.length; ++i) {
    if(companyInfo[i].taxId === requestedValue) { 
      return companyInfo[i];
    }
  }
  return 1;
}

function AttentionInfoBlock() {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card-panel green lighten-1">
          <div class="white-text" style={{display: 'flex', alignItems: 'center'}}>
            <i className="small material-icons" style={{marginRight: 15}}>error</i>
            <div style={{fontWeight: 700}}>Увы!</div>
          </div>
          <p class="white-text">
            Не нашлось ни одной организации с указанным номером. <br /> Пожалуйста, проверьте корректность введенных данных!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function СompanyСard(props) {
  const {companyId} = props;
  const curCompany = getCompany(companyId);

  let renderInfo = '';
  if(curCompany === 1) {
    renderInfo = <AttentionInfoBlock />
  } else if (curCompany === null) {
    renderInfo = '';
  } else {
    renderInfo = <CompanyCard curCompany={curCompany} />
  }
  
  return (
    <>
      {renderInfo}
    </>
    
  )
}

