import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import { updateOrder as updateStageOrder } from '@/actions/App/Http/Controllers/StageController';
import { reorder } from '@/utils/reorder';
import Column from './Column';
import { ColumnType, KanbanData } from './types';

interface Props {
  columns: ColumnType[];
  units: App.Data.UnitData[];
}

const KanbanBoard = ({ columns, units }: Props) => {
  const [syncingData, setSyncingData] = useState(false);

  const [data, setData] = useState<KanbanData>({
    columns,
    columnOrder: [...columns]
      .sort((a, b) => (a.position || 0) - (b.position || 0))
      .map((col) => col.id),
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (
      !destination ||
      (destination.index === source.index &&
        destination.droppableId === source.droppableId)
    ) {
      return;
    }

    const newColumnOrder = reorder(
      data.columnOrder,
      source.index,
      destination.index,
    );

    // Update state with the new column order
    const newState: KanbanData = {
      ...data,
      columnOrder: newColumnOrder,
    };
    setData(newState);
  };

  useEffect(() => {
    setSyncingData(true);
    axios
      .put(updateStageOrder().url, {
        order: data.columnOrder,
      })
      .catch((error) => {
        console.error(error.response.data);
      })
      .finally(() => {
        setTimeout(() => {
          setSyncingData(false);
        }, 500);
      });
  }, [data]);

  return (
    <div className="relative h-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="board-columns"
          type="column"
          direction="horizontal"
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex items-start overflow-x-auto p-4"
            >
              {data.columnOrder.map((columnId, index) => {
                const column = data.columns.find((col) => col.id === columnId);
                if (column)
                  return (
                    <Column
                      key={column.id}
                      column={column}
                      index={index}
                      cards={units.filter(
                        (unit) => unit.stage.id === column.id,
                      )}
                    />
                  );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {syncingData && (
        <LoaderCircle className="absolute right-4 bottom-4 animate-spin" />
      )}
    </div>
  );
};

export default KanbanBoard;
