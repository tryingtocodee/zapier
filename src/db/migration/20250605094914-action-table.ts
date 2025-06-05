import { QueryInterface } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.sequelize.query(`
    CREATE TABLE IF NOT EXISTS Action (
      id INT AUTO_INCREMENT PRIMARY KEY,
      actionName VARCHAR(255) NOT NULL UNIQUE,
      triggerId INT,
      availableActions INT,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (triggerId) REFERENCES Triggers(id),
      FOREIGN KEY (availableActions) REFERENCES AvailableAction(id)
    );
  `);
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.sequelize.query(`DROP TABLE Action;`);
}
