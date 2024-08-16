import { Check, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Check(`"use_yn" IN ('Y', 'N')`)
export class CommonEntity {
	@Column({ type: 'varchar', length: 1, name: 'use_yn', default: 'Y' })
	useYn: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date;
}
