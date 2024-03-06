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
                    <h1 className='text-[78px] leading-snug font-bold' style={{lineHeight: 1.1}}>Hey, I’M <br />
                        <span className='text-orange-400 '>Kausarul Islam</span> <br />
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
    </div>
  )
}

export default HomeBannar