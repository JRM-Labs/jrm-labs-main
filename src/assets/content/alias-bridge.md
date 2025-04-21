<p align="center">

  ![AliasBridge v1 Screenshot](assets/content/v1_screenshot.png)

</p>

**Stop Juggling Config Files. Master Your Terminal Aliases.**

Tired of editing hidden `.zshrc` or `.bashrc` files? Forgetting complex commands? AliasBridge provides a simple, intuitive GUI to create, view, organize, edit, and delete your command-line shortcuts across macOS, Windows (Git Bash/WSL), and Linux.

---

## Why AliasBridge?

Managing terminal aliases manually is often a pain:

*   Forgetting long, complex commands.
*   Losing track of *why* an alias was created.
*   Struggling to keep aliases consistent across multiple machines (work/personal).
*   Spending too much time digging through hidden configuration files.

**AliasBridge is the clean, simple solution.** It's a dedicated desktop app built for developers and power users who value speed, organization, and consistency in their terminal workflow.

---

## ✨ Features in v1.0 (Local Utility)

*   **Intuitive GUI Management:** Ditch the text editor! View, add, edit, and delete all your aliases through a clean, graphical interface.
*   **Never Forget Why (Add Comments!):** Attach descriptive comments to your aliases to remember their purpose, usage, or parameters.
*   **Cross-Platform (Local):** Use the same familiar interface on **macOS**, **Windows (via Git Bash or WSL)**, and **Linux**.
  *   *(Generates a standard `.sh` file sourced by your preferred shell.)*
*   **Reliable Storage:** Aliases (including comments and unique IDs) are safely stored in a local JSON file.
*   **Seamless Shell Integration:** AliasBridge automatically generates the necessary shell file. A simple one-time setup connects it to your terminal (instructions below).
*   **OS-Specific Setup Guidance:** Clear, in-app instructions help you get started quickly.

---

## 🚀 Getting Started with v1.0

1.  **Download:** Grab the latest release for your operating system from the **[Releases Page](https://github.com/christopher-harris/alias-bridge/releases)**. (<- **Important:** Replace with your actual link!)
2.  **Install:**
  *   **macOS:** Open `.dmg`, drag `AliasBridge.app` to Applications.
  *   **Windows:** Run the `Setup .exe` installer.
  *   **Linux:** Make `.AppImage` executable (`chmod +x`) and run, or install `.deb`/`.rpm`.
3.  **One-Time Shell Setup:** Add the following lines **to the end** of your shell's configuration file:

  *   **macOS (Zsh - Default):** `~/.zshrc`
  *   **macOS (Bash):** `~/.bash_profile` or `~/.bashrc`
  *   **Linux (Bash/Zsh):** `~/.bashrc` or `~/.zshrc`
  *   **Windows (Git Bash):** `~/.bashrc` (usually `C:\Users\YourUsername\.bashrc`)

    ```bash
    # Load AliasBridge Aliases
    if [ -f ~/.alias_bridge_aliases.sh ]; then
      source ~/.alias_bridge_aliases.sh
    fi
    ```

  *   **Windows (WSL - e.g., Ubuntu):** Edit `~/.bashrc` or `~/.zshrc` *inside WSL*. **Replace `YourWindowsUsername`**:

    ```bash
    # Load AliasBridge Aliases from Windows Home Directory
    # Replace 'YourWindowsUsername' with your actual Windows username
    WINDOWS_ALIAS_FILE="/mnt/c/Users/YourWindowsUsername/.alias_bridge_aliases.sh"
    if [ -f "$WINDOWS_ALIAS_FILE" ]; then
      source "$WINDOWS_ALIAS_FILE"
    fi
    ```

4.  **Restart Terminal:** Open a **new** terminal window/tab.
5.  **Run AliasBridge:** Launch the app and enjoy easier alias management!

---

## 🛣️ Roadmap (What's Next?)

AliasBridge v1 provides robust local alias management. We're already planning future enhancements, including:

*   **AliasBridge Pro with Cloud Sync & Backup:** Securely sync your aliases across all your devices! (Phase 2)
*   **Community Alias Sharing:** Discover and import useful aliases. (Phase 3)
*   **Native Windows PowerShell Support.**

---

## 💰 Pricing

*   **AliasBridge (Local):** **Free!** All v1 features described above are free to use.
*   **AliasBridge Pro (Sync):** Future cloud features will be available via a simple subscription model.

---

## ⚠️ Important Note (Code Signing)

Initial v1 releases may not be code-signed. Your operating system (macOS Gatekeeper or Windows SmartScreen) might display security warnings during download or installation. You may need to take extra steps (like right-clicking and selecting 'Open' on macOS) to run the application the first time. Code signing is planned for future updates.

---

[//]: # (## 💻 Tech Stack)

[//]: # ()
[//]: # (Built with Electron, Angular, TypeScript, Node.js, and electron-builder.)

[//]: # ()
[//]: # (---)
