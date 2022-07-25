/*
  Warnings:

  - You are about to drop the `opening_hours_hairdresser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "opening_hours_hairdresser" DROP CONSTRAINT "opening_hours_hairdresser_id_hairdresser_fkey";

-- DropTable
DROP TABLE "opening_hours_hairdresser";

-- CreateTable
CREATE TABLE "weeks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "weeks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_schedule" (
    "id" TEXT NOT NULL,
    "is_break" BOOLEAN NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "id_week" INTEGER NOT NULL,
    "id_contract" TEXT NOT NULL,

    CONSTRAINT "work_schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "work_schedule" ADD CONSTRAINT "work_schedule_id_contract_fkey" FOREIGN KEY ("id_contract") REFERENCES "contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule" ADD CONSTRAINT "work_schedule_id_week_fkey" FOREIGN KEY ("id_week") REFERENCES "weeks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
