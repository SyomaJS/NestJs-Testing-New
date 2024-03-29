import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { User } from "./user.entity";
import { File } from "./file.entity";

@Entity({ name: "courses", schema: "core" })
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    courseName: string;

    @Column({ type: "int", nullable: false })
    price: number;

    @Column({ type: "int", nullable: false })
    duration: number;

    @ManyToMany(() => File, (file) => file.courses)
    files: File[];

    @ManyToMany(() => User, (user) => user.courses, { cascade: true })
    users: User[];
}
