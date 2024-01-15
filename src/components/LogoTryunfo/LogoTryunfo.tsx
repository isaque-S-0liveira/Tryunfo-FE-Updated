import './LogoTryunfo.css';
import logo from '../../assets/logo_tryunfo.png';

function LogoTryunfo() {
  return (
    <div id="logoTryunfo" className="container">
      {/* <div className="d-flex justify-content-center "> */}
      <img src={ logo } className="rounded mx-auto d-block" alt="logo" />
      {/* </div> */}
    </div>
  );
}

export default LogoTryunfo;
