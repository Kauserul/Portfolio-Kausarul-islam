import React from 'react'

const Footer = () => {
    return (
        <div id='contact' className='container mx-auto mt-16 pb-5'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold'>Let's work together!</h1>
                <p className='mt-10 mb-10 text-xl'>Available to project from july 2023 & beyond</p>
                <div>
                    <button class="bg-[#3a4047] hover:bg-[#3a4047] text-white font-bold py-4 px-8 rounded-full text-4xl">
                    <i class="fa-solid fa-envelope me-2"></i> Say Hi!
                    </button>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className='flex gap-5'>
                        <a href='#'><i class="fa-brands fa-facebook-f"></i> Facebook</a>
                        <a href='#'><i class="fa-brands fa-square-instagram"></i> Instagram</a>
                        <a href='#'><i class="fa-brands fa-twitter"></i> Twitter</a>
                        <a href='#'><i class="fa-brands fa-facebook-f"></i> Facbook</a>
                    </div>
                    <div>
                        <a href='#'><i class="fa-solid fa-download"></i> Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer