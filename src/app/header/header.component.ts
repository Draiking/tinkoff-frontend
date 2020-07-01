import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeService } from '../services/theme.service';
import {PortfolioService} from "../services/portfolio.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;
  themeSelect: string;
  balance: Array<{ currency: string, balance: number }>;

  constructor(public themeService: ThemeService,
              private portfolioService: PortfolioService
  ) {
  }

  async ngOnInit(): Promise<any> {
    this.balance = await this.portfolioService.getBalance();
  }

  changeThemeColor(theme) {
    this.themeService.applyTheme(theme);
  }
}
