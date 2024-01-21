/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import Input from './Input';
import './Form.css';
import Title from '../Title/Title';
import InputSelect from './InputSelect';
import CheckBox from './CheckBox';
import Button from './Button';
import { GenericInputEvent } from '../../types/InputEvents';

function Form() {
  const ATTR_MESSAGE = 'Atributo deve ser um número entre 0 e 90';
  const initialCardState = {
    nome: '',
    descricao: '',
    atributo1: 0,
    atributo2: 0,
    atributo3: 0,
    'imagem-link': '',
    raridade: 'Comum',
  };
  const [buttonDisable, setButtonDisable] = useState(true);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackDescricao, setFeedbackDescricao] = useState('');
  const [feedbackAtt1, setFeedbackAtt1] = useState('');
  const [feedbackAtt2, setFeedbackAtt2] = useState('');
  const [feedbackAtt3, setFeedbackAtt3] = useState('');
  const [points, setPoints] = useState(210);
  const [card, setCard] = useState(initialCardState);

  const handleChange = (event: GenericInputEvent) => {
    const { id, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (card.nome.length > 0) {
      if (card.nome.length >= 3) {
        setFeedbackName('success');
      } else {
        setFeedbackName('error');
      }
    } else {
      setFeedbackName('');
    }
  }, [card.nome]);

  useEffect(() => {
    if (card.descricao.length > 0) {
      if (card.descricao.length >= 5) {
        setFeedbackDescricao('success');
      } else {
        setFeedbackDescricao('error');
      }
    } else {
      setFeedbackDescricao('');
    }
  }, [card.descricao]);

  useEffect(() => {
    if (card.atributo1 >= 0 && card.atributo1 <= 90) {
      setFeedbackAtt1('success');
    } else {
      setFeedbackAtt1('error');
    }
  }, [card.atributo1]);

  useEffect(() => {
    if (card.atributo2 >= 0 && card.atributo2 <= 90) {
      setFeedbackAtt2('success');
    } else {
      setFeedbackAtt2('error');
    }
  }, [card.atributo2]);

  useEffect(() => {
    if (card.atributo3 >= 0 && card.atributo3 <= 90) {
      setFeedbackAtt3('success');
    } else {
      setFeedbackAtt3('error');
    }
  }, [card.atributo3]);

  useEffect(() => {
    const feedbacks = [feedbackName, feedbackDescricao, feedbackAtt1, feedbackAtt2, feedbackAtt3];

    const allFeedbacksSuccess = feedbacks.every((feedback) => feedback === 'success');

    setButtonDisable(!allFeedbacksSuccess);
  }, [feedbackName, feedbackDescricao, feedbackAtt1, feedbackAtt2, feedbackAtt3]);

  return (
    <div id="newCheapContainer" className="col-12 col-md-7 p-5 ">
      <Title color="#2FC18C" className="h3" title="Adicione nova carta" />
      <form>
        <Input
          onChange={ handleChange }
          id="nome"
          type="text"
          label="Nome:"
          feedBack={ feedbackName }
          feedBackMessage="Nome deve ter no mínimo 3 caracteres"
        />
        <Input
          id="descricao"
          type="text"
          label="Descrição:"
          tag="textarea"
          onChange={ handleChange }
          feedBack={ feedbackDescricao }
          feedBackMessage="Descrição deve ter no mínimo 5 caracteres"
        />
        <div className="mt-3">
          <Input
            id="atributo1"
            onChange={ handleChange }
            type="number"
            label="attr01"
            inline
            placeholder="0"
            className="mb-4"
            min={ 0 }
            max={ 90 }
            feedBack={ feedbackAtt1 }
            feedBackMessage={ ATTR_MESSAGE }
          />
          <Input
            onChange={ handleChange }
            id="atributo2"
            type="number"
            label="attr02"
            inline
            placeholder="0"
            className="mb-4"
            min={ 0 }
            max={ 90 }
            feedBack={ feedbackAtt2 }
            feedBackMessage={ ATTR_MESSAGE }
          />
          <Input
            onChange={ handleChange }
            id="atributo3"
            type="number"
            label="attr03"
            inline
            placeholder="0"
            className="mb-2"
            min={ 0 }
            max={ 90 }
            feedBack={ feedbackAtt3 }
            feedBackMessage={ ATTR_MESSAGE }
          />

          <div className="col-12 d-flex justify-content-end mb-3">
            <span id="pontos-restantes" className="me-5">
              Pontos restantes:
              {' '}
              {points}
            </span>
          </div>
        </div>
        <Input
          onChange={ handleChange }
          id="imagem-link"
          inline
          type="text"
          label="Imagem"
          icon={ { icon: 'bi bi-link-45deg', iconId: 'icon-link', spanId: 'span-link' } }
          placeholder="link da imagem"
        />

        <InputSelect
          onChange={ handleChange }
          id="raridade"
          label="Raridade"
          options={ [
            'Comum',
            'Raro',
            'Épico',
            'Lendário',
          ] }
        />
        <div className="container mt-5">
          <div id="checkBox-button-container" className="row">
            <CheckBox onChange={ handleChange } className="col-12 mb-5 mb-md-0" id="Super-trunfo" label="Super Trybe Trunfo" />

            {/* Prévia do baralho */}

            <Button className="col-12 mt-5 mt-md-0" text="Salvar" onClick={ () => {} } disabled={ buttonDisable } />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
