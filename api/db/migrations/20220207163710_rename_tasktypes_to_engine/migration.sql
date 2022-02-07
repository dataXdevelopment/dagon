/*
  Warnings:

  - You are about to drop the column `type` on the `Task` table. All the data in the column will be lost.
  - Added the required column `engine` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EngineTypes" AS ENUM ('METACRITIC', 'TWITTER');

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "type",
ADD COLUMN     "engine" "EngineTypes" NOT NULL;

-- DropEnum
DROP TYPE "TaskTypes";
