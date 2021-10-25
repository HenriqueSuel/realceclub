import { Contract } from "../entities/Contrats";


interface ICreate {
    company_id: string;
    employee_id: string;
}

interface IContratsRepository {
    create({company_id, employee_id }: ICreate): Promise<void>;
    getInvite(employee_id: string ): Promise<Contract[]>;
}

export {IContratsRepository}