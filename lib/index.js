module.exports = {
    rules: {
      'exclude-js': {
        create: function (context) {
          return {
            'Program:exit': function (node) {
              const fileName = context.getFilename()
              const configPath = path.resolve(__dirname, '.ts-files-only.js')
              console.log('SIDDEBUG1')
              console.log(configPath)
              const { tsOnlyFolders, perimittedFiles } = require(configPath)
  
              if (fileName.endsWith('.js') && !perimittedFiles.some((perimittedFile) => fileName.includes(perimittedFile))) {
                for (const folder of tsOnlyFolders) {
                  if (fileName.includes(folder)) {
                    console.log('SIDDEBUG2')
                    console.log(fileName)
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
  