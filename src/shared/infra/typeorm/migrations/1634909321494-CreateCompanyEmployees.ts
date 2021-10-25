import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompanyEmployees1634909321494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "contracts",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true
              },
              {
                name: "company_id",
                type: "uuid",
              },
              {
                name: "employee_id",
                type: "uuid",
              },
              {
                name: "invitation_status",
                type: "boolean",
                isNullable: true
              },
              {
                name: "status_date",
                type: "timestamp",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
    
        await queryRunner.createForeignKey(
          "contracts",
          new TableForeignKey({
            name: "FKCompanyEmployees",
            referencedTableName: "company",
            referencedColumnNames: ["id"],
            columnNames: ["company_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          })
        );
    
        await queryRunner.createForeignKey(
          "contracts",
          new TableForeignKey({
            name: "FKEmployeesCompany",
            referencedTableName: "employees",
            referencedColumnNames: ["id"],
            columnNames: ["employee_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
          "contracts",
          "FKCompanyEmployees"
        );
    
        await queryRunner.dropForeignKey(
          "contracts",
          "FKEmployeesCompany"
        );
    
        await queryRunner.dropTable("contracts");
      }

}
