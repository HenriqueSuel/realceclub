import { AppError } from "@shared/errors/AppError";
import { ERROR } from "@utils/message/errorMessage";
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

        return await this.companyRepository.create(companyData);
      }

      async update({ id, name_company, owner_name, phone }) {

        return await this.companyRepository.update({id, name_company, owner_name, phone });
      }
}

export {CompanyService}