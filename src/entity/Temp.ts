import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("temperatura")
export class Temp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temp_corp: string;

  @Column()
  temp_amb: string;

  @CreateDateColumn()
  created_at: Date; // Creation date
}
