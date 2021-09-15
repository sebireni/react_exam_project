import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
        <div className="about-container">
            <h3 className="display-6 text-uppercase text-center py-3">
                About
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste quidem eos dolores, a enim? Numquam nihil nisi repellat placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste quidem eos dolores, a enim? Numquam nihil nisi repellat placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste quidem eos dolores, a enim? Numquam nihil nisi repellat placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste quidem eos dolores, a enim? Numquam nihil nisi repellat placeat!</p>
        </div>
        </AboutContainer>
    )
}

export default About;

// STYLED COMPONENTS STYLES

const AboutContainer = styled.div`
    p {
        color: var(--orange);
        padding-left: 3rem;
        padding-right: 3rem;
    }

    h3 {
        color: var(--tomato);
    }

`;
