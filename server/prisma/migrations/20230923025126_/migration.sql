-- CreateTable
CREATE TABLE "Size" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "priceIncreaseRate" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "_CoffeeToSize" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CoffeeToSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Coffee" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoffeeToSize_B_fkey" FOREIGN KEY ("B") REFERENCES "Size" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoffeeToSize_AB_unique" ON "_CoffeeToSize"("A", "B");

-- CreateIndex
CREATE INDEX "_CoffeeToSize_B_index" ON "_CoffeeToSize"("B");
