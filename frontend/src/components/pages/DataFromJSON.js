import React from 'react';
import styled from 'styled-components';
import Data from "./dataToDisplay.json";

const DataFromJSON = () => {
    return (
        <AboutContainer>
        <div className="about-container">
            <h3 className="display-6 text-uppercase text-center py-3">
                Displaying data from JSON file
            </h3>
            <div className="posts">
                { Data.map(post => {
                    return(
                        <div key={post.id}>
                            <p>{post.name} - {post.instrument}</p>
                        </div>
                    )
                }) }
            </div>
        </div>
        </AboutContainer>
    )
}

export default DataFromJSON;

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
