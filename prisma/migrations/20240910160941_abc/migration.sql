/*
  Warnings:

  - A unique constraint covering the columns `[mobileNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[aadharNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `aadharNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `aadharNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobileNumber` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_mobileNumber_key` ON `User`(`mobileNumber`);

-- CreateIndex
CREATE UNIQUE INDEX `User_aadharNumber_key` ON `User`(`aadharNumber`);
