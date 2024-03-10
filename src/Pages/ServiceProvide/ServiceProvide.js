import React from 'react'

const ServiceProvide = () => {
    return (
        <div id='service' className='container mx-auto mt-16 pb-5'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>What you will get</h2>
                <p className='w-2/4 m-auto mt-4'>High-quality vectors are used to create each screen. In terms of functionality, It's simple and adaptable. With a clern and modern look.</p>
            </div>
            <div className='mt-5'>
                <div className="grid grid-cols-3">
                    <div>
                        <div className='text-center bg-[#1cf1b1b6] py-10'>
                            <i style={{fontSize: 60}} className="fas fa-solid fa-earth-americas bg-white text-black p-2 rounded-lg"></i>
                            <h3 className='text-2xl mt-3 mb-3 font-bold'>Global Style guide</h3>
                            <p className='text-sm w-2/3 m-auto'>Consistent design with the text and color style.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-center py-10 '>
                            <i style={{fontSize: 60}} className="fas fa-solid fa-font bg-white text-black p-2 rounded-lg"></i>
                            <h3 className='text-2xl mt-3 mb-3 font-bold'>Free Font</h3>
                            <p className='text-sm w-2/3 m-auto'>Using free font</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-center bg-[#1cf1b1b6] py-10 '>
                            <i style={{fontSize: 60}} className="fas fa-duotone fa-layer-group bg-white text-black p-2 rounded-lg"></i>
                            <h3 className='text-2xl mt-3 mb-3 font-bold'>Organized Layer</h3>
                            <p className='text-sm w-2/3 m-auto'>Consistent design with the text and color style.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-center py-10 rounded'>
                            <i style={{fontSize: 60}} className="fas fa-solid fa-scale-balanced bg-white text-black p-2 rounded-lg"></i>
                            <i class=""></i>
                            <h3 className='text-2xl mt-3 mb-3 font-bold'>Pixel Perfect</h3>
                            <p className='text-sm w-2/3 m-auto'>Distance and measure using an even multiple measures.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-center bg-[#1cf1b1b6] py-10 '>
                            <i style={{fontSize: 60}} className="fas fa-regular fa-lightbulb bg-white text-black p-2 rounded-lg"></i>
                            <i class=""></i>
                            <h3 className='text-2xl mt-3 mb-3 font-bold'>Light Mood</h3>
                            <p className='text-sm w-2/3 m-auto'>Consistent design with the text and color style.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-center py-10 rounded'>
                            <i style={{fontSize: 60}} className="fas fa-solid fa-arrow-pointer bg-white text-black p-2 rounded-lg"></i>
                            <h3 className='text-2xl mt-3 mb-3 font-bold'>Easy Customizable</h3>
                            <p className='text-sm w-2/3 m-auto'>Consistent design with the text and color style.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceProvide