import React, {
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useCallback,
} from 'react';
import reducer from './reducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { FilterState } from './types';

const initialState = {
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    min_price: 0,
    max_price: 0,
    year: 1990,
  },
};

interface Product {
  name: string;
}

const FilterContext = React.createContext<FilterState>({} as FilterState);

export const FilterProvider: React.FC = ({ children }) => {
  const products: Product[] = useMemo(() => [], []);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = useCallback(() => {
    dispatch({ type: SET_GRIDVIEW });
  }, [dispatch]);

  const setListView = useCallback(() => {
    dispatch({ type: SET_LISTVIEW });
  }, [dispatch]);

  const updateSort = (e: any) => {
    // const name = e.target.name;
    const { value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e: any) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = Number(value);
    }

    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const memoizedValue = useMemo(
    () => ({
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters,
    }),
    [state, setGridView, setListView]
  );
  return (
    <FilterContext.Provider value={memoizedValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
