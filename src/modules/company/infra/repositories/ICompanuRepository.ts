import { Company } from "../entities/Company";

interface IUpadate {
    id:string;
    name_company: string;
    owner_name: string;
    phone: string;
}

interface IPropsExistingCompany {
    email: string;
    cnpj?: string;
}

interface ICompanyRepository {
    create(company: ICompanyDto): Promise<Company>;
    findById(id): Promise<Company>;
    existingCompanyVerifier({cnpj, email}: IPropsExistingCompany): Promise<Company>;
    update({id, name_company,owner_name, phone}:IUpadate): Promise<Company>;
    login({password, email}): Promise<Company>;
}

export {ICompanyRepository}