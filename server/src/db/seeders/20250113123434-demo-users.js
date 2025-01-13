const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPasswordAdmin = await bcrypt.hash("Qwerty123!", 10);
    const hashedPasswordUser = await bcrypt.hash("Qwerty123!", 10);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Aselya",
          email: "Aselya@mail.ru",
          password: hashedPasswordAdmin,
          role: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nikita",
          email: "Nikita@mail.ru",
          password: hashedPasswordUser,
          role: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
