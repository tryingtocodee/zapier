import { QueryInterface } from "sequelize"

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS Triggers(
        id INT AUTO_INCREMENT PRIMARY KEY,
        triggerName VARCHAR(255) NOT NULL UNIQUE,
        zapId INT,
        triggerType INT,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (zapId) REFERENCES Zap(id) ON DELETE CASCADE,
        FOREIGN KEY (triggerType) REFERENCES AvailableTrigger(id) ON DELETE CASCADE
      );
    `)
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.sequelize.query(`
      DROP TABLE Trigger;
    `)
  }
}
