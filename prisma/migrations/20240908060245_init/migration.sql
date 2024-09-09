-- CreateTable
CREATE TABLE `Patients` (
    `p_id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_name` VARCHAR(191) NOT NULL,
    `p_contact` INTEGER NULL,
    `p_email` VARCHAR(191) NULL,
    `p_dob` VARCHAR(191) NOT NULL,
    `p_gender` VARCHAR(191) NOT NULL,
    `p_hrs` VARCHAR(191) NOT NULL,
    `p_fp` LONGBLOB NOT NULL,

    UNIQUE INDEX `Patients_p_contact_key`(`p_contact`),
    UNIQUE INDEX `Patients_p_contact_p_email_key`(`p_contact`, `p_email`),
    PRIMARY KEY (`p_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `d_id` INTEGER NOT NULL AUTO_INCREMENT,
    `d_name` VARCHAR(191) NOT NULL,
    `d_speciality` VARCHAR(191) NOT NULL,
    `d_contact` INTEGER NOT NULL,
    `d_email` VARCHAR(191) NULL,
    `d_license` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Doctor_d_contact_d_license_key`(`d_contact`, `d_license`),
    PRIMARY KEY (`d_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pharmacy` (
    `c_id` INTEGER NOT NULL AUTO_INCREMENT,
    `c_name` VARCHAR(191) NOT NULL,
    `c_contact` INTEGER NULL,
    `c_email` VARCHAR(191) NULL,
    `c_license` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`c_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointments` (
    `a_id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` INTEGER NOT NULL,
    `d_id` INTEGER NOT NULL,
    `a_date` VARCHAR(191) NOT NULL,
    `a_status` VARCHAR(191) NOT NULL DEFAULT 'Scheduled',

    PRIMARY KEY (`a_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Treatment` (
    `t_id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_id` INTEGER NOT NULL,
    `d_id` INTEGER NOT NULL,
    `symptoms` VARCHAR(191) NOT NULL,
    `diagnosis` VARCHAR(191) NOT NULL,
    `details` LONGBLOB NULL,

    UNIQUE INDEX `Treatment_p_id_key`(`p_id`),
    UNIQUE INDEX `Treatment_d_id_key`(`d_id`),
    PRIMARY KEY (`t_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `Patients`(`p_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_d_id_fkey` FOREIGN KEY (`d_id`) REFERENCES `Doctor`(`d_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Treatment` ADD CONSTRAINT `Treatment_p_id_fkey` FOREIGN KEY (`p_id`) REFERENCES `Patients`(`p_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Treatment` ADD CONSTRAINT `Treatment_d_id_fkey` FOREIGN KEY (`d_id`) REFERENCES `Doctor`(`d_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
