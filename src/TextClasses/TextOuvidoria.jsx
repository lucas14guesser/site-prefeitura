import React from 'react'

import { Link } from 'react-router-dom'
import OuvidoriaAccessButton from '../LinkButtons/OuvidoriaAccessButton'

import '../Styles/Ouvidoria.css'

const TextOuvidoria = () => {
  return (
    <div className="text_ouv">
        <Link to='/portal-transparencia'>Página Anterior</Link>

        <h4>Ouvidoria</h4>

        <h8>Ouvidoria: exercício da cidadania</h8>

        <p>
            Ouvidoria é um canal direto e ágil, com atribuições de acolher, encaminhar, acompanhar e responder as feitos pelo munícipe, com vistas à melhoria da qualidade dos serviços prestados pela Prefeitura Municipal de São José.
            <br /><br />
            A Ouvidoria Geral de São José tem, portanto, como objetivo principal a excelência no atendimento ao cidadão.
            <br /><br />
            A Lei Federal nº 12.527 de 18 de novembro de 2011, Lei de Acesso a Informação e a Lei Complementar Federal n° 131 de 27 de maio de 2009, Lei da Transparência Pública, sancionadas pelo Presidente da República, têm o propósito de regulamentar o direito constitucional da Transparência e do acesso às informações públicas e seus dispositivos são aplicáveis aos três Poderes da União, Estados, Distrito Federal e Municípios.
            <br /><br /> 
        </p>

        <h8>Para cadastrar ou consultar solicitações acesse o sistema abaixo:</h8>

        <p>
            <OuvidoriaAccessButton />
        </p>

        <h6>Ouvidoria Geral – Fone: 0800 644 9040</h6>
        <h6>Ouvidoria da Saúde – Fone: 0800 645 9889</h6>

        <p>
            Atendimento telefônico de segunda a sexta-feira, das 08h às 17h
            <br /><br />
            Atendimento Presencial de segunda a sexta-feira, das 08h às 17h
            <br /><br />
            Local de atendimento presencial: Térreo da Prefeitura de São José, Av. Acioni Souza Filho, 403, Centro – São José/SC – CEP 88.103-790
            <br /><br />
        </p>

        <h6>Links:</h6>
        <ul>
            <li><a href="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm">LAI (Lei de Acesso a Informação ) – Lei Federal nº 12.527 de 18 de novembro de 2011</a></li>
            <li><a href="http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp131.htm">Lei da Transparência Pública – Lei Complementar Federal n° 131 de 27 de maio de 2009,</a></li>
        </ul>
    </div>
  )
}

export default TextOuvidoria