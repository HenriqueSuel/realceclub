/*
  Warnings:

  - You are about to drop the `funcionamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "funcionamento";

-- CreateTable
CREATE TABLE "hairdresser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hairdresser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hairdresser_email_key" ON "hairdresser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "hairdresser_cpf_key" ON "hairdresser"("cpf");
