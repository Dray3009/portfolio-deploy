import React from 'react'
import Image from 'next/image'
import portfolioProject from '../public/portfolioProject.png'
import TravelAppProject from '../public/TravelAppProject.png'
type Props = {}

const Projects = (props: Props) => {
    const caseStudies =[1, 2, 3];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className=' absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl'>
        Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    
                        <Image className='h-80 w-80 object-contain' src={portfolioProject} alt='project screenshot' priority/>

                       
                        <div>
                            <h4>
                                Project 1 of 2: Portfolio
                            </h4>
                        </div>


            
                    </div>
                


            </div>

        <div 
            className='w-full absolute top[30%] bg-gray-700/10 left-0 h-[500px] -skew-y-12'/>
        </div>
  )
}

export default Projects