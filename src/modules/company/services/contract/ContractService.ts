import { ICompanyRepository } from "@modules/company/infra/repositories/ICompanuRepository";
import { IContratsRepository } from "@modules/company/infra/repositories/IContractRepository";
import { IEmployeesRepository } from "@modules/employees/infra/repositories/IEmployeesRepository";
import { AppError } from "@shared/errors/AppError";
import { ERROR } from "@utils/message/errorMessage";
import { inject, injectable } from "tsyringe";

@injectable()
class ContractService {
    constructor(
        @inject("CompanyRepository")
        private companyRepository: ICompanyRepository,
        @inject("EmployeesRepository")
        private employeesRepository: IEmployeesRepository,
        @inject("ContratsRepository")
        private  contratsRepository: IContratsRepository
      ) {}

      async inviteEmployees( company_id, cpf ) {
        const employee = await this.employeesRepository.existingEmployeesVerifier({cpf});
         
        if(!employee) {
          throw new AppError(ERROR.EMPLOYEES.SEARCH);
        }
        
        const company = await this.companyRepository.findById(company_id)

        if(!company) {
          throw new AppError(ERROR.COMPANY.SEARCH);
        }


        await this.contratsRepository.create({ 
            company_id: company.id,
            employee_id: employee.id
        });

      }

      async getInvite( employee_id: string ) {
        
        const contracts = await this.contratsRepository.getInvite(employee_id);

        return contracts
      }

}

export {ContractService}