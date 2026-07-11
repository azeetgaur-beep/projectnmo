import type { ReactNode, MouseEvent } from "react";
import { Link, useLocation } from "react-router";

type AnchorLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

function parseTarget(to: string, currentPath: string) {
  const hashIndex = to.indexOf("#");

  if (hashIndex === -1) {
    return { pathname: to, hash: "" };
  }

  const pathname = to.slice(0, hashIndex) || currentPath || "/";
  const hash = to.slice(hashIndex + 1);

  return { pathname, hash };
}

export function AnchorLink({ to, children, className, onClick }: AnchorLinkProps) {
  const location = useLocation();

  if (to.startsWith("mailto:") || to.startsWith("http://") || to.startsWith("https://")) {
    return (
      <a href={to} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  const { pathname, hash } = parseTarget(to, location.pathname);
  const isSamePage = pathname === location.pathname;

  const handleSamePageScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${hash}`);
    }
    onClick?.();
  };

  if (hash && isSamePage) {
    return (
      <a href={`#${hash}`} className={className} onClick={handleSamePageScroll}>
        {children}
      </a>
    );
  }

  if (hash) {
    return (
      <Link
        to={{ pathname, hash }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link to={pathname} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
