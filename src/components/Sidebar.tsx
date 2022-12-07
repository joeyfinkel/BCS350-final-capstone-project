import React, { useContext, useState } from 'react';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarProps } from './types';
import { Title } from './Title';
import styles from '../styles/Sidebar.module.css';
import { AuthContext } from '../context/authContext';

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  contentPosition,
  title,
  signOut,
  titleSize,
}) => {
  const [color, setColor] = useState('#f7f7ff');
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser?.(null);
  };

  return (
    <div className={styles.sidebar}>
      <div className='d-flex p-3 w-100'>
        <div
          className={`d-flex flex-column justify-content-${contentPosition} gap-3 w-100`}
        >
          <div className='d-flex justify-content-between align-items-center gap-2'>
            {user ? (
              <Link to='/settings' className={styles.settingsLink}>
                <Title title={title} titleSize={titleSize} />
              </Link>
            ) : (
              <Title title={title} titleSize={titleSize} />
            )}
          </div>
          {children}
          {signOut && (
            <OverlayTrigger
              placement='left'
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip>Log out</Tooltip>}
            >
              <FontAwesomeIcon
                icon={faSignOut}
                color={color}
                size='lg'
                role='button'
                className='align-self-end'
                onClick={logout}
                onMouseEnter={() => setColor('#0e103d')}
                onMouseLeave={() => setColor('#f7f7ff')}
              />
            </OverlayTrigger>
          )}
        </div>
      </div>
    </div>
  );
};
