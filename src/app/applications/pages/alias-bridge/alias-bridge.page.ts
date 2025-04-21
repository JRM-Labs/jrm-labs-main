import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Platform} from "@angular/cdk/platform";

type DetectedOS = 'mac' | 'windows' | 'linux' | 'unknown' | 'loading';

@Component({
  selector: 'app-alias-bridge',
  imports: [CommonModule],
  templateUrl: './alias-bridge.page.html',
  styleUrl: './alias-bridge.page.scss'
})
export class AliasBridgePage implements OnInit {
  // --- Inject Platform service using inject() function ---
  private platform: Platform = inject(Platform);

  detectedOS: DetectedOS = 'loading'; // Initial state

  // --- Download URLs (Keep these updated) ---
  readonly macDownloadUrl = 'YOUR_MACOS_DOWNLOAD_URL_HERE';
  readonly windowsDownloadUrl = 'YOUR_WINDOWS_DOWNLOAD_URL_HERE';
  readonly linuxDownloadUrl = 'YOUR_LINUX_APPIMAGE_URL_HERE';
  // ---

  readonly currentVersion = '0.1.0';

  ngOnInit(): void {
    this.detectOperatingSystem();
  }

  /**
   * Detects the user's OS using CDK Platform and navigator.platform.
   * Updates the detectedOS property.
   */
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
