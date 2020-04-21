import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SideBarItems from '../components/SideBarItem';


const sideBarHeaderStyle = {
  height: '120px',
  backgroundColor: '#0097a7',
  display: 'flex',
  alignItems: 'center',
  fontSize: '28px',
  fontWeight: 500,
  paddingLeft: 30,
  color: 'black'
}

export class Navbar extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper cyan darken-2" >
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-medium-and-down">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="waves-effect waves-blue"><a href="index.html">Home</a></li>
              <li className="waves-effect waves-blue">
                <a className="dropdown-trigger" href="#!" data-target="dropdown1" style={{marginRight: '15px'}}>
                <i className="material-icons right">settings</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
  
        <ul id="slide-out" className="sidenav sidenav-fixed cyan lighten-2">
          <a href="#" style={sideBarHeaderStyle}>
            <i className="small material-icons" style={{marginRight: 15}}>person</i>
            Admin
          </a>
          <li className="divider blue-grey" style={{marginTop: 0}}></li>
          <SideBarItems onSubmitNumber={this.props.onSubmitNumber}/>
        </ul>
      </>
    )
  }
}

export default Navbar