import { DataSource } from 'typeorm';
import 'reflect-metadata';

import Holder from '@/src/lib/Holder';
import ORM_CONFIG from './orm.config';

export const connectionHolder = new Holder();

let dataSource: DataSource | undefined;

export const getDataSource = () => {
	if (!dataSource) {
		dataSource = new DataSource(ORM_CONFIG);
		console.log(`create DataSource`);
		dataSource.initialize().then(() => {
			console.log(`connect complete`);
			connectionHolder.resolve();
		});
	}
	return dataSource;
};
