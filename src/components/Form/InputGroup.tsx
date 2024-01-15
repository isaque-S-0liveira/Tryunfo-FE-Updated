import { InputGroupProps } from '../../types/Form';

function InputGroup({ label, id, icon, ariaLabel, type, placeholder }: InputGroupProps) {
  return (
    <div className="row">
      <label htmlFor={ id } className="col-sm-3 col-form-label">
        { label }
      </label>
      <div className="col-sm-9">
        <div className="input-group">
          <input
            type={ type }
            id="imagem-link"
            className="form-control"
            aria-label={ ariaLabel }
            placeholder={ placeholder }
          />
          <span className="input-group-text"><i className={ icon } /></span>
        </div>
      </div>
    </div>
  );
}

export default InputGroup;
