-- CreateTable
CREATE TABLE "contract" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "id_hairdresser" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contract_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contract" ADD CONSTRAINT "contract_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contract" ADD CONSTRAINT "contract_id_hairdresser_fkey" FOREIGN KEY ("id_hairdresser") REFERENCES "hairdresser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
