import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  href: string;
  text: string;
}

export const NavigationButton: React.FC<Props> = ({ href, text }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setActive(pathname === href);
  };

  return (
    <Link to={href}>
      <Button
        className={`w-100 ${
          active || pathname === href ? 'active' : 'undefined'
        }`}
        onClick={handleClick}
      >
        {text}
      </Button>
    </Link>
  );
};
