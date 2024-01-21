import { useState } from 'react';
import { BaseInputProps } from '../../types/Form';
import { GenericInputEvent } from '../../types/InputEvents';

function CheckBox({ id, label, className, onChange }: BaseInputProps) {
  const [inputValue, setInputValue] = useState(false);

  const handleCheckBoxChange = (event: GenericInputEvent) => {
    setInputValue(!inputValue);
    onChange(event);
  };

  return (
    <div className={ `${className} form-check` }>
      <input
        className="form-check-input"
        checked={ inputValue }
        type="checkbox"
        value="super-trunfo"
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
