"use client";
import { v4 as uuidv4 } from "uuid";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SmartTaskSchema, { SmartTask } from "@/schema/smart-task.schema";

type Props = {
  onClose: () => void;
  onCreate: (newSmartTask: SmartTask) => void;
};

export default function CreateSmartTaskDialog({ onClose, onCreate }: Props) {
  const form = useForm<z.infer<typeof SmartTaskSchema>>({
    resolver: zodResolver(SmartTaskSchema),
    defaultValues: {
      id: "",
      name: "",
      description: "",
      date: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof SmartTaskSchema>) => {
    // Log validation errors if any
    if (form.formState.errors) {
      console.log("Form validation errors:", form.formState.errors);
    }

    // If there are no validation errors, submit the form
    if (Object.keys(form.formState.errors).length === 0) {
      console.log("SmartTask created:", values);
      values.id = uuidv4(); // Generate a unique ID for the new SmartTask
      onCreate(values); // Pass the new SmartTask to the onCreate callback
      form.reset(); // Reset the form
    } else {
      console.log("Form contains errors. Not submitting.");
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogHeader>
        <DialogTitle>Create SmartTask</DialogTitle>
      </DialogHeader>
      <DialogContent>
        <form
          onSubmit={form.handleSubmit(handleSubmit)} // Ensure this correctly submits
          className="space-y-4 pt-4"
        >
          <Form {...form}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SmartTask Name</FormLabel>
                  <FormControl>
                    <Input placeholder="SmartTask Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="SmartTask Description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-end pt-2 gap-2">
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </Form>
        </form>
      </DialogContent>
    </Dialog>
  );
}
