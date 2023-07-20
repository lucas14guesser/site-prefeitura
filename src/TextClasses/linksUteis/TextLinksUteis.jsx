import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import '../../Styles/SelectBox.css'

function removeSpecialCharacters(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

const TextLinksUteis = () => {
    const options = [
        'Horários Coleta de Lixo (Seletiva e Convencional)',
        'Feriados Municipais',
        'Procon Municipal de São José',
        'Autorização para uso de Vaga Zona Azul',
        'Lista de espera SUS',
        'Carta de Serviços',
        'Telefones Úteis',
        'Solicitações de vaga CEI/CEM',
        'Tabela COSIP São José',
        'Coleta Seletiva Horários',
        'Seja um Voluntário',
        'Legislação Municipal',
        'Conselho Municipal de Saúde de São José – CMS/SJ',
        'Ouvidoria',
        'Conselho Tutelar',
        'Proposta do Novo Sistema de Transporte Coletivo Municipal',
        'Concursos Públicos – Documentos e Declarações',
        'Banco de preços em saúde',
        'Parcerias com a Sociedade Civil',
        'Isenção IPTU 2023'
      ];
    
      const [selectedOption, setSelectedOption] = useState('');
      const navigate = useNavigate();
    
      const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
      };

      useEffect(() => {
        if (selectedOption) {
          navigate(`/${removeSpecialCharacters(selectedOption).toLowerCase().replace(/\s+/g, '-')}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, [selectedOption, navigate]);
    
      return (
            <div className='main-select-box'>
                <h4 className='main-select-box__title'>Links Úteis</h4>
                <select className='main-select-box__selecao' value={selectedOption} onChange={handleChange}>
                    <option value="">Link...</option>
                    {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
      );
}

export default TextLinksUteis