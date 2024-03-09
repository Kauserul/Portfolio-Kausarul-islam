import React from 'react';

const About = () => {
    return (
        <div className='mt-16 container mx-auto pb-5'>
            <div>
                <h2 className='text-4xl'>About</h2>
                <div className='flex mt-5 gap-2'>
                    <div className='mt-2'>
                        <div style={{width: '60px', height: '5px', backgroundColor: '#63E6BE'}}></div>
                    </div>
                    <p className='text-3xl' style={{textDecoration: 'capitalize'}}>Highly skilled <span className='text-[#63E6BE]'>MERN-STACK</span> developer with 3 years of experience in developing responsive web applications. Passionate about leveraging expertise in <span className="text-[#63E6BE]">HTML, CSS, JavaScript, React, Node.js, and MongoDB</span> to drive innovative projects. Experienced mentor specializing in front-end web development, with a focus on HTML, CSS, CSS frameworks, JavaScript, and React.js</p>
                </div>
            </div>
        </div>
    );
}

export default About;
