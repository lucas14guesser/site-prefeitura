import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import '../Styles/PlanoSaude.css';

const PlanoSaúde = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  const toggleContent = () => {
    setShowContent1(!showContent1);
    setShowContent2(false);
  };

  const toggleContent2 = () => {
    setShowContent2(!showContent2);
    setShowContent1(false);
  };

  return (
    <div className='pl_sau_container'>
      <div className="main_pl_sau">
        <Container>
          <div className="text_pl_sau">
            <Link to='/' className='link_pl_sau'>Home</Link>/
            <Link to='/portal-servidor' className='link_pl_sau'>Portal do Servidor</Link>/
            <Link to='/plano-de-saude' className='link_pl_sau'>Plano de Saúde</Link>

            <h4>Plano de Saúde</h4>

            <h5 className='text-uppercase'>Prestação de Serviços de Assistência Médico-Hospitalar</h5>

            <div className="ident_button_pl_sau">
                <button className="toggle-button" onClick={toggleContent}>
                {showContent1 ? (
                <>
                O que é? <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                O que é? <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent1 && (
                <div>
                        <p>
                            Prestação de serviços de assistência médico-hospitalar aos servidores ativos e inativos da Administração Direta, Autárquica e Fundacional do Município de São José, prevista na
                            <br /><br />
                            <a href="http://www.saojose.sc.gov.br/images/uploads/geral/Lei-Ordinaria-n%C2%A04738_2009-de-18_02_2009.pdf?_gl=1*19npgw9*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NjE0MjguMC4wLjA.&_ga=2.72643027.1518638583.1687451403-1318598864.1684797233">Lei nº 4.738/09</a>
                        </p>

                        <p>
                            Os Serviços do Plano de Assistência à Saúde do Servidor Municipal são desenvolvidos mediante aplicação do programa de assistência ambulatorial e hospitalar, por meio de entidades profissionais ou hospitais credenciados por intermédio de operadora. Atualmente esse serviço é prestado pela Unimed Grande Florianópolis.
                            <br /><br />
                            Conforme o artigo 20º do
                            <br /><br />
                            <a href="http://www.saojose.sc.gov.br/images/uploads/geral/Decreto_4464.2015.pdf?_gl=1*1hguxoz*_ga*MTMxODU5ODg2NC4xNjg0Nzk3MjMz*_ga_Y6Q5YHNV0H*MTY4NzQ1MTQwMy40NC4xLjE2ODc0NjE0MjguMC4wLjA.&_ga=2.236985664.1518638583.1687451403-1318598864.1684797233">Decreto 4464.2015</a>
                        </p>

                        <p>
                            , o plano de assistência à saúde do Servidor será destinado para:
                        </p>
                        <ol>
                            <li>Assistência à saúde, com cobertura médico-hospitalar;</li>
                            <li>Consultas médicas, em número ilimitado, em clínicas básicas e, especializadas;</li>
                            <li>serviços de apoio de diagnóstico, tratamentos e demais procedimentos ambulatoriais;</li>
                            <li>Acupuntura e fisioterapia;</li>
                            <li>Internações hospitalares em centro de terapia intensiva ou similares em clínicas básicas e especializadas;</li>
                            <li>Despesas relativas a honorários médicos, serviços gerais enfermagem e alimentação do paciente durante o período internação;</li>
                            <li>Órteses, próteses e materiais de síntese ligados ao ato cirúrgico;</li>
                            <li>Exames complementares indispensáveis ao controle da evolução e elucidação diagnóstica, fornecimento de medicamentos, anestésicos, gases medicinais, transfusões e sessões de quimioterapia e radioterapia;</li>
                            <li>Toda e qualquer taxa, incluindo materiais utilizados;</li>
                            <li>Atendimento obstétrico acrescido dos procedimentos relativos ao pré-natal e da assistência ao parto;</li>
                            <li>Cobertura assistencial ao recém-nascido, filho natural ou adotivo do usuário titular ou de seu dependente inscrito no plano, durante os 30 (trinta) primeiros dias após o parto;</li>
                            <li>As cirurgias buco-maxilo-facial que necessitem de ambiente hospitalar;</li>
                            <li>Cirurgia plástica reconstrutiva de mama e prótese mamária para o tratamento de mutilação decorrente de utilização de tratamento de câncer;</li>
                            <li>e demais coberturas e procedimentos previstos no Contrato nº 001/2009 do Processo Administrativo n° 6451/2008.</li>
                        </ol>
                    </div>
                    )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent2}>
                {showContent2 ? (
                <>
                Quem Pode Aderir? <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Quem Pode Aderir? <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent2 && (
                <div>
                    <p>
                        São segurados titulares, com inscrição opcional ao Plano de Assistência à Saúde, os servidores da Administração Direta, Autárquica e Fundacional dos Poderes Executivo e Legislativo do Município de São José, pertencentes aos seguintes regimes de contratação:
                    </p>     

                     <ol>
                        <li>os ocupantes de cargo efetivo estatutário e celetistas;</li>
                        <li>os agentes políticos;</li>
                        <li>as pessoas investidas em cargo de provimento em comissão, declarado em lei, de livre nomeação e exoneração;</li>
                        <li>vereadores;</li>
                        <li>inativos e pensionistas.</li>
                     </ol>
                </div>
                )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PlanoSaúde;
