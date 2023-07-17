/**
 * @typedef {Object} Position
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'True Food Kitchen',
    position: 'Assistant General Manager/Bar Manager',
    url: 'https://www.truefoodkitchen.com/',
    startDate: '2017-07-01',
    endDate: '2022-11-01',
    // summary: ``,
    highlights: [
      'Oversaw P&L accountability across all bar and service supplies, invoicing, marketing collateral, and more',
      'Managed front of house labor, including but not limited to scheduling, alignment with corporate budget guidelines, and onboarding new employees in coordination with HR',
      'Provided all front of house training, both at hire date and continuing education for service standards and bar knowledge',
      'Managed Ecosure Science compliance',
      'Provided weekly sales forecasts to corporate management team',
      'Served as the representative for the central region on True Food Kitchen’s Beverage Leadership Team',
      'Managed catering orders',
      'Oversaw permits and licensing for the restaurant',
      'Liaised with building management on facility needs',
      'Managed scheduling of all bar staff',
      'Provided guidance for beverage quality assurance across team through regular trainings',
      'Oversaw all invoicing and tracking of budgets for the bar in coordination with management team',
      'Supported General Manager on front of house duties as needed',
    ],
  },
  {
    name: 'Senior Rehab Solutions at La Hacienda Rehabilitation and Healthcare Center',
    position: 'Office Manager/Rehab Tech',
    url: 'https://www.srs4rehab.com/',
    startDate: '2014-08-01',
    endDate: '2017-6-01',
    // summary: ``,
    highlights: [
      'Performed maintenance of all equipment and facilities',
      'Scheduled patient care with appropriate therapist',
      'Managed all billing, financial, and patient medical records',
      'Assisted with patients’ speech, occupational, and physical therapy',
    ],
  },
  {
    name: 'La Hacienda Rehabilitation and Healthcare Center',
    position: 'Certified Nursing Assistant',
    url: 'www.senior-care-centers.com',
    startDate: '2013-06-01',
    endDate: '2014-08-01',
    // summary: ``,
    highlights: [
      'Provided for activities of daily living by assisting with serving meals, feeding patients as necessary',
      'Maintained patient comfort and safely transported patients',
      'Documented actions by completing forms, reports, logs, and records',
      'Provided training and guidance to new employees',
    ],
  },
];

export default work;
