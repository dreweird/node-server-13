module.exports = {
  HOST: "localhost",
  USER: "ictu",
  PASSWORD: "D@pr0p3rty",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
