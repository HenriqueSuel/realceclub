import { getRepository, Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../ICompanuRepository";


class CompanyRepository implements ICompanyRepository {
    private repository: Repository<Company>


    constructor(){
        this.repository = getRepository(Company);
    }

    async create(company: ICompanyDto):Promise<void> {
        const companySave = this.repository.create({...company});
        await this.repository.save(companySave);
    }
}

export {CompanyRepository}