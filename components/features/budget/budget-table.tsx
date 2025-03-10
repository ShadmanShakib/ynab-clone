import React from "react";
import { map } from "underscore";

import BudgetGroup from "./budget-group";
import BudgetItem from "./budget-item";
import AddCategory from "./add-category";
import { Category, Prisma } from "@prisma/client";

type Props = {
  categories: Prisma.CategoryGetPayload<{
    include: { budgetItems: { include: { transactions: true } } };
  }>[];
};

export default function BudgetTable({ categories }: Props) {
  return (
    <div className="w-full bg-white">
      {/* budget table header */}
      <div className="border-b px-5 py-2">
        <AddCategory />
      </div>
      <div className="flex h-10 w-full items-center">
        <div className="flex w-full gap-3 pl-3">
          <input type="checkbox" />
          <div className="flex w-2/5">
            <span className="uppercase">Categroy</span>
          </div>

          <div className="w-1/5 text-center">
            <span> Assigned</span>
          </div>
          <div className="w-1/5 text-center">
            <span>Activity</span>
          </div>
          <div className="w-1/5 text-center">
            <span>Available</span>
          </div>
        </div>
      </div>
      {/* budget table body */}

      <div className="">
        {map(categories, (category) => {
          return (
            <BudgetGroup
              categoryId={category.id}
              key={category.id}
              title={category.name}
            >
              <div>
                {map(category.budgetItems, (item) => {
                  return <BudgetItem key={item.id} item={item} />;
                })}
              </div>
            </BudgetGroup>
          );
        })}
      </div>
    </div>
  );
}
