import { LabelProps } from '../../types/Form';

function Label({ id, label, className }: LabelProps) {
  return (
    <label htmlFor={ id } className={ className }>
      {label}
    </label>
  );
}

export default Label;
