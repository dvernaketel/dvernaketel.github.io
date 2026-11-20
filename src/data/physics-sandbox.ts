export const physicsSandbox = {
  title: 'Physics Sandbox',
  type: 'Independent project',
  year: '2026',
  summary: 'Python experiments in flight dynamics, numerical convergence, and spring–mass motion.',
  studies: [
    {
      id: 'flight',
      title: 'Flight with drag',
      file: 'flight-with-and-without-drag.webp',
      alt: 'Two flight paths with identical initial conditions. The drag curve peaks lower and lands at a shorter horizontal distance.',
      caption: 'Quadratic drag lowers the peak and shortens the flight distance for the same starting conditions.',
      disclosure: 'Model and validation',
      notes: [
        'I started with a gravity-only model and checked its position histories against a closed-form solution. Setting the drag coefficient to zero recovers the vacuum path.',
        'When RK4 steps across the ground plane, the solver interpolates between the two bracketing states to estimate the impact point.',
      ],
    },
    {
      id: 'spin',
      title: 'Spin and sideways motion',
      file: 'exploratory-spin-comparison.webp',
      alt: 'Plan-view plot showing a straight path at zero spin and a growing cross-track offset in the exploratory spin model.',
      caption: 'With drag switched off in both runs, the spin term produces a sideways offset.',
      disclosure: 'What this comparison checks',
      notes: [
        'I added a Magnus-effect term to explore the effect of spin on a sphere. In this check, setting spin to zero recovers the straight plan-view path.',
        'The spin model is exploratory. Its lift scaling and cross-product sign still need verification.',
      ],
    },
    {
      id: 'convergence',
      title: 'Solver convergence',
      file: 'solver-self-convergence.webp',
      alt: 'Log-scale chart showing the difference between successive resolutions decreasing more steeply for RK4 than for forward Euler.',
      caption: 'Halving the timestep reduced vertical position differences between successive drag runs by about 2× for Euler and 16× for RK4.',
      disclosure: 'How I measured it',
      notes: [
        'I compared runs at successively finer timesteps and measured the largest vertical position difference at shared times. Each curve is normalized to its own first comparison.',
        'The force model and integrator are separate, so I can swap forward Euler and fourth-order Runge–Kutta on the same problem.',
      ],
    },
    {
      id: 'oscillator',
      title: 'Spring–mass motion',
      file: 'spring-mass-oscillator.webp',
      alt: 'Position over five seconds. RK4 samples closely follow the closed-form oscillation around a two-meter equilibrium.',
      caption: 'RK4 samples closely follow the closed-form response of an undamped spring–mass system.',
      disclosure: 'Reusing the solver',
      notes: [
        'I reused the flight integrator with a two-variable state containing position and velocity. The spring force depends on displacement from equilibrium.',
        'A closed-form cosine provides a reference for both the amplitude and the phase over the five-second run.',
      ],
    },
  ],
};
