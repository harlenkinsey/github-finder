import React, {Fragment} from 'react'

export const About = () => {
    
    const today = new Date();

    return (
        <Fragment>
            <h1>About This App</h1>
            <p>App to search Github users</p>
            <p>Version: 1.0.0</p>
            <p>Developer: Harlen Kinsey</p>
            <p>Copyright: {today.getFullYear()}</p>
        </Fragment>
    )
}

export default About
