import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const modalWindowStyle = {
  maxWidth: '600px',
  maxHeight: '320px',
};

export class ModalsWindow extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems, {});
    });
  }

  render() {
    return (
      <>
        {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
        <div
          id='modal1'
          className={this.props.show ? 'modal open modal-fixed-footer' : 'modal modal-fixed-footer'}
          style={modalWindowStyle}
        >
          <div className='modal-content' style={{ padding: '40px' }}>
            <h4>Ошибка! </h4>
            <p>
              Не нашлось ни одной организации с указанным номером. <br /> Пожалуйста, проверьте
              корректность введенных данных!
            </p>
          </div>
          <div className='modal-footer' style={{ paddingRight: '20px' }}>
            <a href='#!' className='modal-close waves-effect waves-green btn-flat'>
              Ok
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ModalsWindow;
