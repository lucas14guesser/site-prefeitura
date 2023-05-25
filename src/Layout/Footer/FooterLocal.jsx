import React from 'react';
import '../../Styles/FooterLocal.css';

const FooterLocal = () => {
  return (
    <div className="footer_local_main">
        <img src='./img/logo-topo.png' className='footer_logo' />
        <div className='footer_local'>
            <p>
                Av. Acioni Souza Filho, 403 Centro – São José/SC – CEP 88.103-790 <br />
                Atendimento ao Cidadão das 13h às 19h | (48) 3381-0000               
            </p>
            
        </div>
    </div>
  );
}

export default FooterLocal;
