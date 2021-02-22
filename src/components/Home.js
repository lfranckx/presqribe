import React from 'react';
// import { Link } from 'react-router-dom';

import '../styles/home.scss';

export default function Home() {
    return (
        <main id='hero'>
            <div className='outer'>
                <div className='top-video'>
                    <video 
                        autoPlay loop muted 
                    >
                        <source src={`${process.env.PUBLIC_URL}/videos/video4.mp4`} />
                        Your browser does not support the video tag. We suggest you upgrade your browser.
                    </video>

                    <div className='hero-text'>
                            <h2 className='h1'>Medical History Made Simple</h2>
                            {/* <Link to='sign-up' className='btn2'>
                                Try It
                            </Link> */}
                    </div>
                </div>
            </div>
        </main>
    )
}