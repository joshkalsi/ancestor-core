declare namespace App.Data {
  export type CategoryData = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  };
  export type UnitData = {
    id: string;
    name: string;
    categories: Array<App.Data.CategoryData>;
    created_at: string;
    updated_at: string;
  };
}
