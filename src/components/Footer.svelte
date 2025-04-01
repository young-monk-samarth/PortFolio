<footer
    class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
    <div class="pure-scroller">
        <div class="scroller-track">
            <span class="scroll-text">OPEN TO WORK  </span>
            <span class="scroll-text">LOOKING FOR INTERNSHIP  </span>
            <span class="scroll-text">OPEN TO WORK  </span>
            <span class="scroll-text">LOOKING FOR INTERNSHIP  </span>
        </div>
    </div>

    <style>
        :root {
            --text-color: white;
            --scroll-speed: 15s;
            --text-size: 1.5rem;
        }

        .pure-scroller {
            position: bottom center;
            overflow: hidden;
            top: 100px; /* Adjust based on header height */
            width: 100%;
            left: 0;
            right: 0;
            z-index: 100;
            background: #080808; /* Semi-transparent background */
            color: white !important; /* Text color */
        }

        .scroller-track {
            display: inline-flex;
            animation: scroll var(--scroll-speed) linear infinite;
            white-space: nowrap;
        }

        .scroll-text {
            display: inline-flex;
            align-items: center;
            color: var(--text-color);
            font-size: var(--text-size);
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            padding: 0 2rem;
            position: relative;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }

        .scroll-text::after {
            content: "\f08c""\f061";
            font-family: FontAwesome;
            margin: 0 3rem;
            opacity: 0.7;
            font-size: 1rem;
        }

        @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }

        .scroll-text:hover {
            animation: text-glow 1.2s ease-in-out infinite;
        }

        @keyframes text-glow {
            0%, 100% { 
                text-shadow: 0 0 10px rgba(0,0,0,0.1),
                            0 0 20px rgba(0,0,0,0.1);
            }
            50% { 
                text-shadow: 0 0 15px rgba(0,0,0,0.2),
                            0 0 25px rgba(0,0,0,0.2);
            }
        }

        @media (max-width: 768px) {
            :root {
                --text-size: 1.8rem;
            }
            .scroll-text::after {
                margin: 0 1rem;
            }
        }
    </style>

    <p 
        class="px-6 py-1 bg-white text-slate-950 font-medium rounded-md transition-all duration-200 hover:bg-black group relative cursor-pointer text-lg" 
        id="connect"
    >
        <span class="inline-block group-hover:text-white transition-colors duration-200 align-middle">
            Connect with me 
            <span class="inline-block text-2xl ml-1 animate-[bounce-fast_0.5s_infinite]">
                &darr;
            </span>
        </span>
    </p>
   
    
    <style>
        @keyframes bounce-fast {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
        }
        .animate-\[bounce-fast_0\.5s_infinite\] {
            animation: bounce-fast 0.5s infinite;
        }
    </style>

    <div class="flex flex-row gap-8 items-center justify-center">
        <!-- Gmail Icon -->
        <a href="mailto:samarthmise2025@gmail.com" class="icon-container group">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                class="w-10 h-10 text-gray-100 fill-current transition-colors"
            >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
            </svg>
            <span class="popup">Feel free to email me</span>
        </a>
        

        <!-- GitHub Icon -->
        <a href="https://github.com/young-monk-samarth?tab=repositories" target="_blank" class="icon-container group">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="34" 
                height="34" 
                viewBox="0 0 64 64"
                class="w-10 h-10 text-gray-100 fill-current transition-colors"
            >
                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19,22.494 19,20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
            </svg>
            <span class="popup">Look at my works on GitHub</span>
        </a>

        <!-- LinkedIn Icon -->
        <a href="https://www.linkedin.com/in/samarthmuktamath?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="icon-container group">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="34" 
                height="34" 
                viewBox="0 0 50 50"
                class="w-10 h-10 text-gray-100 fill-current transition-colors"
            >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            <span class="popup">Reach me via LinkedIn</span>
        </a>
    </div>
    <p class="flex items-center">
        <i class="fas fa-location-dot text-red-500 mr-2"></i> Bengaluru
    </p>

    <style>
        .icon-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .popup {
            position: absolute;
            top: 100%; /* Position below the icon */
            left: 50%;
            transform: translateX(-50%);
            background-color: black;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.875rem;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            white-space: nowrap;
        }

        .icon-container:hover .popup {
            opacity: 1;
            visibility: visible;
        }
    </style>
    

    <p class="text-center text-sm text-slate-500 mt-8">
        &copy; SAMARTH MUKTAMATH.<br>2024-All Rights Reserved.
    </p>
</footer>