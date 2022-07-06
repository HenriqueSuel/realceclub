/*
  Warnings:

  - You are about to drop the column `friday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `saturday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `sunday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `thursday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_end_friday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_end_saturday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_end_sunday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_end_thursday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_end_tuesday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_end_wednesday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_start_friday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_start_saturday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_start_sunday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_start_thursday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_start_tuesday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `time_start_wednesday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `tuesday` on the `funcionamento` table. All the data in the column will be lost.
  - You are about to drop the column `wednesday` on the `funcionamento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "funcionamento" DROP CONSTRAINT "funcionamento_id_company_fkey";

-- AlterTable
ALTER TABLE "funcionamento" DROP COLUMN "friday",
DROP COLUMN "saturday",
DROP COLUMN "sunday",
DROP COLUMN "thursday",
DROP COLUMN "time_end_friday",
DROP COLUMN "time_end_saturday",
DROP COLUMN "time_end_sunday",
DROP COLUMN "time_end_thursday",
DROP COLUMN "time_end_tuesday",
DROP COLUMN "time_end_wednesday",
DROP COLUMN "time_start_friday",
DROP COLUMN "time_start_saturday",
DROP COLUMN "time_start_sunday",
DROP COLUMN "time_start_thursday",
DROP COLUMN "time_start_tuesday",
DROP COLUMN "time_start_wednesday",
DROP COLUMN "tuesday",
DROP COLUMN "wednesday";

-- CreateTable
CREATE TABLE "opening_hours_company" (
    "id" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "monday" BOOLEAN NOT NULL,
    "time_start_monday" TEXT NOT NULL,
    "time_end_monday" TEXT NOT NULL,
    "tuesday" BOOLEAN NOT NULL,
    "time_start_tuesday" TEXT NOT NULL,
    "time_end_tuesday" TEXT NOT NULL,
    "wednesday" BOOLEAN NOT NULL,
    "time_start_wednesday" TEXT NOT NULL,
    "time_end_wednesday" TEXT NOT NULL,
    "thursday" BOOLEAN NOT NULL,
    "time_start_thursday" TEXT NOT NULL,
    "time_end_thursday" TEXT NOT NULL,
    "friday" BOOLEAN NOT NULL,
    "time_start_friday" TEXT NOT NULL,
    "time_end_friday" TEXT NOT NULL,
    "saturday" BOOLEAN NOT NULL,
    "time_start_saturday" TEXT NOT NULL,
    "time_end_saturday" TEXT NOT NULL,
    "sunday" BOOLEAN NOT NULL,
    "time_start_sunday" TEXT NOT NULL,
    "time_end_sunday" TEXT NOT NULL,

    CONSTRAINT "opening_hours_company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "opening_hours_company" ADD CONSTRAINT "opening_hours_company_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
