import { QueryInterface } from "sequelize";

export default {
  async up (queryInterface : QueryInterface) { 
    await queryInterface.sequelize.query(`
     ALTER TABLE AvailableTrigger
      ADD COLUMN actions INT,
      ADD FOREIGN KEY (actions) REFERENCES Action(id)
      `)
  },

  async down (queryInterface : QueryInterface) {

  }
};
