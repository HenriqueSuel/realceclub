import { getRepository, Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { ICompanyRepository } from "../ICompanuRepository";


class CompanyRepository implements ICompanyRepository {
    private repository: Repository<Company>
    
    constructor(){
        this.repository = getRepository(Company);
    }

    async create(company: ICompanyDto): Promise<Company> {
        const companySave = this.repository.create({...company});
        return await this.repository.save(companySave);
    }

    async existingCompanyVerifier(cnpj: string, email: string):Promise<Company> {
        const companyFoundQuery = await this.repository.createQueryBuilder('existingCompanyVerifier')
        .where('cnpj = :cnpj', { cnpj }).orWhere('email = :email', {email});

        const companyFound = companyFoundQuery.getOne();
        return companyFound;
    }

    async update({id, name_company,owner_name, phone}):Promise<Company> {
        await (await this.repository.update(id, {name_company,owner_name, phone}))
        return await this.repository.findOne(id);
    }
}

export {CompanyRepository}