-- CreateEnum
CREATE TYPE "TaskTypes" AS ENUM ('METACRITIC', 'TWITTER');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "TaskStatus" NOT NULL,
    "type" "TaskTypes" NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
