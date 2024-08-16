import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { CommonEntity } from '@/src/server/entity/commonEntity';
import { CmmnCl } from '@/src/server/entity/cmmnCl.entity';

@Entity({ comment: '공통상세코드' })
export class CmmnClDtl extends CommonEntity {
	@PrimaryColumn({ type: 'varchar', length: 6, comment: '공통상세코드' })
	cmmnClDtlCode: string;

	@ManyToOne(() => CmmnCl)
	@JoinColumn({ name: 'cmmn_cl_code' })
	cmmnClCode: CmmnCl;

	@Column({ type: 'varchar', length: 30, comment: '공통상세코드이름' })
	cmmnClDtlName: string;

	@Column({ type: 'varchar', length: 300, comment: '공통상세코드설명' })
	cmmnClDtlDesct: string;
}
