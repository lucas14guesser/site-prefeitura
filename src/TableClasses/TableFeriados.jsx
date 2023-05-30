import React from 'react'

import '../Styles/Feriados.css'

const TableFeriados = () => {
  return (
    <div className='table_feriado'>
        <h6>Feriados em São José</h6>
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Feriado</th>
                    <th>Lei</th>
                </tr>
            </thead> 
            <tbody>
                <tr>
                    <td>19/03</td>
                    <td>Aniversário da Cidade</td>
                    <td>nº 2302, 28/08/1991</td> 
            </tr>
            <tr>
                    <td>14/04</td>
                    <td>Sexta-Feira Santa</td>
                    <td>nº 2302, 28/08/1991</td> 
            </tr> 
            <tr>
                    <td>15/06</td>
                    <td>Corpus Christi</td>
                    <td> nº 2302, 28/08/1991</td> 
            </tr> 
            <tr>
                    <td>02/11</td>
                    <td>Dia de Finados</td>
                    <td> nº 2302, 28/08/1991</td> 
            </tr> 
            </tbody>
        </table>
        <h6>Feriados Nacionais</h6>
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Feriado</th>
                    <th>Lei</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>01/01</td>
                    <td>Confraternização Universal</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr>
            <tr>
                    <td>21/04</td>
                    <td>Tiradentes</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr> 
            <tr>
                    <td>01/05</td>
                    <td>Dia do Trabalhador</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr> 
            <tr>
                    <td>07/09</td>
                    <td>Independência do Brasil</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr> 
            <tr>
                    <td>12/10</td>
                    <td>Nossa Senhora Aparecida</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr> 
            <tr>
                    <td>02/11</td>
                    <td>Finados</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr> 
            <tr>
                    <td>15/11</td>
                    <td>Proclamação da República</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr> 
            <tr>
                    <td>25/12</td>
                    <td>Natal</td>
                    <td>nº 10607, 19/12/02</td> 
            </tr> 
            </tbody>
        </table>
    </div>
    )
}

export default TableFeriados