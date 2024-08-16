import { DataSourceOptions } from 'typeorm';
import { CmmnCl } from '@/src/server/entity/cmmnCl.entity';
import { CmmnClDtl } from '@/src/server/entity/cmmnClDtl.entity';
import { Todo } from '@/src/server/entity/todo.entity';
// const entitiesDir = join(__dirname, 'src', 'server', 'entity');
//
// // EntitySchema 배열을 반환하는 함수
// export function loadEntitySchemas(): EntitySchema[] {
//     const schemas: EntitySchema[] = [];
//     const files = readdirSync(entitiesDir);
//
//     files.forEach(file => {
//         if (file.endsWith('.entity.ts')) {
//             const entity = require(join(entitiesDir, file)).default;
//             schemas.push(new EntitySchema(entity));
//         }
//     });
//
//     return schemas;
// }

// const getEntityPath = () => {
//     const paht = `${process.cwd()}/src/entity/*.entity.{js,ts}`.replaceAll("/", "\\");
//     console.log(`path : ${paht}`)
//     console.log(`--dir : ${__dirname}`)
//     return paht;
// }

const ORM_CONFIG: DataSourceOptions = {
	type: 'postgres',
	port: Number(process.env.DB_PORT) || 5432,
	host: process.env.DB_HOST || 'localhost',
	// entities: [Todo, CmmnCl, CmmnClDtl],
	entities: [CmmnCl, CmmnClDtl, Todo],
	username: process.env.PSQL_USER || 'postgres',
	password: process.env.PSQL_PASSWORD || 'postgres',
	database: process.env.PSQL_DATABASE || 'postgres',
	schema: process.env.PSQL_SCHEMA || 'public',
	synchronize: true,
	logging: true,
};
export default ORM_CONFIG;
