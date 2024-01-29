import { InputCheckboxProps } from '../../types/Form';
import { CheckboxInputEvent } from '../../types/InputEvents';

function CheckBox({
  id,
  label,
  className,
  valueChekBox,
  setCheckBox,
  onChange,
  disabled,
  idContainer,
}: InputCheckboxProps) {
  const handleCheckBoxChange = (event: CheckboxInputEvent) => {
    setCheckBox((prevValue) => {
      const newValue = !prevValue;
      onChange(event);
      return newValue;
    });
  };

  return (
    <div id={ idContainer } className={ `${className} form-check` }>
      <input
        className="form-check-input"
        checked={ valueChekBox }
        type="checkbox"
        value={ String(valueChekBox) }
        id={ id }
        disabled={ disabled }
        onChange={ handleCheckBoxChange }
      />
      <label className="form-check-label" htmlFor={ id }>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
