import { useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = updateValue => {
    setValue(updateValue);
  }

  return [value, handleChanges];
}