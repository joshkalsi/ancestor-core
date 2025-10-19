declare namespace App.Data {
export type CategoryData = {
id: number;
name: string;
created_at: string;
updated_at: string;
};
export type StageData = {
id: number;
title: string;
position: number | null;
created_at: string;
updated_at: string;
};
export type UnitData = {
id: string;
name: string;
categories: Array<App.Data.CategoryData>;
stage: App.Data.StageData;
created_at: string;
updated_at: string;
};
}
