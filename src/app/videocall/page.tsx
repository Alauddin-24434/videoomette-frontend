import Image from 'next/image';
import React from 'react';
import { AiFillAudio } from 'react-icons/ai';
import { FaVideoSlash } from 'react-icons/fa';
import datas from '../../../fakeUser.json';

const VideoCallPage = async () => {


    const activeUsers = datas;
    return (
        <div className='grid grid-cols-12 container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
            <div className="col-span-8 ">

                <div className="flex flex-wrap border">

                    {
                        activeUsers?.map(info => (
                            <div key={info?.id} className="relative  w-1/5  p-1 md:p-2 ">
                                <Image
                                    alt="gallery"
                                    width={500}
                                    height={500}

                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                                <div className='absolute top-2 right-3 p-1 md:p-2 flex gap-2'>
                                    <span><FaVideoSlash className='text-white' /></span>
                                    <span><AiFillAudio className='text-white' /></span>
                                </div>
                                <p className='absolute bottom-4 left-6 text-white text-sm'>Alauddin</p>
                            </div>



                        ))
                    }
                </div>
            </div>

            <div className='col-span-4'>
                <div className="h-screen flex flex-col">
                    <div className="bg-gray-200 flex-1 overflow-y-scroll">
                        <div className="px-4 py-2">
                            <div className="flex items-center mb-2">
                                <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User Avatar" />
                                <div className="font-medium">John Doe</div>
                            </div>
                            <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
                                Hi, how can I help you?
                            </div>
                            <div className="flex items-center">
                                <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                                    Sure, I can help with that.
                                </div>
                                <img className="w-8 h-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 px-4 py-2">
                        <div className="flex items-center">
                            <input className="w-full border rounded-full py-2 px-4 mr-2" type="text" placeholder="Type your message..." />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VideoCallPage;