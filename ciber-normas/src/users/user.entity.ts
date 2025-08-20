import { Role } from "src/enums/role.enum";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ unique: true, nullable: false })
    username: string;

    @Column({ unique: true, nullable: false })
    email: string;

    // La password será nula para que los usuarios con OAUTH de Google puedan entrar sin establecerla
    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    picture: string;

    // @Column()
    // roles: Role[]

    @Column({ default: true })
    isActive: boolean;
}