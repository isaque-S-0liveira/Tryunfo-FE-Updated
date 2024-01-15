import { useState } from 'react';
import { InputSelectProps } from '../../types/Form';

function InputSelect({ id, label, options }: InputSelectProps) {
  const [selectedOption, setSelectedOption] = useState('Comum');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mt-4">
      <label className="mb-2" htmlFor={ id }>{label}</label>

      <select
        aria-label="Raridade"
        className="form-select"
        id={ id }
        value={ selectedOption }
        onChange={ handleChange }
      >
        {options.map((option) => (
          <option key={ option } value={ option }>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
