const moment = require('moment');
const models = require('../../models');

const INITIAL_HOTSPOTS = [
  {
    name: 'rice-univ-coffeehouse',
    title: 'Coffeehouse',
    description: `Everyone's favorite coffeshop inside RMC`,
    image:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/hotspot/rice-univ-coffeehouse.jpg',
    lat: 29.717949,
    lng: -95.402344,
  },
  {
    name: 'rice-univ-brochstein',
    title: 'Brochstein',
    description: 'Where art and Flo Paris is',
    image:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/hotspot/rice-univ-brochstein.jpg',
    lat: 29.717826,
    lng: -95.400832,
  },
  {
    name: 'rice-univ-fondren-1st-floor',
    title: 'Fondren 1st floor',
    description: 'Quite place',
    image:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/hotspot/rice-univ-fondren-1st-floor.jpeg',
    lat: 29.718167,
    lng: -95.400083,
  },
  {
    name: 'rice-univ-brown-commons',
    title: 'Brown Commons',
    description: 'Brown College Common Area',
    image:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/hotspot/rice-univ-brown-commons.jpg',
    lat: 29.721535,
    lng: -95.396308,
  },
  {
    name: 'rice-univ-farnsworth-pavillion',
    title: 'Farnsworth Pavillion',
    description: 'Where food is served for Hackrice',
    image:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/hotspot/rice-univ-farnsworth-pavillion.jpg',
    lat: 29.717703,
    lng: -95.402403,
  },
  {
    name: 'rice-univ-grand-hall',
    title: 'Grand Hall',
    description: 'Where major events like Hackrice takes place',
    image:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/hotspot/rice-univ-grand-hall.png',
    lat: 29.717906,
    lng: -95.401822,
  },
];

const INITIAL_PHOTOS = [
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119196629',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T09:39:00').toDate(),
  },
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119202139',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T12:41:00').toDate(),
  },
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119207607',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T16:21:00').toDate(),
  },
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119214438',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T17:25:00').toDate(),
  },
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119220203',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T18:18:00').toDate(),
  },
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119229329',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T18:57:00').toDate(),
  },
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119237528',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T20:19:00').toDate(),
  },
  {
    url:
      'https://owlspot-image.s3.us-east-2.amazonaws.com/rice-unit-grand-hall/1569119244720',
    name: 'rice-univ-grand-hall',
    createdAt: moment('2019-09-21T20:29:00').toDate(),
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

    await Promise.all(
      INITIAL_PHOTOS.map(async item => {
        return queryInterface.sequelize
          .query(
            `
          SELECT * FROM hotspots WHERE name = '${item.name}'
        `,
          )
          .then(result => {
            const hotspot = result[0][0];
            return queryInterface.upsert(
              'hotspot_photos',
              {
                hotspot_id: hotspot.id,
                url: item.url,
                created_at: item.createdAt,
                updated_at: item.createdAt,
              },
              {
                hotspot_id: hotspot.id,
                url: item.url,
                created_at: item.createdAt,
                updated_at: item.createdAt,
              },
              { url: item.url },
              models.HotspotPhoto,
              {},
            );
          });
      }),
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('hotspots', null, {});
  },
};
