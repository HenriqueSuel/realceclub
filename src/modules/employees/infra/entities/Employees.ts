import { Company } from "@modules/company/infra/entities/Company";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("employees")
export class Employees {
    @PrimaryColumn()
    id: string;

    @Column()
    cpf: string;

    @Column()
    email:string;

    @Column()
    password: string;

    @Column()
    full_name: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
          this.id = v4();
        }
      }
}