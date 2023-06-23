import React from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import '../Styles/Cati.css'

const TextCati = () => {
  return (
      <div className='cati_container'>
        <div className="main_cati">
          <Container>
            <div className="text_cati">
                <div>
                    <Link to="/" className='link_cati'>Home</Link>/<Link to='/cati' className='link_cati'>Cati</Link>
                </div>

                <h4>Cati</h4>

                <p>
                    As atividades presenciais do Centro de Atenção à Terceira Idade (CATI) estavam suspensas desde o dia 18 de março de 2020 devido a Covid-19. Durante o período em que estavam afastados do CATI, os idosos realizavam atividades não presenciais por grupos nas redes sociais.
                    <br /><br />
                    Para preparar o retorno dos idosos às aulas práticas, a Prefeitura de São José, por meio da Secretaria de Assistência Social, capacitou oficineiros nas últimas semanas abordando conteúdos ligados à saúde.
                    <br /><br />
                    Além disso, a Prefeitura também elaborou o retorno do Programa “São José, amigo do idoso, vivenciando experiências”. O serviço garante o benefício do passeio mensal aos idosos, de até 150km ida e volta. Além disso, serão distribuídos kits para confraternizações entre os grupos.
                    <br /><br />
                    Neste momento, a equipe do CATI está em contato com os idosos da lista de espera referente ao edital de 2019. No mês de abril, foram ofertadas 1.768 vagas para iniciarem as atividades. Na lista de espera, estão aproximadamente 600 idosos, que gradualmente estão sendo chamados.
                    <br /><br />
                    Em caso de dúvidas, o CATI disponibiliza os telefones (48) 3288- 5791 e (48) 3288- 5792 para contato.
                </p>
            </div>
          </Container>
        </div>
      </div>
  )
}

export default TextCati