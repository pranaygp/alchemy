const shell = require('shelljs')

const { exec, which } = shell

export default (files, cb, name) => {
  if (!which('convert')) {
    throw new Error('Sorry, this script requires ImageMagick\'s convert (https://www.imagemagick.org)')
  }

  const command = `convert ${files.join(' ')} ${name || 'file.pdf'}`
  console.log(command)
  exec(command, (code) => {
    console.log(code)

    if (code !== 0) throw new Error('Error: convert failed')

    cb()
  })
}