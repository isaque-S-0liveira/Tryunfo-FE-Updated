import { useState } from 'react';
import { BaseInputProps } from '../../types/Form';
import { CheckboxInputEvent } from '../../types/InputEvents';

function CheckBox({ id, label, className, onChange }: BaseInputProps) {
  const [inputValue, setInputValue] = useState(false);

  const handleCheckBoxChange = (event: CheckboxInputEvent) => {
    setInputValue((prevValue) => {
      const newValue = !prevValue;
      onChange(event);
      return newValue;
    });
  };

  return (
    <div className={ `${className} form-check` }>
      <input
        className="form-check-input"
        checked={ inputValue }
        type="checkbox"
        value={ String(inputValue) }
        id={ id }
        onChange={ handleCheckBoxChange }
      />
      <label className="form-check-label" htmlFor={ id }>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
