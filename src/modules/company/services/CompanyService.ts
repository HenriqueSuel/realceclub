import { inject, injectable } from "tsyringe";
import { ICompanyRepository } from "../infra/repositories/ICompanuRepository";

@injectable()
class CompanyService {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository
      ) {}

      async create(companyData:ICompanyDto) {
        await this.companyRepository.create(companyData);
      }
}

export {CompanyService}