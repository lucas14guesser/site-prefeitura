import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import '../../Styles/selectBox/SelectBox.css'

function removeSpecialCharacters(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

const Conselhos = () => {
  const options = [
    'Conselho Municipal Antidrogas',
    'Conselho Municipal de Promoção da Igualdade Racial – COMPIR',
    'Conselho Municipal da Juventude',
    'Conselho de Administração – SJPREV',
    'Conselho de Alimentação Escolar',
    'Conselho Municipal de Assistência Social De São José (CMAS-SJ)',
    'Conselho Municipal de Educação de São José – Comesj',
    'Conselho Municipal dos Direitos da Mulher',
    'Conselho Municipal dos Direitos da Criança e do Adolescente de São José (CMDCA)',
    'Conselho Municipal de Política Cultural',
    'Conselho Municipal de Saúde de São José – CMS/SJ',
    'Conselhos de Segurança – CONSEG',
    'Conselho Municipal do Idoso de São José (CMI-SJ)',
    'Conselho Municipal dos Contribuintes',
    'Conselho Municipal dos Direitos da Pessoa com Deficiência de São José CMPD/SJ',
    'Conselho Municipal de Usuários dos Serviços Públicos',
    'Conselho Tutelar',
    'Conselho Fiscal – SJPREV',
    'Fundo Manutenção Educação Básica-FUNDEB'
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
            <h4 className='main-select-box__title'>Conselhos</h4>
            <select className='main-select-box__selecao' value={selectedOption} onChange={handleChange}>
                <option value="">Conselho...</option>
                {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
            </select>
        </div>
  );
}

export default Conselhos