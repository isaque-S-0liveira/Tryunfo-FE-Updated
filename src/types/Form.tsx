import { GenericInputEvent } from './InputEvents';

export type BaseInputProps = {
  id: string;
  label?: string;
  type?: string;
  inline?: boolean;
  tag?: 'input' | 'textarea';
  className?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  feedBack?: string;
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

export type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
