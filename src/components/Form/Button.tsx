import { ButtonProps } from '../../types/Form';

function Button({ text, onClick, disabled, className }: ButtonProps) {
  return (

    <button
      className={ `btn ${className}` }
      onClick={ onClick }
      disabled={ disabled }
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
