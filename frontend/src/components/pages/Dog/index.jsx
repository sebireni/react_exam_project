import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as ReactBootStrap from 'react-bootstrap';

const Dog = () => {
  const [dogItem, setDogItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadDogData = async () => {
    try {
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random`);
      setDogItem(res.data.message);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDogData();
  }, []);

  return (
    <DogContainer>
      <h3 className='display-6 text-uppercase text-center py-3'>Random dog</h3>
      <p>woof woof!</p>
      <ImgWrapper>
        {!loading ? (
          <Img src={dogItem} alt='random dog' />
        ) : (
          <ReactBootStrap.Spinner animation='border' variant='warning' />
        )}
      </ImgWrapper>
    </DogContainer>
  );
};

export default Dog;

// STYLED COMPONENTS STYLES
const DogContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

  h3 {
    color: var(--tomato);
  }

  p {
    color: var(--orange);
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const ImgWrapper = styled.div`
  max-width: 30%;
`;

const Img = styled.img`
  width: 100%;
`;