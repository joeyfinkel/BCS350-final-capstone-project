import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, LinkProps, useLocation } from 'react-router-dom';

interface Props extends Pick<LinkProps, 'to'> {
  text: string;
}

export const NavigationButton: React.FC<Props> = ({ to, text }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setActive(pathname === to);
  };

  return (
    <Link to={to}>
      <Button
        className={`w-100 ${
          active || pathname === to ? 'active' : 'undefined'
        }`}
        onClick={handleClick}
      >
        {text}
      </Button>
    </Link>
  );
};
