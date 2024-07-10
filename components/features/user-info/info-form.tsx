"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FinanceStatus } from "@/data/constants";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import StatusBtn from "./statusbtn";
import { Button } from "@/components/ui/button";
import SelectStatus from "./select-status";
import SelectPerson from "./select-person";
import SelectHome from "./select-home";

type Props = {};

export default function InfoForm({}: Props) {
  const [isOpen, setOpen] = React.useState(true);
  const [fStatus, setStatus] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Drawer open={isOpen}>
        <DrawerContent className="mx-5 h-[500px] px-3 pb-8">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{
                width: `${((currentStep + 1) / 5) * 100}%`,
              }}
            ></div>
          </div>
          <div className="h-full p-5">
            {currentStep === 0 && (
              <SelectStatus fStatus={fStatus} setStatus={setStatus} />
            )}
            {currentStep === 1 && <SelectPerson />}
            {currentStep === 2 && <SelectHome />}
          </div>
          <div className="flex w-full justify-end">
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              variant="secondary"
            >
              Continue
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
