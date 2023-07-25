import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import '../../Styles/selectBox/SelectBox.css'

function removeSpecialCharacters(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

const TextSecretarias = () => {
    
    const options = [
        'Prefeito Orvino Coelho de Ávila',
        'Gabinete do Vice-Prefeito',
        'Procuradoria Geral do Municipio',
        'Secretaria de Administração',
        'Secretaria de Assistência Social',
        'Secretaria Municipal de Cultura e Turismo',
        'Secretaria Integrada de Comunicação',
        'Secretaria de Desenvolvimento Econômico e Inovação',
        'Secretaria de Finanças',
        'Secretaria de Governo',
        'Secretaria de Educação',
        'Secretaria Municipal de Esportes e Lazer',
        'Secretaria de Infraestrutura',
        'Secretaria de Planejamento e Assuntos Estratégicos',
        'Secretaria da Receita',
        'Secretaria de Regularização Fundiária',
        'Secretaria de Saúde',
        'Secretaria de Segurança, Defesa Civil e Trânsito',
        'Secretaria de Transparência',
        'Secretaria de Urbanismo e Serviços Públicos',
        'Autarquia São José Previdência',
        'Fundação Educacional Municipal',
        'Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável'
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
                <h4 className='main-select-box__title'>SECRETARIAS</h4>
                <select className='main-select-box__selecao' value={selectedOption} onChange={handleChange}>
                    <option value="">Secretaria...</option>
                    {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
      );
}

export default TextSecretarias