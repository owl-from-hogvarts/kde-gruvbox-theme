const fs = require("node:fs")
const path = require("node:path")

const process = require("node:process")
process.chdir("emblems-scaled")

const filenames = fs.readdirSync(process.cwd()).filter(file => file.startsWith("system"))

for (const file of filenames) {
  const filenameWithSymbolic = path.basename(file, ".svg") + "-symbolic.svg"
  fs.renameSync(file, filenameWithSymbolic)

}
