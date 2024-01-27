/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable react-hooks/rules-of-hooks */

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
import { RaridadeOptions } from '../../helpers/formsHelpers';
import { CardType } from '../../types/card';
import allCardContext from '../../context/allCardContext';

function Form() {
  const ATTR_MESSAGE = 'Atributo deve ser um número entre 0 e 90';
  const { setCardCT } = useContext(CardContext);
  const { setAllCardCT } = useContext(allCardContext);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackDescricao, setFeedbackDescricao] = useState('');
  const [feedbackAtt1, setFeedbackAtt1] = useState('');
  const [feedbackAtt2, setFeedbackAtt2] = useState('');
  const [feedbackAtt3, setFeedbackAtt3] = useState('');
  const [points, setPoints] = useState(270);
  const [card, setCard] = useState(initialCardState);
  const [allCards, setAllCards] = useState<CardType[]>([]);

  const handleClick = () => {
    const newCard: CardType = {
      ...card,
      id: allCards.length + 1,
    };
    setAllCards((prevAllCards) => [...prevAllCards, newCard]);
  };

  useEffect(() => {
    setAllCardCT(allCards);
  }, [allCards]);

  const handleChange = (event: GenericInputEvent) => {
    const { id, value, type } = event.target;
    setCard((prevCard) => ({
      ...prevCard,
      [id]: value,
    }));

    if (type === 'checkbox') {
      const target = event.target as HTMLInputElement;
      setCard((prevCard) => ({
        ...prevCard,
        [id]: target.checked,
      }));
    }
  };

  useEffect(() => {
    setCardCT(card);
  }, [card]);

  useEffect(() => {
    const { Attr01, Attr02, Attr03 } = card;
    const sum = Number(Attr01) + Number(Attr02) + Number(Attr03);
    const newPoints = 270 - sum;
    setPoints(newPoints);
  }, [card.Attr01, card.Attr02, card.Attr03, card]);

  const createInputStringEffect = (
    input: 'nome' | 'descricao',
    condition: number,
    setFeedback: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    useEffect(() => {
      if (card[input].length > 0) {
        setCard((prevCard) => ({
          ...prevCard,
          [input]: card[input][0].toUpperCase() + card[input].slice(1),
        }));
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
    attribute: 'Attr01' | 'Attr02' | 'Attr03',
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
  createAttributeEffect('Attr01', setFeedbackAtt1);
  createAttributeEffect('Attr02', setFeedbackAtt2);
  createAttributeEffect('Attr03', setFeedbackAtt3);

  useEffect(() => {
    const feedbacks = [
      feedbackName,
      feedbackDescricao,
      feedbackAtt1,
      feedbackAtt2,
      feedbackAtt3,
    ];

    const allFeedbacksSuccess = feedbacks.every((feedback) => feedback === 'success');

    setButtonDisable(!allFeedbacksSuccess);
  }, [feedbackName, feedbackDescricao, feedbackAtt1, feedbackAtt2, feedbackAtt3]);

  return (
    <div
      id="newCheapContainer"
      className="col-12 pb-5 col-md-6"
    >
      <form>
        <div className="pe-5 ps-5 pe-md-2 ps-md-5">
          <Title
            className="h3 text-color-primary  mb-5"
            title="Adicione nova carta"
          />
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
              id="Attr01"
              onChange={ handleChange }
              type="number"
              label="Attr01"
              inline
              placeholder="0"
              className="mb-4 "
              min={ 0 }
              max={ 90 }
              feedBack={ feedbackAtt1 }
              feedBackMessage={ ATTR_MESSAGE }
            />
            <Input
              onChange={ handleChange }
              id="Attr02"
              type="number"
              label="Attr02"
              inline
              placeholder="0"
              className="mb-4 "
              min={ 0 }
              max={ 90 }
              feedBack={ feedbackAtt2 }
              feedBackMessage={ ATTR_MESSAGE }
            />
            <Input
              onChange={ handleChange }
              id="Attr03"
              type="number"
              label="Attr03"
              inline
              placeholder="0"
              className="mb-2 "
              min={ 0 }
              max={ 90 }
              feedBack={ feedbackAtt3 }
              feedBackMessage={ ATTR_MESSAGE }
            />

            <div className="col-12 d-flex justify-content-end mb-3">
              <div
                className={ `${points > 0 && points <= 270
                  ? 'text-success' : 'text-danger '} me-5` }
              >
                <span id="pontos-restantes">
                  Pontos restantes:
                  {' '}
                  {points}
                </span>
              </div>
            </div>
          </div>
          <Input
            onChange={ handleChange }
            id="imagem-link"
            inline
            type="text"
            label="Imagem"
            icon={ {
              icon: 'bi bi-link-45deg',
              iconId: 'icon-link',
              spanId: 'span-link' } }
            className=""
            placeholder="link da imagem"
          />

          <InputSelect
            onChange={ handleChange }
            className="mt-4"
            id="raridade"
            label="Raridade"
            options={ RaridadeOptions }
          />
        </div>
        <div className="container mt-5">
          <div id="checkBox-button-container" className="row">
            <CheckBox
              onChange={ handleChange }
              className="col-12 mb-5 mb-md-0"
              id="Super-trunfo"
              label="Super Trybe Trunfo"
            />

            <Card
              preview
              className="d-md-none col-12"
              nome={ card.nome }
              descricao={ card.descricao }
              Attr01={ card.Attr01 }
              Attr02={ card.Attr02 }
              Attr03={ card.Attr03 }
              imagemLink={ card['imagem-link'] }
              raridade={ card.raridade }
              SuperTrunfo={ card['Super-trunfo'] }
              attrFontSize="1em"
            />

            <div id="button" className="d-flex justify-content-center ">
              <Button
                className="col-10 mt-5 mt-md-0"
                text="Salvar"
                onClick={ handleClick }
                disabled={ buttonDisable }
              />
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
