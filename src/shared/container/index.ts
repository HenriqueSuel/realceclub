import { container } from "tsyringe";
import { CompanyRepository } from "@modules/company/infra/repositories/implementations/CompanyRepository";
import { ICompanyRepository } from "@modules/company/infra/repositories/ICompanuRepository";
import { IEmployeesRepository } from "@modules/employees/infra/repositories/IEmployeesRepository";
import { EmployeesRepository } from "@modules/employees/infra/repositories/implementations/EmployeesRepository";
import { IContratsRepository } from "@modules/company/infra/repositories/IContractRepository";
import { ContratsRepository } from "@modules/company/infra/repositories/implementations/ContractRepository";

container.registerSingleton<ICompanyRepository>(
    "CompanyRepository",
    CompanyRepository
  );

container.registerSingleton<IEmployeesRepository>(
    "EmployeesRepository",
    EmployeesRepository
  );

container.registerSingleton<IContratsRepository>(
    "ContratsRepository",
    ContratsRepository
  );
