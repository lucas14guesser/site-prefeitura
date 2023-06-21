import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/CentroAtendimento.css'
import { Container } from 'react-bootstrap'

const TextCentroAtendimento = () => {
  return (
    <Container>
      <div className="text_cac">
          <div>
              <Link to="/" className='link_cac'>Home</Link>/<Link to='/centro-atendimento' className='link_cac'>Centro de Atendimento ao Cidadão</Link>
          </div>

          <h4>Centro de Atendimento ao Cidadão</h4>


          <h6><a href="/docs-processos">Documentos para abertura de Processos</a></h6>

          <ul>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-processo-digital/detalhar/1" target='_blank'>Abertura de Processo Digital</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/acesso-a-informacao/detalhar/1" target='_blank'>Acesso à Informação</a></li>
              <li><a href="https://nfse-saojose.atende.net/autoatendimento/servicos/acesso-ao-sistema-fiscal-web-novo/detalhar/1" target='_blank'>Acesso ao Sistema Fiscal Web</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/agenda-de-licitacoes/detalhar/1" target='_blank'>Agenda de Licitações</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/alterar-senha-de-acesso/detalhar/1" target='_blank'>Alterar Senha de Acesso</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-boleto/detalhar/1" target='_blank'>Autenticidade de Boleto</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-documentos-e-relatorios/detalhar/1" target='_blank'>Autenticidade de Documentos e Relatórios</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-email/detalhar/1" target='_blank'>Autenticidade de Email</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/certidao-de-baixa-da-inscricao-municipal/detalhar/1" target='_blank'>Certidão de Baixa de Empresa</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/certidao-de-valor-venal/detalhar/1" target='_blank'>Certidão de Valor Venal</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/comprovante-de-inscricao-municipal/detalhar/1" target='_blank'>Comprovante de Inscrição de Cadastro Municipal</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/consulta-a-ouvidoria/detalhar/1" target='_blank'>Consulta a Ouvidoria</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-atas-registro-preco/detalhar/1" target='_blank'>Consulta de Atas Registro Preço</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-autenticidade-de-nota-fiscal-eletronica-nfse/detalhar/1" target='_blank'>Consulta de Autenticidade de Nota Fiscal Eletrônica (NFS-e)</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-licitacoes/detalhar/1" target='_blank'>Consulta de Licitações</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/consulta-de-processo-digital/detalhar/1" target='_blank'>Consulta de Processo</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/autenticidade-de-certidao-negativa-de-debitos/detalhar/1" target='_blank'>Consulta e Autenticidade da Certidão Negativa de Débitos – CND</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-do-recibo-de-pagamento/detalhar/1" target='_blank'>Contra-Cheque</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/cotacao-de-planilha-de-precos/detalhar/1" target='_blank'>Cotação de Planilha de Preços</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/declaracao-de-quitacao-de-itbi/detalhar/1" target='_blank'>Declaração de quitação de ITBI</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/declaracao-vinculo-empregaticio/detalhar/1" target='_blank'>Declaração Vínculo Empregatício</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/certidao-negativa-de-debitos/detalhar/1" target='_blank'>Emissão da Certidão Negativa de Débitos – CND</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/guia-unificada/detalhar/1" target='_blank'>Emissão de Guia Única</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/guias-divida-ativa/detalhar/1" target='_blank'>Emissão de Guias Dívida Ativa</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/guias-de-iptu/detalhar/1" target='_blank'>Emissão de Guias IPTU</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/guias-itbi/detalhar/1" target='_blank'>Emissão de Guias ITBI</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/guias-de-servicos-diversos/detalhar/1" target='_blank'>Emissão de Guias Receitas Diversas</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-nfse/detalhar/1" target='_blank'>Emissão de NFS-e Mobile</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-de-nfse-por-webservice/detalhar/1" target='_blank'>Emissão de NFS-e por WebService</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/demonstrativo-de-tempo-de-servico/detalhar/1" target='_blank'>Emissão Demonstrativo de Tempo de Serviço</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/enviar-proposta-de-licitacoes/detalhar/1" target='_blank'>Enviar Proposta de Licitações</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/ficha-cadastral-do-imovel/detalhar/1" target='_blank'>Espelho Cadastral IPTU</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/extrato-de-debito/detalhar/1" target='_blank'>Extrato de Débito</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/extrato-de-pagamentos/detalhar/1" target='_blank'>Extrato de Pagamento</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/extrato-do-contribuinte/detalhar/1" target='_blank'>Extrato do Contribuinte</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/emissao-da-ficha-financeira/detalhar/1" target='_blank'>Ficha Financeira</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/licitacoes-lei-1301914/detalhar/1" target='_blank'>Licitações (Lei 13.019/14)</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/licitacoes-por-cnae/detalhar/1" target='_blank'>Licitações por CNAE</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/manifestacao-de-interesse-social/detalhar/1" target='_blank'>Manifestação de Interesse Social</a></li>
              <li><a href="https://saojose.atende.net/autoatendimento/servicos/consulta-nfse-de-servicos-tomados/detalhar/1" target='_blank'>NFS-e de Serviços Tomados</a></li>
          </ul>
      </div>
    </Container>
  )
}

export default TextCentroAtendimento