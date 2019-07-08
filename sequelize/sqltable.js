const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:oxb8jo84@localhost/zeta_test');
const table = require('table');
console.log(sequelize);
sequelize
  .authenticate()
  .then(() => {
    sequelize.query('select * from games').then(result => {
      const row = result[0];
      const matrix = [];
      for (let i = 0; i < row.length; i++) {
        matrix.push([
          row[i].id,
          row[i].name,
          row[i].description
        ]);
      }
      console.log(table.table(matrix));
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
