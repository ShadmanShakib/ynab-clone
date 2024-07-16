"use server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

interface TItems {
  type: string;
  group: string;
  name: string;
}

export async function createMany(items: TItems[]) {
  const user = await currentUser();
  if (!user) {
    return;
  }
  const dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) {
    return;
  }
  const budget = await db.budget.findFirst({
    where: {
      userId: dbUser.id,
    },
  });
  if (!budget) {
    return;
  }
  const item = await db.item.createMany({
    data: items.map((item) => ({
      name: item.name,
      available: 0,
      value: item.type,
      group: item.group,
      budgetId: budget.id,
    })),
  });
  return item;
}

//  create a single item

export async function create(item: TItems) {
  const user = await currentUser();
  if (!user) {
    return;
  }
  const dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!dbUser) {
    return;
  }
  const budget = await db.budget.findFirst({
    where: {
      userId: dbUser.id,
    },
  });
  if (!budget) return;
  //create item
  const createdItem = await db.item.create({
    data: {
      name: item.name,
      available: 0,
      value: item.type,
      group: item.group,
      budgetId: budget.id as string,
    },
  });
  return createdItem;
}
