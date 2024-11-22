# Bolt to GitHub - Chrome Extension

<div align="center">
  <a href="https://aidrivencoder.com">
    <img src="assets/icons/icon128.png" alt="AI-Driven Coder" width="128">
  </a>
  <h3>A project by <a href="https://aidrivencoder.com">AI-Driven Coder</a></h3>
  <p>
    <a href="https://chrome.google.com/webstore/detail/pikdepbilbnnpgdkdaaoeekgflljmame">
      <img src="https://img.shields.io/chrome-web-store/v/pikdepbilbnnpgdkdaaoeekgflljmame" alt="Chrome Web Store">
    </a>
    <a href="https://github.com/mamertofabian/bolt-to-github/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/mamertofabian/bolt-to-github" alt="License">
    </a>
    <a href="https://youtube.com/@aidrivencoder">
      <img src="https://img.shields.io/badge/YouTube-Subscribe-red" alt="YouTube">
    </a>
  </p>
</div>

A Chrome extension that automatically captures ZIP file downloads from bolt.new, extracts them, and pushes the contents to a specified GitHub repository. Built with Svelte, TypeScript, and TailwindCSS.

## Features

- 🚀 Automatic ZIP file interception from bolt.new
- 📦 In-browser ZIP file extraction
- 🔄 Direct GitHub repository integration
- 🔒 Secure credential storage
- ⚡ Real-time processing status updates
- 🎨 Clean, responsive UI with shadcn-svelte components
- 📱 Modern, accessible interface
- 🔄 Upload progress tracking
- 🎯 Custom upload status alerts

## Supported Browsers

- Chrome
- Brave

## Installation

### 👉 For Users
Get started in just 3 simple steps:

1. **Install from Chrome Web Store**
   - Visit our [Chrome Web Store page](https://chrome.google.com/webstore/detail/[your-extension-id])
   - Click "Add to Chrome"
   - Click "Add extension" when prompted

2. **Configure the Extension**
   - Make sure you are on bolt.new
   - Click the extension icon in your Chrome toolbar
   - Enter your GitHub token (needs repo permissions)
   - Repository Owner
   - Repository Name
   - Branch Name (defaults to 'main')
   - Save your settings and you're ready to go!

3. **Load your Bolt.new Project**
   - Click on the GitHub button in the Bolt.new project page at the top right
   - Confirm the popup that appears
   - Done!

### 🚨 New to GitHub?

Follow these steps to get started:

1. [Create a GitHub account](https://github.com/join)
2. [Generate a personal access token](https://github.com/settings/tokens/new?scopes=repo&description=Bolt%20to%20GitHub) (needs repo permissions)
3. [Create a new repository](https://github.com/new)

Need help? Watch our [Quick Start Video Tutorial](https://youtube.com/@aidrivencoder)

### 🛠️ For Developers (Contributing)
If you want to modify the extension or contribute to its development:

1. Set up your development environment:
   ```bash
   # Make sure you have Node.js v16 or later installed
   node --version
   ```

2. Clone and install:
   ```bash
   git clone https://github.com/mamertofabian/bolt-zip-to-github.git
   cd bolt-zip-to-github
   npm install
   ```

3. Build for development:
   ```bash
   npm run watch   # For development with hot reload
   # OR
   npm run build  # For production build
   ```

4. Load in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (top right)
   - Click "Load unpacked"
   - Select the `dist` directory from your project folder

See our [Contributing Guide](#contributing) for more details.

## Project Structure

```
.
├── assets/                # Extension icons and assets
│   └── icons/            # Extension icons in various sizes
├── src/
│   ├── background.ts     # Extension background service
│   ├── content/          # Content scripts
│   │   ├── upload-status.ts
│   │   └── UploadStatus.svelte
│   ├── lib/             # Core library and utilities
│   │   ├── common.ts    # Common utilities
│   │   ├── constants.ts # Application constants
│   │   ├── github.ts    # GitHub API integration
│   │   ├── utils.ts     # Utility functions
│   │   ├── zip.ts       # ZIP file processing
│   │   └── components/  # Reusable UI components
│   │       ├── ui/      # shadcn-svelte UI components
│   │       ├── Footer.svelte
│   │       ├── GitHubSettings.svelte
│   │       ├── Header.svelte
│   │       ├── NotBoltSite.svelte
│   │       ├── SocialLinks.svelte
│   │       ├── StatusAlert.svelte
│   │       └── UploadProgress.svelte
│   ├── popup/           # Extension popup UI
│   │   ├── App.svelte   # Main popup component
│   │   ├── index.html   # Popup HTML template
│   │   └── main.ts      # Popup entry point
│   ├── services/        # Service modules
│   │   ├── buttonInjector.ts
│   │   └── zipHandler.ts
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── manifest.json         # Chrome extension manifest
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

## Tech Stack

- [Svelte](https://svelte.dev/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [shadcn-svelte](https://www.shadcn-svelte.com/) - UI components
- [fflate](https://github.com/101arrowz/fflate) - Zip file processing

## Security

- GitHub tokens are stored securely using Chrome's storage API
- All communication with GitHub uses HTTPS
- ZIP file processing happens entirely in the browser

## Support & Resources

### Documentation & Tutorials
- 📺 [Watch our video tutorials](https://youtube.com/@aidrivencoder)
- 📖 [Read the documentation](https://github.com/mamertofabian/bolt-to-github)
- 💡 [Get development tips](https://aidrivencoder.com)

### Professional Support
- 📊 [Book a consultation](https://calendly.com/mamerto/30min)
- 📧 [Email support](mailto:mamerto@codefrost.com)
- 💻 [Custom development inquiries](https://codefrost.com)

### Report Issues
For bugs or feature requests, please [open an issue](https://github.com/mamertofabian/bolt-to-github/issues) on the GitHub repository.

### Support the Project
If you find this extension helpful, you can support its development:

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/aidrivencoder)

Your support helps maintain and improve this extension!

## Contributing

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-new-feature
```

3. Commit your changes

```bash
git commit -am 'Add some feature'
```

4. Push to the branch

```bash
git push origin feature/my-new-feature
```

5. Create a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details

## Support & Sponsorship

### Report Issues
For bugs or feature requests, please open an issue on the GitHub repository.

### Support the Project
If you find this extension helpful, you can support its development:

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/aidrivencoder)

Your support helps maintain and improve this extension!

## Permissions

This extension requires the following permissions:

- `webRequest`: To intercept downloads
- `downloads`: To manage downloads
- `storage`: To store settings
- `scripting`: To interact with bolt.new

## FAQ

**Q: Why does the extension need a GitHub token?**  
A: The token is required to authenticate with GitHub's API for pushing files to your repository.

**Q: Is my GitHub token secure?**  
A: Yes, your token is stored securely in Chrome's storage system and is only used for GitHub API calls.

**Q: Can I specify which files to push to GitHub?**  
A: Currently, the extension processes all files in the ZIP. File filtering may be added in future versions.

## Troubleshooting

### Common Issues

1. **Extension not intercepting downloads**
   - Ensure you're on bolt.new
   - Check if the file is a ZIP
   - Verify permissions are enabled

2. **GitHub push fails**
   - Verify your token has repo permissions
   - Check repository name and owner
   - Ensure branch exists

3. **ZIP processing errors**
   - Check if the ZIP file is corrupted
   - Ensure file contents are text-based

## Future Enhancements

- [ ] File filtering options
- [ ] Multiple repository support
- [ ] Custom commit messages
- [ ] File preview before push
- [ ] Custom file path mapping

## Acknowledgments

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Svelte Documentation](https://svelte.dev/docs)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [shadcn-svelte](https://www.shadcn-svelte.com/)

---

<div align="center">
  <p>
    Created by <a href="https://aidrivencoder.com">AI-Driven Coder</a> | 
    Powered by <a href="https://codefrost.com">Codefrost</a> |
    Maintained by <a href="https://github.com/mamertofabian">Mamerto Fabian</a>
  </p>
  <p>
    <a href="https://youtube.com/@aidrivencoder">YouTube</a> •
    <a href="https://aidrivencoder.com">Website</a> •
    <a href="https://github.com/aidrivencoder">GitHub</a>
  </p>
</div>
