import { createContext, useContext } from 'react';

export type GlobalContent = {
  filterCat?: number | string;
  setFilterCat?: any;
};
export const MyGlobalContext = createContext<GlobalContent>({
  // set a default value
  filterCat: '',
});
export const useGlobalContext = () => useContext(MyGlobalContext);
