/*
  Warnings:

  - You are about to drop the column `d_contact` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `d_email` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `d_license` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `d_name` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `d_speciality` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `p_contact` on the `Patients` table. All the data in the column will be lost.
  - You are about to drop the column `p_dob` on the `Patients` table. All the data in the column will be lost.
  - You are about to drop the column `p_email` on the `Patients` table. All the data in the column will be lost.
  - You are about to drop the column `p_fp` on the `Patients` table. All the data in the column will be lost.
  - You are about to drop the column `p_gender` on the `Patients` table. All the data in the column will be lost.
  - You are about to drop the column `p_hrs` on the `Patients` table. All the data in the column will be lost.
  - You are about to drop the column `p_name` on the `Patients` table. All the data in the column will be lost.
  - You are about to drop the column `c_contact` on the `Pharmacy` table. All the data in the column will be lost.
  - You are about to drop the column `c_email` on the `Pharmacy` table. All the data in the column will be lost.
  - You are about to drop the column `c_license` on the `Pharmacy` table. All the data in the column will be lost.
  - You are about to drop the column `c_name` on the `Pharmacy` table. All the data in the column will be lost.
  - You are about to drop the column `d_id` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `details` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `diagnosis` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `p_id` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `symptoms` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Appointments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialty` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `Patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Pharmacy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Treatment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Treatment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Appointments` DROP FOREIGN KEY `Appointments_d_id_fkey`;

-- DropForeignKey
ALTER TABLE `Appointments` DROP FOREIGN KEY `Appointments_p_id_fkey`;

-- DropForeignKey
ALTER TABLE `Treatment` DROP FOREIGN KEY `Treatment_d_id_fkey`;

-- DropForeignKey
ALTER TABLE `Treatment` DROP FOREIGN KEY `Treatment_p_id_fkey`;

-- DropIndex
DROP INDEX `Doctor_d_contact_d_license_key` ON `Doctor`;

-- DropIndex
DROP INDEX `Patients_p_contact_key` ON `Patients`;

-- DropIndex
DROP INDEX `Patients_p_contact_p_email_key` ON `Patients`;

-- AlterTable
ALTER TABLE `Doctor` DROP COLUMN `d_contact`,
    DROP COLUMN `d_email`,
    DROP COLUMN `d_license`,
    DROP COLUMN `d_name`,
    DROP COLUMN `d_speciality`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `specialty` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Patients` DROP COLUMN `p_contact`,
    DROP COLUMN `p_dob`,
    DROP COLUMN `p_email`,
    DROP COLUMN `p_fp`,
    DROP COLUMN `p_gender`,
    DROP COLUMN `p_hrs`,
    DROP COLUMN `p_name`,
    ADD COLUMN `contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Pharmacy` DROP COLUMN `c_contact`,
    DROP COLUMN `c_email`,
    DROP COLUMN `c_license`,
    DROP COLUMN `c_name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Treatment` DROP COLUMN `d_id`,
    DROP COLUMN `details`,
    DROP COLUMN `diagnosis`,
    DROP COLUMN `p_id`,
    DROP COLUMN `symptoms`,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `createdAt`;

-- DropTable
DROP TABLE `Appointments`;

-- AddForeignKey
ALTER TABLE `Patients` ADD CONSTRAINT `Patient_User_fkey` FOREIGN KEY (`p_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_User_fkey` FOREIGN KEY (`d_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pharmacy` ADD CONSTRAINT `Pharmacy_User_fkey` FOREIGN KEY (`c_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Treatment` ADD CONSTRAINT `Treatment_Patient_fkey` FOREIGN KEY (`t_id`) REFERENCES `Patients`(`p_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Treatment` ADD CONSTRAINT `Treatment_Doctor_fkey` FOREIGN KEY (`t_id`) REFERENCES `Doctor`(`d_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
