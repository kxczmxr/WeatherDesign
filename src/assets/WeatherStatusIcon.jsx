export const getWeatherIcon = (weatherCode) => {
    const iconDict = {
        //clear sky
        '01d': '<svg width="80px" height="50px" viewBox="5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#821717" stroke="#821717" style="margin-top: 5px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.2"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -2519.000000)" fill="#ffd500"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M166.929,2363.343 C166.538,2362.952 166.538,2362.319 166.929,2361.929 C167.32,2361.538 167.953,2361.538 168.343,2361.929 C168.734,2362.319 168.734,2362.952 168.343,2363.343 C167.953,2363.734 167.32,2363.734 166.929,2363.343 M181.071,2374.657 C181.462,2375.047 181.462,2375.68 181.071,2376.071 C180.681,2376.461 180.047,2376.461 179.657,2376.071 C179.266,2375.68 179.266,2375.047 179.657,2374.657 C180.047,2374.266 180.681,2374.266 181.071,2374.657 M168.343,2374.657 C168.734,2375.047 168.734,2375.68 168.343,2376.071 C167.953,2376.461 167.32,2376.461 166.929,2376.071 C166.538,2375.68 166.538,2375.047 166.929,2374.657 C167.32,2374.266 167.953,2374.266 168.343,2374.657 M181.071,2361.929 C181.462,2362.319 181.462,2362.952 181.071,2363.343 C180.681,2363.734 180.047,2363.734 179.657,2363.343 C179.266,2362.952 179.266,2362.319 179.657,2361.929 C180.047,2361.538 180.681,2361.538 181.071,2361.929 M166,2369 C166,2369.552 165.552,2370 165,2370 C164.448,2370 164,2369.552 164,2369 C164,2368.448 164.448,2368 165,2368 C165.552,2368 166,2368.448 166,2369 M184,2369 C184,2369.552 183.552,2370 183,2370 C182.448,2370 182,2369.552 182,2369 C182,2368.448 182.448,2368 183,2368 C183.552,2368 184,2368.448 184,2369 M175,2378 C175,2378.552 174.552,2379 174,2379 C173.448,2379 173,2378.552 173,2378 C173,2377.448 173.448,2377 174,2377 C174.552,2377 175,2377.448 175,2378 M173,2360 C173,2359.448 173.448,2359 174,2359 C174.552,2359 175,2359.448 175,2360 C175,2360.552 174.552,2361 174,2361 C173.448,2361 173,2360.552 173,2360 M174,2374 C171.243,2374 169,2371.757 169,2369 C169,2366.243 171.243,2364 174,2364 C176.757,2364 179,2366.243 179,2369 C179,2371.757 176.757,2374 174,2374 M174,2362 C170.134,2362 167,2365.134 167,2369 C167,2372.866 170.134,2376 174,2376 C177.866,2376 181,2372.866 181,2369 C181,2365.134 177.866,2362 174,2362" id="sun_star-[#ffffff]"> </path> </g> </g> </g> </g></svg>',
        //few clouds
        '02d': '<svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-clouds"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z"></path> <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z"></path> </g></svg>',
        //scattered clouds
        '03d': '<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
        //broken clouds
        '04d': '<svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-clouds"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z"></path> <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z"></path> </g></svg>',
        //shower rain
        '09d': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M66,40c-0.507,0-1.112,0.079-1.688,0.184C62.217,33.012,55.663,28,48,28s-14.218,5.012-16.311,12.184 C31.112,40.079,30.507,40,30,40c-6.065,0-11,4.935-11,11s4.935,11,11,11c1.104,0,2-0.896,2-2s-0.896-2-2-2c-3.86,0-7-3.141-7-7 s3.14-7,7-7c0.277,0,0.723,0.068,1.193,0.162V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.221C36.267,36.527,41.63,32,48,32 s11.732,4.527,12.807,10.779V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.838C65.277,44.068,65.722,44,66,44c3.859,0,7,3.141,7,7 s-3.141,7-7,7c-1.104,0-2,0.896-2,2s0.896,2,2,2c6.065,0,11-4.935,11-11S72.065,40,66,40z"></path> <path d="M49.485,52.06c-1.073-0.27-2.158,0.384-2.426,1.455l-6,24c-0.268,1.072,0.384,2.157,1.455,2.426 C42.677,79.981,42.84,80,43.001,80c0.896,0,1.711-0.606,1.939-1.515l6-24C51.208,53.413,50.557,52.328,49.485,52.06z"></path> <path d="M57.484,58.06c-1.072-0.271-2.157,0.384-2.425,1.455l-3,12c-0.268,1.072,0.384,2.158,1.456,2.426 c0.163,0.041,0.326,0.06,0.486,0.06c0.896,0,1.712-0.606,1.939-1.515l2.999-12C59.208,59.413,58.556,58.327,57.484,58.06z"></path> <path d="M38.484,58.06c-1.069-0.271-2.157,0.384-2.425,1.455l-3,12c-0.268,1.072,0.384,2.158,1.456,2.426 c0.163,0.041,0.326,0.06,0.486,0.06c0.896,0,1.712-0.606,1.939-1.515l3-12C40.208,59.413,39.556,58.327,38.484,58.06z"></path> </g> </g> </g></svg>',
        //rain
        '10d': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <path d="M48,78c-1.105,0-2,0.896-2,2v4c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-4C50,78.896,49.104,78,48,78z M44.443,23.271 c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828l-2.828-2.828 c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L44.443,23.271z M60,18c1.104,0,2-0.896,2-2v-4 c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C58,17.104,58.895,18,60,18z M74.143,23.857c0.512,0,1.023-0.195,1.414-0.586 l2.828-2.828c0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828 C73.119,23.662,73.631,23.857,74.143,23.857z M39,72c-1.105,0-2,0.896-2,2v4c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-4 C41,72.896,40.104,72,39,72z M84,34h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S85.104,34,84,34z M48,66 c-1.105,0-2,0.896-2,2v4c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-4C50,66.896,49.104,66,48,66z M72.556,42.187 C73.501,40.271,74,38.166,74,36c0-7.72-6.28-14-14-14c-4.601,0-8.895,2.281-11.496,6.021C48.336,28.016,48.17,28,48.001,28 c-7.664,0-14.219,5.012-16.312,12.184C31.113,40.079,30.508,40,30.001,40c-6.066,0-11,4.935-11,11s4.934,11,11,11H37v4 c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-4h14v4c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-4h7.001c6.065,0,11-4.935,11-11 C77.001,47.392,75.247,44.194,72.556,42.187z M60,26c5.514,0,10,4.486,10,10c0,1.548-0.36,3.05-1.036,4.417 C68.019,40.152,67.028,40,66.001,40c-0.508,0-1.112,0.079-1.69,0.184c-1.608-5.511-5.854-9.735-11.21-11.401 C54.939,27.03,57.397,26,60,26z M66.001,58h-36c-3.859,0-7-3.141-7-7s3.141-7,7-7c0.277,0,0.723,0.068,1.192,0.162V46 c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.214C36.264,36.53,41.628,32,48.001,32c6.37,0,11.733,4.528,12.806,10.781V46 c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837C65.278,44.069,65.727,44,66.001,44c3.859,0,7,3.141,7,7S69.86,58,66.001,58z M57,72 c-1.105,0-2,0.896-2,2v4c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2v-4C59,72.896,58.104,72,57,72z"></path> </g> </g></svg>',
        //thunderstorm
        '11d': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <path d="M59.999,18c1.104,0,2-0.896,2-2v-4c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C57.999,17.104,58.894,18,59.999,18z M72.555,42.188c0.945-1.915,1.444-4.021,1.444-6.188c0-7.72-6.28-14-14-14c-4.601,0-8.895,2.281-11.496,6.021 C48.335,28.016,48.169,28,48,28c-7.664,0-14.219,5.012-16.312,12.184C31.112,40.079,30.507,40,30,40c-6.065,0-11,4.935-11,11 s4.935,11,11,11h11.263l-3.927,5.891c-0.409,0.613-0.447,1.402-0.1,2.053C37.585,70.594,38.263,71,39,71h2.263l-3.927,5.891 c-0.612,0.919-0.364,2.161,0.555,2.773C38.231,79.892,38.617,80,38.998,80c0.646,0,1.28-0.313,1.666-0.891l6-9 c0.409-0.613,0.447-1.402,0.1-2.053C46.415,67.406,45.737,67,45,67h-2.263l3.333-5h5.192l-1.927,2.891 c-0.409,0.613-0.447,1.402-0.1,2.053C49.585,67.594,50.263,68,51,68h2.263l-1.927,2.891c-0.612,0.919-0.364,2.161,0.555,2.773 C52.231,73.892,52.617,74,52.998,74c0.646,0,1.28-0.313,1.666-0.891l4-6c0.409-0.613,0.447-1.402,0.1-2.053 C58.415,64.406,57.737,64,57,64h-2.263l1.333-2H66c6.065,0,11-4.935,11-11C77,47.393,75.246,44.194,72.555,42.188z M59.999,26 c5.514,0,10,4.486,10,10c0,1.549-0.36,3.051-1.035,4.417C68.019,40.152,67.028,40,66,40c-0.508,0-1.112,0.079-1.689,0.184 c-1.608-5.511-5.855-9.735-11.211-11.401C54.938,27.03,57.396,26,59.999,26z M66,58H30c-3.859,0-7-3.141-7-7s3.141-7,7-7 c0.277,0,0.723,0.068,1.193,0.162V46c0,1.104,0.895,2,2,2c1.105,0,2-0.896,2-2v-3.219C36.266,36.528,41.629,32,48,32 c6.37,0,11.733,4.528,12.807,10.782V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837C65.277,44.069,65.726,44,66,44c3.859,0,7,3.141,7,7 S69.859,58,66,58z M74.142,23.857c0.512,0,1.023-0.195,1.414-0.586l2.828-2.828c0.781-0.781,0.781-2.047,0-2.828 c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828C73.118,23.662,73.63,23.857,74.142,23.857z M44.443,23.271c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828l-2.828-2.828 c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L44.443,23.271z M83.999,34h-4c-1.105,0-2,0.896-2,2 s0.895,2,2,2h4c1.104,0,2-0.896,2-2S85.103,34,83.999,34z"></path> </g> </g></svg>',
        //snow
        '13d': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M72.555,42.188c0.945-1.915,1.444-4.021,1.444-6.188c0-7.72-6.28-14-14-14c-4.601,0-8.895,2.281-11.496,6.021 C48.335,28.016,48.169,28,48,28c-7.664,0-14.219,5.012-16.312,12.184C31.112,40.079,30.507,40,30,40c-6.065,0-11,4.935-11,11 s4.935,11,11,11c1.104,0,2-0.896,2-2s-0.896-2-2-2c-3.859,0-7-3.141-7-7s3.141-7,7-7c0.277,0,0.723,0.068,1.193,0.162V46 c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2v-3.219C36.266,36.528,41.629,32,48,32c6.37,0,11.733,4.528,12.807,10.782V46 c0,1.104,0.895,2,2,2c1.105,0,2-0.896,2-2v-1.838C65.277,44.068,65.723,44,66,44c3.859,0,7,3.141,7,7s-3.141,7-7,7 c-1.104,0-2,0.896-2,2s0.896,2,2,2c6.065,0,11-4.935,11-11C77,47.393,75.246,44.194,72.555,42.188z M64.311,40.184 c-1.608-5.511-5.855-9.735-11.211-11.401C54.938,27.03,57.396,26,59.999,26c5.514,0,10,4.486,10,10 c0,1.549-0.36,3.051-1.035,4.417C68.019,40.152,67.028,40,66,40C65.492,40,64.888,40.079,64.311,40.184z"></path> <path d="M59.999,18c1.104,0,2-0.896,2-2v-4c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C57.999,17.104,58.894,18,59.999,18z"></path> <path d="M83.999,34h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S85.103,34,83.999,34z"></path> <path d="M74.142,23.857c0.512,0,1.023-0.195,1.414-0.586l2.828-2.828c0.781-0.781,0.781-2.047,0-2.828 c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828C73.118,23.662,73.63,23.857,74.142,23.857z"></path> <path d="M44.443,23.271c0.391,0.391,0.902,0.586,1.414,0.586c0.512,0,1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828 l-2.828-2.828c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L44.443,23.271z"></path> <path d="M45.732,62.464c-0.554-0.956-1.773-1.286-2.732-0.733c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.268c0.956-0.553,1.284-1.775,0.732-2.732L45.732,62.464z"></path> <path d="M40.732,53.804c-0.554-0.957-1.774-1.285-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.267c0.956-0.553,1.284-1.775,0.732-2.733L40.732,53.804z"></path> <path d="M43,58.269c0.315,0.182,0.659,0.267,0.998,0.267c0.691,0,1.363-0.358,1.734-1l1-1.732c0.552-0.957,0.224-2.18-0.732-2.732 c-0.96-0.553-2.18-0.225-2.732,0.732l-1,1.732C41.716,56.493,42.044,57.716,43,58.269z"></path> <path d="M41,61.731c-0.96-0.554-2.18-0.224-2.732,0.733l-1,1.732c-0.552,0.957-0.224,2.18,0.732,2.732 c0.315,0.182,0.659,0.268,0.998,0.268c0.691,0,1.363-0.358,1.734-1l1-1.732C42.284,63.507,41.956,62.284,41,61.731z"></path> <path d="M40,60c0-1.104-0.896-2-2-2h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2C39.104,62,40,61.104,40,60z"></path> <path d="M50,60c0-1.104-0.896-2-2-2h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2C49.104,62,50,61.104,50,60z"></path> <path d="M60.732,71.268c-0.554-0.956-1.773-1.285-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.268c0.956-0.553,1.284-1.775,0.732-2.732L60.732,71.268z"></path> <path d="M55.732,62.607c-0.554-0.956-1.773-1.286-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.267c0.956-0.553,1.284-1.775,0.732-2.733L55.732,62.607z"></path> <path d="M58,67.072c0.315,0.182,0.659,0.267,0.998,0.267c0.691,0,1.363-0.358,1.734-1l1-1.732c0.552-0.957,0.224-2.18-0.732-2.732 c-0.96-0.554-2.181-0.224-2.732,0.732l-1,1.732C56.716,65.297,57.044,66.52,58,67.072z"></path> <path d="M56,70.535c-0.96-0.553-2.181-0.224-2.732,0.732l-1,1.732c-0.552,0.957-0.224,2.18,0.732,2.732 C53.315,75.914,53.659,76,53.998,76c0.691,0,1.363-0.358,1.734-1l1-1.732C57.284,72.311,56.956,71.088,56,70.535z"></path> <path d="M55,68.804c0-1.104-0.896-2-2-2h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2C54.104,70.804,55,69.908,55,68.804z"></path> <path d="M63,66.804h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2c1.104,0,2-0.896,2-2S64.104,66.804,63,66.804z"></path> </g> </g> </g></svg>',
        //mist
        '50d': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M57,24c1.104,0,2-0.896,2-2v-4c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C55,23.104,55.895,24,57,24z"></path> <path d="M81,40h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S82.104,40,81,40z"></path> <path d="M71.143,29.857c0.512,0,1.023-0.195,1.414-0.586l2.828-2.828c0.781-0.781,0.781-2.047,0-2.828 c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828C70.119,29.662,70.631,29.857,71.143,29.857z"></path> <path d="M41.443,29.271c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828 l-2.828-2.828c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L41.443,29.271z"></path> <path d="M21,44h30c1.104,0,2-0.896,2-2s-0.896-2-2-2H21c-1.105,0-2,0.896-2,2S19.895,44,21,44z"></path> <path d="M14.999,50H39c1.104,0,2-0.896,2-2s-0.896-2-2-2H14.999c-1.105,0-2,0.896-2,2S13.894,50,14.999,50z"></path> <path d="M72,52H12c-1.105,0-2,0.896-2,2s0.895,2,2,2h60c1.104,0,2-0.896,2-2S73.104,52,72,52z"></path> <path d="M72,58H15c-1.105,0-2,0.896-2,2s0.895,2,2,2h57c1.104,0,2-0.896,2-2S73.104,58,72,58z"></path> <path d="M33,64l-12-0.001c-1.105,0-2,0.896-2,2s0.895,2,2,2L33,68c1.104,0,2-0.896,2-2S34.104,64,33,64z"></path> <path d="M66,63.999L39,64c-1.105,0-2,0.896-2,2s0.895,2,2,2l27-0.001c1.104,0,2-0.896,2-2S67.104,63.999,66,63.999z"></path> <path d="M33,38h13.603c0.714,0,1.373-0.38,1.731-0.997C50.121,33.917,53.442,32,57,32c5.514,0,10,4.486,10,10 c0,1.393-0.29,2.767-0.827,4H45c-1.105,0-2,0.896-2,2s0.895,2,2,2h22.394c0.681,0,1.314-0.346,1.683-0.919 c0.018-0.027,0.053-0.083,0.069-0.112C70.358,46.857,71,44.448,71,42c0-7.72-6.28-14-14-14c-4.584,0-8.887,2.272-11.491,6H33 c-1.105,0-2,0.896-2,2S31.895,38,33,38z"></path> </g> </g> </g></svg>',
        '01n': '<svg width="50px" height="50px" viewBox="0 0 62.15 60.5" xmlns="http://www.w3.org/2000/svg"> <g transform="translate(-74,-129)"> <g transform="translate(17.58,83.33)"> <path fill="#cccccc" d="M 81.89 105.59 C 75.23 104.35 70.36 101.83 65.59 97.15 L 62.51 94.13 60.69 91.08 C 59.68 89.41 58.4 86.63 57.83 84.92 l -1.03 -3.12 -0.19 -5.07 -0.19 -5.07 0.63 -2.92 C 59.67 56.64 71.5 47.11 85.39 45.89 l 2.73 -0.24 3.97 0.64 c 14.07 2.26 24.34 12.54 26.05 26.09 l 0.43 3.37 -0.42 3.31 c -0.52 4.13 -1.66 7.8 -3.5 11.32 l -1.43 2.73 -3.83 3.76 -3.83 3.76 -4.15 1.96 c -4.85 2.29 -8.28 3.19 -13.04 3.41 l -3.44 0.16 z"/><path fill="#b6b6b6" d="M 81.55 104.99 C 67.63 102.57 57.8 91.01 57.03 76.14 l -0.21 -4.09 0.63 -2.92 0.63 -2.92 1.78 -3.51 c 1.86 -3.66 4.82 -7.37 6.26 -7.82 0.46 -0.14 1.84 -0.86 3.07 -1.58 1.23 -0.73 2.55 -1.32 2.93 -1.32 l 0.7 -0.001 v 0.78 c 0 0.43 0.2 0.78 0.44 0.78 h 0.44 l -0.22 -0.82 c -0.51 -1.89 1.8 -2.92 7.87 -3.48 1.76 -0.16 4.49 -0.51 6.07 -0.77 1.58 -0.26 3.29 -0.37 3.81 -0.24 l 0.93 0.23 0.37 1.47 0.37 1.47 1.09 0.51 1.09 0.51 0.78 -0.41 0.78 -0.41 1.08 0.91 1.08 0.91 -0.29 0.45 c -0.16 0.25 -0.63 0.45 -1.06 0.45 -1.02 0 -1.06 -0.07 1.16 2.28 l 1.93 2.05 0.96 -0.24 0.96 -0.24 2.78 2.37 c 2.77 2.37 6.41 4.68 7.35 4.68 h 0.5 l -0.51 -0.61 c -0.28 -0.33 -1.1 -0.85 -1.81 -1.14 l -1.3 -0.53 -1.21 -2.08 c -1.36 -2.33 -1.49 -3.13 -0.63 -3.83 l 0.6 -0.49 1.22 0.49 c 1.49 0.61 3.07 2.55 3.41 4.23 0.14 0.69 0.6 1.43 1.01 1.65 0.88 0.46 2.35 3.55 3.15 6.61 l 0.56 2.13 -0.03 4.68 -0.03 4.68 -0.89 3.1 c -0.49 1.7 -1.63 4.5 -2.54 6.2 l -1.65 3.1 -2.73 2.65 c -4.61 4.47 -9.09 6.84 -16.59 8.76 l -2.17 0.56 -3.79 -0.05 c -2.09 -0.03 -4.6 -0.19 -5.58 -0.36 z"/> <path fill="#a8a8a8" d="M 79.87 104.38 C 71.01 102.51 62.82 95.32 59.15 86.2 l -1.05 -2.62 -0.4 -3.42 C 56.53 70.19 58.32 63.08 63.38 57.61 l 1.79 -1.94 1.85 -0.73 c 2.18 -0.86 2.64 -0.61 1.72 0.95 L 68.07 57.04 h 0.76 c 0.42 0 0.95 -0.34 1.17 -0.75 0.23 -0.41 1.38 -1.2 2.58 -1.75 1.19 -0.55 2.28 -1.18 2.41 -1.39 0.13 -0.21 0.91 -0.39 1.73 -0.39 0.82 0 1.67 -0.18 1.89 -0.4 l 0.4 -0.4 1.37 0.45 c 0.75 0.25 1.82 0.86 2.38 1.37 0.56 0.51 1.26 0.92 1.55 0.92 0.3 0 1.12 0.44 1.84 0.97 l 1.3 0.97 0.85 -1.17 0.85 -1.17 h 1.74 c 0.96 0 2.19 -0.2 2.73 -0.44 l 0.99 -0.44 1.84 1.71 c 1.01 0.94 2.28 2.37 2.82 3.19 l 0.98 1.48 1.36 -0.25 1.36 -0.25 2.7 2.32 c 3.01 2.59 6.4 4.54 7.52 4.32 l 0.74 -0.14 -0.12 -0.87 c -0.07 -0.48 0.07 -0.87 0.3 -0.87 0.23 0 0.42 0.42 0.42 0.93 0 0.51 0.27 1.15 0.6 1.41 1.03 0.84 1.83 4.32 2.07 8.97 l 0.23 4.48 -0.84 3.31 c -0.46 1.82 -1.59 4.8 -2.5 6.61 l -1.65 3.29 -2.83 2.75 c -2.98 2.9 -7.22 5.8 -9.13 6.23 l -1.14 0.26 0.83 -1.05 c 1.06 -1.33 1.07 -2.11 0.01 -2.11 h -0.82 l 0.62 -0.61 c 0.34 -0.34 0.62 -0.76 0.62 -0.95 0 -0.19 0.34 -0.44 0.75 -0.57 0.41 -0.13 0.85 -0.62 0.98 -1.03"/> </g> </g> </svg>',
        '02n': '<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
        '03n': '<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',
        '04n': '<svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-clouds"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z"></path> <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z"></path> </g></svg>',
        '09n': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M66,40c-0.507,0-1.112,0.079-1.688,0.184C62.217,33.012,55.663,28,48,28s-14.218,5.012-16.311,12.184 C31.112,40.079,30.507,40,30,40c-6.065,0-11,4.935-11,11s4.935,11,11,11c1.104,0,2-0.896,2-2s-0.896-2-2-2c-3.86,0-7-3.141-7-7 s3.14-7,7-7c0.277,0,0.723,0.068,1.193,0.162V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.221C36.267,36.527,41.63,32,48,32 s11.732,4.527,12.807,10.779V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.838C65.277,44.068,65.722,44,66,44c3.859,0,7,3.141,7,7 s-3.141,7-7,7c-1.104,0-2,0.896-2,2s0.896,2,2,2c6.065,0,11-4.935,11-11S72.065,40,66,40z"></path> <path d="M49.485,52.06c-1.073-0.27-2.158,0.384-2.426,1.455l-6,24c-0.268,1.072,0.384,2.157,1.455,2.426 C42.677,79.981,42.84,80,43.001,80c0.896,0,1.711-0.606,1.939-1.515l6-24C51.208,53.413,50.557,52.328,49.485,52.06z"></path> <path d="M57.484,58.06c-1.072-0.271-2.157,0.384-2.425,1.455l-3,12c-0.268,1.072,0.384,2.158,1.456,2.426 c0.163,0.041,0.326,0.06,0.486,0.06c0.896,0,1.712-0.606,1.939-1.515l2.999-12C59.208,59.413,58.556,58.327,57.484,58.06z"></path> <path d="M38.484,58.06c-1.069-0.271-2.157,0.384-2.425,1.455l-3,12c-0.268,1.072,0.384,2.158,1.456,2.426 c0.163,0.041,0.326,0.06,0.486,0.06c0.896,0,1.712-0.606,1.939-1.515l3-12C40.208,59.413,39.556,58.327,38.484,58.06z"></path> </g> </g> </g></svg>',
        '10n': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M69.24,40.488C72.173,37.886,74,34.094,74,30c0-1.104-0.896-2-2-2c-5.514,0-10-4.486-10-10c0-1.104-0.896-2-2-2 c-7.078,0-12.93,5.284-13.857,12.111C39.295,28.849,33.61,33.6,31.688,40.184C31.112,40.079,30.507,40,30,40 c-6.065,0-11,4.935-11,11s4.935,11,11,11h7v4c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2v-4h14v4c0,1.104,0.896,2,2,2 c1.104,0,2-0.896,2-2v-4h7c6.065,0,11-4.935,11-11C77,46.062,73.729,41.875,69.24,40.488z M58.167,20.168 c0.935,5.985,5.676,10.728,11.661,11.664c-0.615,3.246-2.84,6.006-5.862,7.326c-2.155-5.948-7.448-10.206-13.792-11.008 C50.933,24.111,54.125,20.92,58.167,20.168z M66,58H30c-3.86,0-7-3.141-7-7s3.14-7,7-7c0.277,0,0.723,0.068,1.193,0.162V46 c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.221C36.268,36.527,41.63,32,48,32c6.369,0,11.732,4.527,12.807,10.779V46 c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837C65.277,44.069,65.726,44,66,44c3.859,0,7,3.141,7,7S69.859,58,66,58z"></path> <path d="M48,66c-1.104,0-2,0.896-2,2v4c0,1.104,0.896,2,2,2s2-0.896,2-2v-4C50,66.896,49.104,66,48,66z"></path> <path d="M48,78c-1.104,0-2,0.896-2,2v4c0,1.104,0.896,2,2,2s2-0.896,2-2v-4C50,78.896,49.104,78,48,78z"></path> <path d="M39,72c-1.104,0-2,0.896-2,2v4c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2v-4C41,72.896,40.104,72,39,72z"></path> <path d="M57,72c-1.104,0-2,0.896-2,2v4c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2v-4C59,72.896,58.104,72,57,72z"></path> </g> </g> </g></svg>',
        '11n': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <g> <path d="M69.24,40.488C72.173,37.886,74,34.094,74,30c0-1.104-0.896-2-2-2c-5.514,0-10-4.486-10-10c0-1.104-0.896-2-2-2 c-7.078,0-12.931,5.284-13.857,12.111c-6.848,0.737-12.533,5.488-14.454,12.072C31.112,40.079,30.507,40,30,40 c-6.065,0-11,4.935-11,11s4.935,11,11,11h11.263l-3.927,5.891c-0.409,0.613-0.447,1.402-0.1,2.053C37.585,70.594,38.263,71,39,71 h2.263l-3.927,5.891c-0.612,0.919-0.364,2.161,0.555,2.773C38.231,79.892,38.617,80,38.998,80c0.646,0,1.28-0.313,1.666-0.891 l6-9c0.409-0.613,0.447-1.402,0.1-2.053C46.415,67.406,45.737,67,45,67h-2.263l3.333-5h5.192l-1.927,2.891 c-0.409,0.613-0.447,1.402-0.1,2.053C49.585,67.594,50.263,68,51,68h2.263l-1.927,2.891c-0.612,0.919-0.364,2.161,0.555,2.773 C52.231,73.892,52.617,74,52.998,74c0.646,0,1.28-0.313,1.666-0.891l4-6c0.409-0.613,0.447-1.402,0.1-2.053 C58.415,64.406,57.737,64,57,64h-2.263l1.333-2H66c6.065,0,11-4.935,11-11C77,46.062,73.728,41.875,69.24,40.488z M58.168,20.168 c0.934,5.985,5.675,10.728,11.66,11.664c-0.615,3.246-2.84,6.006-5.862,7.326c-2.154-5.948-7.447-10.206-13.792-11.008 C50.933,24.111,54.126,20.92,58.168,20.168z M66,58H30c-3.859,0-7-3.141-7-7s3.141-7,7-7c0.277,0,0.723,0.068,1.193,0.162V46 c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.219C36.266,36.528,41.629,32,48,32c6.37,0,11.733,4.528,12.807,10.782V46 c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837C65.277,44.069,65.726,44,66,44c3.859,0,7,3.141,7,7S69.859,58,66,58z"></path> </g> </g> </g> </g></svg>',
        '13n': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M69.24,40.488C72.173,37.886,74,34.094,74,30c0-1.104-0.896-2-2-2c-5.514,0-10-4.486-10-10c0-1.104-0.896-2-2-2 c-7.078,0-12.931,5.284-13.857,12.111c-6.848,0.737-12.533,5.488-14.454,12.072C31.112,40.079,30.507,40,30,40 c-6.065,0-11,4.935-11,11s4.935,11,11,11c1.104,0,2-0.896,2-2s-0.896-2-2-2c-3.859,0-7-3.141-7-7s3.141-7,7-7 c0.277,0,0.723,0.068,1.193,0.162V46c0,1.104,0.895,2,2,2s2-0.896,2-2v-3.219C36.266,36.528,41.629,32,48,32 c6.37,0,11.733,4.528,12.807,10.782V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.838C65.277,44.068,65.723,44,66,44 c3.859,0,7,3.141,7,7s-3.141,7-7,7c-1.105,0-2,0.896-2,2s0.895,2,2,2c6.065,0,11-4.935,11-11 C77,46.062,73.728,41.875,69.24,40.488z M50.174,28.15c0.759-4.039,3.952-7.23,7.994-7.982c0.934,5.985,5.675,10.728,11.66,11.664 c-0.615,3.246-2.84,6.006-5.862,7.326C61.811,33.21,56.519,28.952,50.174,28.15z"></path> <path d="M45.732,62.464c-0.554-0.956-1.773-1.286-2.732-0.733c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.268c0.956-0.553,1.284-1.775,0.732-2.732L45.732,62.464z"></path> <path d="M40.732,53.804c-0.554-0.957-1.773-1.285-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.267c0.956-0.553,1.284-1.775,0.732-2.733L40.732,53.804z"></path> <path d="M43,58.269c0.315,0.182,0.659,0.267,0.998,0.267c0.691,0,1.363-0.358,1.734-1l1-1.732c0.552-0.957,0.224-2.18-0.732-2.732 c-0.959-0.553-2.18-0.225-2.732,0.732l-1,1.732C41.716,56.493,42.044,57.716,43,58.269z"></path> <path d="M41,61.731c-0.959-0.554-2.18-0.224-2.732,0.733l-1,1.732c-0.552,0.957-0.224,2.18,0.732,2.732 c0.315,0.182,0.659,0.268,0.998,0.268c0.691,0,1.363-0.358,1.734-1l1-1.732C42.284,63.507,41.956,62.284,41,61.731z"></path> <path d="M40,60c0-1.104-0.896-2-2-2h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2C39.104,62,40,61.104,40,60z"></path> <path d="M50,60c0-1.104-0.896-2-2-2h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2C49.104,62,50,61.104,50,60z"></path> <path d="M60.732,71.268c-0.554-0.956-1.774-1.285-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.268c0.956-0.553,1.284-1.775,0.732-2.732L60.732,71.268z"></path> <path d="M55.732,62.607c-0.554-0.956-1.774-1.286-2.732-0.732c-0.956,0.553-1.284,1.775-0.732,2.732l1,1.732 c0.371,0.642,1.043,1,1.734,1c0.339,0,0.683-0.086,0.998-0.267c0.956-0.553,1.284-1.775,0.732-2.733L55.732,62.607z"></path> <path d="M58,67.072c0.315,0.182,0.659,0.267,0.998,0.267c0.691,0,1.363-0.358,1.734-1l1-1.732c0.552-0.957,0.224-2.18-0.732-2.732 c-0.959-0.554-2.18-0.224-2.732,0.732l-1,1.732C56.716,65.297,57.044,66.52,58,67.072z"></path> <path d="M56,70.535c-0.959-0.553-2.18-0.224-2.732,0.732l-1,1.732c-0.552,0.957-0.224,2.18,0.732,2.732 C53.315,75.914,53.659,76,53.998,76c0.691,0,1.363-0.358,1.734-1l1-1.732C57.284,72.311,56.956,71.088,56,70.535z"></path> <path d="M55,68.804c0-1.104-0.896-2-2-2h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2C54.104,70.804,55,69.908,55,68.804z"></path> <path d="M63,66.804h-2c-1.105,0-2,0.896-2,2s0.895,2,2,2h2c1.104,0,2-0.896,2-2S64.104,66.804,63,66.804z"></path> </g> </g> </g></svg>',
        '50n': '<svg width="50px" height="50px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Base" display="none"> </g> <g id="Dibujo"> <g> <path d="M21,44h30c1.104,0,2-0.896,2-2s-0.896-2-2-2H21c-1.104,0-2,0.896-2,2S19.896,44,21,44z"></path> <path d="M14.999,50H39c1.104,0,2-0.896,2-2s-0.896-2-2-2H14.999c-1.104,0-2,0.896-2,2S13.895,50,14.999,50z"></path> <path d="M74,54c0-1.104-0.896-2-2-2H12c-1.104,0-2,0.896-2,2s0.896,2,2,2h60C73.105,56,74,55.104,74,54z"></path> <path d="M72,58H15c-1.104,0-2,0.896-2,2s0.896,2,2,2h57c1.104,0,2-0.896,2-2S73.105,58,72,58z"></path> <path d="M33,64l-12-0.001c-1.104,0-2,0.896-2,2s0.896,2,2,2L33,68c1.104,0,2-0.896,2-2S34.105,64,33,64z"></path> <path d="M66,63.999L39,64c-1.104,0-2,0.896-2,2s0.896,2,2,2l27-0.001c1.104,0,2-0.896,2-2S67.105,63.999,66,63.999z"></path> <path d="M33,38h12c1.104,0,2-0.896,2-2c0-4.888,3.524-8.968,8.166-9.831c0.45,2.918,1.808,5.608,3.933,7.733 c2.125,2.125,4.815,3.482,7.732,3.933c-0.864,4.64-4.943,8.164-9.831,8.164L45,46c-1.104,0-2,0.896-2,2s0.896,2,2,2l12-0.002 c7.719,0,13.999-6.28,13.999-13.999c0-0.53-0.211-1.039-0.586-1.414s-0.884-0.586-1.414-0.586c-0.001,0-0.001,0-0.002,0 c-2.672,0-5.184-1.039-7.07-2.926C60.04,29.185,59,26.674,59,24c0-1.104-0.896-2-2-2c-7.041,0-12.884,5.225-13.857,12H33 c-1.104,0-2,0.896-2,2S31.896,38,33,38z"></path> </g> </g> </g></svg>',
    };

    return iconDict[weatherCode] || '<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="#000000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
};

