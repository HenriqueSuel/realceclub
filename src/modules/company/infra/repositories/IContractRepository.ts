import { Contract } from "../entities/Contrats";


interface ICreate {
    company_id: string;
    employee_id: string;
}
interface IInvite {
    id_contract: string;
    invitation_status:boolean
}

interface IContratsRepository {
    create({company_id, employee_id }: ICreate): Promise<void>;
    findContract({company_id, employee_id }: ICreate): Promise<Contract>;
    getInvite({company_id, employee_id }: ICreate): Promise<Contract[]>;
    handleInvite({id_contract, invitation_status }: IInvite): Promise<void>;
}

export {IContratsRepository}