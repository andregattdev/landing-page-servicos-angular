import { CommonModule } from '@angular/common';
import { Component, computed, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly theme = inject(ThemeService);

  readonly themeIcon = computed(() => (this.theme.effectiveTheme() === 'dark' ? 'light_mode' : 'dark_mode'));
  readonly themeLabel = computed(() => (this.theme.effectiveTheme() === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'));

  readonly menuToggleClick = output();

  toggleTheme(): void {
    this.theme.toggle();
  }
}
