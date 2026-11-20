export const robotArm = {
  title: '3-axis robotic arm',
  type: 'Independent project',
  year: '2026',
  summary:
    'A tabletop robot built in six weeks, from motor sizing and CAD to belt-driven hardware and embedded motion control.',
  highlights: [
    { value: '3', label: 'Actuated joints' },
    { value: '660 mm', label: 'Reach' },
    { value: '6 weeks', label: 'Build & test' },
  ],
  results: [
    { metric: 'Actuated joints', target: '3', result: '3' },
    { metric: 'Reach', target: '500–600 mm', result: '660 mm' },
    {
      metric: 'Payload',
      target: '250–500 g',
      result: '220 g',
      note: 'Belt slip at the shoulder limited the load.',
    },
    {
      metric: 'Positioning repeatability',
      target: '±2–3 mm',
      result: '±0.04 mm',
      note: 'Measured at one pose on one axis.',
    },
    {
      metric: 'Joint speed',
      target: '60°/s',
      result: '120°/s',
      note: 'Highest demonstrated cruise speed.',
    },
    { metric: 'Development time', target: '4–8 weeks', result: '6 weeks' },
  ],
};
