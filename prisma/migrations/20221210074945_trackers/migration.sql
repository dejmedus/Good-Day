-- CreateTable
CREATE TABLE "Tracker" (
    "userId" STRING NOT NULL,
    "id" STRING NOT NULL,
    "habit" BOOL NOT NULL,
    "color" STRING NOT NULL,
    "name" STRING NOT NULL,
    "goal" INT4 NOT NULL,

    CONSTRAINT "Tracker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tracker" ADD CONSTRAINT "Tracker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
