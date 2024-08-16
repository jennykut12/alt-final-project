import { useEffect, useState } from 'react';
import { Data } from '../type/fetch-data';

export const useFetchData = () => {
  const [data, setData] = useState<Data[]>([]);
  const [currentItems, setCurrentItems] = useState<Data[]>([]);
  const [state, setState] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const itemsPerPage = 50;

  useEffect(() => {
    // Calculate the number of items per page and update state
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Handle page click
  const handlePageClick = (page: number) => {
    const newOffset = (page * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const getDistinctStates = (data: Data[]) => {
    const stateSet = new Set<string>();

    data.forEach((item) => {
      stateSet.add(item.state.name);
    });

    setState(Array.from(stateSet));
  };
  const getDistinctType = (data: Data[]) => {
    const typeSet = new Set<string>();

    data.forEach((item) => {
      typeSet.add(item.type.name);
    });

    setType(Array.from(typeSet));
  };

  const fetchData = async () => {
    try {
      const fetchProviders = await fetch(
        'https://api.reliancehmo.com/v3/providers'
      );
      if (!fetchProviders.ok) {
        throw new Error('Network response was not ok');
      }
      const providers = await fetchProviders.json();
      setData(providers.data);
      getDistinctStates(providers.data);
      getDistinctType(providers.data);
    } catch (e) {
      console.error('Fetch error:', e);
    }
  };

  const handleSelected = (value: string) => {
    setSelected((prev) => [...prev, value]);
  };

  const handleRemoveSelected = (value: string) => {
    setSelected((prev) => prev.filter((item) => item !== value));
  };

  const clearSelected = () => {
    setSelected([]);
  };

  return {
    fetchData,
    handleSelected,
    clearSelected,
    handleRemoveSelected,
    selected,
    currentItems,
    state,
    type,
    pageCount,
    itemOffset,
    itemsPerPage,
    data,
    handlePageClick,
  };
};
