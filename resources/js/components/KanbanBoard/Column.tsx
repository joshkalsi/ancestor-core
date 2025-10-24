// Column.tsx
import { Draggable } from '@hello-pangea/dnd';
import { GripIcon } from 'lucide-react';
import React from 'react';

import Card from './Card';
import { CardType, ColumnType } from './types';

interface ColumnProps {
  column: ColumnType;
  cards: CardType[];
  index: number;
}

const Column: React.FC<ColumnProps> = ({ column, index, cards }) => {
  return (
    <Draggable draggableId={`col-${column.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`mx-2 flex w-96 min-w-64 flex-col rounded-lg p-4 shadow-lg transition-shadow duration-200 ${snapshot.isDragging ? 'scale-[1.02] bg-indigo-100 shadow-2xl' : 'bg-white'} `}
        >
          <h3
            className="mb-4 flex justify-between border-b pb-2 text-lg font-semibold text-gray-800"
            {...provided.dragHandleProps}
          >
            {column.title}

            <GripIcon className="text-gray-500" />
          </h3>

          <div className="min-h-24 flex-grow space-y-4">
            {cards.length === 0 && (
              <p className="text-sm text-gray-400">No tasks in this example</p>
            )}
            {cards.map((card) => (
              <Card {...card} />
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
