import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';

import brasao from '../../assets/brasao_rfb.gif';

import { Table, TableHeader } from './styles';

export default function Query(props) {
  const query = props.history.location.data;

  return(
    <>
      <Header />
      <Table border>
        <TableHeader>
          <tr>
          </tr>
        </TableHeader>
      </Table>
    </>
  )
}
