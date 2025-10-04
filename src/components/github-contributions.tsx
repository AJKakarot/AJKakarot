'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, GitBranch, TrendingUp } from 'lucide-react';

interface ContributionDay {
  contributionCount: number;
  date: string;
  weekday: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface GitHubContributions {
  totalContributions: number;
  weeks: Week[];
}

export default function GitHubContributions() {
  const [contributions, setContributions] = useState<GitHubContributions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('/api/github/contributions');
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        const data = await response.json();
        setContributions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch contributions');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const getContributionColor = (count: number): string => {
    if (count === 0) return 'bg-muted dark:bg-muted/50';
    if (count <= 3) return 'bg-green-200 dark:bg-green-900/60';
    if (count <= 6) return 'bg-green-300 dark:bg-green-800/70';
    if (count <= 9) return 'bg-green-400 dark:bg-green-700/80';
    return 'bg-green-500 dark:bg-green-600/90';
  };

  const getContributionTooltip = (day: ContributionDay): string => {
    const date = new Date(day.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return `${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${date}`;
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              GitHub Activity
            </h3>
            <Badge variant="secondary" className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Loading...
            </Badge>
          </div>
          <div className="bg-card border rounded-lg p-4 overflow-hidden">
            <div className="flex items-center justify-center py-8 w-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              GitHub Activity
            </h3>
            <Badge variant="destructive" className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Error
            </Badge>
          </div>
          <div className="bg-card border rounded-lg p-4 overflow-hidden">
            <div className="text-center py-8 text-muted-foreground w-full">
              <p>Unable to load contributions</p>
              <p className="text-sm mt-2">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!contributions) {
    return null;
  }


  // Create a simplified version of the GitHub contribution graph
  return (
    <div className="w-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <GitBranch className="h-5 w-5" />
            GitHub Activity
          </h3>
          <Badge variant="secondary" className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            {contributions.totalContributions.toLocaleString()} contributions
          </Badge>
        </div>
        
        <div className="bg-card border rounded-lg p-3 sm:p-4 overflow-hidden">
          {/* Contribution visualization */}
          <div className="relative">
            {/* Main grid container without day labels */}
            <div className="pt-6">
              <div className="flex flex-col space-y-2">
                {/* Contribution grid */}
                <div className="flex space-x-[3px]">
                  {contributions.weeks.map((week, weekIndex) => {
                    // Show fewer weeks on mobile
                    if (weekIndex >= 52) return null;
                    
                    return (
                      <div key={weekIndex} className={`flex flex-col space-y-[3px] ${weekIndex > 30 ? 'hidden sm:flex' : ''}`}>
                        {week.contributionDays.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`
                              w-[10px] h-[10px] rounded-sm transition-colors
                              ${getContributionColor(day.contributionCount)}
                              hover:ring-1 hover:ring-primary/30
                              cursor-pointer
                            `}
                            title={getContributionTooltip(day)}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
                
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-10 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 3, 6, 9].map((count) => (
                <div
                  key={count}
                  className={`w-[10px] h-[10px] rounded-sm ${getContributionColor(count)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}