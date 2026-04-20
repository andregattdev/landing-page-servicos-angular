import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';

export type ThemePreference = 'light' | 'dark' | 'system';
export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme-preference';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private readonly preference = signal<ThemePreference>('system');
  readonly currentPreference = this.preference.asReadonly();

  private readonly systemTheme = signal<Theme>('light');

  readonly effectiveTheme = computed<Theme>(() => {
    const pref = this.preference();
    if (pref === 'system') return this.systemTheme();
    return pref;
  });

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = window.localStorage.getItem(this.storageKey) as ThemePreference | null;
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        this.preference.set(stored);
      }

      const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
      const updateFromSystem = () => this.systemTheme.set(mq?.matches ? 'dark' : 'light');
      updateFromSystem();
      mq?.addEventListener?.('change', updateFromSystem);
    }

    effect(() => {
      this.applyThemeClass(this.effectiveTheme());
      this.persistPreference();
    });
  }

  toggle(): void {
    const next: Theme = this.effectiveTheme() === 'dark' ? 'light' : 'dark';
    this.preference.set(next);
  }

  setPreference(pref: ThemePreference): void {
    this.preference.set(pref);
  }

  private applyThemeClass(theme: Theme): void {
    const root = this.document.documentElement;
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }

  private persistPreference(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.localStorage.setItem(this.storageKey, this.preference());
  }
}

