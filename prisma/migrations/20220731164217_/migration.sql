/*
  Warnings:

  - Added the required column `id_contract` to the `job_hairdresser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "job_hairdresser" ADD COLUMN     "id_contract" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "job_hairdresser" ADD CONSTRAINT "job_hairdresser_id_contract_fkey" FOREIGN KEY ("id_contract") REFERENCES "contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
