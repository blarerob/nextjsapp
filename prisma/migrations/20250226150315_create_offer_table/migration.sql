/*
  Warnings:

  - The primary key for the `Offer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Offer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL
);
INSERT INTO "new_Offer" ("email", "firstName", "id", "lastName", "message", "phone") SELECT "email", "firstName", "id", "lastName", "message", "phone" FROM "Offer";
DROP TABLE "Offer";
ALTER TABLE "new_Offer" RENAME TO "Offer";
CREATE UNIQUE INDEX "Offer_email_key" ON "Offer"("email");
CREATE UNIQUE INDEX "Offer_phone_key" ON "Offer"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
