import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course.entity';

@Entity({ name: 'file', schema: 'core' })
export class File {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  fileName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  filePath: string;

  @ManyToMany(() => Course, (course) => course.files, { cascade: true })
  @JoinTable()
  courses: Course[];

}
