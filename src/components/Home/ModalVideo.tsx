import { CircleX } from 'lucide-react'
import React from 'react'

const ModalVideo = ({ closeModal }: { closeModal: () => void }) => {
    return (
        <section className='fixed top-0 left-0 w-screen min-h-screen bg-black z-50 flex justify-center items-center'>
            <article className='w-[90vw] relative'>
                <video src="/MainVideo.mp4" className="object-cover w-full h-full rounded-2xl" autoPlay loop />
                <CircleX onClick={closeModal} className="cursor-pointer absolute top-[-15px] right-[-15px] text-white hover:text-red-700" />
            </article>
        </section>
    )
}

export default ModalVideo