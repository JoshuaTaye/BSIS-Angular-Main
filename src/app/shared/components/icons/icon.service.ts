import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { rawSvgIcons } from './icon-data';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    for (const [iconName, svgString] of Object.entries(rawSvgIcons)) {
      this.matIconRegistry.addSvgIconLiteral(
        iconName,
        this.domSanitizer.bypassSecurityTrustHtml(svgString)
      );
    }
  }
}
