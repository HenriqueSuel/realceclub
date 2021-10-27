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
    async getInvite({company_id, employee_id } ): Promise<Contract[]> {

        let contracts = null;
        if(employee_id) {
            contracts = await this.repository.find({
                relations: ['company'],
                where: { employee_id: employee_id }
            });
        } 
        if(company_id) {
            contracts = await this.repository.find({
                relations: ['employees'],
                where: { company_id: company_id },
            });
        }
        return contracts;
    }
    async findContract({company_id, employee_id } ): Promise<Contract> {

        const contracts = await this.repository.findOne({
            relations: ['company'],
            where: { employee_id: employee_id, company_id: company_id },
        });

        return contracts;
    }

    async handleInvite({invitation_status,id_contract  } ): Promise<void> {
        console.log('Chegou no atualizar')
        await this.repository.update({id: id_contract}, {invitation_status});

    }
}

export {ContratsRepository}