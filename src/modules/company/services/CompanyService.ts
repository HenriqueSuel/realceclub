import { AppError } from "@shared/errors/AppError";
import { CreateToken } from "@utils/createToken";
import { ERROR } from "@utils/message/errorMessage";
import { compare, hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../infra/repositories/ICompanuRepository";

@injectable()
class CompanyService {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
      ) {}

      async create(companyData:ICompanyDto) {

        const companyFound = await this.companyRepository.existingCompanyVerifier(companyData.cnpj, companyData.email);

        
        if(companyFound) {
          throw new AppError(ERROR.COMPANY.EXISTING_COMPANY);
        }

        const passwordHash = await hash(companyData.password, 8);

        const company = await this.companyRepository.create({...companyData, password: passwordHash});

        const token = CreateToken(company.id);
        
        delete company.id;
        delete company.password;

        return {
          company,
          token
        }
      }

      async update({ id, name_company, owner_name, phone }) {
        const company = await this.companyRepository.update({id, name_company, owner_name, phone });
        delete company.id;
        delete company.password;

        return 
      }

      async login({email, password}) {
        const company = await this.companyRepository.existingCompanyVerifier(email);
         
        if(!company) {
          throw new AppError('ERROR.COMPANY.LOGIN_FAIL');
        }
        
        const passwordMatch = await compare(password, company.password);

        if (!passwordMatch) {
          throw new AppError(ERROR.COMPANY.LOGIN_FAIL);
        }



        const token = CreateToken(company.id);
        delete company.id;
        delete company.password;

        return {...token, company}

      }
}

export {CompanyService}