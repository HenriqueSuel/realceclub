/*
  Warnings:

  - A unique constraint covering the columns `[id_company]` on the table `opening_hours_company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "opening_hours_hairdresser" (
    "id" TEXT NOT NULL,
    "id_hairdresser" TEXT NOT NULL,
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

    CONSTRAINT "opening_hours_hairdresser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "job_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_categories_company" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "id_job" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,

    CONSTRAINT "job_categories_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_sub_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_job_category_company" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "job_sub_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "job_categories_company_id_job_key" ON "job_categories_company"("id_job");

-- CreateIndex
CREATE UNIQUE INDEX "job_sub_categories_id_job_category_company_key" ON "job_sub_categories"("id_job_category_company");

-- CreateIndex
CREATE UNIQUE INDEX "opening_hours_company_id_company_key" ON "opening_hours_company"("id_company");

-- AddForeignKey
ALTER TABLE "opening_hours_hairdresser" ADD CONSTRAINT "opening_hours_hairdresser_id_hairdresser_fkey" FOREIGN KEY ("id_hairdresser") REFERENCES "hairdresser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_categories_company" ADD CONSTRAINT "job_categories_company_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_categories_company" ADD CONSTRAINT "job_categories_company_id_job_fkey" FOREIGN KEY ("id_job") REFERENCES "job_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_sub_categories" ADD CONSTRAINT "job_sub_categories_id_job_category_company_fkey" FOREIGN KEY ("id_job_category_company") REFERENCES "job_categories_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
