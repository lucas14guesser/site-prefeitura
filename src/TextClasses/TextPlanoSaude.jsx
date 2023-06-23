import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import '../Styles/PlanoSaude.css';

const TextPlanoSaude = () => {

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
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent6}>
                {showContent6 ? (
                <>
                Documentação necessária para adesão ao plano de saúde <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Documentação necessária para adesão ao plano de saúde <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent6 && (
                <div>
                  <ul>
                    <li>
                      <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Termo-de-Adesao-e-Formulario-de-Dados-Cadastrais.doc">Termo de Adesão e Formulário de Dados Cadastrais para INCLUSÃO de beneficiário no Plano de Saúde </a>
                    </li>
                  </ul>

                  <p>
                    INCLUSÃO DE TITULAR
                  </p>

                  <ul>
                    <li>Termo de Adesão e Formulário de Dados Cadastrais para inclusão de beneficiário no Plano de Saúde;</li>
                    <li>CPF e documento oficial de identificação com foto;</li>
                    <li>Comprovante de endereço, emitido a menos de 90 dias, em nome do titular; ou dos pais; ou do cônjuge com certidão de casamento;</li>
                    <li>Último contracheque com margem consignável 3% per capita (exceto funcionários novos, 30 dias admissão);</li>
                    <li>Termo de Posse ou Decreto de Nomeação ou Carteira de Trabalho;</li>
                    <li>Formulário de movimentação assinado pelo beneficiário titular. Esse formulário será encaminhado ao solicitante do plano, via e-mail, após toda documentação acima está completa.</li>
                  </ul>

                  <p>
                    INCLUSÃO DE DEPENDENTES
                  </p>

                  <ul>
                    <li>Termo de Adesão e Formulário de Dados Cadastrais para inclusão de beneficiário no Plano de Saúde;</li>
                    <li>Formulário de movimentação assinado pelo beneficiário titula. Esse formulário será encaminhado ao solicitante do plano, via e-mail, após toda documentação acima está completa.</li>
                  </ul>

                  <p>
                    1. CÔNJUGE
                  </p>

                  <ul>
                    <li>CPF e documento oficial de identificação com foto;</li>
                    <li>Certidão de casamento civil.</li>
                  </ul>

                  <p>
                    2. COMPANHEIRO (A):
                  </p>

                  <ul>
                    <li>CPF e documento oficial de identificação com foto;</li>
                    <li>Escritura pública de união estável ou declaração pública assinada pelo titular e companheiro(a) com firma reconhecida em cartório.</li>
                  </ul>

                  <p>
                    3. FILHOS (AS) até 18 anos:
                  </p>

                  <ul>
                    <li>Documento oficial de identificação;</li>
                    <li>CPF, obrigatório independentemente da idade.</li>
                    <li>Se o filho for menor de 12 anos e teve a paternidade reconhecida judicial ou extrajudicialmente deve apresentar sentença/escritura com trânsito em julgado, que reconheceu a paternidade e certidão de nascimento (ainda sem averbação).</li>
                  </ul>

                  <p>
                    4. FILHOS (AS) com idade entre 21 e 24 anos:
                  </p>

                  <ul>
                    <li>Cópia RG, CPF e Atestado de Frequência de ensino superior.</li>
                  </ul>

                  <p>
                    5. ENTEADOS(AS):
                  </p>

                  <ul>
                    <li>Documento oficial de identificação;</li>
                    <li>CPF, obrigatório independentemente da idade.</li>
                    <li>Certidão de nascimento;</li>
                    <li>Escritura pública de união estável ou declaração pública assinada pelo titular e companheiro (a) e duas testemunhas, com firma reconhecida em cartório.</li>
                  </ul>

                  <p>
                    6. PESSOA SOB GUARDA/TUTELA/CURATELA
                  </p>

                  <ul>
                    <li>Documento oficial de identificação;</li>
                    <li>CPF, obrigatório independentemente da idade;</li>
                    <li>Termo de guarda ou tutela ou curatela (conforme o caso) ou sentença com trânsito em julgado.</li>
                  </ul>

                  <p>
                    IMPORTANTE: Os documentos supracitados deverão ser preenchidos, assinados e enviados em arquivo digital, de preferência escaneado.
                  </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent7}>
                {showContent7 ? (
                <>
                Trâmite de Inclusão e Exclusão Após Solicitação <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Trâmite de Inclusão e Exclusão Após Solicitação <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent7 && (
                <div>
                  <p>
                    Após o envio da solicitação de INCLUSÃO ou EXCLUSÃO por e-mail, o(a) servidor(a) do setor do Plano de Saúde enviará um novo e-mail, com o Formulário de Movimentação Cadastral da Unimed, que deverá ser assinado pelo(a) beneficiário(a) titular;
                    <br /><br />
                    Esse formulário deverá ser assinado pelo(a) beneficiário(a) e ser enviado, via e-mail, para finalizar o processo de inclusão ou exclusão.
                    <br /><br />
                    IMPORTANTE: Para que a inclusão ou exclusão seja efetivada, todos os documentos necessários deverão ser encaminhados via e-mail, incluindo o Formulário de Movimentação Cadastral da Unimed assinado.
                  </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent8}>
                {showContent8 ? (
                <>
                Exclusão de Titular E/ou Dependente(s) <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Exclusão de Titular E/ou Dependente(s) <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent8 && (
                <div>
                  <p>
                    Encaminhar solicitação via e-mail para <a href="mailto:unimed@pmsj.sc.gov.br">unimed@pmsj.sc.gov.br</a>com o assunto: “EXCLUSÃO PLANO DE SAÚDE – UNIMED – TITULAR e/ou DEPENDENTE(S)”.
                    <br /><br />
                    Documentos necessários para exclusão:
                  </p>

                  <ul>
                    <li>
                      <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Termo-de-Exclusao-e-Formulario-de-Dados-Cadastrais.doc">Termo de EXCLUSÃO e Formulário de Dados Cadastrais para exclusão de beneficiário no Plano de Saúde </a>
                    </li>
                    <li>Formulário de movimentação para exclusão, assinado pelo beneficiário titular. O formulário de exclusão deverá ser solicitado via e-mail.</li>
                  </ul>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent9}>
                {showContent9 ? (
                <>
                Inclusão de Recém-nascidos(as) <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Inclusão de Recém-nascidos(as) <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent9 && (
                <div>
                  <p>
                    Durante os 30 primeiros dias de vida, a criança poderá utilizar a carteirinha do(a) titular do plano.
                    <br /><br />
                    É necessário que o(a) titular solicite a sua inclusão até o 30º dia do nascimento, seguindo os passos para inclusão de dependentes, acima citados. Caso a solicitação ocorra após o 30º dia do nascimento a criança será incluída com carências.
                    <br /><br />
                    Observação: Recomenda-se que a inclusão seja solicitada, preferencialmente, até o 25º (vigésimo quinto) dia de vida, pois a operadora necessita de 5 (cinco) dias uteis para processar a informação. Desta forma, caso a família solicite a inclusão no último dia do prazo – 30º dia de vida – corre-se o risco do(a) recém-nascido(a) ficar sem cobertura do plano enquanto a movimentação não for processada no sistema da operadora.
                  </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent10}>
                {showContent10 ? (
                <>
                Trâmite de Inclusão e Exclusão Após Solicitação <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Trâmite de Inclusão e Exclusão Após Solicitação <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent10 && (
                <div>
                  <p>
                    Após o envio da solicitação de INCLUSÃO ou EXCLUSÃO por e-mail, o(a) servidor(a) do setor do Plano de Saúde enviará um novo e-mail, com o Formulário de Movimentação Cadastral da Unimed, que deverá ser assinado pelo(a) beneficiário(a) titular;
                    <br /><br />
                    Esse formulário deverá ser assinado pelo(a) beneficiário(a) e ser enviado, via e-mail, para finalizar o processo de inclusão ou exclusão.
                    <br /><br />
                    IMPORTANTE: Para que a inclusão ou exclusão seja efetivada, todos os documentos necessários deverão ser encaminhados via e-mail, incluindo o Formulário de Movimentação Cadastral da Unimed assinado.
                  </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent11}>
                {showContent11 ? (
                <>
                O Que é Coparticipação? <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                O Que é Coparticipação? <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent11 && (
                <div>
                  <p>
                    O(a) beneficiário(a) titular participará sempre do custeio dos serviços oferecidos pelo Plano de Assistência à Saúde do Servidor Municipal, utilizados por ele próprio ou por seus dependentes.
                    <br /><br />
                    O valor da coparticipação nos serviços de assistência ambulatorial, corresponderá a um percentual de 50% (cinquenta por cento) do valor das consultas médicas (eletivas, emergência e urgência), exames, procedimentos de diagnose, fisioterapias e acupuntura, calculado sobre o custo efetivo dos serviços, não ultrapassando, por procedimento, a um valor máximo limitado a R$ 80,00 (oitenta reais), conforme estipulado no contrato do Plano de Assistência à Saúde.
                    <br /><br />
                    <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Tabela-Coparticipacao-vigencia-10.08.2021-1.xls">Tabela de coparticipação – Unimed Grande Florianópolis </a>
                  </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent12}>
                {showContent12 ? (
                <>
                Extratos de Utilização do Plano de Saúde <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Extratos de Utilização do Plano de Saúde <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent12 && (
                <div>
                  <p>
                    Você sabia que, através do Portal do Cliente Unimed Grande Florianópolis, o(a) servidor(a) beneficiário (a) poderá consultar seu Extrato de Utilização do Plano de Saúde detalhado, no link
                  <br />
                  <a href="https://cliente.unimedflorianopolis.com.br/Login.aspx">https://cliente.unimedflorianopolis.com.br/Login.aspx</a>, conforme passo a passo abaixo:
                  </p>

                  <ul>
                    <li>
                      <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Passo-a-Passo-Extrato-de-Utilizacao.pdf">Manual Extrato de Utilização</a>
                    </li>
                  </ul>

                  <p>
                    Outra forma de acessar o Extrato de Utilização do Plano de Saúde é através do aplicativo da Unimed Grande Florianópolis. Abaixo consta o manual com instruções para baixar o aplicativo e a como utilizar esse recurso:
                  </p>

                  <ul>
                    <li>
                      <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/MANUAL-APP-CLIENTE-UGF.pdf">APP CLIENTE UGF – Manual App Cliente Unimed Grande Florianópolis</a>
                    </li>
                  </ul>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent13}>
                {showContent13 ? (
                <>
                Retirada da Carteira do Plano de Saúde <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Retirada da Carteira do Plano de Saúde <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent13 && (
                <div>
                  <p>
                    A carteira do Plano de Saúde poderá ser retirada pelo(a) servidor(a) titular do plano na Secretaria de Administração – Setor de Plano de Saúde – sito à Avenida Acioni Souza Filho, 403 – 3º andar – Praia Comprida – São José, das 13h00min às 19h00min, de segunda a sexta feira.
                    <br /><br />
                    Caso (a) servidor(a) titular não possa retirar a carteira pessoalmente, este(a) poderá enviar por um(a) responsável pela retirada, a DECLARAÇÃO DE RECEBIMENTO DE CARTEIRA DO PLANO DE SAÚDE, devidamente preenchida e assinada pelo(a) titular do plano.
                  </p>

                  <ul>
                    <li>
                      <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Declaracao-de-Recebimento-da-Carteira-do-Plano-de-Saude.doc">Declaração de Recebimento de Carteira do Plano De Saúde</a>
                    </li>
                  </ul>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent14}>
                {showContent14 ? (
                <>
                Portabilidade <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Portabilidade <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent14 && (
                <div>
                  <p>
                    Para ter direito à portabilidade, é necessário:
                  </p>

                  <ul>
                    <li>Manter o vínculo ativo com o plano atual</li>
                    <li>Estar adimplente junto à Operadora</li>
                    <li>Ter cumprido o prazo de permanência exigido no plano:</li>
                  </ul>

                  <p>
                    1º Portabilidade
                    <br /><br />
                    Mínimo de dois anos no plano de origem (três anos se tiver cumprido cobertura parcial temporária);
                    <br /><br />
                    2º Portabilidade em diante
                    <br /><br />
                    Para portabilidades seguintes, mínimo de um ano de permanência no plano de origem ou no mínimo de 2 (dois) anos se o beneficiário mudar para um plano com coberturas não previstas no plano;
                  </p>

                  <ul>
                    <li>Que o plano de destino tenha faixa de preço igual ou inferior ao plano de origem, com exceção dos casos de portabilidade especial, planos empresariais e pós-pagamento.</li>
                  </ul>

                  <p>
                    Cancelamento do Plano de origem:
                    <br /><br />
                    Após o(a) beneficiário(a) aderir ao novo plano, deve solicitar o cancelamento do seu plano anterior diretamente à operadora responsável, no prazo de 5 (cinco) dias. O(a) beneficiário(a) deverá ter em sua posse o comprovante, pois a nova operadora poderá solicitá-lo a qualquer momento. Se o(a) beneficiário(a) não solicitar o cancelamento nesse prazo, estará sujeito(a) ao cumprimento de carências no novo plano por descumprimento das regras.
                    <br /><br />
                    Mais informações sobre portabilidade: <a href="https://www.gov.br/ans/pt-br/arquivos/assuntos/contratacao-e-troca-de-plano/portabilidade-de-carencias/cartilha_final.pdf">https://www.gov.br/ans/pt-br/arquivos/assuntos/contratacao-e-troca-de-plano/portabilidade-de-carencias/cartilha_final.pdf</a>
                  </p>
                </div>
                )}
            </div>
            <div className="ident_button_pl_sau">
            <button className="toggle-button" onClick={toggleContent15}>
                {showContent15 ? (
                <>
                Manutenção de Plano de Ex-empregado/exonerado <FontAwesomeIcon icon={faChevronDown} />
                </>
                ) : (
                <>
                Manutenção de Plano de Ex-empregado/exonerado <FontAwesomeIcon icon={faChevronRight} />
                </>
                )}
                </button>

                {showContent15 && (
                <div>
                  <p>
                    O aposentado ou ex-empregado exonerado ou demitido sem justa causa, que contribuía para o custeio do seu plano de saúde, tem o direito de manter as mesmas condições de cobertura assistencial de que gozava quando da vigência do contrato de trabalho, de 6 meses a 2 anos, sem prejuízo de eventuais vantagens obtidas em negociações coletivas.
                    <br /><br />
                    Quais são os critérios:
                  </p>

                  <ul>
                    <li>Beneficiários oriundos de Contrato Coletivo Empresarias (Vínculo empregatício);</li>
                    <li>Demitido ou Exonerado sem justa causa ou aposentado;</li>
                    <li>Que contribuiu ou tenha contribuído com o pagamento da mensalidade do seu plano de saúde (independentemente do valor da contribuição, de pelo menos 1 mensalidade);</li>
                    <li>Contratos regulamentados pela Agência Nacional de Saúde.</li>
                  </ul>

                  <p>
                    A Agência Nacional de Saúde Suplementar (ANS) foi criada em 2000 com a finalidade de regular o setor de planos privados de assistência à saúde. <a href="https://saojose.sc.gov.br/wp-content/uploads/2023/03/Cartilha-Exonerados.pdf">Essa cartilha </a>disponível o objetivo de fornecer informações relevantes ao beneficiário de plano coletivo empresarial sobre a manutenção do plano de saúde no momento de uma demissão/exoneração sem justa causa ou de uma aposentadoria.
                    <br /><br />
                     <a href="https://saojose.sc.gov.br/wp-content/uploads/2023/03/Cartilha-Exonerados.pdf">Cartilha Exonerados</a>
                     <br /><br />
                     Termo de ciência
                  </p>

                  <ul>
                    <li>Deve conter a assinatura e data em que o beneficiário está recebendo as informações de ex-empregado;</li>
                    <li>O prazo para solicitar o benefício é de 30 dias corridos contados da data do Termo de Ciência, não obedecendo ao prazo estabelecido não será possível usufruir o benefício.</li>
                  </ul>

                  <p>
                    ATENÇÃO: O Termo de Ciência deverá ser preenchido ex-empregado exonerado ou demitido sem justa causa, e encaminhado ao e-mail <a href="mailto:unimed@pmsj.sc.gov.br">unimed@pmsj.sc.gov.br</a>, ou entregue pessoalmente no setor de Recursos Humanos – Plano de Saúde, localizado no 3º andar da sede da Prefeitura de São José.
                    <br /><br />
                    <a href="https://saojose.sc.gov.br/wp-content/uploads/2023/03/Termo-de-Ciencia-Plano-de-Saude-Empregador-para-empregado.pdf">Termo de Ciência – Plano de Saúde – Empregador para empregado</a>
                  </p>
                </div>
                )}
            </div>

            <h5 className='text-uppercase'>Links Úteis:</h5>

            <ul>
              <li>
                <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/MANUAL-APP-CLIENTE-UGF.pdf">APP CLIENTE UGF – Manual App Cliente Unimed Grande Florianópolis </a>
              </li>
              <li>
                <a href="https://saojose.sc.gov.br/wp-content/uploads/2022/07/Decreto-4464.2015.pdf">Decreto 4464/2015</a>
              </li>
              <li>
                <a href="https://www.saojose.sc.gov.br/images/uploads/geral/Lei-Ordinaria-n%C2%A04738_2009-de-18_02_2009.pdf?_gl=1*1gxzv7g*_ga*MTI5NjMzNTY3My4xNjg0NDM4Mjk3*_ga_Y6Q5YHNV0H*MTY4NzUzODMzOC42NS4xLjE2ODc1Mzk4NjEuMC4wLjA.&_ga=2.16375350.1059938808.1687535652-1296335673.1684438297">Lei Ordinária nº 4738/2009 de 18/02/2009</a>
              </li>
            </ul>

            <h5 className='text-uppercase'>Contatos:</h5>

            <p>
              Setor de Plano de Saúde – Secretaria de Administração
              <br /><br />
              Avenida Acioni Souza Filho, 403 – 3º andar – Praia Comprida – São José
              <br /><br />
              Horário de Atendimento: 13h00min às 19h00min
              <br /><br />
              Telefone:(48)3381-0094 / (48) 3381 0398
              e-mail: <a href="mailto:unimed@pmsj.sc.gov.br">unimed@pmsj.sc.gov.br</a>
              <br /><br />
              Chat Online Unimed Grande Florianópolis
              <br /><br />
              Acesse: <a href="https://www.unimed.coop.br/site/web/florianopolis">https://www.unimed.coop.br/site/web/florianopolis</a> clique “Chat” e utilize o atendimento online 24 horas.
              <br /><br />
              Contact Center Unimed – 24 horas
              <br /><br />
              0800 483500
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default TextPlanoSaude