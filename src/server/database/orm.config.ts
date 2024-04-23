import {DataSourceOptions} from "typeorm";
import {Todo} from "@/src/server/entity/todo.entity";


const ORM_CONFIG: DataSourceOptions = {
    type: 'postgres',
    port: Number(process.env.DB_PORT) || 5433,
    host: process.env.DB_HOST || 'localhost',
    entities: [Todo],
    username: process.env.PSQL_USER || 'postgres',
    password: process.env.PSQL_PASSWORD || 'postgres',
    database: process.env.PSQL_DATABASE || 'postgres',
    schema: process.env.PSQL_SCHEMA || 'public',
    synchronize: true,
    logging: true,
};
export default ORM_CONFIG;
// ESLint: 'typeorm' should be listed in the project's dependencies. Run 'npm i -S typeorm' to add it(import/no-extraneous-dependencies)