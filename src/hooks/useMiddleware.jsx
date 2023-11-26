import React, { useCallback } from 'react';

function useMiddleware() {
  const checkAuthUser = useCallback(() => {
    // ...
  });
  return { checkAuthUser };
}

export default useMiddleware;
