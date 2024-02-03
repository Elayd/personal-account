import StatusBadge from '../StatusBadge/StatusBadge.tsx';
import { ICardProps } from '../../types/types.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Card = (props: ICardProps) => {
  const { finalStatusColor, finalStatusText, price, applicationID } = props;
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`${applicationID}`);
  };

  return (
    <div
      className={`rounded-2xl bg-gray-50 py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-8 w-1/4 overflow-hidden mx-2
                  ${isHovered ? 'ring-2 ring-gray-500 transform scale-105 transition-transform' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <p className="text-sm font-semibold text-gray-600">Application №{applicationID}</p>
      <p className="mt-4 flex items-baseline justify-center gap-x-2">
        <span className="text-3xl font-bold tracking-tight text-gray-900">Price: ${price}</span>
      </p>
      <div className="mt-2">
        <p className="text-sm font-semibold text-gray-600">Status:</p>
      </div>
      <div className="flex items-center justify-center">
        <StatusBadge color={finalStatusColor} text={finalStatusText} />
      </div>
      <p className="mt-4 text-xs leading-5 text-gray-600">If you faced with some problems, please call to support service</p>
    </div>
  );
};

export default Card;
