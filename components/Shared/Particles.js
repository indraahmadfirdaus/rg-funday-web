import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "../../styles/Home.module.css";

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className={styles.__particles__}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true },
        background: {
          color: {
            value: "#fffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          // modes: {
          //   grab: {
          //     distance: 140,
          //     line_linked: {
          //       opacity: 1,
          //     },
          //   },
          //   bubble: {
          //     distance: 400,
          //     size: 40,
          //     duration: 2,
          //     opacity: 8,
          //     speed: 3,
          //   },
          //   repulse: {
          //     distance: 200,
          //     duration: 0.4,
          //   },
          //   push: {
          //     particles_nb: 4,
          //   },
          //   remove: {
          //     particles_nb: 2,
          //   },
          // },
        },
        particles: {
          color: {
            value: "#1c7ed6",
          },
          links: {
            color: "#1c7ed6",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
