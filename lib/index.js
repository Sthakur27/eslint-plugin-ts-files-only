module.exports = {
  rules: {
    'exclude-js': {
      create: function (context) {
        return {
          'Program:exit': function (node) {
            const fileName = context.getFilename()
            if (!context?.settings?.tsFilesOnly?.tsOnlyFolders || !context?.settings?.tsFilesOnly?.perimittedFiles) {
              throw Error('Missing configurations for eslint-plugin-ts-files-only')
            }
            const tsOnlyFolders = context.settings.tsFilesOnly.tsOnlyFolders
            const perimittedFiles = context.settings.tsFilesOnly.perimittedFiles

            if (fileName.endsWith('.js') && !perimittedFiles.some((perimittedFile) => fileName.includes(perimittedFile))) {
              for (const folder of tsOnlyFolders) {
                if (fileName.includes(folder)) {
                  context.report({
                    node,
                    message: `JS files are not allowed in the '${folder}' folder. Only TypeScript files are allowed.`
                  })
                }
              }
            }
          }
        }
      }
    }
  }
}
