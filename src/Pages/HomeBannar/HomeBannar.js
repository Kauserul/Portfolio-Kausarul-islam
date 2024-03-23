import React from 'react'
import myPhoto from '../../images/k (1).png'
import { TypeAnimation } from 'react-type-animation'

const HomeBannar = () => {
    return (
        <div className='text-white'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center py-3'>
                    <div>
                        <p>Logo</p>
                    </div>
                    <div>
                        <ul className='flex gap-3 items-center'>
                            <li><a href="#about">About</a></li>
                            {/* <li><a href="#project">Project</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#skills">Skills</a></li> */}
                            <li><a href="#contact">Contact</a></li>
                            <li className='bg-gray-400 p-2 rounded'>
                                <a href="">Book A Call</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <div className='w-3/6'>
                            <small className='text-xl text-[#63E6BE] '>Hey, I’M </small>
                            <h1 className='text-[68px] leading-snug font-bold' style={{ lineHeight: 1.1 }}>
                                <span className=''>Kausarul Islam</span> <br />
                                {/* MERN STACK <br /> */}
                                <TypeAnimation
                                    sequence={['MERN STACK', 800, 'FRONT END', 800, 'FULL STACK', 800]}
                                    // style={{ fontSize: '2em' }}
                                    repeat={Infinity}
                                    style={{color : '#63E6BE'}}
                                /> <br />
                                DEVELOPER
                            </h1>
                        </div>
                        <div className='w-2/4 mr-0 flex justify-end'>
                            <img src={myPhoto} width='90%' alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#3a4047] container mx-auto'>
                <div className=" px-5 py-3 ">
                    <div className="flex gap-5">
                        <div className='w-1/5'>
                            <div className='flex gap-2 border-r-2'>
                                <h2 className='text-5xl'>3</h2>
                                <h4 className='text-2xl'>YEARS OF EXPERIENCE</h4>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <div className='flex gap-2 border-r-2'>
                                <h2 className='text-5xl'>12</h2>
                                <h4 className='text-2xl'>PROJECT COMPALTE AROUND THE WORLD</h4>
                            </div>
                        </div>
                        <div className='w-8/12'>
                            <div className='flex justify-around'>
                                <i class="fa-brands fa-html5" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-css3-alt" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-js" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-react" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-node" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-solid fa-database" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-vuejs" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeBannar