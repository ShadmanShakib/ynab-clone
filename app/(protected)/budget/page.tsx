import { getItems } from "@/actions/budget/item";
import {
  BudgetHeader,
  BudgetSidebar,
  BudgetTable,
} from "@/components/features/budget";
import BudgetInspector from "@/components/features/budget/budget-inspecter";
import BudgetInfo from "@/components/features/user-info/budget-info";

import React from "react";

export default async function Budget() {
  const items = await getItems();

  return (
    <div className="flex">
      <BudgetInfo />
      <BudgetSidebar />

      <div className="w-full">
        <BudgetHeader />
        <div className="flex w-full bg-gray-200">
          <BudgetTable items={items} />
          <BudgetInspector />
        </div>
      </div>
    </div>
  );
}
