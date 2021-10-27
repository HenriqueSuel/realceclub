import { ICompanyRepository } from "@modules/company/infra/repositories/ICompanuRepository";
import { IContratsRepository } from "@modules/company/infra/repositories/IContractRepository";
import { IEmployeesRepository } from "@modules/employees/infra/repositories/IEmployeesRepository";
import { AppError } from "@shared/errors/AppError";
import { ERROR } from "@utils/message/errorMessage";
import { inject, injectable } from "tsyringe";
import { classToPlain } from 'class-transformer';

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
        
        const contract = await this.contratsRepository.findContract({ company_id, employee_id: employee.id})
        
        if(contract) {
          throw new AppError('Convite já enviado');
        }
        await this.contratsRepository.create({ 
            company_id: company.id,
            employee_id: employee.id
        });

      }

      async findInviteCompany( company_id: string ) {
        const contracts = await this.contratsRepository.getInvite({company_id, employee_id: null});
        const t = classToPlain(contracts)
        
        return t
      }
      
      async findInviteEmployees( employee_id: string ) {
        const contracts = await this.contratsRepository.getInvite({employee_id,company_id: null });
        return contracts
      }

      async handleInvite( employee_id: string, id_contract: string, invitation_status: boolean) {
        const contracts = await this.contratsRepository.handleInvite({id_contract, invitation_status });
        return contracts
      }

}

export {ContractService}