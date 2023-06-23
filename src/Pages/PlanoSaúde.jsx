import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import '../Styles/PlanoSaude.css';

const PlanoSaúde = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [showContent6, setShowContent6] = useState(false);
  const [showContent7, setShowContent7] = useState(false);
  const [showContent8, setShowContent8] = useState(false);
  const [showContent9, setShowContent9] = useState(false);
  const [showContent10, setShowContent10] = useState(false);
  const [showContent11, setShowContent11] = useState(false);
  const [showContent12, setShowContent12] = useState(false);
  const [showContent13, setShowContent13] = useState(false);
  const [showContent14, setShowContent14] = useState(false);
  const [showContent15, setShowContent15] = useState(false);

  const toggleContent = () => {
    setShowContent1(!showContent1);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent2 = () => {
    setShowContent2(!showContent2);
    setShowContent1(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };
  
  const toggleContent3 = () => {
    setShowContent3(!showContent3);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent4 = () => {
    setShowContent4(!showContent4);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent5 = () => {
    setShowContent5(!showContent5);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent6 = () => {
    setShowContent6(!showContent6);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent7 = () => {
    setShowContent7(!showContent7);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent8 = () => {
    setShowContent8(!showContent8);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent9 = () => {
    setShowContent9(!showContent9);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent10 = () => {
    setShowContent10(!showContent10);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent11 = () => {
    setShowContent11(!showContent11);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent12 = () => {
    setShowContent12(!showContent12);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent13(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent13 = () => {
    setShowContent13(!showContent13);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent14(false);
    setShowContent15(false);
  };

  const toggleContent14 = () => {
    setShowContent14(!showContent14);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent15(false);
  };

  const toggleContent15 = () => {
    setShowContent15(!showContent15);
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
    setShowContent4(false);
    setShowContent5(false);
    setShowContent6(false);
    setShowContent7(false);
    setShowContent8(false);
    setShowContent9(false);
    setShowContent10(false);
    setShowContent11(false);
    setShowContent12(false);
    setShowContent13(false);
    setShowContent14(false);
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
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent3}>
                {showContent3 ? (
                <>
                Quem é Considerado(a) Dependente? <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Quem é Considerado(a) Dependente? <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent3 && (
                <div>
                    <p>
                      São considerados dependentes do(a) segurado(a) titular:
                    </p>     

                     <ol>
                        <li>cônjuge ou companheiro(a);</li>
                        <li>filho não emancipado menor de 21 (vinte e um) anos;</li>
                        <li>filho inválido;</li>
                        <li>filho menor de 24 (vinte e quatro anos), desde que demonstre estar regularmente matriculado e frequentando curso de nível superior, através de comprovante original. Ao completar 24 (vinte e quatro anos) o(a) dependente filho(a) perde o benefício.;</li>
                     </ol>

                     <p>
                        O enteado e o menor tutelado equiparam-se aos filhos, em idênticas condições, desde que não possuam recursos próprios e comprovem formalmente a sua dependência econômica do segurado titular.
                        <br /><br />
                        Também é assegurada a inscrição de filhos adotivos menores de 12 (doze) anos, nas mesmas condições de cobertura do adotante, inclusive com o aproveitamento dos períodos de carência já cumpridos, exceto para doenças preexistentes, desde que inscrito até 30 dias após a formalização da adoção e apresentado o respectivo termo.
                     </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent4}>
                {showContent4 ? (
                <>
                Entrega de comprovante de matrícula e/ou atestado de frequência – dependentes com 21 a 24 anos <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Entrega de comprovante de matrícula e/ou atestado de frequência – dependentes com 21 a 24 anos <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent4 && (
                <div>
                    <p>
                      Conforme artigo 8º do Decreto 4464/2015, são considerados dependentes do(a) segurado(a) titular filho(a) menor de 24 (vinte e quatro) anos, desde que demonstre estar regularmente matriculado e frequentando curso de nível superior, através de comprovante original.
                      <br /><br />
                      Os comprovantes de Matrícula e/ou Atestado de Frequência em Curso de Nível Superior dos dependentes do Plano Municipal de Assistência à Saúde dos Servidores Municipais/Unimed, com idade completa de 21 (vinte e um anos) e menores de 24 (vinte e quatro anos), deverão ser enviadas ao e-mail unimed@pmsj.sc.gov.br, ou entregue na Secretaria de Administração – Setor de Administração do Plano de Saúde, localizado na sede da Prefeitura Municipal de São José, sito à Avenida Acioni Souza Filho, 403 – 3º andar – Praia Comprida.
                      <br /><br />
                      IMPORTANTE: A apresentação do comprovante de Matrícula e/ou Atestado de Frequência em Curso de Nível Superior deverá ser SEMESTRALMENTE. Sendo que o comprovante de matrícula e/ou frequência do 1º semestre deverá ser apresentado até 10 de março e o 2º semestre até 10 de agosto, SOB PENA DE EXCLUSÃO, SEM AVISO PRÉVIO, DO(S) DEPENDENTE(S) NO 1º DIA DO MÊS SUBSEQUENTE.
                      <br /><br />
                      Caso seja necessária, a comunicação de exclusão de dependente (s) com idade entre 21 e 24 anos, nos casos de falta de comprovante de matrícula e/ou frequência, SERÁ VIA MENSAGEM ELETRÔNICA, cabendo ao titular do Plano de Saúde, o dever de manter os seus dados cadastrais atualizados.
                    </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent5}>
                {showContent5 ? (
                <>
                Período para inclusões <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Período para inclusões <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent5 && (
                <div>
                  <p>
                    As inclusões são realizadas do dia 01 ao dia 10 de cada mês, exceto em casos de aproveitamento de carência.
                    <br /><br />
                    INCLUSÃO DE TITULARES E DEPENDENTES
                    <br /><br />
                    Encaminhar solicitação via e-mail para: <a href="mailto:unimed@pmsj.sc.gov.br">unimed@pmsj.sc.gov.br</a> com o assunto: “INCLUSÃO PLANO DE SAÚDE – UNIMED”. Anexar todos os documentos necessários para adesão ao plano de saúde.
                    <br /><br />
                    Observação: Os documentos deverão ser preenchidos, assinados e enviados em arquivo digital, de preferência escaneado.
                  </p>
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
