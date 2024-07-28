import { useState, useEffect, useCallback } from 'react';

const useSearch = (initialData, searchKeys) => {
  const [searchField, setSearchField] = useState();
  const [filteredData, setFilteredData] = useState(initialData);

  const onSearchChange = useCallback((e) => {
    setSearchField(e.target.value.toLowerCase());
  }, []);

  useEffect(() => {
    const newFilteredData = initialData.filter((item) =>
      searchKeys.some((key) =>
        item[key].toString().toLowerCase().includes(searchField)
      )
    );
    setFilteredData(newFilteredData);
  }, [searchField]);

  return { onSearchChange, filteredData };
};

export default useSearch;