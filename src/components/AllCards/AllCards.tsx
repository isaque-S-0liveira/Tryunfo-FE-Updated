/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import Title from '../Title/Title';
import './AllCards.css';
import Card from '../Card/Card';
import { CardType } from '../../types/card';
import allCardContext from '../../context/allCardContext';
import Input from '../Form/Input';
import InputSelect from '../Form/InputSelect';
import { RaridadeOptions } from '../../helpers/formsHelpers';
import CheckBox from '../Form/CheckBox';
import { GenericInputEvent } from '../../types/InputEvents';

interface InputsValuesType {
  search: string | number;
  FilterRarity: string | number;
  SuperTrunfoFilter: boolean;
}

function AllCards() {
  const defaultRarity = 'Raridade(Sem filtro)';
  const [allCards, setAllCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const [searchName, setSearchName] = useState<string | number>('');
  const [searchRarity, setSearchRarity] = useState<string | number>(defaultRarity);
  const [searchSuperTrunfo, setSearchSuperTrunfo] = useState<boolean>(false);
  const [inputsValues, setInputsValues] = useState<InputsValuesType>({
    search: '',
    FilterRarity: defaultRarity,
    SuperTrunfoFilter: false,
  });

  const { allCardCT } = useContext(allCardContext);

  const initializeCardsFromLocalStorage = () => {
    const stringJSONRecuperada = localStorage.getItem('allCards');
    const cardsFromStorage = JSON.parse(stringJSONRecuperada || '[]');
    setAllCards(cardsFromStorage);
    setFilteredCards(cardsFromStorage);
  };

  useEffect(() => {
    initializeCardsFromLocalStorage();
  }, [allCardCT]);

  useEffect(() => {
    initializeCardsFromLocalStorage();
  }, []);
  useEffect(() => {
    setFilteredCards(filterCards());
  }, [inputsValues, allCards]);

  const deleteCard = (id: number) => {
    const newCards = allCards.filter((card) => card.id !== id);
    setAllCards(newCards);
    localStorage.setItem('allCards', JSON.stringify(newCards));
    setFilteredCards(filterCards());
  };

  const handleChange = (e: GenericInputEvent) => {
    const { id, value, type } = e.target;
    setInputsValues({ ...inputsValues, [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value });
  };

  const filterCards = () => {
    let cards = allCards;
    if (inputsValues.search !== '') {
      cards = cards.filter((card) => card.nome.toLowerCase().includes(inputsValues.search.toString().toLowerCase()));
    } if (inputsValues.FilterRarity !== defaultRarity) {
      cards = cards.filter((card) => card.raridade === inputsValues.FilterRarity);
    } if (inputsValues.SuperTrunfoFilter) {
      cards = cards.filter((card) => card['Super-trunfo']);
    }
    return cards;
  };

  return (
    <section
      id="all-cards-main"
      className={ `container mt-5 ${allCards.length === 0 ? 'd-none' : 'd-block'}` }
    >
      <Title className="h3 text-center pt-5" title="todas as cartas" color="#fff" />
      <div className="row">
        <form id="filterForm" className=" col-12  mb-3 mt-5">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2 text-center text-md-start ">
              <h3>Filtros de busca</h3>
            </div>
            <Input
              id="search"
              label=""
              value={ searchName }
              setInput={ setSearchName }
              type="text"
              placeholder="Nome da carta"
              onChange={ handleChange }
              className="
              col-12
              col-sm-4
              col-md-3
              col-lg-4
              mt-3
              ms-sm-4
              ms-md-0
              mb-sm-3
              mb-md-0"
              feedBack=""
            />
            <InputSelect
              id="FilterRarity"
              className="col-12 col-sm-4 col-md-3 col-lg-4 mt-3  mb-sm-3 mb-md-0"
              label=""
              value={ searchRarity }
              setInput={ setSearchRarity }
              onChange={ handleChange }
              options={ [defaultRarity, ...RaridadeOptions] }
              feedBack=""
            />
            <div className="col-12 col-sm-3 col-md-3 col-lg-2 mt-3 mb-3 mb-md-0">
              <CheckBox
                idContainer="SuperTrunfoFilterContainer"
                id="SuperTrunfoFilter"
                label="Super Trunfo"
                valueChekBox={ searchSuperTrunfo }
                setCheckBox={ setSearchSuperTrunfo }
                onChange={ handleChange }
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        {filteredCards.map((card: CardType) => (
          <Card
            key={ card.id }
            className="mt-5 mb-5 col-12 col-lg-4"
            nome={ card.nome }
            descricao={ card.descricao }
            Attr01={ card.Attr01 }
            Attr02={ card.Attr02 }
            Attr03={ card.Attr03 }
            imagemLink={ card['imagem-link'] }
            raridade={ card.raridade }
            SuperTrunfo={ card['Super-trunfo'] }
            attrFontSize=".9em"
            onClick={ deleteCard }
            id={ card.id }
          />
        ))}
      </div>
    </section>
  );
}

export default AllCards;
