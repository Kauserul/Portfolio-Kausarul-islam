import React from 'react'

import examticePhoto from '../../images/examtice.jpg'
import promisHospital from '../../images/promishospital.jpg'
import growUpIt from '../../images/growUp.png'
import webArtsFact from '../../images/webArtsFactory.png'

const Projects = () => {
    return (
        <div id='project' className='mt-16 pb-5 container mx-auto'>
            <div>
                <h2 className='text-5xl'> <span className='text-[#A0A0A2]'>Result For Every </span> <br /> Project That I Work For.</h2>
            </div>

            <div className='grid grid-cols-2 gap-5 mt-10'>
                <div>
                    <div className='rounded project-img' style={{ position: 'relative' }}>
                        <img
                            style={{ height: '350px', width: '100%' }}
                            className='rounded'
                            src={examticePhoto}
                            alt=""
                        />
                        <div className="project-info" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', }}>
                            <i class="fa-solid fa-magnifying-glass fa-lg" style={{ color: '#FFD43B' }}></i>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold mt-2'>Examtice</h3>
                    <p className='text-sm text-[#A0A0A2]'>Education Site</p>
                </div>

                <div>
                    <div>
                        <div className='rounded project-img' style={{ position: 'relative' }}>
                            <img
                                style={{ height: '350px', width: '100%' }}
                                className='rounded'
                                src={promisHospital}
                                alt=""
                            />
                            <div className="project-info" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', }}>
                                <i class="fa-solid fa-magnifying-glass fa-lg" style={{ color: '#FFD43B' }}></i>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold mt-2'>Promis Hospital</h3>
                    <p className='text-sm text-[#A0A0A2]'>Health Check</p>
                </div>
                <div>
                    <div>
                        <div className='rounded project-img' style={{ position: 'relative' }}>
                            <img
                                style={{ height: '350px', width: '100%' }}
                                className='rounded'
                                src={growUpIt}
                                alt=""
                            />
                            <div className="project-info" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', }}>
                                <i class="fa-solid fa-magnifying-glass fa-lg" style={{ color: '#FFD43B' }}></i>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold mt-2'>GrowUp IT</h3>
                    <p className='text-sm text-[#A0A0A2]'>Freelancing Course</p>
                </div>
                <div>
                    <div>
                        <div className='rounded project-img' style={{ position: 'relative' }}>
                            <img
                                style={{ height: '350px', width: '100%' }}
                                className='rounded'
                                src={webArtsFact}
                                alt=""
                            />
                            <div className="project-info" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', }}>
                                <i class="fa-solid fa-magnifying-glass fa-lg" style={{ color: '#FFD43B' }}></i>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-2xl font-semibold mt-2'>Web Arts Factory</h3>
                    <p className='text-sm text-[#A0A0A2]'>Agency Site</p>
                </div>
            </div>
        </div>

    )
}

export default Projects