// Estreia - plugin by Endy
import fs from "fs"
import path from "path"

let handler = async (m, { conn }) => {

  const audio = path.join(process.cwd(), "media", "foxa.aac")

  if (!fs.existsSync(audio)) {
    return conn.sendMessage(
      m.chat,
      { text: "❌ File audio non trovato" },
      { quoted: m }
    )
  }

  const audioBuffer = fs.readFileSync(audio)

  await conn.sendMessage(
    m.chat,
    {
      audio: audioBuffer,
      mimetype: "audio/aac",
    },
    { quoted: m }
  )
}

handler.help = ["estreia"]
handler.tags = ["fun"]
handler.command = ["estreia"]

export default handler