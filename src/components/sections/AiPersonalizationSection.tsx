'use client';

import { useState, type FormEvent } from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';
import { suggestProfileRewrite, type SuggestProfileRewriteInput, type SuggestProfileRewriteOutput } from '@/ai/flows/suggest-profile-rewrite';
import { useToast } from "@/hooks/use-toast";

export function AiPersonalizationSection() {
  const [currentHeadline, setCurrentHeadline] = useState('');
  const [currentSummary, setCurrentSummary] = useState('');
  const [rewriteObjective, setRewriteObjective] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestProfileRewriteOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuggestions(null);
    setError(null);

    const input: SuggestProfileRewriteInput = {
      currentHeadline,
      currentSummary,
      rewriteObjective,
    };

    try {
      const result = await suggestProfileRewrite(input);
      setSuggestions(result);
      toast({
        title: "Suggestions Generated!",
        description: "AI has crafted new ideas for your profile.",
        variant: "default",
      });
    } catch (err) {
      console.error('AI Personalization Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(errorMessage);
      toast({
        title: "Error Generating Suggestions",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="ai-personalization" className="bg-secondary/30">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">AI-Powered Personalization</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Refine your professional persona with AI-driven suggestions.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Wand2 className="text-accent" /> Personalize Your Profile</CardTitle>
          <CardDescription>
            Enter your current details and desired persona, and let AI suggest improvements.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currentHeadline">Current Headline</Label>
              <Input
                id="currentHeadline"
                value={currentHeadline}
                onChange={(e) => setCurrentHeadline(e.target.value)}
                placeholder="e.g., Software Engineer at XYZ Corp"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentSummary">Current Summary</Label>
              <Textarea
                id="currentSummary"
                value={currentSummary}
                onChange={(e) => setCurrentSummary(e.target.value)}
                placeholder="e.g., Experienced software engineer with a passion for..."
                rows={5}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rewriteObjective">Rewrite Objective</Label>
              <Input
                id="rewriteObjective"
                value={rewriteObjective}
                onChange={(e) => setRewriteObjective(e.target.value)}
                placeholder="e.g., Target a senior product manager role"
                required
                disabled={isLoading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Suggest Rewrite
            </Button>
          </CardFooter>
        </form>
      </Card>

      {error && (
        <Card className="mt-8 max-w-2xl mx-auto bg-destructive/10 border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle /> Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {suggestions && (
        <Card className="mt-8 max-w-2xl mx-auto shadow-lg bg-card">
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-accent">Suggested Headline:</h3>
              <p className="text-foreground/90 p-3 bg-muted rounded-md">{suggestions.suggestedHeadline}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-accent">Suggested Summary:</h3>
              <p className="text-foreground/90 p-3 bg-muted rounded-md whitespace-pre-wrap">{suggestions.suggestedSummary}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </SectionWrapper>
  );
}
