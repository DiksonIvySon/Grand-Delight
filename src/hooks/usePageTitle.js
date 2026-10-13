import { useEffect } from 'react';

/**
 * Sets the browser tab title for the current page.
 * Usage: usePageTitle("Menu") → tab shows "Menu | Grand Delight"
 */
function usePageTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | Grand Delight`
      : 'Grand Delight Restaurant';
  }, [pageTitle]);
}

export default usePageTitle;
