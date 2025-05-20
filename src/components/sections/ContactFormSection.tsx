
'use client';

import type { ProfileData } from '@/types';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { SectionTitle } from '@/components/shared/SectionTitle';
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Main Card
import { Card as InfoCard, CardContent as InfoCardContent, CardHeader as InfoCardHeader, CardTitle as InfoCardTitle } from "@/components/ui/card"; // For inner cards

import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Send, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormSectionProps {
  contactInfo: Pick<ProfileData, 'email' | 'phone' | 'address'>;
}

export function ContactFormSection({ contactInfo }: ContactFormSectionProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleTimeString());
  }, []);


  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form Submitted:", values);
    // console.log("Current Time (client):", new Date().toLocaleTimeString());
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "default", // "default" is usually blue or your primary theme color
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <SectionWrapper id="contact">
      <Card className="bg-card shadow-lg">
        <CardHeader>
          <SectionTitle subtitle="Feel free to reach out for collaborations or just a friendly chat.">Get In Touch</SectionTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <InfoCard className="shadow-md bg-background">
                <InfoCardHeader>
                  <InfoCardTitle className="text-xl flex items-center text-foreground"><Mail className="mr-2 text-primary"/> Email</InfoCardTitle>
                </InfoCardHeader>
                <InfoCardContent>
                  <Link href={`mailto:${contactInfo.email}`} className="text-primary hover:underline break-all">
                    {contactInfo.email}
                  </Link>
                </InfoCardContent>
              </InfoCard>
              <InfoCard className="shadow-md bg-background">
                <InfoCardHeader>
                  <InfoCardTitle className="text-xl flex items-center text-foreground"><Phone className="mr-2 text-primary"/> Phone</InfoCardTitle>
                </InfoCardHeader>
                <InfoCardContent>
                  <span className="text-muted-foreground">{contactInfo.phone}</span>
                </InfoCardContent>
              </InfoCard>
              {contactInfo.address && (
                <InfoCard className="shadow-md bg-background">
                  <InfoCardHeader>
                    <InfoCardTitle className="text-xl flex items-center text-foreground"><MapPin className="mr-2 text-primary"/> Address</InfoCardTitle>
                  </InfoCardHeader>
                  <InfoCardContent>
                    <span className="text-muted-foreground">{contactInfo.address}</span>
                  </InfoCardContent>
                </InfoCard>
              )}
            </div>

            <div className="md:col-span-2">
              <InfoCard className="shadow-xl bg-background">
                <InfoCardHeader>
                  <InfoCardTitle className="text-xl text-foreground">Send Me A Message</InfoCardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </InfoCardHeader>
                <InfoCardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} disabled={isSubmitting} className="bg-card border-border focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} disabled={isSubmitting} className="bg-card border-border focus:border-primary" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message..."
                                rows={5}
                                {...field}
                                disabled={isSubmitting}
                                className="bg-card border-border focus:border-primary"
                              />
                            </FormControl>
                            <FormDescription className="text-xs text-muted-foreground">
                              Max 500 characters.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end">
                        <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          {isSubmitting ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            <Send className="mr-2 h-4 w-4" />
                          )}
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </Form>
                </InfoCardContent>
              </InfoCard>
            </div>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
