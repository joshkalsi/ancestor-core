export interface ColumnType {
  id: number;
  title: string;
  position: number | null;
}

export interface KanbanData {
  columns: ColumnType[];
  columnOrder: (string | number)[];
}

export interface CardType {
  id: string;
  name: string;
  categories: Array<App.Data.CategoryData>;
}
