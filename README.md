# GitMon

GitMon is a CLI tool designed to monitor a Git repository for new commits, automatically pull the latest changes, and reload the application. It's like "forever", "pm2", and "nodemon" in watching mode, but with the added capability of watching remotely.

## Features

- Monitor a Git repository for new commits
- Automatically pull the latest changes
- Reload your application upon new commits
- Compatible with any type of project, not just Node.js

## Installation

You can install GitMon globally using npm:

```bash
npm i -g gitmon
```

Or you can use it without installation via npx:

```bash
npx gitmon node myproject.js
```

## Usage
To start monitoring your project:

```bash
gitmon node myproject.js
```

## Examples
### Node.js Project:

```bash
gitmon node myproject.js
```

### Python Project:

```bash
gitmon python myscript.py
```

### Ruby Project:

```bash
gitmon ruby myscript.rb
```

## Contributing
We welcome contributions! If you have an idea for a new feature or have found a bug, please feel free to submit a pull request. Contributions are always welcome.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to reach out if you have any questions or need further assistance.







