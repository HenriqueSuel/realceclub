/*
  Warnings:

  - Added the required column `price` to the `job_sub_categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "job_sub_categories" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "job_hairdresser" (
    "id" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "id_job_sub_categories" TEXT NOT NULL,

    CONSTRAINT "job_hairdresser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "job_hairdresser_id_job_sub_categories_key" ON "job_hairdresser"("id_job_sub_categories");

-- AddForeignKey
ALTER TABLE "job_hairdresser" ADD CONSTRAINT "job_hairdresser_id_job_sub_categories_fkey" FOREIGN KEY ("id_job_sub_categories") REFERENCES "job_sub_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
