import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Regulation } from "./regulation.entity";

@Entity()
export class RegulationChange {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date'})
    changeDate: Date;

    @Column({ type: 'text'})
    description: string;

    @ManyToOne(() => Regulation, (regulation) => regulation.changes, {
        onDelete: 'CASCADE',
    })
    regulation: Regulation;
}