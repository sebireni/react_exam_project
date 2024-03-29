import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('Submit');

  const handleSubmit = (e) => {
    e.preventDefault();
    const registration = { firstName, lastName, email };
 
    axios.post('http://localhost:6789/registrations', {
      registration
    }).then((res) => {
      setAlert(res.data.message);
    }).catch((err) => {
      setAlert(err);
    })
    setAlert('Submitted successfully');
  };

  return (
    <MainContainer className='home-main-container'>
      <div className='contanier'>
        <h1 className='display-5 text-uppercase py-5 text-center'>
          Welcome to the home page
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste
          quidem eos dolores, a enim? Numquam nihil nisi repellat placeat! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Velit iste quidem
          eos dolores, a enim? Numquam nihil nisi repellat placeat! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Velit iste quidem eos
          dolores, a enim? Numquam nihil nisi repellat placeat! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Velit iste quidem eos
          dolores, a enim? Numquam nihil nisi repellat placeat!
        </p>
        <div className='form-box'>
          <h3 className='display-6 text-uppercase text-center py-3'>
            registration
          </h3>
          <form onSubmit={handleSubmit}>
            <div className='form-row mr-auto'>
              <div className='col-md-6 mb-4'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First Name'
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='col-md-6 mb-4'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last Name'
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='col-md-6 mb-4'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button
              className='btn btn-primary text-uppercase'
              disabled={alert!=='Submit'}
            >
              <span>{alert}</span>
            </button>
          </form>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;


const MainContainer = styled.div`
  h1 {
    color: var(--dark-tomato);
  }

  p {
    color: var(--orange);
    padding-left: 3rem;
    padding-right: 3rem;
  }

  h3 {
    color: var(--tomato);
  }

  .form-box {
    padding: 3rem 0;
  }

  form {
    width: 50rem;
    margin: 0 auto;
    padding-bottom: 50px;
  }

  button {
    width: 100%;
    background: transparent;
    border-color: var(--dark-red);
    &:hover {
      background: var(--dark-tomato);
      border-color: var(--dark-red);
    }
    &:focus {
      background: var(--tomato);
      border-color: var(--tomato);
    }
  }

  input {
    background: var(--dark-red);
    opacity: 0.7;
    margin-left: auto;
    margin-right: auto;
  }
`;