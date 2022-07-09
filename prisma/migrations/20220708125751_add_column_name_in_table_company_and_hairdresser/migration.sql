/*
  Warnings:

  - Added the required column `name_company` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `hairdresser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" ADD COLUMN     "name_company" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "hairdresser" ADD COLUMN     "name" TEXT NOT NULL;
