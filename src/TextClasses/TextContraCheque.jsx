import React from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../Styles/ContraCheque.css'

const TextContraCheque = () => {
  return (
    <div className='contra_container'>
        <div className="main_contra">
            <Container>
                <div className="text_contra">
                    <Link to='/' className='link_contra'>Home</Link>/<Link to='/portal-servidor' className='link_contra'>Portal do Servidor</Link>/<Link to='/contra-cheque' className='link_contra'>Contra-Cheque</Link>

                    <h4>Contra-Cheque</h4>

                    <h5>Acesso ao portal de atendimento para emissão de holerites, certidões e outras funcionalidades disponíveis para os funcionários e contribuintes.</h5>

                    <p>1º – Acessando o Link: <a href="https://saojose.atende.net/" target='_blank'>https://saojose.atende.net/</a>nos levará a página abaixo;</p>

                    <div className="ident_img_contra">
                        <img src="../img/icons/linkContra1.png" alt="imagem ilustrativa 1 do site" />
                    </div>

                    <p>2º – Pedimos que acesse o campo “LOGIN” localizado na parte superior à direita da tela, para que assim se inicie o acesso ao Sistema</p>

                    <div className="ident_img_contra">
                        <img src="../img/icons/linkContra2.png" alt="imagem ilustrativa 2 do site" />
                    </div>

                    <p>
                        3º – Para acessos novos, serão padronizados os usuários como “CPF” para usuário e a senha será o “CPF” novamente sem nenhuma pontuação.
                        <br /><br />
                        Observação: Funcionários que já utilizam o Sistema internamente, manterão assim seus usuários e os funcionários cuja o 1º acesso não foi realizado por algum outro problema, pedimos que entre em contato com o setor responsável para que assim seja fornecido uma senha em seu e-mail.
                        <br /><br />
                        Caso seja informado o CPF como usuário e o CPF como senha, o sistema abrirá uma nova tela, onde será necessário realizar a alteração de sua senha, para uma senha de uso pessoal, fornecendo seu CPF como senha anterior e determinando assim sua nova senha.(Lembrando que a senha necessita que seja de no mínimo 8 caracteres, contendo nessa senha “1” letra maiúscula, “1” caractere e “1” número como obrigatoriedade).
                        <br /><br />
                        4º – Após todo o cadastramento de “Senha”, o sistema entrará nas informações sobre os dados do usuário, sendo então ser possível a emissão da folha de pagamento e de outros dados que o funcionário/contribuinte possui juntamente a Prefeitura de São José.
                        <br /><br />
                        Para a emissão da folha de pagamento será necessário acessar o “Auto Atendimento” na parte superior à esquerda ou Clicar no campo “Clique aqui para realizar o acesso ao portal de atendimento” como mostra na imagem abaixo;
                    </p>

                    <div className="ident_img_contra">
                        <img src="../img/icons/linkContra3.png" alt="imagem ilustrativa 3 do site" />
                    </div>

                    <p>
                        5º – Para a emissão do holerite, podemos ver que ao acessar o Auto atendimento, já possui um atalho na 1 tela, sendo possível assim ser emitido com facilidade.
                        <br /><br />
                        Caso deseje realizar outras verificações, poderá ser notado na imagem abaixo, que o sistema possui várias funcionalidades já disponíveis para sua realização.
                    </p>

                    <div className="ident_img_contra">
                        <img src="../img/icons/linkContra4.png" alt="imagem ilustrativa 4 do site" />
                    </div>

                    <p>Caso deseje que seja emitido o recibo de pagamento, pedimos que acesse o campo - Servidor Público - Folha de Pagamento - Contra Cheque e siga as instruções abaixo conforme imagens.</p>

                    <div className="ident_img_contra">
                        <img src="../img/icons/linkContra5.png" alt="imagem ilustrativa 5 do site" />
                    </div>

                    <p>
                        Clique em “Acessar” conforme imagem acima;
                        <br /><br />
                        Já na imagem abaixo, é possível notar que pode ser definido alguns filtros para a emissão, sendo eles;
                        <br /><br />
                        1º – Entidade: Onde é possível realizar a emissão por entidade(Lembrando que só aparecerá entidades nas quais possui algum vínculo a ser emitido).
                        <br /><br />
                        2º – Funcionário/Contrato: Nessa situação, é possível selecionar de qual contrato deseja emitir, pois há funcionários com mais de um contrato ativo ou poderá também emitir de contratos antigos que não estão mais ativos.
                        <br /><br />
                        3º – Período: Definir qual a competência que deseja que seja emitida sua folha de pagamento.
                        <br /><br />
                        4º – Tipo Folha: Poderá definir se deseja que seja emitida a folha mensal/férias ou rescisão, lembrando apenas que ao selecionar o período, só aparecerá folha relacionadas ao período que assim estiver definido.
                        <br /><br />
                        Depois, basta clicar em “Confirmar” que então a folha de pagamento será emitida com os dados desejados do usuário acessado.
                    </p>

                    <div className="ident_img_contra">
                        <img src="../img/icons/linkContra6.png" alt="imagem ilustrativa 6 do site" />
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextContraCheque