import React from 'react';

const About = () => {
    return (
        <div className='mt-5 container mx-auto pb-5'>
            <div className='flex items-center'>
                <div className='w-2/5'>
                    <div style={{ transform: 'rotate(90deg)', width: '54%' }}>
                        <span className='bg-[#28E3DA] text-black px-2 py-1 rounded rotate text-black font-bold' >About Me</span>
                    </div>
                </div>
                <div>
                    <p className='text-4xl leading-relaxed font-bold'>I have startup design agency called “WhiteFrame creative” where I primarily teach Product Design & development. As im working more than 7 years in this field i gathered some skill like research</p>
                </div>
            </div>
        </div>
    );
}

export default About;
