const models = require('../../models');

const INITIAL_HOTSPOTS = [
  {
    name: 'rice-univ-coffeehouse',
    title: 'Coffeehouse',
    description: `Everyone's favorite coffeshop inside RMC`,
    lat: 29.717949,
    lng: -95.402344,
  },
  {
    name: 'rice-univ-brochstein',
    title: 'Brochstein',
    description: 'Where art and Flo Paris is',
    lat: 29.717826,
    lng: -95.400832,
  },
  {
    name: 'rice-univ-fondren-1st-floor',
    title: 'Fondren 1st floor',
    description: 'Quite place',
    lat: 29.718167,
    lng: -95.400083,
  },
  {
    name: 'rice-univ-brown-commons',
    title: 'Brown Commons',
    description: 'Brown College Common Area',
    lat: 29.721535,
    lng: -95.396308,
  },
  {
    name: 'rice-univ-farnsworth-pavillion',
    title: 'Farnsworth Pavillion',
    description: 'Where food is served for Hackrice',
    lat: 29.717703,
    lng: -95.402403,
  },
];

module.exports = {
  up: async queryInterface => {
    await Promise.all(
      INITIAL_HOTSPOTS.map(item =>
        queryInterface.upsert(
          'hotspots',
          {
            ...item,
            created_at: new Date(),
            updated_at: new Date(),
          },
          item,
          { name: item.name },
          models.Hotspot,
          {},
        ),
      ),
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('hotspots', null, {});
  },
};
