import React from 'react'
import avatar from '../img/avatar-jessica.jpeg'

const SocialCard = () => {
  return (
    <>
        <div class="flex flex-col items-center justify-center">
            <div className='flex flex-col items-center justify-center bg-socialGrey800 p-10 rounded-2xl min-w-96'>
                <img className="w-24 rounded-full" src={avatar} />
                <h1 className="text-Inter text-white text-3xl font-medium pt-6 pb-2">Jessica Randall</h1>
                <h2 className="text-Inter text-socialGreen font-semibold text-sm pb-6">London, United Kingdom</h2>
                <p className="text-Inter text-white text-sm mb-6">&ldquo;Front-end developer and avid reader&rdquo;</p>
                <ul className="flex flex-col items-center w-full">
                    <li className="flex w-full items-center justify-center py-3 bg-socialGrey700 rounded-lg mb-4 text-Inter text-white text-center font-medium hover:bg-socialGreen hover:text-black hover:cursor-pointer">Github</li>
                    <li className="flex w-full items-center justify-center py-3 bg-socialGrey700 rounded-lg mb-4 text-Inter text-white text-center font-medium hover:bg-socialGreen hover:text-black hover:cursor-pointer">Frontend Mentor</li>
                    <li className="flex w-full items-center justify-center py-3 bg-socialGrey700 rounded-lg mb-4 text-Inter text-white text-center font-medium hover:bg-socialGreen hover:text-black hover:cursor-pointer">LinkedIn</li>
                    <li className="flex w-full items-center justify-center py-3 bg-socialGrey700 rounded-lg mb-4 text-Inter text-white text-center font-medium hover:bg-socialGreen hover:text-black hover:cursor-pointer">Twitter</li>
                    <li className="flex w-full items-center justify-center py-3 bg-socialGrey700 rounded-lg text-Inter text-white text-center font-medium hover:bg-socialGreen hover:text-black hover:cursor-pointer">Instagram</li>
                </ul>
            </div>
        </div> 
    </>
  )
}

export default SocialCard
