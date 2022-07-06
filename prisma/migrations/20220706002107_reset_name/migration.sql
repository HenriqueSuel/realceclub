/*
  Warnings:

  - You are about to drop the `opening_hours_company` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "opening_hours_company" DROP CONSTRAINT "opening_hours_company_id_company_fkey";

-- DropTable
DROP TABLE "opening_hours_company";

-- CreateTable
CREATE TABLE "funcionamento" (
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

    CONSTRAINT "funcionamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "funcionamento" ADD CONSTRAINT "funcionamento_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
