import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as ReactBootStrap from 'react-bootstrap';

const Dog = () => {
  const [dogItem, setDogItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const dogFunction = async () => {
    try {
      setLoading(true);
      await axios.get(`https://dog.ceo/api/breeds/image/random`).then((res) => {
        console.log(res);
        console.log(res.data.message);
        setDogItem(res.data.message);
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dogFunction();
  }, []);

  return (
    <DogContainer>
      <h3 className='display-6 text-uppercase text-center py-3'>Random dog</h3>
      <p>woof woof!</p>
      <div>
        {loading ? (
          <img src={dogItem} alt='random dog' />
        ) : (
          <ReactBootStrap.Spinner animation='border' variant='warning' />
        )}
        <img src={dogItem} alt='random dog' />
      </div>
    </DogContainer>
  );
};

export default Dog;

// STYLED COMPONENTS STYLES
const DogContainer = styled.div`
  h3 {
    color: var(--tomato);
  }

  p {
    color: var(--orange);
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
