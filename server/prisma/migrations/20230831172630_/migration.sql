/*
  Warnings:

  - You are about to drop the column `image` on the `Coffee` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coffee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "typeId" TEXT NOT NULL,
    CONSTRAINT "Coffee_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Coffee" ("description", "id", "price", "title", "typeId") SELECT "description", "id", "price", "title", "typeId" FROM "Coffee";
DROP TABLE "Coffee";
ALTER TABLE "new_Coffee" RENAME TO "Coffee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
