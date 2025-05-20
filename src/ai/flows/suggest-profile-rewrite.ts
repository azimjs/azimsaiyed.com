// src/ai/flows/suggest-profile-rewrite.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting profile rewrites, allowing users to tailor their professional persona.
 *
 * - suggestProfileRewrite - A function that takes profile information and rewrite objectives to suggest new summaries and headlines.
 * - SuggestProfileRewriteInput - The input type for the suggestProfileRewrite function.
 * - SuggestProfileRewriteOutput - The return type for the suggestProfileRewrite function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProfileRewriteInputSchema = z.object({
  currentHeadline: z.string().describe('The current headline of the profile.'),
  currentSummary: z.string().describe('The current summary of the profile.'),
  rewriteObjective: z
    .string()
    .describe(
      'The objective for rewriting the profile, e.g., target job or networking event.'
    ),
});

export type SuggestProfileRewriteInput = z.infer<
  typeof SuggestProfileRewriteInputSchema
>;

const SuggestProfileRewriteOutputSchema = z.object({
  suggestedHeadline: z
    .string()
    .describe('The AI-suggested rewritten headline.'),
  suggestedSummary: z.string().describe('The AI-suggested rewritten summary.'),
});

export type SuggestProfileRewriteOutput = z.infer<
  typeof SuggestProfileRewriteOutputSchema
>;

export async function suggestProfileRewrite(
  input: SuggestProfileRewriteInput
): Promise<SuggestProfileRewriteOutput> {
  return suggestProfileRewriteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProfileRewritePrompt',
  input: {schema: SuggestProfileRewriteInputSchema},
  output: {schema: SuggestProfileRewriteOutputSchema},
  prompt: `You are an AI-powered tool that specializes in rewriting professional profiles.

  Given a current headline and summary, and a rewrite objective, suggest a new headline and summary that are tailored to the objective.

  Current Headline: {{{currentHeadline}}}
  Current Summary: {{{currentSummary}}}
  Rewrite Objective: {{{rewriteObjective}}}

  Consider the rewrite objective and suggest a new headline and summary that are more aligned with the objective. Focus on making the profile more appealing to the target audience.

  {{#json}}
  { 
    "suggestedHeadline": "Rewritten headline tailored to the objective",
    "suggestedSummary": "Rewritten summary tailored to the objective"
  }
  {{/json}}
  `,
});

const suggestProfileRewriteFlow = ai.defineFlow(
  {
    name: 'suggestProfileRewriteFlow',
    inputSchema: SuggestProfileRewriteInputSchema,
    outputSchema: SuggestProfileRewriteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
