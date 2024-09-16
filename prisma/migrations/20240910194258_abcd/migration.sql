/*
  Warnings:

  - Added the required column `symptoms` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeSlots` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointment` ADD COLUMN `symptoms` VARCHAR(191) NOT NULL,
    ADD COLUMN `timeSlots` VARCHAR(191) NOT NULL;
