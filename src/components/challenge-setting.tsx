"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { challengeSettingSchema } from "@/schema/setting-schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Check, Goal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function ChallengeSettings() {
  const form = useForm<z.infer<typeof challengeSettingSchema>>({
    resolver: zodResolver(challengeSettingSchema),
    defaultValues: {
      allowInform: false,
      deepAnalisis: false,
      autoEmail: false,
      frequency: "daily",
    },
  });

  function onSubmit(data: z.infer<typeof challengeSettingSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Challenge Settings</CardTitle>
        <CardDescription>
          Configure how alerts and reports are generated and delivered.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="allowInform"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allow Inform</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      Allow the system to generate informs.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deepAnalisis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deep Analisis</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      Enable or disable deep analysis of the data.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="frequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alert Frequency</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Select Frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">
                            <Check className="mr-2" />
                            Daily
                          </SelectItem>
                          <SelectItem value="weekly">
                            <Check className="mr-2" />
                            Weekly
                          </SelectItem>
                          <SelectItem value="monthly">
                            <Check className="mr-2" />
                            Monthly
                          </SelectItem>
                          <SelectItem value="trimesterly">
                            <Check className="mr-2" />
                            Trimesterly
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Choose how frequently you'd like to receive alerts.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="autoEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Auto Email</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      Automatically send email notifications when alerts are
                      triggered.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="flex justify-end p-0 pt-4">
                <Button type="submit">Save</Button>
              </CardFooter>
            </form>
          </Form>
          <Goal size={300} strokeWidth={0.5} className=" hidden sm:flex"></Goal>
        </div>
      </CardContent>
    </Card>
  );
}

export default ChallengeSettings;
