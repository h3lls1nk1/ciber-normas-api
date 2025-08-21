import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Regulation } from "./regulation.entity";
import { PointRequirement } from "./point-requirement.entity";

@Entity()
export class RegulationPoint {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    section: string;

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ default: true })
    mandatory: boolean;

    // Relations
    @ManyToOne(() => Regulation, (regulation) => regulation.points, {
        onDelete: 'CASCADE',
    })
    regulation: Regulation;

    @OneToMany(() => PointRequirement, (req) => req.point, { cascade: true })
    requirements: PointRequirement[];
}