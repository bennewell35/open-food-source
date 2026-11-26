'use strict';

const REGIONAL_SOURCES = {
  sides: {
    title: 'Campbell’s 2026 State of the Sides',
    url: 'https://www.campbells.com/wp-content/uploads/2026/10/Campbells-State-of-the-Sides-Report_Final.pdf',
    metric: 'Favorite Thanksgiving side in each of the 50 states, as reported by surveyed adults who celebrate Thanksgiving.',
    period: 'August–September 2026',
    limits: 'Reputation Leaders surveyed 5,017 adults for Campbell’s, about 100 per state. The reported state margin of error is ±9.8 percentage points. Utah had a tie.'
  },
  grocery: {
    title: 'Instacart’s regional grocery report',
    url: 'https://company.instacart.com/ideas/popular-groceries-by-region',
    metric: 'The first grocery category in each of Instacart’s 50 state lists. The lists compare a category’s share of items sold in that state with its share nationally on Instacart.',
    period: 'Updated November 15, 2026. Sales dates are unspecified.',
    limits: 'A category can stand out regionally even if customers buy other foods more often. These results describe Instacart purchases.'
  },
  regions: {
    title: 'U.S. Census Bureau regions and divisions',
    url: 'https://www.census.gov/programs-surveys/economic-census/guidance-geographies/levels.html',
    metric: 'The 50 states grouped into the four Census regions.',
    period: 'Grouping checked November 26, 2026.',
    limits: 'The survey and grocery tables cover the states. The District of Columbia and U.S. territories are outside their coverage.'
  }
};

const REGIONAL_STATES = (() => {
  // The striped Utah entry on the report’s map (p. 18) shares both first-place colors.
  const STUFFING = 'Stuffing or dressing';
  const MASH = 'Mashed potatoes';
  const SWEET = 'Sweet potatoes or yams';
  const MAC = 'Mac and cheese';
  const TIED = 'Stuffing or dressing and mashed potatoes (tie)';

  return [
    ['AL', 'Alabama', 'South', STUFFING, 'Canned black-eyed peas'],
    ['AK', 'Alaska', 'West', STUFFING, 'Slicing cucumbers'],
    ['AZ', 'Arizona', 'West', STUFFING, 'Vodka'],
    ['AR', 'Arkansas', 'South', STUFFING, 'Canned diced tomatoes'],
    ['CA', 'California', 'West', MASH, 'Persian cucumbers'],
    ['CO', 'Colorado', 'West', STUFFING, 'Tomatillos'],
    ['CT', 'Connecticut', 'Northeast', STUFFING, 'Yellow corn'],
    ['DE', 'Delaware', 'South', STUFFING, 'Scrapple'],
    ['FL', 'Florida', 'South', STUFFING, 'Malanga root'],
    ['GA', 'Georgia', 'South', MAC, 'Grits'],
    ['HI', 'Hawaii', 'West', STUFFING, 'Poke'],
    ['ID', 'Idaho', 'West', STUFFING, 'Hard seltzer'],
    ['IL', 'Illinois', 'Midwest', STUFFING, 'Corn tortillas'],
    ['IN', 'Indiana', 'Midwest', MASH, 'Canned green beans'],
    ['IA', 'Iowa', 'Midwest', MASH, 'Bratwurst'],
    ['KS', 'Kansas', 'Midwest', MASH, 'Bratwurst'],
    ['KY', 'Kentucky', 'South', STUFFING, 'Fruit-flavored soda'],
    ['LA', 'Louisiana', 'South', SWEET, 'Andouille sausage'],
    ['ME', 'Maine', 'Northeast', STUFFING, 'Leaf lettuce'],
    ['MD', 'Maryland', 'South', STUFFING, 'Potato bread'],
    ['MA', 'Massachusetts', 'Northeast', STUFFING, 'Heavy cream'],
    ['MI', 'Michigan', 'Midwest', STUFFING, 'Chuck eye roast'],
    ['MN', 'Minnesota', 'Midwest', STUFFING, 'Bratwurst'],
    ['MS', 'Mississippi', 'South', STUFFING, 'Lemon-lime soda'],
    ['MO', 'Missouri', 'Midwest', STUFFING, 'Bicolor corn'],
    ['MT', 'Montana', 'West', STUFFING, 'Prepared fried chicken'],
    ['NE', 'Nebraska', 'Midwest', MASH, 'Bratwurst'],
    ['NV', 'Nevada', 'West', STUFFING, 'Key limes'],
    ['NH', 'New Hampshire', 'Northeast', STUFFING, 'Heavy cream'],
    ['NJ', 'New Jersey', 'Northeast', STUFFING, 'Royal Gala apples'],
    ['NM', 'New Mexico', 'West', STUFFING, 'Frozen Indian meals'],
    ['NY', 'New York', 'Northeast', MAC, 'Heavy cream'],
    ['NC', 'North Carolina', 'South', MAC, 'Grits'],
    ['ND', 'North Dakota', 'Midwest', STUFFING, 'Bicolor corn'],
    ['OH', 'Ohio', 'Midwest', STUFFING, 'Tri-color corn'],
    ['OK', 'Oklahoma', 'South', STUFFING, 'Canned green chiles'],
    ['OR', 'Oregon', 'West', STUFFING, 'Bottled yerba mate'],
    ['PA', 'Pennsylvania', 'Northeast', STUFFING, 'Italian bread'],
    ['RI', 'Rhode Island', 'Northeast', STUFFING, 'Leaf lettuce'],
    ['SC', 'South Carolina', 'South', STUFFING, 'Grits'],
    ['SD', 'South Dakota', 'Midwest', STUFFING, 'Bratwurst'],
    ['TN', 'Tennessee', 'South', STUFFING, 'Frozen biscuits'],
    ['TX', 'Texas', 'South', MAC, 'Serrano peppers'],
    ['UT', 'Utah', 'West', TIED, 'Licorice'],
    ['VT', 'Vermont', 'Northeast', STUFFING, 'Yellow corn'],
    ['VA', 'Virginia', 'South', STUFFING, 'Thai chiles'],
    ['WA', 'Washington', 'West', STUFFING, 'Vodka'],
    ['WV', 'West Virginia', 'South', MASH, 'Pepperoni'],
    ['WI', 'Wisconsin', 'Midwest', STUFFING, 'Bratwurst'],
    ['WY', 'Wyoming', 'West', STUFFING, 'Canned green chiles']
  ].map(([code, name, region, side, grocery]) => ({code, name, region, side, grocery}));
})();
