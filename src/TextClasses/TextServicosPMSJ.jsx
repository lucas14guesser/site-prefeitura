import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/ServicosPMSJ.css'

const TextServicosPMSJ = () => {
  return (
    <div className="text_servSj">
        <Link to="/">Home</Link>

        <h4>Carta Serviços</h4>

        <h6>Links:</h6>

        <ul>
        <li><a href="https://saojose.sc.gov.br/servicos-oferecidos-pmsj/">Serviços Oferecidos PMSJ</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-administracao/servicos-secretaria-de-administracao/">Serviços Administração</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-assistencia-social/servicos-assistencia/">Serviços Assistência</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-executiva-de-comunicacao-social/servicos-secretaria-executiva-de-comunicacao-social/">Serviços Comunicação</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-municipal-de-cultura-e-turismo/servicos-fundacao-municipal-de-cultura-e-turismo/">Serviços Cultura</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-educacao/servicos-educacao/">Serviços Educação</a></li>
        <li><a href="https://saojose.sc.gov.br/category/fundacao-municipal-de-esporte-e-lazer/servicos-esportes/">Serviços Esporte</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-da-casa-civil/servicos-casa-civil/">Serviços Governo</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-infraestrutura/servicos-infraestrutura/">Serviços Infraestrutura</a></li>
        <li><a href="https://saojose.sc.gov.br/category/fundacao-municipal-do-meio-ambiente-e-desenvolvimento-sustentavel/servicos-meio-ambiente/">Serviços Meio Ambiente</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-receita/servicos-receita/">Serviços Receita</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-seguranca-defesa-social-e-transito/servicos-seguranca-transito-defesa-civil-e-procon/">Serviços Segurança - Trânsito - Defesa Civil e Procon</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-saude/servicos-saude/">Serviços Saúde</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-de-urbanismo-e-servicos-publicos/">Serviços Urbanismo e Serviços Públicos</a></li>
        <li><a href="https://saojose.sc.gov.br/category/secretaria-executiva-de-controle-interno-e-transparencia/servicos-transparencia/">Serviços Transparência</a></li>
        </ul>
    </div>
  )
}

export default TextServicosPMSJ