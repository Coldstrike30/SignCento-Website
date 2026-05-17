import { useEffect } from 'react';

export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Signcentro`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
}
