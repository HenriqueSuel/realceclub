/*
  Warnings:

  - You are about to drop the column `id_work_shedule` on the `Work_Breaks` table. All the data in the column will be lost.
  - Added the required column `id_work_schedule` to the `Work_Breaks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Work_Breaks" DROP CONSTRAINT "Work_Breaks_id_work_shedule_fkey";

-- AlterTable
ALTER TABLE "Work_Breaks" DROP COLUMN "id_work_shedule",
ADD COLUMN     "id_work_schedule" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Work_Breaks" ADD CONSTRAINT "Work_Breaks_id_work_schedule_fkey" FOREIGN KEY ("id_work_schedule") REFERENCES "work_schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
