import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/SjPrev.css'

const SjPrev = () => {
  return (
    <div className='sj_prev2_container'>
        <div className="main_sj_prev2">
            <Container>
                <div className="text_sj_prev2">
                <div>
                    <Link to="/" className='link_sj_prev2'>Home</Link>/<Link to='/sjprev-2' className='link_sj_prev2'>SJPREV</Link>
                </div>

                <h4>SJPREV</h4>

                <p>
                    SJPREV: Autarquia São José Previdência criada pela Lei Complementar n.º 005, de 03 de maio de 2002.
                    <br /><br />
                    A SJPREV é uma autarquia com autonomia administrativa e financeira e tem como finalidade administrar o Sistema de Seguridade Social dos Servidores de São José.
                    <br /><br />
                    Os órgãos que compõem a estrutura administrativa da SJPREV são: o Conselho de Administração, a Diretoria e o Conselho Fiscal. O Conselho de Administração é o órgão de decisão e orientação superior da SJPREV. É composto por cinco membros titulares e cinco suplentes. Todos os membros do Conselho deverão ser estáveis, ativos ou inativos. Dois representantes e respectivos suplentes serão indicados pelo Prefeito, dos quais um será o presidente. Um representante e respectivo suplente indicado pela Câmara de Vereadores e dois representantes e respectivos suplentes indicados pelos servidores por intermédio do Grêmio Beneficente e Recreativo Municipal (redação dada pela Lei Complementar 008/03, de 31 de março de 2003). A Diretoria é composta de um Presidente e um Diretor Administrativo e Financeiro. O Conselho Fiscal é composto por quatro membros efetivos e quatro suplentes, sendo um membro efetivo e outro suplente indicado pelo Prefeito, na mesma proporção com indicação da Câmara de Vereadores e dois efetivos e respectivos suplentes pelo Grêmio Beneficente e Recreativo Municipal.
                    <br /><br />
                    Os segurados do SJPREV são os servidores ativos titulares de cargos efetivos, vinculados ao Poder Executivo, Poder Legislativo, suas Fundações e Autarquias.
                    <br /><br />
                    Para fins de Previdência, são considerados segurados obrigatórios os servidores públicos titulares de cargo efetivo, aposentados e pensionistas.
                    <br /><br />
                    São beneficiários do Sistema de Seguridade Social, através da SJPREV, os segurados e, na qualidade de beneficiários destes, seus dependentes diretos designados e os pensionistas.
                </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default SjPrev