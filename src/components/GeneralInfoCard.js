import React from 'react';


export default function GeneralInfoCard({legalEntity}) {
  const {shortName, fullName, description, numberOfEmployees, site} = legalEntity;

  return (
    <>
        <div className="row">
          <div className="col s12 m10">
            <div className="card">
              <div className="card-content black-text">
                <span className="card-title" style={{marginBottom: '5px', fontSize: '24px', fontWeight: 600}}>{shortName}</span>
                <p style={{marginBottom: '15px', fontSize: '14px'}}>{fullName}</p>
                <p>Сфера деятельности: {description}</p>
                <p>Число сотрудников: {numberOfEmployees}</p>
              </div>
              <div className="card-action">
                <a href={site} rel="noopener noreferrer" target='_blank' style={{color: '#0097a7'}}>Посмотреть сайт</a>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
