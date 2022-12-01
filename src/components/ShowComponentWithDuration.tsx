import React, { useState, useEffect } from 'react';

interface Props {
  duration: number;
  element: JSX.Element;
}

export const ShowComponentWithDuration: React.FC<Props> = ({
  duration,
  element,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return show ? element : null;
};
