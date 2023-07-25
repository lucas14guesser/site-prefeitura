import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../../../Styles/home/projetosAcoes/ProjetosAcoes.css'

const TextFeiraFreguesia = () => {
  return (
    <div className='projetos-acoes-container'>
        <div className="main-projetos-acoes">
            <Container>
                <div className="main-projetos-acoes__text">
                    <Link to="/" className='main-projetos-acoes__text__link'>Home</Link>/<Link to='/feira-da-freguesia' className='main-projetos-acoes__text__link'>Feira da Freguesia</Link>

                    <h4>Feira da Freguesia</h4>

                    <p>
                        <img src="../img/projetosAcoes/feira-freguesia.png" alt="Logo da feira da freguesia" className='main-projetos-acoes__text__image'/>
                    </p>

                    <p>
                        A Feira da Freguesia teve sua primeira edição em agosto de 2014, e desde então ocorre todo o segundo domingo do mês, das 10h às 19h, no Centro Histórico de São José. Promovida pela Secretaria Municipal de Cultura e Turismo, a Feira da Freguesia resgata a história da tradições locais e valoriza o Centro Histórico da cidade, tornando um espaço de convívio para famílias e amigos.
                        <br /><br />
                        Entre seus atrativos estão:  artesanato, sebo, vestuário, antiguidades, música, dança, teatro, boi-de-mamão, manifestações artísticas, contação de histórias, feira de produtos orgânicos, gastronomia, visitas guiadas, exposições na Casa da Cultura Nésia Melo da Silveira e no Museu Histórico e oficinas na Biblioteca Pública Albertina Ramos de Araújo.
                        <br /><br />
                        A Feira já conquistou o Prêmio “Prefeito Empreendedor” do Sebrae na categoria Projeto Sustentável e o Troféu Açorianidade pelo  Núcleo de Estudos Açorianos de Santa Catarina – Nea  na Festa da Cultura Açoriana de 2016 em Itajaí. E é considera a feira mais queridinha da região. Mais informações: (48) 3247-6503 ou pelo e-mail: <a href="mailto:feiradafreguesia@gmail.com">feiradafreguesia@gmail.com</a>
                    </p>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default TextFeiraFreguesia