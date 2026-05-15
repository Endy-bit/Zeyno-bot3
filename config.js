mimport { watchFile, unwatchFile } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import chalk from 'chalk'
import fs from 'fs'
import * as cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import NodeCache from 'node-cache'

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const moduleCache = new NodeCache({ stdTTL: 300 });

global.owner = [
  ['393501989497', 'Endy', true],
  ['212693877842', 'medalis', true],
  ['393926427789', 'knor', true],
  ['393206032199', 'punisher', true],
  ['393894321332', 'zak', true],
]
global.mods = ['xxxxxxxxxx', 'xxxxxxxxxx']
global.prems = ['xxxxxxxxxx', 'xxxxxxxxxx']

global.nomebot   = 'ZΞYNΩ BΩT'
global.nomepack  = 'ZΞYNΩ BΩT'
global.wm        = 'ZΞYNΩ BΩT'
global.autore    = 'Ɛղժվ'
global.dev       = 'Ɛղժվ'
global.versione  = pkg.version
global.testobot  = `ZEYNO-CORE-V${pkg.version}`
global.errore    = '⚠️ *[SYSTEM ERROR]* Usa `.segnala` per inviare il log allo staff.'

global.repobot   = ''
global.canale    = ''

global.cheerio   = cheerio
global.fs        = fs
global.fetch     = fetch
global.axios     = axios
global.moment    = moment

global.APIKeys = {
    spotifyclientid: 'axion',
    spotifysecret:   'axion',
    browserless:     'axion',
    screenshotone:   'axion',
    tmdb:            'axion',
    gemini:          'axion',
    ocrspace:        'axion',
    assemblyai:      'axion',
    google:          'axion',
    googlex:         'axion',
    googleCX:        'axion',
    genius:          'axion',
    unsplash:        'axion',
    removebg:        'FEx4CYmYN1QRQWD1mbZp87jV',
    openrouter:      'axion',
    lastfm:          '36f859a1fc4121e7f0e931806507d5f9',
}

let filePath = fileURLToPath(import.meta.url)
let fileUrl = pathToFileURL(filePath).href

const reloadConfig = async () => {
  const cached = moduleCache.get(fileUrl);
  if (cached) return cached;
  
  unwatchFile(filePath)
  console.log(chalk.bgCyan.black(" SYSTEM ") + chalk.cyan(` File 'config.js' aggiornato con successo.`))
  
  const module = await import(`${fileUrl}?update=${Date.now()}`)
  moduleCache.set(fileUrl, module, { ttl: 300 });
  return module;
}

watchFile(filePath, reloadConfig)
