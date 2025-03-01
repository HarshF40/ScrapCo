/*
  Warnings:

  - You are about to drop the column `SellerId` on the `ShopItem` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `ShopItem` table. All the data in the column will be lost.
  - Added the required column `company` to the `ShopItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ShopItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ShopItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `ShopItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShopItem" DROP COLUMN "SellerId",
DROP COLUMN "price",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL;
