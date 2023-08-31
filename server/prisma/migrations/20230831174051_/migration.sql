/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Type_title_key" ON "Type"("title");
