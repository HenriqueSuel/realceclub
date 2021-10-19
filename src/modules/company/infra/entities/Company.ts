import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("company")
class Company {

    @PrimaryColumn()
    id: string;

    @Column()
    cnpj: string;

    @Column()
    email:string;

    @Column()
    password: string;

    @Column()
    name_company: string;

    @Column()
    owner_name: string;

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

export {Company}