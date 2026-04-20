import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, computed, inject } from '@angular/core';
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

  // 4. Este é o evento que "avisa" o AppComponent para abrir o Sidenav
  @Output() menuToggleClick = new EventEmitter<void>();

  toggleTheme(): void {
    this.theme.toggle();
  }
}
