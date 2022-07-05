-- CreateTable
CREATE TABLE "opening_hours_company" (
    "id" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "monday" BOOLEAN NOT NULL,
    "time_start_monday" TEXT NOT NULL,
    "end_start_monday" TEXT NOT NULL,
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
