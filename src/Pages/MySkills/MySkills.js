import React from 'react'

const MySkills = () => {
    return (
        <div id='skills' className='container mx-auto mt-16 pb-5'>
            <div className='text-center'>
                <h2 className='text-5xl'>My Skills</h2>
            </div>
            <div>
                <div className="flex justify-center mt-5 gap-5">
                    <div className='w-3/12'>
                        <div className='w-64 mx-auto text-center bg-[#3a4047] py-6 rounded-lg'>
                        <i class="fa-brands fa-html5" style={{ color: '#63E6BE', fontSize: '80px' }}></i>
                            <h2 className='text-4xl mt-3'>HTML</h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <div className='w-64 mx-auto text-center bg-[#3a4047] py-6 rounded-lg'>
                        <i class="fa-brands fa-css3-alt" style={{ color: '#63E6BE', fontSize: '80px' }}></i>
                            <h2 className='text-4xl mt-3'>CSS</h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <div className='w-64 mx-auto text-center bg-[#3a4047] py-6 rounded-lg'>
                        <i class="fa-brands fa-js" style={{ color: '#63E6BE', fontSize: '80px' }}></i>
                            <h2 className='text-4xl mt-3'>JavaScript</h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <div className='w-64 mx-auto text-center bg-[#3a4047] py-6 rounded-lg'>
                        <i class="fa-brands fa-react" style={{ color: '#63E6BE', fontSize: '80px' }}></i>
                            <h2 className='text-4xl mt-3'>React</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5 gap-5">
                    <div className='w-3/12'>
                        <div className='w-64 mx-auto text-center bg-[#3a4047] py-6 rounded-lg' >
                        <i class="fa-brands fa-node" style={{ color: '#63E6BE', fontSize: '80px' }}></i>
                            <h2 className='text-4xl mt-3'>Node</h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <div className='w-64 mx-auto text-center bg-[#3a4047] py-6 rounded-lg'>
                        <i class="fa-solid fa-database" style={{ color: '#63E6BE', fontSize: '80px' }}></i>
                            <h2 className='text-4xl mt-3'>MongoDB</h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <div className='text-center bg-[#3a4047] py-6 rounded-lg'>
                            <i style={{fontSize: '60px'}} class="fa-brands fa-react"></i>
                            <h2 className='text-4xl'>React</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5 gap-5">
                    <div className='w-3/12'>
                        <div className='text-center bg-[#3a4047] py-6 rounded-lg' >
                            <i style={{fontSize: '60px'}} class="fa-brands fa-react"></i>
                            <h2 className='text-4xl'>React</h2>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <div className='text-center bg-[#3a4047] py-6 rounded-lg'>
                            <i style={{fontSize: '60px'}} class="fa-brands fa-react"></i>
                            <h2 className='text-4xl'>React</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkills