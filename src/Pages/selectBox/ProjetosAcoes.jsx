import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import '../../Styles/selectBox/SelectBox.css'

function removeSpecialCharacters(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

const ProjetosAcoes = () => {
  const options = [
    'Projeto Justiça e Práticas Restaurativas',
    'Centro de Atenção à Terceira Idade',
    'Horários de atividades da FUNESJ',
    'Plano Municipal de Vacinação',
    'Novas leis de Trânsito',
    'Feira da Freguesia',
    'Coleta Seletiva',
    'Lista de Espera do Sistema Único de Saúde (SUS)',
    'Termos de Parcerias Fundação Esportes'
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
            <h4 className='main-select-box__title'>Projetos e Ações</h4>
            <select className='main-select-box__selecao' value={selectedOption} onChange={handleChange}>
                <option value="">Projetos e Ações...</option>
                {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
            </select>
        </div>
  );
}

export default ProjetosAcoes