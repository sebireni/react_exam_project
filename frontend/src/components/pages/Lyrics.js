import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";

const Lyrics = () => {
    const [lyricsItem, setLyricsItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const lyricsFunction = async () => {
        try {
            const data = await axios
            .get(`https://api.lyrics.ovh/v1/queen/bohemian-rhapsody`)
            .then(res => {
                console.log(res);
                setLyricsItem(res.data.lyrics);
            });
            setLoading(true);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        lyricsFunction()
    }, []);

    return (
        <LyricsContainer>
        <h3 className="display-6 text-uppercase text-center py-3">
            Queen - Bohemian rhapsody
        </h3>
        <div>
            {loading ? <p>{lyricsItem}</p> : <ReactBootStrap.Spinner animation="border" variant="warning" />}
        </div>
        </LyricsContainer>
    )
}

export default Lyrics


// STYLED COMPONENTS STYLES
const LyricsContainer = styled.div`
    h3 {
        color: var(--tomato);
    }

    p {
        color: var(--orange);
        padding-left: 3rem;
        padding-right: 3rem;
    }

`;
