import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/LivroEletronico.css'
import { Container } from 'react-bootstrap'

const TextLivroEletronico = () => {
  return (
    <Container>
      <div className="text_livro">
          <div>
              <Link to="/" className='link_livro'>Home</Link>/<Link to='/empreendedor' className='link_livro'>Espaço do Empreendedor</Link>/<Link to='/sou-empresa' className='link_livro'>Sou Empresa</Link>/<Link to="/livro-eletronico" className='link_livro'>Livro Eletrônico</Link>
          </div>

          <h4>Livro Eletrônico</h4>

          <h6>O que é?</h6>

          <p>
              O livro eletrônico é a ferramenta em que os contribuintes cumprem com sua obrigação acessória, escriturando seus serviços prestados e tomados.
              <br />
              Além da obrigação acessória, esta ferramenta também possibilita aos contribuintes o cumprimento da obrigação principal, através da geração/emissão de guias de pagamento.
          </p>

          <h6>A quem se destina?</h6>

          <p>
              O livro eletrônico destina-se aos prestadores e tomadores de serviços.
              <br />
              Além disso, os contadores também utilizam o módulo contribuinte. Assim, o contador(a) contará com algumas funcionalidades exclusivas e possuirá acesso tanto a sua empresa de contabilidade e quanto as empresas que estiver vinculado como contador(a).
              <br /><br />
              <a href="https://saojose.atende.net/autoatendimento/servicos/geracao-de-guias-de-servicos-diversos" target='_blank'>https://saojose.atende.net/autoatendimento/servicos/geracao-de-guias-de-servicos-diversos</a>
              <br /><br />
              Contato para dúvidas a respeito do preenchimento do livro eletrônico.
              <br />
              Setor livro eletrônico:
              <br />
              Email: <a href="mailto:receita.pmsj@gmail.com">receita.pmsj@gmail.com</a>
              <br />
              Telefone: (48) 3381-0015
          </p>
      </div>
    </Container>
  )
}

export default TextLivroEletronico