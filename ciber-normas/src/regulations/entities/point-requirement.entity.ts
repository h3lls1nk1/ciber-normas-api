import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RegulationPoint } from "./regulation-point.entity";
import { CertificationLevel } from "src/enums/regulation.enum";

@Entity()
export class PointRequirement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: CertificationLevel})
    level: CertificationLevel;

    @Column({ default: true })
    mandatory: boolean;

    // Relations
    @ManyToOne(() => RegulationPoint, (point) => point.requirements, {
        onDelete: 'CASCADE',
    })
    point: RegulationPoint;
}