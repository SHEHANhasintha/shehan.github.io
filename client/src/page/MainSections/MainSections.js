import React, { useEffect } from 'react';
import {
    PersonalDetails,
    Footer,
    Blog,
    Education,
    Experiance,
    YoutubePage,
    Profile,
    Callout
} from './common';

function MainSections(props) {

    const clicked = (e) => {
        e.preventDefault();
    }

    useEffect(function () {
        return function cleanup() {
        }
    }, []);

    return (
        <>
            <PersonalDetails />
            <Profile />
            <Experiance />
            <YoutubePage/>
            <Blog />
            <Education />
            <Callout />
            <Footer />
        </>
    );
}

export default MainSections;


