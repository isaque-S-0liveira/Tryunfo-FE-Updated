/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import Input from './Input';
import './Form.css';
import Title from '../Title/Title';
import InputSelect from './InputSelect';
import CheckBox from './CheckBox';
import Button from './Button';
import { GenericInputEvent } from '../../types/InputEvents';
import initialCardState from '../../helpers/initialCardState';
import CardContext from '../../context/cardContext';
import Card from '../Card/Card';

function Form() {
  const ATTR_MESSAGE = 'Atributo deve ser um número entre 0 e 90';
  const cardContext = useContext(CardContext);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackDescricao, setFeedbackDescricao] = useState('');
  const [feedbackAtt1, setFeedbackAtt1] = useState('');
  const [feedbackAtt2, setFeedbackAtt2] = useState('');
  const [feedbackAtt3, setFeedbackAtt3] = useState('');
  const [points, setPoints] = useState(270);
  const [card, setCard] = useState(initialCardState);

  const handleChange = (event: GenericInputEvent) => {
    const { id, value } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [id]: value,
    }));
  };

  useEffect(() => {
    cardContext.setCardCT(card);
  }, [card]);

  useEffect(() => {
    const { atributo1, atributo2, atributo3 } = card;
    const sum = Number(atributo1) + Number(atributo2) + Number(atributo3);
    const newPoints = 270 - sum;
    setPoints(newPoints);
  }, [card.atributo1, card.atributo2, card.atributo3, card]);

  const createInputStringEffect = (
    input: 'nome' | 'descricao',
    condition: number,
    setFeedback: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    useEffect(() => {
      if (card[input].length > 0) {
        if (card[input].length >= condition) {
          setFeedback('success');
        } else {
          setFeedback('error');
        }
      } else {
        setFeedback('');
      }
    }, [card[input]]);
  };

  const createAttributeEffect = (
    attribute: 'atributo1' | 'atributo2' | 'atributo3',
    setFeedback: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    useEffect(() => {
      if (card[attribute] >= 0 && card[attribute] <= 90) {
        setFeedback('success');
      } else {
        setFeedback('error');
      }
    }, [card[attribute]]);
  };

  createInputStringEffect('nome', 3, setFeedbackName);
  createInputStringEffect('descricao', 5, setFeedbackDescricao);
  createAttributeEffect('atributo1', setFeedbackAtt1);
  createAttributeEffect('atributo2', setFeedbackAtt2);
  createAttributeEffect('atributo3', setFeedbackAtt3);

  useEffect(() => {
    const feedbacks = [feedbackName, feedbackDescricao, feedbackAtt1, feedbackAtt2, feedbackAtt3];

    const allFeedbacksSuccess = feedbacks.every((feedback) => feedback === 'success');

    setButtonDisable(!allFeedbacksSuccess);
  }, [feedbackName, feedbackDescricao, feedbackAtt1, feedbackAtt2, feedbackAtt3]);

  return (
    <div id="newCheapContainer" className="col-12 pe-5 ps-5 pe-md-2 ps-md-5 col-md-6 pb-5 ">
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
            <span id="pontos-restantes" className={ `${points > 0 && points <= 270 ? 'text-success' : 'text-danger'} me-5` }>
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

            <Card className="d-md-none" />

            <Button className="col-12 mt-5 mt-md-0" text="Salvar" onClick={ () => {} } disabled={ buttonDisable } />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
