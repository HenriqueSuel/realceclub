/*
  Warnings:

  - You are about to drop the column `id_hairdress` on the `contract` table. All the data in the column will be lost.
  - Added the required column `id_hairdresser` to the `contract` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contract" DROP CONSTRAINT "contract_id_hairdress_fkey";

-- AlterTable
ALTER TABLE "contract" DROP COLUMN "id_hairdress",
ADD COLUMN     "id_hairdresser" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "contract" ADD CONSTRAINT "contract_id_hairdresser_fkey" FOREIGN KEY ("id_hairdresser") REFERENCES "hairdresser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
