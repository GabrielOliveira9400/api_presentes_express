import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('presentes')
export class Presente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  categoria: string;

  @Column({ default: false })
  reservado: boolean;

  @Column({ nullable: true })
  nomeReservante: string;
}
