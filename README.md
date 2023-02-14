# eslint-plugin-ts-files-only

A plugin for ESLint that allows you to prevent creation of js files in specified folders.

## Dependencies

- Requires ESLint version 8.34.0 or higher

## Install

```
npm install eslint-plugin-ts-only-files@latest --save-dev
```

## Usage
### ./.eslintrc

```json
{
  "settings": {
    "tsFilesOnly": require('./.tsFilesOnlyConfig.json')
    // rest of your settings
  },
  "plugins": [
      "ts-files-only",
      // rest of your plugins
  ], 
  // rest of your eslintrc
}
```

### .tsFilesOnlyConfig.json
This config file must contain an array of tsOnlyFolders and and array of perimittedFiles
The folders in tsOnlyFolders will be recursively scanned any js files that are not in the perimittedFiles will be flagged as invalid.

Here's an example:

```json
{
  "tsOnlyFolders": [
    "backend/src/server/modules",
    "backend/src/server/models",
    "backend/src/server/controllers",
    "backend/src/server/common",
    "backend/src/server/config"
  ],
  "perimittedFiles": [
    "backend/src/server/common/utils.js",
    "backend/src/server/modules/myModule.js",
    "backend/src/server/config/exampleConfig.js",
  ]
}
  
```

## License

MIT