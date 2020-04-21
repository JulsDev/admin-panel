import React from 'react';


export default function ContactsInfoCard({companyInfo}) {
  const contacts = companyInfo.legalEntity;
  const managerInfo = companyInfo.generalManager;
  const founders = companyInfo.founders;

  const cardStyle = {
    minHeight: '247px'
  }

  return (
    <>
        <div className="row">
          <div className="col s1 m5">
            <div className="card" style={cardStyle}>
              <div className="card-content black-text">
                <div className="card-title" style={{marginBottom: '15px', fontSize: '20px', fontWeight: 600}}>
                  <p>Генеральный директор:</p>
                  <p>{managerInfo.name}</p>
                </div>
                <p><span style={{fontWeight: 700}}>Телефон:</span>  {managerInfo.phone}</p>
                <p style={{marginBottom: '10px'}}><span style={{fontWeight: 700}}>Email:</span> {managerInfo.email}</p>
                <p><span style={{fontWeight: 700}}>Учредители:</span></p>
                  {founders.map((item, index) => {
                    return (
                      <p key={index}>{item}</p>
                    ) 
                  })}
              </div>
            </div>
          </div>
          <div className="col s1 m5">
            <div className="card" style={cardStyle}>
              <div className="card-content black-text">
                <div className="card-title" style={{marginBottom: '15px', fontSize: '20px', fontWeight: 600}}>
                  Контакты компании:
                </div>
                <p><span style={{fontWeight: 700}}>Телефон:</span>{contacts.phone}</p>
                <p style={{marginBottom: '10px'}}><span style={{fontWeight: 700}}>Email:</span> {contacts.email}</p>
                <p><span style={{fontWeight: 700}}>Адрес:</span>{contacts.address}</p>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
