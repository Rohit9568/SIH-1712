import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div class="overflow-x-hidden bg-gray-50">

                <section class="relative  sm:py-16 lg:pt-20 xl:pb-0">
                    <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div class="max-w-3xl mx-auto text-center">
                            <p class="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">
                                Enhanced Education System for Specially Abled
                            </p>
                            <h1 class="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                                VR for Interpersonal Skill Enhancement in ASD and ID Children
                            </h1>
                            <p class=" ml-40 mt-6 text-base leading-7 text-gray-600 font-inter">
    The ISE VR tool helps children with ASD and ID improve social skills in immersive environments.
</p>



                            <div class="relative inline-flex mt-10 group">
                                <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                                <Link to="/lesson-library" class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
    Discover Lesson Library
</Link>
                            </div>
                        </div>
                    </div>

                    <div class="mt-16 md:mt-20">
                        <img class="object-cover object-top w-full h-auto mx-auto scale-150 2xl:max-w-screen-2xl xl:scale-100" src="https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png" alt="ISE VR Experience" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero;
