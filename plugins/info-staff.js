let handler = async (m, { conn, command, usedPrefix }) => {
    let staff = `
⋆｡˚✦『 𝐒𝐓𝐀𝐅𝐅 ZΞYNΩ BΩT 』✦˚｡⋆

╭───────────────╮
│ 🤖 Bot: ${global.nomebot}
│ 🆚 Versione: ${global.versione}
╰───────────────╯

╭─── 👑 *_CREATORE_* ───╮
│ ✦ Nome: Endy
│ ✦ Ruolo: Creatore / Dev
│ ✦ Contatto: @393501989497
╰────────────────────╯

╭─── 🛡️ *_STAFF_* ───╮
│ ✦ Zak
│   ├ Ruolo: *Staffer*
│   └ Contatto: @393894321332
│
│ ✦ Medalis
│   ├ Ruolo: *Staffer*
│   └ Contatto: @212693877842
╰────────────────────╯

╭─── 📌 INFO UTILI ───╮
│ ✦ GitHub: github.com/Endyakazeyno 
│ ✦ Supporto: @573217871395
╰────────────────────╯

⋆｡˚✦ ZΞYNΩ BΩT ✦˚｡⋆`;

    await conn.reply(
        m.chat, 
        staff.trim(), 
        m, 
        { 
            contextInfo: {
                mentionedJid: ['393501989497@s.whatsapp.net', '212693877842@s.whatsapp.net', '393894321332@s.whatsapp.net']
            }
        }
    );

    await conn.sendMessage(m.chat, {
        contacts: {
            contacts: [
                {
                    vcard: `BEGIN:VCARD
VERSION:3.0
FN:Endy
ORG:ZΞYNΩ BΩT - Creatore
TEL;type=CELL;type=VOICE;waid=393501989497:+393501989497
END:VCARD`
                },
                {
                    vcard: `BEGIN:VCARD
VERSION:3.0
FN:Zak
ORG:ZΞYNΩ BΩT - Staffer
TEL;type=CELL;type=VOICE;waid=39 3894321332:+393894321332
END:VCARD`
                },
                {
                    vcard: `BEGIN:VCARD
VERSION:3.0
FN:Bonzino
ORG:ZΞYNΩ BΩT - Staffer
TEL;type=CELL;type=VOICE;waid=212 693877842:+212693877842
END:VCARD`
                }
            ]
        }
    }, { quoted: m });

    m.react('👑');
};

handler.help = ['staff'];
handler.tags = ['main'];
handler.command = ['staff', 'moderatori', 'collaboratori'];

export default handler;