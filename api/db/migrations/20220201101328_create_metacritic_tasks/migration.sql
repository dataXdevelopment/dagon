-- CreateEnum
CREATE TYPE "MetacriticTaskMedia" AS ENUM ('MOVIE', 'TV', 'GAME');

-- CreateTable
CREATE TABLE "MetacriticTask" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "media" "MetacriticTaskMedia" NOT NULL,

    CONSTRAINT "MetacriticTask_pkey" PRIMARY KEY ("id")
);
