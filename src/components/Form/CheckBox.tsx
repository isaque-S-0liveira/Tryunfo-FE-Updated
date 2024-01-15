import { BaseInputProps } from '../../types/Form';

function CheckBox({ id, label, className }: BaseInputProps) {
  return (
    <div className={ `${className} form-check` }>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={ id }
      />
      <label className="form-check-label" htmlFor={ id }>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
