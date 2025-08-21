import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { RegulationChange } from "./regulation-change.entity";
import { RegulationPoint } from "./regulation-point.entity";

@Entity()
export class Regulation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;                                       // Regulation name

    @Column({ nullable: true })
    shortName: string;                                  // Regulation short name

    @Column({ type: 'text' })
    description: string;                                // Description / Purpose

    @Column({ nullable: false, type: 'text' })
    scope: string;                                      // Scope of application of the regulation

    @Column({ type: 'date', nullable: false })
    publicationDate: Date;                              // Publication of the regulation

    @Column({ type: 'date', nullable: true })
    lastUpdateDate: Date;                               // If the publication has been updated, the last date update
    
    @Column({ nullable: false, type: 'text' })
    officialLink: string;                               // Link to the official publication of the regulation

    @Column('text', { array: true, nullable: true })
    attachments: string[];                              // Regulation attachments (pdfs, documents...)

    @Column('text', { array: true, nullable: true })
    tags: string[];                                     // Clasification tags

    @Column({ default: 'in_force' })
    status: string;                                     // Regulation status (in_force, deprecated...)

    @CreateDateColumn()
    createdAt: Date;                

    @UpdateDateColumn()
    updatedAt: Date;

    // Relations
    @OneToMany(() => RegulationChange, (change) => change.regulation)
    changes: RegulationChange[];

    @OneToMany(() => RegulationPoint, (point) => point.regulation, { cascade: true })
    points: RegulationPoint[];
}