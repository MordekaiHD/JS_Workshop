import '../../Style/StyleRegistracion/style.css';
import RegistracionCentrale from './RegistracionCentrale';
import RegistracionTop from './RegistracionTop';

function Registracion() {
  return (
    <main className="main">
      <RegistracionTop/>
      <RegistracionCentrale/>
    </main>
  );
}

export default Registracion;