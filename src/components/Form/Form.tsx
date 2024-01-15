/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import Input from './Input';
import './Form.css';
import Title from '../Title/Title';
import InputGroup from './InputGroup';
import InputSelect from './InputSelect';
import CheckBox from './CheckBox';
import Button from './Button';

function Form() {
  return (
    <div id="newCheapContainer" className="col-12 col-md-7 p-5 ">
      <Title color="#2FC18C" className="h3" title="Adicione nova carta" />
      <form>

        <Input id="nome" type="text" label="Nome:" />
        <Input
          id="descricao"
          type="text"
          label="Descrição:"
          tag="textarea"
        />
        <div className="mt-3">
          <Input id="atributo1" type="number" label="attr01" inline="true" />
          <Input id="atributo2" type="number" label="attr02" inline="true" />
          <Input id="atributo3" type="number" label="attr03" inline="true" />
        </div>
        <InputGroup
          label="Imagem"
          id="imagem-link"
          icon="bi bi-link-45deg"
          ariaLabel="link"
          placeholder="link da imagem"
        />
        <InputSelect
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
            <CheckBox className="col-12 mb-5 mb-md-0" id="Super-trunfo" label="Super Trybe Trunfo" />

            {/* Prévia do baralho */}

            <Button className="col-12 mt-5 mt-md-0" text="Salvar" onClick={ () => {} } disabled={ false } />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
