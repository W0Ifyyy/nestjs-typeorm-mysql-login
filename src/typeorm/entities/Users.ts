import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  authStrategy: string;
}
