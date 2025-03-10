"use client";
import React, { use } from "react";
import { FinanceStatus } from "@/data/constants";
import { cn } from "@/lib/utils";
import StatusBtn from "./statusbtn";
import addStatus from "@/actions/budget/add-status";
import { useBudgetStore } from "@/hooks/zustand/use-budget-store";
import Image from "next/image";
import Title from "./title";
import { Button } from "@/components/ui/button";

type Props = {};

export default function BudgetStatus({}: Props) {
  const {
    budget_status: fStatus,
    setBudgetStatus: setStatus,
    nextStep,
    canProceed,
  } = useBudgetStore();
  const handleContinue = async () => {
    if (!fStatus) return;
    const status = await addStatus(fStatus);
    if (status) {
      nextStep();
    }
  };
  return (
    <div className="">
      <div className="flex h-full w-full gap-5">
        <div className="flex h-[400px] w-1/2 items-center justify-center">
          <Image
            src="/plant.jpg"
            className="h-80 w-80"
            height={400}
            width={400}
            alt="Plant"
          />
        </div>
        <div className="pt-10">
          <Title>How do you feel about your finances today?</Title>

          <div className="flex flex-col gap-3">
            {FinanceStatus.map((status) => (
              <StatusBtn
                onClick={() => setStatus(status.value)}
                selected={fStatus === status.value}
                text={status.text}
                key={status.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={handleContinue} disabled={!canProceed()}>
          Continue
        </Button>
      </div>
    </div>
  );
}
