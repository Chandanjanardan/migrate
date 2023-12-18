import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    // Load particles.js library from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;

    script.onload = () => {
      // Particle.js configuration
      const particleConfig = {
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#7F00FF', // Purple color
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#7F00FF', // Purple color
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            out_mode: 'out',
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
      };

      // Initialize Particle.js
      window.particlesJS('particles-js', particleConfig);
    };

    document.body.appendChild(script);

  }, []);

  return <div id="particles-js">
 
  </div>;
};

export default ParticleBackground;
