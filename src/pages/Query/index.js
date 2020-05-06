import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';

export default function Query(props) {
  const query = props.history.location.data;

  console.log(query);

  return(
    <>
      <Header />
      <Container>
        <h1>{query.fantasia}</h1>
      </Container>
    </>
  )
}
