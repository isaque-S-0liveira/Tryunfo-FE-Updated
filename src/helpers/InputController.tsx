import { GenericInputEvent } from '../types/InputEvents';

const handleInputChange = (
  event: GenericInputEvent,
  setState: React.Dispatch<React.SetStateAction<string | number>>,
  onChange: (event: GenericInputEvent) => void,
) => {
  const { value } = event.target;
  setState(value);
  onChange(event);
};

export default handleInputChange;
