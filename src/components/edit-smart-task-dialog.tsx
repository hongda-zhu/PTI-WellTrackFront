"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
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
import { DialogTitle } from "@radix-ui/react-dialog";
import SmartTaskSchema, { SmartTask } from "@/schema/smart-task.schema";

type Props = {
  smartTask: SmartTask;
  onClose: () => void;
  onSave: (updated: SmartTask) => void;
};

export default function EditSmartTaskDialog({
  smartTask,
  onClose,
  onSave,
}: Props) {
  const form = useForm<z.infer<typeof SmartTaskSchema>>({
    resolver: zodResolver(SmartTaskSchema),
    defaultValues: smartTask,
  });

  const handleSubmit = (values: z.infer<typeof SmartTaskSchema>) => {
    onSave(values);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4 pt-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de desafío</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Se puede cambiar el nombre"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Se puede cambiar el descripción"
                        {...field}
                      />
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
                      <Input type="date" {...field} disabled />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex justify-between pt-2">
                <div className="flex gap-2">
                  <Button variant="ghost" type="button" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit">Guardar</Button>
                </div>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
