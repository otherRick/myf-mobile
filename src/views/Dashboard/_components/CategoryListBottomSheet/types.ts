export interface ICategoryData {
  id: string;
  value: string;
  balanceType: 'income' | 'expense';
}

export interface ICategoryBottomSheetProps {
  onItemPress(categoryData: ICategoryData): void;
}