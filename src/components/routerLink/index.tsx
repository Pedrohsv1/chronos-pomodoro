import { Link } from 'react-router';

import { ReactNode } from 'react';

type RouterLinkProps = React.ComponentProps<'a'> & {
  href: string;
  children: ReactNode;
};

export const RouterLink = ({ children, href, ...props }: RouterLinkProps) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};
