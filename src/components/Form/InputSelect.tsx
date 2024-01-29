import { InputSelectProps } from '../../types/Form';
import { GenericInputEvent } from '../../types/InputEvents';
import handleInputChange from '../../helpers/InputController';

function InputSelect({
  id,
  inline,
  label,
  options,
  className,
  value,
  hasFeedBack,
  setInput,
  onChange,
}: InputSelectProps) {
  const handleInput = (event: GenericInputEvent) => {
    handleInputChange(event, setInput, onChange);
  };

  return (
    <div className={ `${className} ${inline ? 'row' : ''}` }>
      {label !== '' && <label className="mb-2" htmlFor={ id }>{label}</label>}

      <div className="d-flex">
        <select
          aria-label="Raridade"
          className="form-select custom-select custom-dropdown"
          id={ id }
          value={ value }
          onChange={ handleInput }
        >
          {options.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
        <div className={ `${hasFeedBack ? 'feedback' : 'd-none'}` } />
      </div>
    </div>
  );
}

export default InputSelect;
