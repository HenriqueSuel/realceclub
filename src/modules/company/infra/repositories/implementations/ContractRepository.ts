import { getRepository, Repository } from "typeorm";
import { Contract } from "../../entities/Contrats";
import { IContratsRepository } from "../IContractRepository";


class ContratsRepository implements IContratsRepository {
    private repository: Repository<Contract>
    
    constructor(){
        this.repository = getRepository(Contract);
    }

    async create({company_id, employee_id  }): Promise<void> {
        const contract = this.repository.create({
            company_id,
            employee_id,
        });
        
        await this.repository.save(contract);
    }
    async getInvite(employee_id: string ): Promise<Contract[]> {

        const contracts = await this.repository.find({
            relations: ['company'],
            where: { employee_id: employee_id }
        });
/*         const contracts = await this.repository.find({
            relations: ['company'],
            where: { employee_id: employee_id }
        }); */
   /*      const contracts = await this.repository.find({
            employee_id, 
        }); */
        
        return contracts;
    }
}

export {ContratsRepository}