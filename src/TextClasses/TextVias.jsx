import React from 'react'

import { Link } from 'react-router-dom'

import '../Styles/Vias.css'

const TextVias = () => {
  return (
    <div className='vias_container'>
        <div className="main_vias">
            <div className="text_vias">
                <Link to="/">Home</Link>
                <h4>Pedido de Fechamento de Vias</h4>

                <h5>Pedidos de Autorização</h5>

                <p>
                    Para pedidos de autorização de evento em vias públicas e que necessitarão de fechamento parcial e/ou total da via,  acessar os links:
                    <br /><br />
                    Pedido de Pessoa Jurídica
                    <br />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1QAJujs6A5GVYyTzG80cwSi08ba8uZdz4ye73eRpg1PaTrg/viewform">https://forms.gle/9LxJLHMt9mJ6Pkqq5</a>
                    <br /><br />
                    Pedido de Pessoa Física
                    <br />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSclPt0xYwmv_N6R8RQqeWYuJo8lT0p3XcNYI9Z_eSrx-yN-yw/viewform">https://forms.gle/XAYaGDAJKSMEzQn5A</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default TextVias