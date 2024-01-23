import { useContext } from 'react';
import CardContext from '../../context/cardContext';
import './Card.css';

function Card({ className }: { className: string }) {
  const cardContext = useContext(CardContext);
  return (
    <div className={ `col-6 ${className}` }>
      <div className="container">
        <h2>Card</h2>
      </div>
    </div>

  );
}

export default Card;
