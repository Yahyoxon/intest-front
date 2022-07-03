export interface FilterState {
  grid_view: boolean;
  sort: 'price-lowest' | 'price-highest';
  filters: {
    text: string;
    category: string;
    min_price: number;
    max_price: number;
    year: number;
  };
  setGridView?: () => void;
  setListView?: () => void;
}
