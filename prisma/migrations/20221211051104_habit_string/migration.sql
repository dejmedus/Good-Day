/*
  Warnings:

  - Changed the type of `habit` on the `Tracker` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Tracker" DROP COLUMN "habit";
ALTER TABLE "Tracker" ADD COLUMN     "habit" STRING NOT NULL;
