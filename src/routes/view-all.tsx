import React from 'react';
import { Content } from '../components/Content';
import { Table } from '../components/table/Table';
import styles from '../styles/ViewAll.module.css';

export const ViewAll: React.FC = () => {
  return (
    <Content title='Viewing All'>
      <div className={`flex-grow-1 ${styles.tableWrapper}`}>
        <Table />
      </div>
    </Content>
  );
};
