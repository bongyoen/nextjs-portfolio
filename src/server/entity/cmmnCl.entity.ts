import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { CommonEntity } from '@/src/server/entity/commonEntity';

@Entity({ comment: '공통코드' })
export class CmmnCl extends CommonEntity {
	@PrimaryColumn({ type: 'varchar', length: 3, name: 'cmmn_cl_code', comment: '공통코드' })
	cmmnClCode: string;

	@ManyToOne(() => CmmnCl)
	@JoinColumn({ name: 'upper_cl_code' })
	upperClCode: string;

	@Column({ type: 'varchar', length: 30, name: 'cmmn_cl_name', comment: '공통코드이름' })
	cmmnClName: string;

	@Column({ type: 'varchar', length: 300, name: 'cmmn_cl_desct', comment: '공통코드설명' })
	cmmnClDesct: string;

	static Cond = class {
		cmmnClCode: string;

		upperClCode: string;

		cmmnClName: string;

		cmmnClDesct: string;

		constructor(cmmnClCode: string, upperClCode: string, cmmnClName: string, cmmnClDesct: string) {
			this.cmmnClCode = cmmnClCode;
			this.upperClCode = upperClCode;
			this.cmmnClName = cmmnClName;
			this.cmmnClDesct = cmmnClDesct;
		}
	};
}
