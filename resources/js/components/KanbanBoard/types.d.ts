export interface ColumnType {
  id: number;
  title: string;
  position: number | null;
}

export interface KanbanData {
  columns: ColumnType[];
  columnOrder: (string | number)[];
}
