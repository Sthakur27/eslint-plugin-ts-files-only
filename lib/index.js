var path = require('path')
module.exports = {
    rules: {
      'exclude-js': {
        create: function (context) {
          return {
            'Program:exit': function (node) {
              const fileName = context.getFilename()
              const configFile = '.tsFilesOnlyConfig.json'
              const configPath = path.resolve('.', configFile)
              const { tsOnlyFolders, perimittedFiles } = require(configPath)
  
              if (fileName.endsWith('.js') && !perimittedFiles.some((perimittedFile) => fileName.includes(perimittedFile))) {
                for (const folder of tsOnlyFolders) {
                  if (fileName.includes(folder)) {
                    context.report({
                      node,
                      message: `JS files are not allowed in the '${folder}' folder. Only TypeScript files are allowed.`,
                    })
                  }
                }
              }
            },
          }
        }
      }
    }
  }
  