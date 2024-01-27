import { useState } from 'react';
import handleInputChange from '../../helpers/InputController';
import { GenericInputEvent } from '../../types/InputEvents';
import { BaseInputProps } from '../../types/Form';

function Input({
  id,
  type,
  label,
  tag,
  inline,
  placeholder,
  className,
  min,
  max,
  icon,
  feedBack,
  feedBackMessage,
  onChange,
}: BaseInputProps) {
  const InputTag = tag || 'input';
  const [inputValue, setInputValue] = useState<string | number>('');

  const handleInput = (event: GenericInputEvent) => {
    handleInputChange(event, setInputValue, onChange);
  };

  return (
    <div className={ `${className}` }>
      <div className={ `${inline ? 'row' : ''}` }>
        {label !== '' && (
          <label className="col-sm-3 col-form-label" htmlFor={ id }>{label}</label>)}

        <div className="input-group col">
          <InputTag
            onChange={ handleInput }
            value={ inputValue }
            type={ type }
            className="form-control"
            id={ id }
            placeholder={ placeholder }
            min={ min }
            max={ max }
          />

          {icon && (
            <span id={ icon.spanId } key={ icon.spanId } className="input-group-text">
              <i id={ icon.iconId } className={ icon.icon } />
            </span>
          )}
          <div className="feedback">
            {feedBack === '' && <span />}
            {feedBack === 'success'
           && <span><i className="bi bi-check-circle" /></span>}
            {feedBack === 'error' && (
              <span>
                <i className="bi bi-exclamation-circle" />
              </span>
            )}

          </div>
        </div>
      </div>
      {
        feedBack === 'error' && <span className="text-danger">{feedBackMessage}</span>
      }
    </div>
  );
}

export default Input;
