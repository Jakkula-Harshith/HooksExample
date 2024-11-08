import { useState } from 'react';

function useAddTwo() {
  const [value, setValue] = useState(null);

  const updateValue = (newInputValue) => {
    if (typeof newInputValue === 'number') {
      setValue(newInputValue + 2);
    }
  };

  return [value, updateValue];
}

export default useAddTwo;
