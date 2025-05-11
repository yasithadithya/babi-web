import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const RouterLinkWrapper = forwardRef<HTMLAnchorElement, LinkProps>(function RouterLinkWrapper(props, ref) {
  return <Link ref={ref} {...props} />;
});

export default RouterLinkWrapper;
