const uuidv4 = require('uuid/v4');
const models = require('../../models');

const INITIAL_HOTSPOTS = [
  {
    title: 'Coffeehouse',
    description: `Everyone's favorite coffeshop inside RMC`,
    lan: 29.717949,
    lng: -95.402344,
  },
  {
    title: 'Brochstein',
    description: 'Where art and Flo Paris is',
    lan: 29.717826,
    lng: -95.400832,
  },
  {
    title: 'Fondren 1st floor',
    description: 'Quite place',
    lan: 29.718167,
    lng: -95.400083,
  },
  {
    title: 'Brown Commons',
    description: 'Brown College Common Area',
    lan: 29.721535,
    lng: -95.396308,
  },
  {
    title: 'Farnsworth Pavillion',
    description: 'Where food is served for Hackrice',
    lan: 29.717703,
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
            id: uuidv4(),
            created_at: new Date(),
            updated_at: new Date(),
          },
          item,
          { title: item.title },
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
