/*
  Warnings:

  - You are about to drop the column `type` on the `Coffee` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Coffee` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coffee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "typeId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    CONSTRAINT "Coffee_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Coffee" ("description", "id", "image", "price", "title") SELECT "description", "id", "image", "price", "title" FROM "Coffee";
DROP TABLE "Coffee";
ALTER TABLE "new_Coffee" RENAME TO "Coffee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
