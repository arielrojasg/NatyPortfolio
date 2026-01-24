import fs from 'fs'
import path from 'path'

const dist = 'dist'

fs.readdirSync(dist).forEach(file => {
  if (!file.endsWith('.html')) return
  if (file === 'index.html') return

  const name = file.replace('.html', '')
  const dir = path.join(dist, name)

  fs.mkdirSync(dir, { recursive: true })
  fs.renameSync(
    path.join(dist, file),
    path.join(dir, 'index.html')
  )
})
