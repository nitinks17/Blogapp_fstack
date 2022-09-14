import {Sequelize}from "sequelize-typescript";
import {Blogs} from "../Models/Blogmodel"

const connection = new Sequelize('sample', 'root', '1234567', {
    host: 'localhost',
    dialect:"mysql",
    database:"sample",
    logging:false,
    models:[Blogs]
  });

  export default connection;