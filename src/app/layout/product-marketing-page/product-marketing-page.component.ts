import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MarkdownModule, MarkdownService} from "ngx-markdown";
import {Platform} from "@angular/cdk/platform";
import {ActivatedRoute} from "@angular/router";

interface DownloadLinks {
  mac?: string;
  windows?: string;
  linux?: string;
}

@Component({
  selector: 'app-product-marketing-page',
  imports: [
    CommonModule,
    MarkdownModule
  ],
  templateUrl: './product-marketing-page.component.html',
  styleUrl: './product-marketing-page.component.scss',
  providers: [
    MarkdownService
  ]
})
export class ProductMarketingPageComponent implements OnInit {
  private platform: Platform = inject(Platform);
  private route: ActivatedRoute = inject(ActivatedRoute);

  appName: string = 'My Application'; // Provide defaults or leave empty
  appSubtitle: string = '';
  markdownSrc: string = '';
  downloadLinks: DownloadLinks = {};
  currentVersion: string = 'N/A';
  showCodeSigningNote: boolean = true;

  detectedOS: 'mac' | 'windows' | 'linux' | 'unknown' | 'loading' = 'loading';

  ngOnInit(): void {
    // Access data from the route snapshot
    const routeData = this.route.snapshot.data;

    // Assign route data to component properties
    this.appName = routeData['appName'] || this.appName; // Use default if not provided
    this.appSubtitle = routeData['appSubtitle'] || this.appSubtitle;
    this.markdownSrc = routeData['markdownSrc'] || this.markdownSrc;
    this.downloadLinks = routeData['downloadLinks'] || this.downloadLinks;
    this.currentVersion = routeData['currentVersion'] || this.currentVersion;
    // Handle boolean - check if it exists in data, otherwise use default
    this.showCodeSigningNote = routeData['showCodeSigningNote'] !== undefined
      ? routeData['showCodeSigningNote']
      : this.showCodeSigningNote;


    // Run OS detection after getting data (if needed, though likely independent)
    this.detectOperatingSystem();

    // Log to verify (optional)
    console.log('Route data received:', routeData);
    console.log('Markdown source path:', this.markdownSrc);
  }

  // Include your OS detection logic here (or move to a shared service)
  private detectOperatingSystem(): void {
    // Check if running in a browser environment using CDK Platform
    if (this.platform.isBrowser) {
      console.log('CDK Platform: Detected browser environment.');

      // Use modern UserAgentData API first if available (Still Recommended)
      const uaData = (navigator as any).userAgentData; // Use type assertion or definition file
      if (uaData && uaData.platform) {
        const platformData = uaData.platform.toLowerCase();
        console.log('Using UserAgentData platform:', platformData);
        if (platformData.includes('mac') || platformData.includes('macos')) {
          this.detectedOS = 'mac';
          return;
        }
        if (platformData.includes('win') || platformData.includes('windows')) {
          this.detectedOS = 'windows';
          return;
        }
        if (platformData.includes('linux')) {
          this.detectedOS = 'linux';
          return;
        }
        // Fallthrough if platformData exists but isn't matched
      }

      // Fallback to legacy navigator.platform (Still necessary)
      const navPlatform = navigator.platform?.toLowerCase();
      console.log('Falling back to navigator.platform:', navPlatform);
      if (navPlatform) {
        if (navPlatform.includes('mac') || navPlatform.includes('macintel')) {
          this.detectedOS = 'mac';
          return;
        }
        if (navPlatform.includes('win')) {
          this.detectedOS = 'windows';
          return;
        }
        if (navPlatform.includes('linux')) {
          // Be careful not to misinterpret 'android' if platform includes 'linux'
          if (!navPlatform.includes('android')) { // Basic check
            this.detectedOS = 'linux';
            return;
          }
        }
      }

      // If browser detected, but OS couldn't be determined from platform strings
      console.log('Browser detected, but specific desktop OS unknown.');
      this.detectedOS = 'unknown';

    } else {
      // If CDK Platform determines it's not a standard browser (e.g., SSR, tests)
      console.log('CDK Platform: Not detected as a browser environment.');
      this.detectedOS = 'unknown';
    }
  }
}
