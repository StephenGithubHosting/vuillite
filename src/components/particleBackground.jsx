import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

function App() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        

            <Particles
                
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: 'transparent',
                    },
                    fullScreen:{
                        enable: true,
                        zIndex: -1
                    },
                    height:'10px',
                    width:'10px',
                    fpsLimit: 100,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            resize: false
                        },
                    },
                    particles: {
                        move:{
                            enable: true,
                        },
                        color: {
                            value: "#f1f1f1"
                        },
                        links:{
                            enable:true
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 4000
                            },
                            limit: 0,
                            value: 900,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.5,
                                speed: 1,
                                sync: false,
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        shape: {
                            type: 'circle',

                        },
                        size: {
                            random: {
                                enable: false,
                                minimumValue: 0.5
                            },
                            value: 1
                        }
                    }
                }}
            />
        
    );
}

export default App;