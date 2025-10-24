import { CardType } from './types';

const Card = ({ name, categories }: CardType) => {
  return (
    <div className="rounded-md border border-gray-400 px-2 py-4">
      <p className="text-lg font-medium">{name}</p>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
