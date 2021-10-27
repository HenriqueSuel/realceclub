import { Employees } from "@modules/employees/infra/entities/Employees";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import { Company } from "./Company";

@Entity("contracts")
class Contract {

    @PrimaryColumn()
    id: string;

    @Column()
    company_id: string;

    @ManyToOne(() => Company)
    @JoinColumn({
      name:'company_id',
    })
    company: Company;

    @Column()
    employee_id:string;

    @ManyToOne(() => Employees)
    @JoinColumn({
      name:'employee_id',
    })
    employees: Employees;

    @Column()
    invitation_status: boolean;

    @Column()
    status_date: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
          this.id = v4();
          this.status_date = new Date();
        }
      }
}

export {Contract}