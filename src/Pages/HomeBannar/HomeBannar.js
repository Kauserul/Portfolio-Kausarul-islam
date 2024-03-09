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
                            <li>About</li>
                            <li>Contact</li>
                            <li className='bg-gray-400 p-2 rounded'>
                                <a href="">Book A Call</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <div className='w-3/6'>
                            <h1 className='text-[78px] leading-snug font-bold' style={{ lineHeight: 1.1 }}>Hey, I’M <br />
                                <span className='text-[#63E6BE] '>Kausarul Islam</span> <br />
                                {/* MERN STACK <br /> */}
                                <TypeAnimation
                                    sequence={['MERN STACK', 800, 'FRONT END', 800, 'FULL STACK', 800]}
                                    // style={{ fontSize: '2em' }}
                                    repeat={Infinity}
                                /> <br />
                                DEVELOPER
                            </h1>
                        </div>
                        <div className='w-2/4 mr-0 flex justify-end'>
                            <img src={myPhoto} width='80%' alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#3a4047]'>
                <div className="container mx-auto py-3">
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
                                <i class="fa-brands fa-html5 fa-beat-fade" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-css3-alt fa-beat-fade"  style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-js fa-beat-fade" style={{ color: '#63E6BE', fontSize: '60px' }}></i>
                                <i class="fa-brands fa-react fa-beat" style={{color: '#63E6BE', fontSize: '60px'}}></i>
                                <i class="fa-brands fa-node fa-beat-fade" style={{color: '#63E6BE', fontSize: '60px'}}></i>
                                <i class="fa-solid fa-database fa-beat-fade" style={{color: '#63E6BE', fontSize: '60px'}}></i>
                                <i class="fa-brands fa-vuejs fa-beat-fade" style={{color: '#63E6BE', fontSize: '60px'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeBannar