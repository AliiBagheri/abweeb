/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"],
    // content["./src/**/*.{html,js}"],
    theme: {
        colors: {
            white: '#fff',
            blue: {
                100: '#62ddff',
                150:'#1239ac',
                200: '#1439ab',
                300: '#092e99',
                400: '#0a2d95'
                
            },
            Turquoise: '#62ddff',
            darkBlue: '#0a2d95',
            orange: '#ffb400',
            gray:{ 
                100:'#d7d6dc', 
                200:'#5b5e6a'

            },
            // fontFamily: {
         
            //     "jmhuri":"jmhuri",
             
            // },
            // fontFamily: {
            //     "vazir":"vazir"
            // },
            // fontFamily: {
            //     "heshmat": "heshmat",
            // },


            screens: {
                'sm': '576px',
                // => @media (min-width: 640px) { ... }
          
                'md': '768px',
                // => @media (min-width: 768px) { ... }
          
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
          
              }

        },
        extend: {
            boxShadow: {
                'normal': '0px 10px 60px 0px rgba(0, 0, 0, 0.1)',
                'slide':'0px 5px 3px 0px rgba(0,0,0,.4)',
              },














            animation:{
                title:'title 1.5s ease-in-out',
                   zoominout:'zoominout 3s ease-in-out infinite',
                   zoominout2:'zoominout2 3s ease-in-out infinite',
                   zoom:'zoom .8s ease-in-out forwards',
                   zoomFade:'zoomFade 5s linear infinite',
                   arrival:'arrival .5s ease-in-out',
                   floatY:'floatY 2s linear infinite',
                   floatX:'floatX 2s linear infinite',
            },



            keyframes:{
                title:{
                    '0%':{opacity:'0',
                        transform: 'translateY(100px)',
                    },
                    '100%':{opacity:'1',
                    transform: 'translateY(0px)',
                    }
                },
      
                zoominout:{
                    '0%':{ transform:'rotate(0deg) scale(0.5)',
                        opacity:'0',
                    },
                    '50%':{ transform:'rotate(180deg) scale(.8)',
                        opacity:'.3',
                    },
                    '100%':{ transform:'rotate(360deg) scale(0.5)',
                        opacity:'0',
                    },
          

                },
                zoominout2:{
                    '0%':{ transform:'rotate(0deg) scale(0.5)',
                        opacity:'0',
                    },
                    '50%':{ transform:'rotate(0deg) scale(.8)',
                        opacity:'.3',
                    },
                    '100%':{ transform:'rotate(0deg) scale(0.5)',
                        opacity:'0',
                    },
                },
                    zoom:{
                        '0%':{
                            transform:'scale(1)',
                        },
                        '100%':{
                            transform:'scale(1.02)',
                        }
                    },
                    zoomFade:{
                        '0%':{
                            transform:'translateX(40px) translateY(0) scale(0.9)',
                        },
                        '50%':{
                            transform:'translateX(-40px) translateY(2%) scale(1)',
                           
                        },
                        '100%':{
                            transform:'translateX(40px) translateY(0) scale(0.9)',
                        },
                    },


                    arrival:{
                        '0%':{
                            opacity:'0',
                            transform:'translateY(-30px)',
                        },
                        '100%':{
                            opacity:'1',
                            transform:'translateY(0px)',
                        }
                    },

                    floatY:{
                       '0%':{
                        transform:'translateY(0px)'
                        },
                       '25%':{
                        transform:'translateY(5px)'
                        },
                        '50%':{
                        transform:'translateY(0px)'
                        },
                        '75%':{
                            transform:'translateY(-5px)'
                           },
                        '100%':{
                            transform:'translateY(0px)'
                           },
                    },
                    floatX:{
                       '0%':{
                        transform:'translateX(0px)'
                        },
                       '25%':{
                        transform:'translateX(5px)'
                        },
                        '50%':{
                        transform:'translateX(0px)'
                        },
                        '75%':{
                            transform:'translateX(-5px)'
                           },
                        '100%':{
                            transform:'translateX(0px)'
                           },
                    }
          

                
            
            },

        },
    },
    plugins: [],
}
