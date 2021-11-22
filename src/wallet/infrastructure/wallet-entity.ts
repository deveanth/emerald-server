import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WalletEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		unique: true,
		nullable: false,
	})
	name: string;

	@Column({ nullable: false })
	balance: number;

	@Column({ nullable: false })
	icon: string;
}
