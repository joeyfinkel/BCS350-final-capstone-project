import React, { useState } from 'react';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SidebarProps } from './types';
import { Title } from './Title';
import styles from '../styles/Sidebar.module.css';

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  contentPosition,
  title,
  button,
  buttonText,
  signOut,
  titleSize,
  loggedIn,
}) => {
  const [color, setColor] = useState('#f7f7ff');

  return (
    <div className={styles.sidebar}>
      <div className='d-flex p-3'>
        <div
          className={`d-flex flex-column justify-content-${contentPosition} gap-3 w-100`}
        >
          <div className='d-flex justify-content-between align-items-center gap-2'>
            {loggedIn ? (
              <Link to='/settings' className={styles.settingsLink}>
                <Title title={title} titleSize={titleSize} />
              </Link>
            ) : (
              <Title title={title} titleSize={titleSize} />
            )}
            {signOut && (
              <OverlayTrigger
                placement='bottom'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Log out</Tooltip>}
              >
                <Link to='/'>
                  <FontAwesomeIcon
                    icon={faSignOut}
                    color={color}
                    size='lg'
                    onMouseEnter={() => setColor('#0e103d')}
                    onMouseLeave={() => setColor('#f7f7ff')}
                  />
                </Link>
              </OverlayTrigger>
            )}
          </div>
          {children}
          {button && (
            <Link to='view-all' className='align-self-end'>
              <Button type='submit' variant='primary'>
                {buttonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
