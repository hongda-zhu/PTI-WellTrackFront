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
import ChallengeSchema, { Challenge } from "@/schema/challenge-schema";

type Props = {
  challenge: Challenge;
  onClose: () => void;
  onSave: (updated: Challenge) => void;
};

export default function EditChallengeDialog({
  challenge,
  onClose,
  onSave,
}: Props) {
  const form = useForm<z.infer<typeof ChallengeSchema>>({
    resolver: zodResolver(ChallengeSchema),
    defaultValues: challenge,
  });

  const handleSubmit = (values: z.infer<typeof ChallengeSchema>) => {
    onSave(values);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogTitle>Edit Challenge</DialogTitle>
      <DialogHeader>Edit the selected challenge</DialogHeader>
      <DialogContent>
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
              name="progress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Progreso actual</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Se puede buscar otra forma"
                      {...field}
                      disabled
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="criterion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Criterio Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Criterio de cada uno" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="metricTypes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipos de métricas</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seleccionado brevemente, no se puede cambiar"
                      {...field}
                      disabled
                    />
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
      </DialogContent>
    </Dialog>
  );
}
