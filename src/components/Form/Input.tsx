import { BaseInputProps } from '../../types/Form';

function Input({ id, type, label, tag, inline } : BaseInputProps) {
  const InputTag = tag || 'input';
  return (
    <div className={ `${inline === 'true' ? 'row' : ''} mb-4 ` }>
      <label className="col-sm-3 col-form-label" htmlFor={ id }>{label}</label>
      <div className="col">
        <InputTag type={ type } className="form-control" id={ id } />
      </div>
    </div>
  );
}

export default Input;
