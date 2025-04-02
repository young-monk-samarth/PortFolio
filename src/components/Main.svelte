    <script>
        import Step from "./Step.svelte";
        import { onMount } from 'svelte';
        import { initializeAnimations, addStepClass } from '$lib/animation'; // Updated import
        let steps = [
            {
                name: "Portfolio",
                icon: "fa-regular fa-address-card",
                description:
                    "Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.",
            },
            {
                name: "unknown App",
                icon:"fa-sharp fa-regular fa-sun",
                description:
                    "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.",
            },
            {
                name: "VideoSummarization",
                icon: "fa-sharp fa-solid fa-video" ,
                description:
                    "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).",
            },
            {
                name: "MemeGenerator",
    icon: "fa-regular fa-face-laugh-squint",
    description: "",
},
{
                name:"Project Deck",
                icon: "fa-solid fa-layer-group ",
                description: "Check out my other projects on my GitHub profile",
}
        ];

        let benefits = [
            {
                metric: "10x",
                name: "a self taught developer",
                description:
                    "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
            },
            {
                name: "adaptable & resilient",
                description:
                    "An adaptable, resilient, and eager-to-learn individual with a passion for frontend development. Quick to adjust to evolving technologies and challenges, embracing continuous learning to refine skills and stay up with trends. Driven to incorporate design aesthetics into functional, user-centered interfaces."
            },
            {
                name: "a good communicator",
                description:
                    "I believe in transparency and constructive communication above all else. I focus on understanding ideas and perspectives, working collaboratively to refine and develop them. This approach helps me build meaningful relationships and enhances productivity and effectiveness within any team or work environment.",
            },
        ];
    </script>

    <main class="flex flex-col flex-1 p-4">


        <section
            id="introPage"
            class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
        >
            <div
                class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
            >
            <h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">SAMARTH</span>MUKTAMATH
                <br class="hidden sm:block" /> <!-- Hide line break on mobile -->
                as
                <br class="sm:hidden" /> <!-- Add line break only on mobile -->
                Web
                <span class="poppins text-violet-400">Developer</span>
            </h2>
                


                




                <!-- get in tch bttn  -->
                <a href="https://www.linkedin.com/in/samarthmuktamath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 inline-block transition-all duration-300 border-0 outline-none hover:border-0 focus:border-0 active:border-0 hover:outline-none focus:outline-none active:outline-none">
                
                <!-- Black  -->
                <div class="absolute top-0 -left-full w-full h-full bg-black opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-300 ease-out"></div>
                
                <!-- Text -->
                <h4 class="relative z-10 transition-colors duration-200 group-hover:text-violet-400">
                    Get in touch &rarr;
                </h4>
            </a>
            </div>

                <!-- photo disply-->
         <div class="wrapper"> <!-- Optional sizing wrapper -->
    <div class="box">
        <img 
            src="profile.jpg" 
            alt="Zetane Interface"
            loading="lazy"
        />
    </div>
</div>

<style>
.wrapper {
    width: 400px;  /* Original container size */
    height: 400px;
    margin: 0 auto;
}

.box {
    position: relative;
    width: 100%;    /* Half width */
    height: 100%;   /* Half height */
    overflow: hidden;
    border-radius:10px 50px 10px 50px;
}

.box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease;
}

.box:hover img {
    transform: scale(1.2);
}

/* Only adjust margin for small screens */
@media (max-width: 480px) {
    .wrapper {
        margin: 0 1rem !important; /* Force margin with !important */
        width: calc(100% - 2rem); /* Adjust width to account for margins */
    }
}
</style>
</section>
        

        <!-- scroll info about creative -->
    
        
        <section class="py-16 lg:py-24 flex flex-col gap-16" id="projects">
            <div class="flex flex-col gap-1.5 text-center">
                <h6 class="text-large sm:text-xl md:text-2xl">
                    A few of my creative endeavors.
                </h6>
                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    Curious to <span class="poppins text-violet-400">see</span> my work?
                </h3>
            </div>

            <!-- buttn to direct video link -->
            <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
            >
                <i class="fa-regular fa-circle-play" />
                <p>Watch the video</p>
            </a>

        <!-- Listing  steps    -->

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 justify-centre">
                <Step step={steps[0]}>
                    <p>
                        My Web Portfolio is a dynamic and interactive website built using <strong
                            class="text-violet-400">  
                            SvelteKit , JavaScript </strong> styled with <strong
                            class="text-violet-400">   TailwindCSS .</strong
                        >  Features dynamic design, smooth transitions,ensuring an optimized user experience while showcasing my expertise in frontend development technologies .
                    </p>
                </Step>
                <Step step={steps[1]}>
                
                    <!-- weatehr desc  -->
                </Step>
                <Step step={steps[2]}>
                    <p>
                        Video Summarization leverages long-duration videos to quickly summarize key content based on user queries, saving significant time. Built with <strong class="text-violet-400">Python</strong> for backend processing, it integrates <strong class="text-violet-400">YOLO (You Only Look Once)</strong> for real-time object detection, while the frontend is designed using <strong class="text-violet-400">CSS</strong> for an intuitive and responsive user interface.
                    </p>
                    
                </Step>
            </div>
             
            
            <Step step={steps[4]}>
                <div class="mt-4">
                    <p class="text-gray-500 mb-1 text-center">
                        Experimenting, building, and learning.
                    </p>
                    <div class="accordion w-full space-y-3 mt-6">
                        <details class="group">
                            <summary class="cursor-pointer text-violet-400 bg-gray-950 p-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex justify-between items-center shadow-md hover:shadow-lg">
                                <span class="flex items-center text-lg">
                                    <i class="fa-solid fa-layer-group mr-2"></i> Tres en Raya
                                </span>
                                <span class="text-violet-400 transform transition-transform duration-300 group-open:rotate-180">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </summary>
                            <div class="accordion-content bg-black group-open:bg-gray-900 p-4 rounded-b-lg border-t border-gray-900 text-gray-200 opacity-0 group-open:opacity-100 transition-all duration-300 ease-in-out">
                                <div class="flex items-start">
                                    <p class="text-gray-200 text-[0.8125rem] text-left">
                                        Built on <strong class="text-violet-400">JS</strong>, <strong class="text-violet-400">HTML</strong>, and <strong class="text-violet-400">CSS</strong>, this fully responsive Tic-Tac-Toe game offers a fun and interactive experience.
                                    </p>
                                    <a href="https://tic-tac-toe-o79b.vercel.app/" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors duration-200 flex items-center ml-auto text-[0.8125rem]">
                                        Live <i class="fa-solid fa-globe ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </details>
                        <details class="group">
                            <summary class="cursor-pointer text-violet-400 bg-gray-950 p-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex justify-between items-center shadow-md hover:shadow-lg">
                                <span class="flex items-center text-lg">
                                    <i class="fa-solid fa-layer-group mr-2"></i> Tap&Lol
                                </span>
                                <span class="text-violet-400 transform transition-transform duration-300 group-open:rotate-180">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </summary>
                            <div class="accordion-content bg-black group-open:bg-gray-900 p-4 rounded-b-lg border-t border-gray-900 text-gray-200 opacity-0 group-open:opacity-100 transition-all duration-300 ease-in-out">
                                <div class="flex items-start">
                                    <p class="text-gray-200 text-[0.8125rem] text-left">
                                        Tap&Lol is a 100% responsive and interactive Meme Generator built using <strong class="text-violet-400">HTML</strong>, <strong class="text-violet-400">CSS</strong>, <strong class="text-violet-400">JavaScript</strong>, <strong class="text-violet-400">API</strong>, and powered by the <strong class="text-violet-400">GSAP</strong>. It offers a fun and engaging way to tap through  memes, making it perfect for spending time and laughing. With smooth animations and dynamic transitions.
                                    </p>
                                    <a href="https://tapandlol.netlify.app/" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors duration-200 flex items-center ml-auto text-[0.8125rem]">
                                        Live <i class="fa-solid fa-globe ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </details>
                        <details class="group">
                            <summary class="cursor-pointer text-violet-400 bg-gray-950 p-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex justify-between items-center shadow-md hover:shadow-lg">
                                <span class="flex items-center text-lg">
                                    <i class="fa-solid fa-layer-group mr-2"></i> Connect Me Via
                                </span>
                                <span class="text-violet-400 transform transition-transform duration-300 group-open:rotate-180">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </summary>
                            <div class="accordion-content bg-black group-open:bg-gray-900 p-4 rounded-b-lg border-t border-gray-900 text-gray-200 opacity-0 group-open:opacity-100 transition-all duration-300 ease-in-out">
                                <div class="flex items-start">
                                    <p class="text-gray-200 text-[0.8125rem] text-left">
                                            Connect Me Via is a quick and stylish social link hub, whipped up in just 10 minutes using <strong class="text-violet-400">HTML</strong>, <strong class="text-violet-400">CSS</strong>, and <strong class="text-violet-400">GSAP</strong>. Inspired by Linktree, it’s a simple yet effective way to share multiple <br> contact points or social profiles in one place. Featuring smooth animations and a clean design, it’s a testament to rapid prototyping and creative experimentation.
                                        </p>
                                    <a href="https://connectmevia.netlify.app/" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors duration-200 flex items-center ml-auto text-[0.8125rem]">
                                        Live <i class="fa-solid fa-globe ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        </details>
                        <details class="group">
                            <summary class="cursor-pointer text-violet-400 bg-gray-950 p-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex justify-between items-center shadow-md hover:shadow-lg">
                                <span class="flex items-center text-lg">
                                    <i class="fa-solid fa-layer-group mr-2"></i> Section 4
                                </span>
                                <span class="text-violet-400 transform transition-transform duration-300 group-open:rotate-180">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </summary>
                            <div class="accordion-content bg-black group-open:bg-gray-900 p-4 rounded-b-lg border-t border-gray-900 text-gray-200 opacity-0 group-open:opacity-100 transition-all duration-300 ease-in-out">
                                <!-- Empty content area -->
                            </div>
                        </details>
                        <details class="group">
                            <summary class="cursor-pointer text-violet-400 bg-gray-950 p-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex justify-between items-center shadow-md hover:shadow-lg">
                                <span class="flex items-center text-lg">
                                    <i class="fa-solid fa-layer-group mr-2"></i> Section 5
                                </span>
                                <span class="text-violet-400 transform transition-transform duration-300 group-open:rotate-180">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </span>
                            </summary>
                            <div class="accordion-content bg-black group-open:bg-gray-900 p-4 rounded-b-lg border-t border-gray-900 text-gray-200 opacity-0 group-open:opacity-100 transition-all duration-300 ease-in-out">
                                <!-- Empty content area -->
                            </div>
                        </details>
                    </div>
                </div>
            </Step>


        </section>




        <section
            id="about"
            class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
        >
            <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
            <div
                class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
            >
                <h6 class="text-large sm:text-xl md:text-2xl">
                    Want to know more?
                </h6>
                <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                    A bit <span class="poppins text-violet-400">about</span> me.
                </h3>
            </div>
            <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                I am . . .
            </p>
            <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
                {#each benefits as benefit, index}
                  
                    <div class="flex gap-6 sm:gap-8">
                        <p
                            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                        >
                            0{index + 1}
                        </p>
                        <div class="flex flex-col gap-6 sm:gap-8">
                            <h3 class="text-2xl sm:text-3xl md:text-5xl">
                                {benefit.name}
                            </h3>
                            <p>{benefit.description}</p>
                        </div>
                    </div>
                {/each} 
            </div>
            

            <section
    id="xp"
    class="p-4 sm:p-8 md:p-12 lg:p-16 bg-slate-800/20 backdrop-blur-md text-white mt-12 sm:mt-24 md:mt-48">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14">
        <span class="bg-gradient-to-r from-white to-violet-400 inline-block text-transparent bg-clip-text">
            Professional Journey
        </span>
        <p class="text-xs sm:text-sm text-slate-700 text-center mt-6 sm:mt-8 opacity-75">
            Hover Cards for Visibility
        </p>
        
        
    </h2>
    

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4">
        <!-- Experience Card 1 -->
        <div class="relative bg-black rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/50 border border-gray-700 hover:border-gray-500">
            <div class="p-4 sm:p-6 bg-gradient-to-br from-gray-950 to-black rounded-xl backdrop-blur-lg transition-all duration-300 hover:from-black hover:to-gray-900">
                <div class="absolute inset-0 bg-black/50 opacity-100 hover:opacity-0 transition-opacity duration-500"></div>
                <h3 class="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-violet-200 to-white inline-block text-transparent bg-clip-text">
                    Software Development Intern
                </h3>
                <p class="text-xs sm:text-sm md:text-base text-slate-200 mt-2 hover:text-slate-100 transition-colors duration-300">
                    <span class="font-bold text-violet-300 italic">Inflection Zone Lab Private Limited</span> - Pune, Maharashtra
                </p>
                <p class="text-xs sm:text-sm md:text-base text-slate-300 italic hover:text-slate-200 transition-colors duration-300">
                    Sept 2024 – Feb 2025
                </p>
                <ul class="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-slate-200 hover:text-slate-100 transition-colors duration-300 text-xs sm:text-sm md:text-base">
                    <li class="flex items-start">
                        <span class="text-violet-400 mr-2">•</span>
                        Trained in Svelte during an internship, gaining hands-on experience in building high-performance, scalable, and user-centric frontend applications while adhering to industry best practices.
                    </li>
                    <li class="flex items-start">
                        <span class="text-violet-400 mr-2">•</span>
                        Gained valuable insights into frontend development while continuously learning and adapting to emerging trends and technologies.
                    </li>
                    <li class="flex items-start">
                        <span class="text-violet-400 mr-2">•</span>
                        General responsibilities included documenting requirements, resolving queries, and maintaining updated reports and documentation.
                    </li>
                </ul>
            </div>
        </div>

      <!-- Experience Card 2 -->
<div class="relative bg-black rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/50 border border-gray-700 hover:border-gray-500">
    <div class="p-4 sm:p-6 bg-gradient-to-br from-gray-950 to-black rounded-xl backdrop-blur-lg transition-all duration-300 hover:from-black hover:to-gray-900">
        <div class="absolute inset-0 bg-black/50 opacity-100 hover:opacity-0 transition-opacity duration-500"></div>
        <h3 class="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-violet-200 to-white inline-block text-transparent bg-clip-text">
            Software Developer
        </h3>
        <p class="text-xs sm:text-sm md:text-base text-slate-200 mt-2 hover:text-slate-100 transition-colors duration-300">
            <span class="font-bold text-violet-300 italic">Inflection Zone Lab Private Limited</span> - Pune, Maharashtra
        </p>
        <p class="text-xs sm:text-sm md:text-base text-slate-300 italic hover:text-slate-200 transition-colors duration-300">
            March 1, 2025 – Present
        </p>
        <ul class="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-slate-200 hover:text-slate-100 transition-colors duration-300 text-xs sm:text-sm md:text-base">
            <li class="flex items-start">
                <span class="text-violet-400 mr-2">•</span>
                
            </li>
        </ul>
    </div>
</div>
        <!-- Experience Card 3 -->
        <div class="relative bg-black rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/50 border border-gray-700 hover:border-gray-500">
            <div class="p-4 sm:p-6 bg-gradient-to-br from-gray-950 to-black rounded-xl backdrop-blur-lg transition-all duration-300 hover:from-black hover:to-gray-900">
                <div class="absolute inset-0 bg-black/50 opacity-100 hover:opacity-0 transition-opacity duration-500"></div>
                <h3 class="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-violet-200 to-white inline-block text-transparent bg-clip-text">
                    ...
                </h3>
                <p class="text-xs sm:text-sm md:text-base text-slate-200 mt-2 hover:text-slate-100 transition-colors duration-300">
                    <!-- Fill in the details here -->
                </p>
                <p class="text-xs sm:text-sm md:text-base text-slate-300 italic hover:text-slate-200 transition-colors duration-300">
                    <!-- Fill in the date range here -->
                </p>
                <ul class="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-slate-200 hover:text-slate-100 transition-colors duration-300 text-xs sm:text-sm md:text-base">
                    <li class="flex items-start">
                        <span class="text-violet-400 mr-2">•</span>
                        <!-- Fill in the responsibilities here -->
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Small Title After Section -->
    
</section>
        
            

        <section id="tech" class="py-14 sm:py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="text-center mb-12 lg:mb-16">
                        <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold">
                            My <span class="poppins text-violet-400">Tech Stack</span>
                        </h2>
                        <p class="text-slate-300 mt-4 text-lg sm:text-xl">
                            Skills & technologies I use to bring ideas to life
                        </p>
                    </div>
        
                    <!-- Filter Buttons with Descending Style -->
                   
                    <!-- <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 px-2 sm:px-0">
                        <button class="filter-btn px-2 py-1 sm:px-4 sm:py-2 rounded-t-lg bg-zinc-900 text-white hover:bg-violet-700 transition-colors shadow-md text-sm sm:text-base" data-filter="all">All</button>
                        <button class="filter-btn px-2 py-1 sm:px-4 sm:py-2 rounded-t-lg bg-zinc-900 text-white hover:bg-violet-700 transition-colors shadow-md text-sm sm:text-base" data-filter="frontend">Frontend</button>
                        <button class="filter-btn px-2 py-1 sm:px-4 sm:py-2 rounded-t-lg bg-zinc-900 text-white hover:bg-violet-700 transition-colors shadow-md text-sm sm:text-base" data-filter="backend">Backend</button>
                        <button class="filter-btn px-2 py-1 sm:px-4 sm:py-2 rounded-t-lg bg-zinc-900 text-white hover:bg-violet-700 transition-colors shadow-md text-sm sm:text-base" data-filter="database">Database</button>
                        <button class="filter-btn px-2 py-1 sm:px-4 sm:py-2 rounded-t-lg bg-zinc-900 text-white hover:bg-violet-700 transition-colors shadow-md text-sm sm:text-base" data-filter="tools">Tools</button>
                    </div> -->
        
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 tech-grid">
                        <!-- HTML5 - Frontend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="frontend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-brands fa-html5 text-orange-600 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">HTML5</h3>
                                <p class="text-slate-400 text-sm mt-1">Semantic Web</p>
                            </div>
                        </div>
        
                        <!-- CSS3 - Frontend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="frontend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-brands fa-css3-alt text-blue-600 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">CSS3</h3>
                                <p class="text-slate-400 text-sm mt-1">Styling Master</p>
                            </div>
                        </div>
        
                        <!-- Tailwind - Frontend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="frontend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-wind text-teal-400 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Tailwind</h3>
                                <p class="text-slate-400 text-sm mt-1">Utility First</p>
                            </div>
                        </div>
        
                        <!-- JavaScript - Frontend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="frontend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-brands fa-square-js text-yellow-400 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">JavaScript</h3>
                                <p class="text-slate-400 text-sm mt-1">ES6+</p>
                            </div>
                        </div>
        
                        <!-- TypeScript - Frontend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="frontend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-t text-blue-700 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">TypeScript</h3>
                                <p class="text-slate-400 text-sm mt-1">Typed JS</p>
                            </div>
                        </div>
        
                        <!-- Svelte - Frontend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="frontend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-bolt text-orange-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Svelte</h3>
                                <p class="text-slate-400 text-sm mt-1">Reactive</p>
                            </div>
                        </div>
        
                        <!-- SvelteKit - Frontend/Backend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="frontend backend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-rocket text-orange-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">SvelteKit</h3>
                                <p class="text-slate-400 text-sm mt-1">Fullstack</p>
                            </div>
                        </div>
        
                        <!-- Node.js - Backend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="backend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-brands fa-node-js text-green-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Node.js</h3>
                                <p class="text-slate-400 text-sm mt-1">Runtime</p>
                            </div>
                        </div>
        
                        <!-- Express.js - Backend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="backend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-server text-gray-300 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Express.js</h3>
                                <p class="text-slate-400 text-sm mt-1">Web Framework</p>
                            </div>
                        </div>
        
                        <!-- MongoDB - Database -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="database">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-leaf text-green-600 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">MongoDB</h3>
                                <p class="text-slate-400 text-sm mt-1">NoSQL</p>
                            </div>
                        </div>
        
                        <!-- SQL - Database -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="database">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-database text-blue-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">SQL</h3>
                                <p class="text-slate-400 text-sm mt-1">Relational DB</p>
                            </div>
                        </div>
        
                        <!-- C - Backend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="backend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-c text-blue-600 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">C</h3>
                                <p class="text-slate-400 text-sm mt-1">System Basics</p>
                            </div>
                        </div>
        
                        <!-- C++ - Backend -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="backend">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-plus-plus text-blue-600 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">C++</h3>
                                <p class="text-slate-400 text-sm mt-1">OOP</p>
                            </div>
                        </div>
                    </div>
        
                    <!-- Tools Section -->
                        <div class="text-center mt-16 mb-12">
                            <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold">
                                My <span class="poppins text-violet-400">Tools</span>
                            </h2>
                            <p class="text-slate-300 mt-4 text-lg sm:text-xl">
                                Development tools & utilities
                            </p>
                        </div>
            
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 tech-grid">
                        <!-- Git - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-brands fa-git-alt text-orange-600 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Git</h3>
                                <p class="text-slate-400 text-sm mt-1">Version Control</p>
                            </div>
                        </div>
        
                        <!-- GitHub - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-brands fa-github text-gray-200 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">GitHub</h3>
                                <p class="text-slate-400 text-sm mt-1">Code Hosting</p>
                            </div>
                        </div>
        
                        <!-- Postman - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-envelope text-orange-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Postman</h3>
                                <p class="text-slate-400 text-sm mt-1">API Testing</p>
                            </div>
                        </div>
        
                        <!-- VS Code - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-code text-blue-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">VS Code</h3>
                                <p class="text-slate-400 text-sm mt-1">Code Editor</p>
                            </div>
                        </div>
        
                        <!-- Cursor - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-mouse-pointer text-gray-400 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Cursor</h3>
                                <p class="text-slate-400 text-sm mt-1">AI Editor</p>
                            </div>
                        </div>
        
                        <!-- Dora AI - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-robot text-purple-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Dora AI</h3>
                                <p class="text-slate-400 text-sm mt-1">AI Design</p>
                            </div>
                        </div>
        
                        <!-- Wide Canvas - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-paint-brush text-pink-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Wide Canvas</h3>
                                <p class="text-slate-400 text-sm mt-1">Design Tool</p>
                            </div>
                        </div>
        
                        <!-- ChatGPT - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-comment-dots text-green-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">ChatGPT</h3>
                                <p class="text-slate-400 text-sm mt-1">AI Assistant</p>
                            </div>
                        </div>
        
                        <!-- Claude - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-brain text-orange-400 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Claude</h3>
                                <p class="text-slate-400 text-sm mt-1">AI Model</p>
                            </div>
                        </div>
        
                        <!-- DeepSeek - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-magnifying-glass text-blue-500 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">DeepSeek</h3>
                                <p class="text-slate-400 text-sm mt-1">AI Search</p>
                            </div>
                        </div>
        
                        <!-- Grok - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-star text-blue-400 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Grok</h3>
                                <p class="text-slate-400 text-sm mt-1">AI Helper</p>
                            </div>
                        </div>
        
                        <!-- Mistral - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-wind text-teal-400 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">Mistral</h3>
                                <p class="text-slate-400 text-sm mt-1">AI Engine</p>
                            </div>
                        </div>
        
                        <!-- V0 - Tools -->
                        <div class="group relative p-4 sm:p-5 rounded-xl border border-slate-700/20 hover:border-violet-400/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden tech-item" data-category="tools">
                            <div class="absolute inset-0 bg-slate-800/20 backdrop-blur-md"></div>
                            <div class="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/20 transition-colors duration-300"></div>
                            <div class="relative flex flex-col items-center">
                                <i class="fa-solid fa-layer-group text-purple-600 text-2xl mb-2"></i>
                                <h3 class="poppins font-medium text-lg">V0</h3>
                                <p class="text-slate-400 text-sm mt-1">UI Generator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
       



<section id="cert" class="p-4 sm:p-8 md:p-12 lg:p-16 bg-slate-800/20 backdrop-blur-md text-white mt-12 sm:mt-24 md:mt-48 mb-4 font-sans relative overflow-hidden scroll-mt-12">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14">
        <span class="bg-gradient-to-r from-white to-violet-400 inline-block text-transparent bg-clip-text">
            Certificates Achieved
        </span>
        <i class="fas fa-award ml-2"></i>
        
    </h2>
    <div class="flex flex-col gap-6 md:flex-row md:gap-8 justify-between">
        <!-- Left Side: First 3 Cards -->
        <div class="flex-1 space-y-10 w-full">
            <div class="bg-slate-950 p-4 rounded-lg border-l-4 border-violet-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
                <h3 class="text-violet-300 text-lg sm:text-2xl font-semibold mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer gap-2">
                    <span class="flex items-center flex-shrink-0"><span class="text-violet-100">Power BI</span>: Certificate of Completion <i class="fas fa-award ml-2"></i></span>
                    <span class="text-violet-600 text-sm sm:text-base sm:text-right">16/02/2025</span>
                </h3>
                <div class="text-gray-300 mt-2 text-sm sm:text-base">
                    <p>Issued by: <span class="font-bold text-violet-100">TechTip24</span> <i class="fas fa-building ml-2"></i></p>
                    <p>For: Successfully Completing 4 Hours of Data Analytics Using POWER BI Workshop with END-TO-END Project</p>
                    <p class="font-bold text-violet-400 mt-2">Issued by: Aditya, CEO & Founder, TechTip24 <i class="fas fa-user-tie ml-2"></i></p>
                </div>
            </div>
            <div class="bg-slate-950 p-4 rounded-lg border-l-4 border-violet-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
                <h3 class="text-violet-300 text-lg sm:text-2xl font-semibold mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer gap-2">
                    <span class="flex items-center flex-shrink-0"><span class="text-violet-100">CSS</span>: Official Certificate of Completion <i class="fas fa-trophy ml-2"></i></span>
                    <span class="text-violet-600 text-sm sm:text-base sm:text-right">31/01/2025</span>
                </h3>
                <div class="text-gray-300 mt-2 text-sm sm:text-base">
                    <p>Issued by: <span class="font-bold text-violet-600">Codekaro</span> <i class="fas fa-building ml-2"></i></p>
                    <p>For: Successful Completion of How To CSS 5 Days Bootcamp</p>
                    <p class="font-bold text-violet-400 mt-2">Issued by: Ashish Shukla, CEO - Codekaro <i class="fas fa-user-tie ml-2"></i></p>
                </div>
            </div>
            <div class="bg-slate-950 p-4 rounded-lg border-l-4 border-violet-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
                <h3 class="text-violet-300 text-lg sm:text-2xl font-semibold mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer gap-2">
                    <span class="flex items-center flex-shrink-0"><span class="text-violet-100">Power BI</span>: Certified Record of Completion <i class="fas fa-check-circle ml-2"></i></span>
                    <span class="text-violet-600 text-sm sm:text-base sm:text-right">23/02/2025</span>
                </h3>
                <div class="text-gray-300 mt-2 text-sm sm:text-base">
                    <p>Issued by: <span class="font-bold text-violet-600">OM Officemaster</span> <i class="fas fa-building ml-2"></i></p>
                    <p>For: Successful Completion of PowerBI Workshop (Creating AI-Powered Interactive Dashboards in under 30 mins)</p>
                    <p class="font-bold text-violet-400 mt-2">Issued by: Aditya Koenka & Aditya Kachave, Co-founders <i class="fas fa-users ml-2"></i></p>
                </div>
            </div>
        </div>
        <!-- Vertical Double-Line Divider -->
        <div class="hidden md:block w-2 relative self-stretch my-2">
            <div class="absolute inset-0 flex justify-between">
                <div class="w-0.5 bg-gradient-to-b from-violet-500 to-violet-700 rounded-full"></div>
                <div class="w-0.5 bg-gradient-to-b from-violet-500 to-violet-700 rounded-full"></div>
            </div>
        </div>
        <!-- Right Side: Last 3 Cards -->
        <div class="flex-1 space-y-10 w-full">
            <div class="bg-slate-950 p-4 rounded-lg border-l-4 border-violet-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
                <h3 class="text-violet-300 text-lg sm:text-2xl font-semibold mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer gap-2">
                    <span class="flex items-center flex-shrink-0"><span class="text-violet-100">Figma</span>: Certificate of Completion <i class="fas fa-pen-fancy ml-2"></i></span>
                    <span class="text-violet-600 text-sm sm:text-base sm:text-right">8/03/2025</span>
                </h3>
                <div class="text-gray-300 mt-2 text-sm sm:text-base">
                    <p>Issued by: <span class="font-bold text-violet-600">Growth School</span> <i class="fas fa-building ml-2"></i></p>
                    <p>For: Successfully Completing the Figma Workshop</p>
                    <p class="font-bold text-violet-400 mt-2">Issued by: Prithvi Kumar, Founder & Vaibhav Sisinty, UK Designer II <i class="fas fa-users ml-2"></i></p>
                </div>
            </div>
            <div class="bg-slate-950 p-4 rounded-lg border-l-4 border-violet-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
                <h3 class="text-violet-300 text-lg sm:text-2xl font-semibold mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer gap-2">
                    <span class="flex items-center flex-shrink-0">Future Certificate Slot <i class="fas fa-question ml-2"></i></span>
                    <span class="text-violet-600 text-sm sm:text-base sm:text-right">??/??/????</span>
                </h3>
                <div class="text-gray-300 mt-2 text-sm sm:text-base">
                    <p>This slot is reserved for a future certificate.</p>
                </div>
            </div>
            <div class="bg-slate-950 p-4 rounded-lg border-l-4 border-violet-400 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out">
                <h3 class="text-violet-300 text-lg sm:text-2xl font-semibold mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer gap-2">
                    <span class="flex items-center flex-shrink-0">Future Certificate Slot <i class="fas fa-question ml-2"></i></span>
                    <span class="text-violet-600 text-sm sm:text-base sm:text-right">??/??/????</span>
                </h3>
                <div class="text-gray-300 mt-2 text-sm sm:text-base">
                    <p>This slot is reserved for a future certificate.</p>
                </div>
            </div>
        </div>
    </div>
</section>




            
            <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
                The <span class="text-violet-400">Complete</span> Package
            </h5>
            <!-- <div class="flex flex-col gap-10 max-w-[800px] mx-auto w-full overflow-x-hidden">
                <table class="bg-[#EEE8FD] text-slate-900 rounded-md    text-center w-full">
                    <thead class="border-b border-solid border-slate-200">
                        <tr>
                            <th />
                            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                            <th class="bg-violet-600 text-white whitespace-nowrap p-4 px-8">Me</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-solid border-slate-200">
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                >TeamWork & Collabrative</td
                            >
                            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                        </tr>
                        <tr class="border-b border-solid border-slate-200">
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                >Resilience & Adaptability</td
                            >
                            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                        </tr>
                        <tr>
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                >Creativity</td
                            >
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                        </tr>
                        <tr class="border-t border-solid border-slate-200">
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                >Progamming Ability</td
                            >
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                        </tr>
                        <tr class="border-t border-solid border-slate-200">
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                >Interpersonal Skills</td
                            >
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-slate-500" /></td>
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
                <p>Scroll to see more &rarr;</p>
            </div>
            <p class="mx-auto text-2xl font-bold font-roboto">So why not invest?</p>

        </section>
    </main> -->

    <div class="flex flex-col gap-6 max-w-[800px] mx-auto w-full overflow-x-auto sm:overflow-x-hidden">
        <div class="w-full overflow-x-auto">
            <table class="bg-[#EEE8FD] text-slate-900 rounded-md text-center w-full min-w-[600px]">
                <thead class="border-b border-solid border-slate-200">
                    <tr>
                        <th></th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                        <th class="bg-violet-600 text-white whitespace-nowrap p-4 px-8">Me</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Teamwork & Collaboration</td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Resilience & Adaptability</td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr>
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Creativity</td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-t border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Programming Ability</td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-t border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="mx-auto -mt-8 italic sm:hidden opacity-50 text-center text-sm">
        <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto text-2xl font-bold font-roboto text-center mt-4">So why not invest?</p>
</section>
</main>
    
