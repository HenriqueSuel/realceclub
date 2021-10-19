
interface ICompanyRepository {
    create(company: ICompanyDto): Promise<void>
}

export {ICompanyRepository}