import React from 'react';
import GeneralInfoCard from '../components/GeneralInfoCard';
import ContactsInfoCard from '../components/ContactsInfoCard';
import RevenueChartsCard from '../components/RevenueChartsCard';
import ProfitChartsCard from '../components/ProfitChartsCard';

export default function CompanyCard(props) {
  const curCompany = props.curCompany;
  
  return (
    <>
      <GeneralInfoCard legalEntity={curCompany.legalEntity}/>
      <ContactsInfoCard companyInfo={curCompany} />
      <RevenueChartsCard data={curCompany.statistics}/>
      <ProfitChartsCard data={curCompany.statistics}/>
      <div className="row" style={{marginBottom: 0}}>
        <div className="col s12 m5">
          <div className="card">
            <div className="card-content black-text">
              <span className="card-title" style={{marginBottom: '5px', fontSize: '24px', fontWeight: 600}}>
                Участие в гос закупках
              </span>
              <table>
                <tr>
                  <td><span style={{fontWeight: 700}}>{curCompany.stateProcurement.participant}:</span></td>
                  <td>{curCompany.stateProcurement.participantCount}</td>
                </tr>
                <tr>
                  <td><span style={{fontWeight: 700}}>{curCompany.stateProcurement.winner}:</span></td>
                  <td>{curCompany.stateProcurement.winnertCount}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}