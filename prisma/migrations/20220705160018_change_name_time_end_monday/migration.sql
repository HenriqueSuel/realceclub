/*
  Warnings:

  - You are about to drop the column `end_start_monday` on the `opening_hours_company` table. All the data in the column will be lost.
  - Added the required column `time_end_monday` to the `opening_hours_company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "opening_hours_company" DROP COLUMN "end_start_monday",
ADD COLUMN     "time_end_monday" TEXT NOT NULL;
