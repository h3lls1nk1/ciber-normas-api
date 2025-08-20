import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Regulation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'date', nullable: false })
    publicationDate: Date;

    @Column({ type: 'date', nullable: true})
    lastUpdateDate: Date;
    
    @Column({ nullable: false })
    source: string;

    @Column('text', { array: true, nullable: true })
    attachments: string[];

    @Column('text', { array: true, nullable: true })
    tags: string[];

    @Column({ default: 'in_force' })
    status: string;
}