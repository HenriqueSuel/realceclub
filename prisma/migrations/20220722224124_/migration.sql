/*
  Warnings:

  - The primary key for the `weeks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `weeks` table. All the data in the column will be lost.
  - You are about to drop the column `id_week` on the `work_schedule` table. All the data in the column will be lost.
  - You are about to drop the column `is_break` on the `work_schedule` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `weeks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_week` to the `work_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "work_schedule" DROP CONSTRAINT "work_schedule_id_week_fkey";

-- AlterTable
ALTER TABLE "weeks" DROP CONSTRAINT "weeks_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "work_schedule" DROP COLUMN "id_week",
DROP COLUMN "is_break",
ADD COLUMN     "name_week" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Work_Breaks" (
    "id" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "id_work_shedule" TEXT NOT NULL,

    CONSTRAINT "Work_Breaks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "weeks_name_key" ON "weeks"("name");

-- AddForeignKey
ALTER TABLE "work_schedule" ADD CONSTRAINT "work_schedule_name_week_fkey" FOREIGN KEY ("name_week") REFERENCES "weeks"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work_Breaks" ADD CONSTRAINT "Work_Breaks_id_work_shedule_fkey" FOREIGN KEY ("id_work_shedule") REFERENCES "work_schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
