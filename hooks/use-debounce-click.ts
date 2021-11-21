import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

export default function useDebounceClick(time = 200, initial = false) {
  const [state, setState] = useState<boolean>(initial);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceClick = useCallback(
    debounce(() => setState(!state), time),
    [state, time],
  );

  return [state, debounceClick] as const;
}
