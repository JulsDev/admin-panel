import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from '../components/SearchBar';

const sideBarItemStyle = {
  height: '80px',
  paddingTop: '10px',
  display: 'block',
  fontWeight: 700,
};

export class SideBarItems extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems, {});
    });
  }

  render() {
    return (
      <>
        <ul className='collapsible'>
          <li style={sideBarItemStyle}>
            <SearchBar onSubmitNumber={this.props.onSubmitNumber} />
          </li>
          <li className='divider blue-grey'></li>
          <li>
            <a className='collapsible-header waves-effect waves-blue' style={sideBarItemStyle}>
              <i className='material-icons'>note</i>NOTES{' '}
              <i className='material-icons right' style={{ marginRight: 0 }}>
                arrow_drop_down
              </i>
            </a>
            <div className='collapsible-body cyan lighten-3'>
              <ul>
                <li>
                  <a className='waves-effect waves-blue' href='#'>
                    <i className='material-icons'>fullscreen</i>All notes
                  </a>
                </li>
                <li>
                  <a className='waves-effect waves-blue' href='#'>
                    <i className='material-icons'>swap_horiz</i>Favorites
                  </a>
                </li>
                <li>
                  <div className='divider'></div>
                </li>
              </ul>
            </div>
          </li>
          <li className='divider blue-grey' style={{ marginTop: -1 }}></li>
          <li>
            <a className='collapsible-header waves-effect waves-blue' style={sideBarItemStyle}>
              <i className='material-icons'>event_note</i>CALENDAR{' '}
              <i className='material-icons right' style={{ marginRight: 0 }}>
                arrow_drop_down
              </i>
            </a>
            <div className='collapsible-body cyan lighten-3'>
              <ul>
                <li>
                  <a className='waves-effect waves-blue' href='#'>
                    <i className='material-icons'>fullscreen</i>Calendar
                  </a>
                </li>
                <li>
                  <a className='waves-effect waves-blue' href='#'>
                    <i className='material-icons'>swap_horiz</i>Planner
                  </a>
                </li>
                <li>
                  <div className='divider'></div>
                </li>
              </ul>
            </div>
          </li>
          <li className='divider blue-grey' style={{ marginTop: -1 }}></li>
          <li>
            <a className='collapsible-header waves-effect waves-blue' style={sideBarItemStyle}>
              <i className='material-icons'>lock</i>ACCOUNT{' '}
              <i className='material-icons right' style={{ marginRight: 0 }}>
                arrow_drop_down
              </i>
            </a>
            <div className='collapsible-body cyan lighten-3'>
              <ul>
                <li>
                  <a className='waves-effect waves-blue' href='#'>
                    <i className='material-icons'>person</i>Profile
                  </a>
                </li>
                <li>
                  <a className='waves-effect waves-blue' href='#'>
                    <i className='material-icons'>settings</i>Settings
                  </a>
                </li>
                <li>
                  <div className='divider'></div>
                </li>
              </ul>
            </div>
          </li>
          <li className='divider blue-grey' style={{ marginTop: -1 }}></li>
        </ul>
      </>
    );
  }
}

export default SideBarItems;
