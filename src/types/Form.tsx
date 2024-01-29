import { GenericInputEvent } from './InputEvents';

export type BaseInputProps = {
  id: string;
  label?: string;
  type?: string;
  inline?: boolean;
  value: string | number;
  setInput: React.Dispatch<React.SetStateAction<string | number>>;
  tag?: 'input' | 'textarea';
  className?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  feedBack?: string;
  hasFeedBack?: boolean;
  feedBackMessage?: string;
  icon?: {
    spanId?: string;
    icon: string;
    iconId: string;
  };
  onChange: (event: GenericInputEvent) => void;
};

export type InputGroupProps = BaseInputProps & {
  icon: string;
  ariaLabel: string;
};

export type InputSelectProps = BaseInputProps & {
  options: string[];
};

export type InputCheckboxProps = {
  id: string;
  idContainer?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  onChange: (event: GenericInputEvent) => void;
  setCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
  valueChekBox: boolean;
};

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
