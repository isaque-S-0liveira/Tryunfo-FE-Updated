export type BaseInputProps = {
  id: string;
  type?: string;
  label: string;
  inline?: string;
  tag?: 'input' | 'textarea';
  className?: string;
  placeholder?: string;
};

export type InputGroupProps = BaseInputProps & {
  icon: string;
  ariaLabel: string;
};

export type InputSelectProps = BaseInputProps & {
  options: string[];
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
