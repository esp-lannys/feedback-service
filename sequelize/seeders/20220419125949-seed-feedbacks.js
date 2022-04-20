'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('Feedbacks', [
      {
        id: 'b4c3873c-787c-45bc-a26d-2d5a8c665758',
        title: 'Feedback 1',
        description: 'Description of Feedback 1',
        images: [
          'https://blahblah.com/picture1.jpg',
          'https://blahblah.com/picture2.jpg',
          'https://blahblah.com/picture3.jpg',
        ],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '3be73109-9054-4433-881b-5e3763d592d6',
        title: 'Feedback 2',
        description: 'Description of Feedback 2',
        images: [
          'https://blahblah.com/picture1.jpg',
          'https://blahblah.com/picture2.jpg',
          'https://blahblah.com/picture3.jpg',
        ],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '578d8700-cfef-49c7-85de-979f213a68c4',
        title: 'Feedback 3',
        description: 'Description of Feedback 3',
        images: [
          'https://blahblah.com/picture1.jpg',
          'https://blahblah.com/picture2.jpg',
          'https://blahblah.com/picture3.jpg',
        ],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'c834550f-6c0b-4afc-9126-0e4fb4dc0b31',
        title: 'Feedback 4',
        description: 'Description of Feedback 4',
        images: [
          'https://blahblah.com/picture1.jpg',
          'https://blahblah.com/picture2.jpg',
          'https://blahblah.com/picture3.jpg',
        ],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '1ffd575f-b432-4743-b461-b2bbd0aeefc2',
        title: 'Feedback 5',
        description: 'Description of Feedback 5',
        images: [
          'https://blahblah.com/picture1.jpg',
          'https://blahblah.com/picture2.jpg',
          'https://blahblah.com/picture3.jpg',
        ],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Feedbacks', null, {});
  },
};
