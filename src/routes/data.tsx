import React from 'react';
import { Layout } from '../components/Layout';
import { Table } from '../components/table/Table';
import styles from '../styles/ViewAll.module.css';

export const ViewData: React.FC = () => {
  return (
    <Layout title='Data'>
      <div className={`flex-grow-1 ${styles.tableWrapper}`}>
        <Table />
      </div>
    </Layout>
  );
};
