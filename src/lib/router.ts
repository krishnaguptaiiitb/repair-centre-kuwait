// Lightweight hash-based router (no external dependency).
import { useEffect, useState, useCallback } from 'react';

export type RoutePath = '/' | '/services' | '/about' | '/contact';

function parseHash(): RoutePath {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  if (raw === '/services' || raw === '/about' || raw === '/contact') return raw;
  return '/';
}

export function useRouter() {
  const [path, setPath] = useState<RoutePath>(parseHash());

  useEffect(() => {
    const onHash = () => {
      setPath(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((to: RoutePath) => {
    window.location.hash = to;
  }, []);

  return { path, navigate };
}
