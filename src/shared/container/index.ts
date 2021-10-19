import { container } from "tsyringe";
import { CompanyRepository } from "@modules/company/infra/repositories/implementations/CompanyRepository";
import { ICompanyRepository } from "@modules/company/infra/repositories/ICompanuRepository";


container.registerSingleton<ICompanyRepository>(
    "CompanyRepository",
    CompanyRepository
  );