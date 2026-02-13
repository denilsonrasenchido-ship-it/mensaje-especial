/* ================================================================
   app.js — Sorpresa Especial 💝  v4.1
   Cambios:
   ✅ Música inicia en primer clic (creator Y receiver)
   ✅ Música caótica durante el trolleo
   ✅ 3 modos de música: ambient / chaos / reveal
   ✅ Texto sin recortes (overflow fixes)
   ✅ Todo lo demás de v4.0 conservado
   ================================================================ */

// ═══════════════════════════════════════════════════════════════
// CONFIG — TEXTOS (igual que v4.0)
// ═══════════════════════════════════════════════════════════════

const config = {

// ──────────────────────────────────────────────────────────────
es: {
  categories: { amistad:'Amistad 🤝', amor:'Amor ❤️', familiar:'Familiar 🏠' },
  sub: {
    amistad:  ['Amigo/a','Mejor Amigo/a','Cómplice','Hermano/a del alma'],
    amor:     ['Crush','Pareja','Novio/a','Amor Platónico','Esposa/o'],
    familiar: ['Mamá','Papá','Hermano/a','Tío/a','Primo/a','Abuela/o']
  },
  trolleos: {
    amistad: {
      'Amigo/a': '> ACCESO: Escaneando historial compartido...\n> Encontrado: 47 fotos vergonzosas de 2023... 📸\n> Subiendo a Instagram Stories automáticamente...\n> Enviando capturas a TODOS tus contactos...\n> ¡Proceso completado en todos los dispositivos!\n> Estado: PUBLICADO — 100% COMPLETO ✓',
      'Mejor Amigo/a': '> MODO TRAICIÓN: Nivel MÁXIMO activado...\n> Accediendo a secretos compartidos... 🤫\n> Recopilando: "lo que me dijiste que no le dijera a nadie"\n> Exportando al grupo de WhatsApp familiar...\n> Adjuntando: audios + fotos sin filtro + confesiones...\n> Estado: ENVIADO A 23 PERSONAS ✓',
      'Cómplice': '> INVESTIGACIÓN ACTIVA: Expediente N°4829...\n> Recuperando: todas las aventuras compartidas... 🕵️\n> Listando: excusas dadas a los padres = 47\n> Compilando: evidencia de cada travesura registrada...\n> Enviando reporte a [Autoridad competente]...\n> Estado: EXPEDIENTE COMPLETO ⚠️',
      'Hermano/a del alma': '> ANÁLISIS DE VÍNCULO EMOCIONAL...\n> Crisis existenciales resueltas juntos = 847 📊\n> Calculando: horas de llamadas nocturnas = 2,400 hrs\n> Contando: "¿sigues despierto/a?" enviados = 1,203\n> Presentando factura emocional acumulada... 💸\n> Estado: DEUDA EMOCIONAL — IMPAGABLE ❤️'
    },
    amor: {
      'Crush': '> ALERTA MÁXIMA: Confesión en progreso...\n> Redactando: "Me gustas muchísimo desde hace tiempo" 💌\n> Destinatarios: [nombre] + toda su clase + sus padres 😱\n> Adjuntando: capturas de tus stalkeos...\n> Notificando: sus amigos, familia y ex novios/as...\n> Estado: ENVIADO — SIN POSIBILIDAD DE RETRACTO ✓',
      'Pareja': '> ALERTA: Actualizando estado civil en TODAS las redes...\n> Publicando: las 47 fotos sin filtro de los dos... 📸\n> Activando: modo "leer en voz alta" tus notas de voz...\n> Enviando historial de ubicaciones a su ex... 📍\n> Organizando: reunión urgente con ambas familias...\n> Estado: RELACIÓN EXPUESTA AL 100% ✓',
      'Novio/a': '> PROCESANDO: Propuesta de matrimonio masiva...\n> Redactando: "¿Te casas conmigo?" a todos tus ex... 💍\n> Reservando: salón de bodas + iglesia + catering...\n> Notificando: suegros, cuñados y familia extendida...\n> Fecha publicada en redes: 14 Feb — No cancelable\n> Estado: BODA CONFIRMADA PÚBLICAMENTE ✓',
      'Amor Platónico': '> MODO CONFESIÓN SILENCIOSA ACTIVADO...\n> Recopilando: 847 veces que revisaste su perfil... 👀\n> Compilando: "me gusta" en fotos de 2018 y anteriores...\n> Exportando: screenshots de sus stories privadas...\n> Enviando a: la persona + su grupo de mejores amigos/as\n> Estado: STALKEO OFICIALMENTE CONFIRMADO ✓',
      'Esposa/o': '> AUDITORÍA DOMÉSTICA EN CURSO...\n> Calculando: veces que no pusiste el plato en el fregadero 🍽️\n> Listando: "lo que iba a decir pero no dije" = 1,847\n> Detectado: 3,847 "¿en qué piensas?" sin respuesta...\n> Factura emocional: $12,500 en palabras nunca dichas 💸\n> Estado: DEUDA EMOCIONAL SIN PRECEDENTES ⚠️'
    },
    familiar: {
      'Mamá': '> SISTEMA: Detectada deuda de abrazos acumulada...\n> Auditando: llamadas no contestadas este mes = 47... 📞\n> Contabilizando: "ya comí" siendo mentira = 203 veces\n> Bloqueando: acceso a ropa limpia + comida casera...\n> Enviando reporte a: papá + abuelos + grupo familiar...\n> Estado: SIN SUBSIDIO MATERNO — BLOQUEADO ⚠️',
      'Papá': '> PROCESANDO: Factura de crianza pendiente...\n> Calculando: lecciones de vida ignoradas = $15,000 USD 🚗\n> Sumando: consejos no seguidos × años = 2,400 💡\n> Detectando: veces que dijiste "ahora voy" y tardaste horas\n> Activando: recordatorio "cuando yo tenía tu edad..."\n> Estado: FACTURA DE CRIANZA — IMPAGABLE 💸',
      'Hermano/a': '> MODO DELACIÓN FAMILIAR ACTIVADO...\n> Accediendo: secretos que me confiaste... 🤫\n> Preparando: la vez que llegaste tarde + excusas inventadas\n> Compilando: fotos de infancia más vergonzosas del álbum...\n> Enviando al grupo familiar + al grupo de tus amigos...\n> Estado: DELATADO/A EN TIEMPO REAL ✓',
      'Tío/a': '> ANALIZANDO: Árbol genealógico familiar...\n> Calculando: el/la favorito/a entre todos los sobrinos... 🏆\n> Resultado del sistema: NO ERES EL/LA FAVORITO/A 🫢\n> Preparando: discurso para la próxima reunión navideña\n> Listando: logros impresionantes de los otros sobrinos...\n> Estado: FAVORITO/A OFICIAL — IDENTIFICADO/A ✓',
      'Primo/a': '> ESCANEANDO: Álbum familiar compartido en la nube...\n> Encontrado: foto de cumpleaños con pastel en la cara 🎂\n> Recuperado: el video de la actuación escolar de 2009...\n> Subiendo a: Instagram + Facebook + grupos WhatsApp...\n> Etiquetando: a toda la familia extendida + amigos...\n> Estado: VERGÜENZA FAMILIAR — AHORA VIRAL ✓',
      'Abuela/o': '> ALERTA: Nieto/a en situación crítica de nutrición...\n> Detectado: lleva 3 días sin comer sopa de pollo... 🍲\n> Midiendo: horas sin abrazo abuelx = 72 horas exactas\n> Calculando: besos en mejilla pendientes = 15 🥰\n> Activando: protocolo de cuidado abuelx urgente...\n> Estado: NIETO/A NECESITA ATENCIÓN — LLAMADA EN CAMINO ❤️'
    }
  },
  final: {
    amistad: {
      'Amigo/a': '¡Era una broma! 😂 Solo quería recordarte que eres un amigo/a increíble. Gracias por estar ahí siempre, por el apoyo y por aguantarme en mis días difíciles. ¡Te quiero mucho! 🤝❤️',
      'Mejor Amigo/a': '¡Jamás traicionaría nuestros secretos! 😂 Tú eres esa persona que elegí y me alegra haber elegido tan bien. Eres mi mejor amigo/a y eso no tiene precio. ¡Te quiero cantidad! 💙',
      'Cómplice': '¡Era solo una broma, cómplice! 😂 Gracias por ser mi aliado/a en la vida. Por todas las aventuras compartidas, las excusas inventadas y los momentos que solo nosotros entendemos. ¡Eres irreemplazable! 🕵️❤️',
      'Hermano/a del alma': '¡Asustón/a! 😂 No hay factura que pague lo que significas para mí. Elegimos ser familia aunque la sangre no nos una, y eso lo hace más especial. Eres mi hermano/a del alma y lo sabes. ❤️✨'
    },
    amor: {
      'Crush': '¡Casi te da algo! 😜 Era solo una broma. Pero sí quería decirte que me pareces alguien muy especial. Me alegra que estés en mi vida. ¡Feliz día! 💕',
      'Pareja': '¡Te pillé! 😂 Era solo una broma, amor. Todo lo que compartimos es nuestro y solo nuestro. Gracias por ser mi persona favorita. ¡Te amo muchísimo! 💕',
      'Novio/a': '¡Respira! 😂 No hay boda sorpresa (todavía 😏). Solo quería recordarte que eres la persona más importante en mi vida. ¡Feliz San Valentín, amor! ❤️',
      'Amor Platónico': '¡Tranquilidad! 😅 Solo era una broma. Pero sí quería decirte que me pareces una persona increíble y especial con una energía única. ✨💕',
      'Esposa/o': '¡Asustona/o! 😂 Sabes que jamás haría eso. Solo quería recordarte que eres mi persona favorita, mi hogar y mi aventura más bonita. ¡Te amo! 💕🏠'
    },
    familiar: {
      'Mamá': '¡Te asustamos! 😅 Perdón, era una broma. Solo quería recordarte que no hay palabras para agradecerte todo lo que has dado por mí. Eres la persona más increíble que conozco. ¡Te quiero con todo mi corazón, mamá! ❤️',
      'Papá': '¡Te pillamos! 😂 Era una broma. Pero en serio, no hay forma de pagarte todo lo que has enseñado. Gracias por ser mi guía y mi ejemplo. ¡Te quiero muchísimo, papá! 💙',
      'Hermano/a': '¡Era solo una broma! 😂 Aunque te tenga ganas, no haría eso. Eres de lo mejor que tengo en mi vida. Gracias por ser mi cómplice y mi apoyo. ¡Te quiero mucho! 🤝❤️',
      'Tío/a': '¡Te asustaste! 😂 Era una broma. Eres sin duda el/la tío/a favorito/a. Gracias por los consejos y por siempre estar cuando te necesito. ¡Te quiero! ❤️',
      'Primo/a': '¡Era solo una broma! 😂 Las fotos están a salvo, lo juro. Gracias por ser parte de los mejores recuerdos de la infancia. ¡Te quiero, primo/a! 🎉❤️',
      'Abuela/o': '¡Descansa, todo está bien! 😊 Era una broma. Eres de las personas más importantes en mi vida. Gracias por tanto amor, sabiduría y sopa de pollo. ¡Te quiero infinito! ❤️'
    }
  },
  games: {
    amor:     { question:'¿Me perdonas la broma? 🥺', yesBtn:'Sí ❤️', noBtn:'NO', noSurrender:'💕 ¡Igual te quiero!', celebrateText:'¡Lo sabía! 🥰', celebrateSub:'¡Gracias por perdonarme! Te quiero mucho ❤️' },
    amistad:  { title:'¡Demuestra que somos amigos/as! 🤝', emoji:'🤜', target:7, progress:'Apretones: {n} / {total}', done:'¡Queda demostrado! Somos los mejores amigos/as 🤝💕' },
    familiar: { title:'¡Paga tu deuda de abrazos! 🤗', emoji:'🤗', target:5, progress:'Abrazos dados: {n} / {total}', done:'¡Deuda saldada! Ya podemos estar en paz ❤️' }
  },
  tapTitle:'Tienes una sorpresa', tapSub:'Alguien pensó en ti hoy 💕', tapBtn:'¡Abrir! 💝', tapHint:'🔊 Activa el sonido para la experiencia completa',
  greeting:'¡Para mi {sub}!', shareBtn:'💌 ¡Quiero enviarle esto a alguien!', shareSub:'Crea tu propia sorpresa personalizada →',
  donationBtn:'☕ Invitar un café al creador',
  donation:'⚠️ ERROR DE TRANSACCIÓN:\n\nEl sistema de pagos se ha bloqueado porque el programador aún no tiene edad legal para tener cuenta bancaria.\n\n¡Mejor regálale un chocolate! 🍫🍭',
  copied:'✓ COPIADO', musicOn:'🎵', musicOff:'🔇',
  statsResult:'📊 ESTADÍSTICAS\n\n🆔 Tu dispositivo: {did}\n👆 Tus visitas: {myvisits}\n👥 Visitas totales: {total}\n🔗 Links generados: {links}\n\n💡 Filtra "{did}" para descontar tus pruebas.',
  statsError:'No se pudieron cargar las estadísticas.',
  ui:{ title:'MENSAJERÍA VIP', desc:'Personaliza tu envío 💝', gen:'Generar Link 🚀', rel:'Tipo de relación', dest:'¿Para quién es?', msg:'Tu mensaje especial', msgOpt:'✨ Opcional', msgHint:'💡 Si lo dejas vacío se usará un mensaje bonito por defecto', msgHolder:'Escribe algo especial para esa persona... 💕', copy:'COPIAR', result:'✅ ¡Tu link está listo! Cópialo y envíalo:' }
},

// ──────────────────────────────────────────────────────────────
en: {
  categories: { amistad:'Friendship 🤝', amor:'Love ❤️', familiar:'Family 🏠' },
  sub: {
    amistad:  ['Friend','Best Friend','Partner in crime','Soul sibling'],
    amor:     ['Crush','Partner','Boyfriend/Girlfriend','Platonic love','Spouse'],
    familiar: ['Mom','Dad','Sibling','Uncle/Aunt','Cousin','Grandma/pa']
  },
  trolleos: {
    amistad: {
      'Friend': '> ACCESS: Scanning shared history...\n> Found: 47 embarrassing photos from 2023... 📸\n> Uploading to Instagram Stories automatically...\n> Sending screenshots to ALL your contacts...\n> Process completed on all devices!\n> Status: PUBLISHED — 100% COMPLETE ✓',
      'Best Friend': '> BETRAYAL MODE: MAXIMUM level activated...\n> Accessing shared secrets... 🤫\n> Gathering: "what you told me not to tell anyone"\n> Exporting to family WhatsApp group...\n> Attaching: voice notes + unfiltered photos + confessions...\n> Status: SENT TO 23 PEOPLE ✓',
      'Partner in crime': '> ACTIVE INVESTIGATION: File No. 4829...\n> Recovering: all shared adventures... 🕵️\n> Listing: lies told to parents = 47\n> Compiling: evidence of every recorded prank...\n> Sending report to [Competent Authority]...\n> Status: FILE COMPLETED ⚠️',
      'Soul sibling': '> EMOTIONAL BOND ANALYSIS...\n> Existential crises solved together = 847 📊\n> Calculating: hours of late-night calls = 2,400 hrs\n> Counting: "are you still awake?" messages = 1,203\n> Presenting accumulated emotional bill... 💸\n> Status: EMOTIONAL DEBT — UNPAYABLE ❤️'
    },
    amor: {
      'Crush': '> MAXIMUM ALERT: Confession in progress...\n> Drafting: "I really like you, like a lot" 💌\n> Recipients: [name] + entire school + their parents 😱\n> Attaching: screenshots of your stalk sessions...\n> Notifying: their friends, family and exes...\n> Status: SENT — NO TAKE-BACKS POSSIBLE ✓',
      'Partner': '> ALERT: Updating relationship status on ALL platforms...\n> Publishing: 47 unfiltered photos of you two... 📸\n> Activating: "read aloud" mode for your voice messages...\n> Sending location history to their ex... 📍\n> Organizing: urgent family meeting for both sides...\n> Status: RELATIONSHIP 100% EXPOSED ✓',
      'Boyfriend/Girlfriend': '> PROCESSING: Mass marriage proposal...\n> Drafting: "Will you marry me?" to all your exes... 💍\n> Booking: wedding venue + church + catering...\n> Notifying: in-laws, siblings and extended family...\n> Date published on social media: Feb 14 — Non-refundable\n> Status: WEDDING PUBLICLY CONFIRMED ✓',
      'Platonic love': '> SILENT CONFESSION MODE ACTIVATED...\n> Collecting: 847 times you checked their profile... 👀\n> Compiling: likes on photos from 2018 and earlier...\n> Exporting: screenshots of their private stories...\n> Sending to: them + their closest friends group\n> Status: STALKING OFFICIALLY CONFIRMED ✓',
      'Spouse': '> HOUSEHOLD AUDIT IN PROGRESS...\n> Counting: times you left dishes in the sink 🍽️\n> Listing: "was going to say but didn\'t" = 1,847\n> Detected: 3,847 "what are you thinking?" unanswered...\n> Emotional bill: $12,500 in words never said 💸\n> Status: UNPRECEDENTED EMOTIONAL DEBT ⚠️'
    },
    familiar: {
      'Mom': '> SYSTEM: Accumulated hug debt detected...\n> Auditing: unanswered calls this month = 47... 📞\n> Counting: "I already ate" while lying = 203 times\n> Blocking: access to clean clothes + home food...\n> Sending report to: dad + grandparents + family group...\n> Status: NO MATERNAL SUPPORT — BLOCKED ⚠️',
      'Dad': '> PROCESSING: Outstanding parenting bill...\n> Calculating: ignored life lessons = $15,000 USD 🚗\n> Adding up: unheeded advice × years = 2,400 💡\n> Detecting: times you said "I\'m coming" then took hours\n> Activating: "back in my day..." auto-reminder\n> Status: PARENTING BILL — UNPAYABLE 💸',
      'Sibling': '> FAMILY SNITCH MODE ACTIVATED...\n> Accessing: secrets you confided in me... 🤫\n> Preparing: the time you came home late + your excuses\n> Compiling: most embarrassing childhood album photos...\n> Sending to: family group + your friends group...\n> Status: RATTED OUT IN REAL TIME ✓',
      'Uncle/Aunt': '> ANALYZING: Family tree...\n> Calculating: favorite among all nieces/nephews... 🏆\n> System result: YOU ARE NOT THE FAVORITE 🫢\n> Preparing: announcement for next family gathering\n> Listing: other nieces/nephews impressive achievements...\n> Status: OFFICIAL FAVORITE — IDENTIFIED ✓',
      'Cousin': '> SCANNING: Shared family album on the cloud...\n> Found: birthday photo with cake on your face 🎂\n> Recovered: the school play video from 2009...\n> Uploading to: Instagram + Facebook + WhatsApp groups...\n> Tagging: all extended family + friends...\n> Status: FAMILY EMBARRASSMENT — NOW VIRAL ✓',
      'Grandma/pa': '> ALERT: Grandchild in critical nutrition situation...\n> Detected: 3 days without homemade food... 🍲\n> Measuring: hours without grandparent hug = 72 hours\n> Calculating: pending cheek kisses = 15 🥰\n> Activating: grandparent care protocol...\n> Status: GRANDCHILD NEEDS ATTENTION — CALL INCOMING ❤️'
    }
  },
  final: {
    amistad: {
      'Friend': 'Just a prank! 😂 I just wanted to remind you that you\'re an incredible friend. Thanks for always being there. Love you tons! 🤝❤️',
      'Best Friend': 'I would NEVER betray our secrets! 😂 You\'re the person I chose and I\'m so glad I chose so well. You are my best friend and that is priceless. Love you! 💙',
      'Partner in crime': 'Just a prank, partner! 😂 Thanks for being my partner in crime. For all the shared adventures and moments only we understand. You are irreplaceable! 🕵️❤️',
      'Soul sibling': 'Gotcha! 😂 No invoice can pay for what you mean to me. We chose to be family even though blood doesn\'t bind us. You are my soul sibling. ❤️✨'
    },
    amor: {
      'Crush': 'Almost got you! 😜 Just a prank. But I did want to say you seem like someone really special. I\'m glad you\'re in my life. Happy day! 💕',
      'Partner': 'Got you! 😂 Just a prank, love. Everything we share is ours alone. Thank you for being my favorite person. Love you so much! 💕',
      'Boyfriend/Girlfriend': 'Breathe! 😂 No surprise wedding (yet 😏). You\'re the most important person in my life. Happy Valentine\'s Day! ❤️',
      'Platonic love': 'Take it easy! 😅 Just a prank. You\'re an incredible and special person with unique energy. The world is better with you in it. ✨💕',
      'Spouse': 'Scaredy-cat! 😂 You know I\'d never do that. You\'re my favorite person, my home and my favorite adventure. Love you! 💕🏠'
    },
    familiar: {
      'Mom': 'We got you! 😅 Just a prank. There are no words to thank you for everything. You\'re the most incredible person I know. Love you with all my heart, Mom! ❤️',
      'Dad': 'Got you! 😂 Just a prank. There\'s no way to repay everything you\'ve taught me. Thanks for being my guide and example. Love you, Dad! 💙',
      'Sibling': 'Just a prank! 😂 Even if I tease you, I\'d never actually do that. You\'re one of the best things in my life. Love you! 🤝❤️',
      'Uncle/Aunt': 'Got you! 😂 Just a prank. You\'re definitely the favorite (don\'t tell the others!). Love you! ❤️',
      'Cousin': 'Just a prank! 😂 The photos are safe. Thanks for the best childhood memories. Love you, cuz! 🎉❤️',
      'Grandma/pa': 'Everything\'s fine! 😊 Just a prank. You\'re one of the most important people in my life. Love you infinitely! ❤️'
    }
  },
  games: {
    amor:     { question:'Do you forgive me for the prank? 🥺', yesBtn:'Yes ❤️', noBtn:'NO', noSurrender:'💕 I love you too!', celebrateText:'I knew it! 🥰', celebrateSub:'Thanks for forgiving me! Love you! ❤️' },
    amistad:  { title:'Prove we\'re real friends! 🤝', emoji:'🤜', target:7, progress:'Handshakes: {n} / {total}', done:'Proven! We\'re the best of friends 🤝💕' },
    familiar: { title:'Pay off your hug debt! 🤗', emoji:'🤗', target:5, progress:'Hugs given: {n} / {total}', done:'Debt cleared! We can be at peace ❤️' }
  },
  tapTitle:'You have a surprise', tapSub:'Someone was thinking of you today 💕', tapBtn:'Open it! 💝', tapHint:'🔊 Turn on sound for the full experience',
  greeting:'For my {sub}!', shareBtn:'💌 I want to send this to someone!', shareSub:'Create your own personalized surprise →',
  donationBtn:'☕ Buy the creator a coffee',
  donation:'⚠️ TRANSACTION ERROR:\n\nPayment system is locked because the developer is not legally old enough to have a bank account.\n\nSend chocolate instead! 🍫🍭',
  copied:'✓ COPIED', musicOn:'🎵', musicOff:'🔇',
  statsResult:'📊 STATS\n\n🆔 Your device: {did}\n👆 Your visits: {myvisits}\n👥 Total visits: {total}\n🔗 Links generated: {links}\n\n💡 Use "{did}" to filter your test visits.',
  statsError:'Could not load statistics.',
  ui:{ title:'VIP MESSAGING', desc:'Customize your gift 💝', gen:'Generate Link 🚀', rel:'Relationship type', dest:'Who is it for?', msg:'Your special message', msgOpt:'✨ Optional', msgHint:'💡 If left blank a beautiful default message will be used', msgHolder:'Write something special for this person... 💕', copy:'COPY', result:'✅ Your link is ready! Copy and send it:' }
}

}; // end config

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let currentLang   = 'es';
let audioCtx      = null;
let audioUnlocked = false;

// ── Música: 3 modos ──────────────────────────────────────────
let musicMode     = 'none';   // 'none' | 'ambient' | 'chaos' | 'reveal'
let musicNodes    = [];
let chordTimer    = null;
let chordIdx      = 0;
let chaosTimer    = null;
let firstClickDone = false;

// ── Juegos ───────────────────────────────────────────────────
let statsClicks   = 0, statsTimer = null;
let noEscapes     = 0, noLastTime = 0;
let tapCount      = 0, hugCount   = 0;
const MAX_ESCAPES = 6;
const TAP_TARGET  = 7;
const HUG_TARGET  = 5;

// ═══════════════════════════════════════════════════════════════
// DEVICE ID
// ═══════════════════════════════════════════════════════════════
function getDeviceId() {
    let id = localStorage.getItem('sp_did');
    if (!id) {
        id = 'D' + Math.random().toString(36).slice(2,7).toUpperCase()
             + Date.now().toString(36).slice(-3).toUpperCase();
        localStorage.setItem('sp_did', id);
    }
    return id;
}
function getMyVisitCount() { return parseInt(localStorage.getItem('sp_visits') || '0', 10); }
function incrementMyVisitCount() {
    const n = getMyVisitCount() + 1;
    localStorage.setItem('sp_visits', String(n));
    return n;
}

// ═══════════════════════════════════════════════════════════════
// COUNT API
// ═══════════════════════════════════════════════════════════════
const NS = 'sorpresa-naofomi';
async function hitCounter(key) {
    try { return (await (await fetch(`https://api.countapi.xyz/hit/${NS}/${key}`)).json()).value ?? null; }
    catch (_) { return null; }
}
async function getCounter(key) {
    try { return (await (await fetch(`https://api.countapi.xyz/get/${NS}/${key}`)).json()).value ?? 0; }
    catch (_) { return '—'; }
}

// ═══════════════════════════════════════════════════════════════
// WEB AUDIO ENGINE
// ═══════════════════════════════════════════════════════════════

function getAudioCtx() {
    if (!audioCtx) {
        try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) {}
    }
    return audioCtx;
}

function unlockAudio() {
    if (audioUnlocked) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    audioUnlocked = true;
}

// ── FX individuales ──────────────────────────────────────────

function playKeyClick() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.03), ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random()*2-1)*Math.pow(1-i/d.length,2)*0.28;
        const src = ctx.createBufferSource(); const gain = ctx.createGain();
        src.buffer = buf; gain.gain.value = 0.13;
        src.connect(gain); gain.connect(ctx.destination); src.start();
    } catch (_) {}
}

function playAlarm() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        [0,0.18,0.36,0.54,0.72].forEach(off => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(1050, t+off);
            osc.frequency.exponentialRampToValueAtTime(200, t+off+0.16);
            gain.gain.setValueAtTime(0.22, t+off);
            gain.gain.exponentialRampToValueAtTime(0.001, t+off+0.16);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t+off); osc.stop(t+off+0.16);
        });
    } catch (_) {}
}

function playGlitch() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        for (let i = 0; i < 8; i++) {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.value = 80 + Math.random()*3000;
            gain.gain.setValueAtTime(0.06, t+i*0.035);
            gain.gain.exponentialRampToValueAtTime(0.001, t+i*0.035+0.03);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t+i*0.035); osc.stop(t+i*0.035+0.035);
        }
    } catch (_) {}
}

function playFanfare() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        [523.25,659.25,783.99,1046.5,1318.5].forEach((freq,i) => {
            const osc = ctx.createOscillator(); const osc2 = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.value = freq;
            osc2.type = 'triangle'; osc2.frequency.value = freq*2;
            gain.gain.setValueAtTime(0, t+i*0.10);
            gain.gain.linearRampToValueAtTime(0.20, t+i*0.10+0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t+i*0.10+0.65);
            osc.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
            osc.start(t+i*0.10); osc.stop(t+i*0.10+0.65);
            osc2.start(t+i*0.10); osc2.stop(t+i*0.10+0.65);
        });
    } catch (_) {}
}

function playPop() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, t);
        osc.frequency.exponentialRampToValueAtTime(200, t+0.12);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t+0.12);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(t); osc.stop(t+0.12);
    } catch (_) {}
}

function playDing(f1=880, f2=1320) {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        [f1,f2].forEach((f,i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.value = f;
            gain.gain.setValueAtTime(0, t+i*0.09);
            gain.gain.linearRampToValueAtTime(0.15, t+i*0.09+0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, t+i*0.09+0.45);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t+i*0.09); osc.stop(t+i*0.09+0.5);
        });
    } catch (_) {}
}

function playEscape() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.exponentialRampToValueAtTime(900, t+0.07);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t+0.07);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(t); osc.stop(t+0.07);
    } catch (_) {}
}

function playCheer() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        [523.25,659.25,783.99,1046.5].forEach((f,i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.value = f;
            gain.gain.setValueAtTime(0, t+i*0.08);
            gain.gain.linearRampToValueAtTime(0.13, t+i*0.08+0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, t+i*0.08+0.5);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t+i*0.08); osc.stop(t+i*0.08+0.5);
        });
    } catch (_) {}
}

// ═══════════════════════════════════════════════════════════════
// ★ SISTEMA DE MÚSICA — 3 modos
// ═══════════════════════════════════════════════════════════════

function stopAllMusic() {
    clearTimeout(chordTimer);
    clearTimeout(chaosTimer);
    musicNodes.forEach(n => {
        try { if (n.stop)       n.stop();       } catch (_) {}
        try { if (n.disconnect) n.disconnect(); } catch (_) {}
    });
    musicNodes = [];
    musicMode = 'none';
    updateMusicBtn();
}

// ── MODO AMBIENT: acordes suaves de Fa mayor (I-vi-IV-V) ────
const AMBIENT_CHORDS = [
    [174.61, 220.00, 261.63, 329.63],   // F major
    [146.83, 196.00, 220.00, 293.66],   // D minor
    [116.54, 174.61, 220.00, 261.63],   // Bb major
    [130.81, 196.00, 261.63, 329.63],   // C major
];

function playAmbientChord() {
    if (musicMode !== 'ambient') return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    const chord = AMBIENT_CHORDS[chordIdx % AMBIENT_CHORDS.length];
    chordIdx++;

    chord.forEach(freq => {
        try {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            const lfo  = ctx.createOscillator();
            const lfog = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            lfo.frequency.value = 4;
            lfog.gain.value = 1.2;
            lfo.connect(lfog); lfog.connect(osc.frequency);
            lfo.start();
            // Fade in suave, sostener, fade out antes del próximo acorde
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.020, ctx.currentTime + 1.2);
            gain.gain.setValueAtTime(0.020, ctx.currentTime + 3.0);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 4.2);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 4.5);
            musicNodes.push(osc, gain, lfo, lfog);
        } catch (_) {}
    });

    chordTimer = setTimeout(playAmbientChord, 4000);
}

function startAmbientMusic() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    if (musicMode === 'ambient') return;
    stopAllMusic();
    musicMode = 'ambient';
    chordIdx  = 0;
    playAmbientChord();
    updateMusicBtn();
}

// ── MODO CHAOS: escena de hackeo ─────────────────────────────
// Características: rápido (1.2s), tritono (Do-Fa#), sawtooth, tremolo, ruido aleatorio
const CHAOS_FREQS = [
    [130.81, 185.00, 246.94, 369.99],   // Cm (caótico)
    [138.59, 185.00, 207.65, 311.13],   // C# dim
    [123.47, 164.81, 184.99, 246.94],   // B dim
    [130.81, 155.56, 196.00, 261.63],   // Cm7
];
let chaosOscNodes = [];

function stopChaosNodes() {
    chaosOscNodes.forEach(({ osc, gain }) => {
        try {
            const ctx = getAudioCtx();
            gain.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
            setTimeout(() => { try { osc.stop(); } catch (_) {} }, 1200);
        } catch (_) {}
    });
    chaosOscNodes = [];
}

function playChaosChord() {
    if (musicMode !== 'chaos') return;
    const ctx = getAudioCtx();
    if (!ctx) return;

    stopChaosNodes();

    const chord = CHAOS_FREQS[Math.floor(Math.random() * CHAOS_FREQS.length)];
    // Detuning aleatorio para efecto glitch
    const detune = () => (Math.random() - 0.5) * 25;

    chord.forEach(freq => {
        try {
            const osc    = ctx.createOscillator();
            const gain   = ctx.createGain();
            const tremoloLfo  = ctx.createOscillator();
            const tremoloGain = ctx.createGain();

            // Tipo de oscilador alternado para más caos
            osc.type = Math.random() > 0.5 ? 'sawtooth' : 'square';
            osc.frequency.value = freq + detune();
            osc.detune.value    = detune() * 2;

            // Tremolo rápido (caótico)
            tremoloLfo.frequency.value = 8 + Math.random() * 12;
            tremoloGain.gain.value = 0.015;
            tremoloLfo.connect(tremoloGain); tremoloGain.connect(gain.gain);
            tremoloLfo.start();

            // Volumen más bajo que ambient (terrorífico, no molesto)
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.012, ctx.currentTime + 0.08);

            osc.connect(gain); gain.connect(ctx.destination);
            osc.start();

            musicNodes.push(osc, gain, tremoloLfo, tremoloGain);
            chaosOscNodes.push({ osc, gain });
        } catch (_) {}
    });

    // Pulso de ruido ocasional
    if (Math.random() > 0.6) {
        try {
            const bufSize = Math.floor(ctx.sampleRate * 0.04);
            const buf     = ctx.createBuffer(1, bufSize, ctx.sampleRate);
            const d       = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) d[i] = (Math.random()*2-1) * 0.04;
            const noise  = ctx.createBufferSource();
            const ngain  = ctx.createGain();
            noise.buffer = buf;
            ngain.gain.value = 0.08;
            noise.connect(ngain); ngain.connect(ctx.destination);
            noise.start();
            musicNodes.push(noise, ngain);
        } catch (_) {}
    }

    chaosTimer = setTimeout(playChaosChord, 1100 + Math.random() * 400);
}

function startChaosMusic() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    stopAllMusic();
    musicMode = 'chaos';
    playChaosChord();
    updateMusicBtn();
}

// ── MODO REVEAL: cálido y alegre (igual que antes) ──────────
const REVEAL_CHORDS = [
    [174.61, 261.63, 329.63, 392.00],   // F major
    [146.83, 220.00, 261.63, 329.63],   // D minor
    [116.54, 174.61, 220.00, 261.63],   // Bb major
    [130.81, 196.00, 261.63, 329.63],   // C major
];

function playRevealChord() {
    if (musicMode !== 'reveal') return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    const chord = REVEAL_CHORDS[chordIdx % REVEAL_CHORDS.length];
    chordIdx++;

    chord.forEach(freq => {
        try {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            const lfo  = ctx.createOscillator();
            const lfog = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            lfo.frequency.value = 4.5; lfog.gain.value = 1.5;
            lfo.connect(lfog); lfog.connect(osc.frequency);
            lfo.start();
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.022, ctx.currentTime + 1.5);
            gain.gain.setValueAtTime(0.022, ctx.currentTime + 3.2);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 4.2);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 4.5);
            musicNodes.push(osc, gain, lfo, lfog);
        } catch (_) {}
    });

    chordTimer = setTimeout(playRevealChord, 4000);
}

function startRevealMusic() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    if (musicMode === 'reveal') return;
    stopAllMusic();
    musicMode = 'reveal';
    chordIdx  = 0;
    playRevealChord();
    updateMusicBtn();
}

// ── Toggle manual ────────────────────────────────────────────
function toggleMusic() {
    unlockAudio();
    if (musicMode !== 'none') {
        stopAllMusic();
    } else {
        // Reiniciar según pantalla activa
        if (!document.getElementById('final-screen').classList.contains('hidden')) {
            startRevealMusic();
        } else if (!document.getElementById('prank-screen').classList.contains('hidden')) {
            startChaosMusic();
        } else {
            startAmbientMusic();
        }
    }
}

function updateMusicBtn() {
    const btn = document.getElementById('music-btn');
    if (!btn) return;
    btn.textContent = (musicMode !== 'none') ? '🎵' : '🔇';
    btn.style.boxShadow = (musicMode !== 'none')
        ? '0 0 16px rgba(236,72,153,0.5)'
        : '0 4px 15px rgba(0,0,0,0.3)';
}

// ★ PRIMER CLIC EN CUALQUIER PARTE DE LA PÁGINA → desbloquear audio + música ambient
function setupFirstClickMusic() {
    const onFirstClick = () => {
        if (firstClickDone) return;
        firstClickDone = true;
        unlockAudio();
        // Solo iniciar música si no estamos ya en prank o final
        if (musicMode === 'none'
            && document.getElementById('prank-screen').classList.contains('hidden')
            && document.getElementById('final-screen').classList.contains('hidden')) {
            startAmbientMusic();
        }
    };
    // Escuchar en capture phase para capturar el primer toque/clic antes que nada
    document.addEventListener('click',      onFirstClick, { once: true, capture: true });
    document.addEventListener('touchstart', onFirstClick, { once: true, capture: true, passive: true });
}

// ═══════════════════════════════════════════════════════════════
// HELPERS DE CONTENIDO
// ═══════════════════════════════════════════════════════════════

function getSubIndex(cat, sub) {
    for (const l of ['es','en']) {
        const idx = (config[l].sub[cat] || []).indexOf(sub);
        if (idx >= 0) return idx;
    }
    return 0;
}

function getTrolleo(lang, cat, sub) {
    const pool = config[lang]?.trolleos?.[cat];
    if (!pool) return '';
    if (pool[sub]) return pool[sub];
    const idx  = getSubIndex(cat, sub);
    const keys = Object.keys(pool);
    return pool[keys[idx]] || pool[keys[0]] || '';
}

function getFinalMsg(lang, cat, sub) {
    const pool = config[lang]?.final?.[cat];
    if (!pool) return '';
    if (pool[sub]) return pool[sub];
    const idx  = getSubIndex(cat, sub);
    const keys = Object.keys(pool);
    return pool[keys[idx]] || pool[keys[0]] || '';
}

// ═══════════════════════════════════════════════════════════════
// LANGUAGE SWITCHING
// ═══════════════════════════════════════════════════════════════
function changeLang(lang) {
    currentLang = lang;
    const t = config[lang];
    const ui = t.ui;
    const el = id => document.getElementById(id);

    el('btn-lang-es').classList.toggle('active', lang === 'es');
    el('btn-lang-en').classList.toggle('active', lang === 'en');

    // Creator
    const cv = el('creator-view');
    if (cv && !cv.classList.contains('hidden')) {
        el('ui-title').textContent       = ui.title;
        el('ui-desc').textContent        = ui.desc;
        el('lbl-rel').textContent        = ui.rel;
        el('lbl-dest').textContent       = ui.dest;
        el('lbl-msg').textContent        = ui.msg;
        el('lbl-opt').textContent        = ui.msgOpt;
        el('lbl-hint').textContent       = ui.msgHint;
        el('lbl-result').textContent     = ui.result;
        el('btn-generate').textContent   = ui.gen;
        el('btn-copy').textContent       = ui.copy;
        el('custom-message').placeholder = ui.msgHolder;
        const catSel = el('main-category');
        catSel.innerHTML = '';
        for (const key in t.categories) catSel.add(new Option(t.categories[key], key));
        updateSubCats();
    }

    // Receiver
    const rv = el('receiver-view');
    if (!rv || rv.classList.contains('hidden')) return;
    if (el('tap-title')) el('tap-title').textContent = t.tapTitle;
    if (el('tap-sub'))   el('tap-sub').textContent   = t.tapSub;
    if (el('tap-btn'))   el('tap-btn').textContent   = t.tapBtn;
    if (el('tap-hint'))  el('tap-hint').textContent  = t.tapHint;

    const fs = el('final-screen');
    if (fs && !fs.classList.contains('hidden')) {
        refreshFinalScreen(lang, new URLSearchParams(location.search));
    }
}

function refreshFinalScreen(lang, params) {
    const t   = config[lang];
    const cat = params.get('c') || 'amistad';
    const sub = decodeURIComponent(params.get('s') || '');
    const el  = id => document.getElementById(id);

    el('final-greeting').textContent = t.greeting.replace('{sub}', sub);

    const rawB64 = params.get('m');
    let msg = getFinalMsg(lang, cat, sub);
    if (rawB64) {
        try {
            const dec = decodeURIComponent(escape(atob(rawB64)));
            if (dec.trim()) msg = dec;
        } catch (_) {}
    }
    el('final-text').textContent = msg;
    if (el('btn-share'))    el('btn-share').textContent    = t.shareBtn;
    if (el('share-sub'))    el('share-sub').textContent    = t.shareSub;
    if (el('btn-donation')) el('btn-donation').textContent = t.donationBtn;
    refreshGameUI(lang, cat);
}

function refreshGameUI(lang, cat) {
    const g  = config[lang]?.games?.[cat];
    const el = id => document.getElementById(id);
    if (!g) return;
    if (cat === 'amor') {
        if (el('question-text'))  el('question-text').textContent  = g.question;
        if (el('btn-yes'))        el('btn-yes').textContent        = g.yesBtn;
        if (el('celebrate-text')) el('celebrate-text').textContent = g.celebrateText;
        if (el('celebrate-sub'))  el('celebrate-sub').textContent  = g.celebrateSub;
        const btnNo = el('btn-no');
        if (btnNo && !btnNo.classList.contains('btn-no-surrender')) btnNo.textContent = g.noBtn;
    } else if (cat === 'amistad') {
        if (el('game-amistad-title')) el('game-amistad-title').textContent = g.title;
        updateTapProgress(lang);
    } else if (cat === 'familiar') {
        if (el('game-familiar-title')) el('game-familiar-title').textContent = g.title;
        updateHugProgress(lang);
    }
}

// ═══════════════════════════════════════════════════════════════
// CREATOR
// ═══════════════════════════════════════════════════════════════
function updateSubCats() {
    const cat    = document.getElementById('main-category').value;
    const subSel = document.getElementById('sub-category');
    subSel.innerHTML = '';
    (config[currentLang].sub[cat] || []).forEach(s => subSel.add(new Option(s, s)));
}

function generateLink() {
    unlockAudio(); playPop();
    const c   = document.getElementById('main-category').value;
    const s   = document.getElementById('sub-category').value;
    const raw = document.getElementById('custom-message').value.trim();
    const m   = btoa(unescape(encodeURIComponent(raw)));
    const url = `${location.origin}${location.pathname}?c=${c}&s=${encodeURIComponent(s)}&m=${m}&l=${currentLang}`;
    document.getElementById('final-url').value = url;
    const ra = document.getElementById('result-area');
    ra.classList.remove('hidden');
    ra.scrollIntoView({ behavior:'smooth', block:'nearest' });
    hitCounter('links-generados');
}

async function copyLink() {
    unlockAudio();
    const text = document.getElementById('final-url').value;
    const btn  = document.getElementById('btn-copy');
    try { await navigator.clipboard.writeText(text); }
    catch (_) {
        const inp = document.getElementById('final-url');
        inp.select(); inp.setSelectionRange(0, 99999);
        try { document.execCommand('copy'); } catch (_2) {}
    }
    playDing();
    const orig = btn.textContent;
    btn.textContent = config[currentLang].copied;
    btn.classList.add('bg-green-700');
    setTimeout(() => { btn.textContent = config[currentLang].ui.copy; btn.classList.remove('bg-green-700'); }, 2000);
}

// ═══════════════════════════════════════════════════════════════
// RECEIVER: PRANK FLOW
// ═══════════════════════════════════════════════════════════════
function beginPrank() {
    unlockAudio();

    // ★ Transición de música: ambient → chaos
    startChaosMusic();

    document.getElementById('tap-overlay').classList.add('hidden');
    const ps = document.getElementById('prank-screen');
    ps.classList.remove('hidden');
    ps.classList.add('fade-in');

    // ★ Modo visual caótico: terminal rojo + ícono rápido
    setTimeout(() => {
        ps.classList.add('chaos-mode');
        document.getElementById('prank-text').classList.add('chaos-mode');
    }, 400);
    startTyping(new URLSearchParams(location.search));
}

function startTyping(p) {
    const lang = p.get('l') || 'es';
    const cat  = p.get('c') || 'amistad';
    const sub  = decodeURIComponent(p.get('s') || '');
    const msg  = getTrolleo(lang, cat, sub);

    const el = document.getElementById('prank-text');
    el.style.whiteSpace = 'pre-wrap';  // garantía extra
    el.textContent = '';
    el.classList.remove('terminal-cursor');

    let i = 0, clickEvery = 0;
    const typer = setInterval(() => {
        el.textContent += msg.charAt(i);
        i++;
        clickEvery++;
        const ch = msg.charAt(i-1);
        if (clickEvery >= 3 && ch !== '\n' && ch !== ' ') { clickEvery = 0; playKeyClick(); }
        if (i >= msg.length) {
            clearInterval(typer);
            el.classList.add('terminal-cursor');
            setTimeout(() => fillBar(p), 700);
        }
    }, 28);
}

function fillBar(p) {
    const bar  = document.getElementById('progress-bar');
    const cont = document.getElementById('main-container');
    const el   = document.getElementById('prank-text');
    el.classList.remove('terminal-cursor');
    let w = 0;
    const iv = setInterval(() => {
        w++;
        bar.style.width = w + '%';
        if (w === 55) playAlarm();
        if (w === 80) { playGlitch(); cont.classList.add('shake-heavy'); }
        if (w >= 100) {
            clearInterval(iv);
            cont.classList.remove('shake-heavy');
            setTimeout(() => showFinal(p), 400);
        }
    }, 38);
}

function showFinal(p) {
    playFanfare();
    launchConfetti();

    // ★ Transición de música: chaos → reveal (después del fanfare)
    setTimeout(startRevealMusic, 900);

    document.getElementById('prank-screen').classList.add('hidden');
    const fs = document.getElementById('final-screen');
    fs.classList.remove('hidden');
    fs.classList.add('fade-in');

    const lang = p.get('l') || 'es';
    const cat  = p.get('c') || 'amistad';
    const sub  = decodeURIComponent(p.get('s') || '');
    const t    = config[lang];

    const rawB64 = p.get('m');
    let finalMsg = getFinalMsg(lang, cat, sub);
    if (rawB64) {
        try {
            const dec = decodeURIComponent(escape(atob(rawB64)));
            if (dec.trim()) finalMsg = dec;
        } catch (_) {}
    }

    document.getElementById('final-greeting').textContent = t.greeting.replace('{sub}', sub);
    document.getElementById('final-text').textContent     = finalMsg;
    document.getElementById('btn-share').textContent      = t.shareBtn;
    document.getElementById('share-sub').textContent      = t.shareSub;
    document.getElementById('btn-donation').textContent   = t.donationBtn;

    initGame(lang, cat);
}

// ═══════════════════════════════════════════════════════════════
// GAMES
// ═══════════════════════════════════════════════════════════════
function initGame(lang, cat) {
    const ga = document.getElementById('game-area');
    ga.classList.remove('hidden');
    ['amor','amistad','familiar'].forEach(c =>
        document.getElementById('game-'+c).classList.add('hidden')
    );
    document.getElementById('game-'+cat).classList.remove('hidden');
    refreshGameUI(lang, cat);
    if (cat === 'amor') setTimeout(setupBtnNo, 150);
}

// ── AMOR ─────────────────────────────────────────────────────
const NO_POSITIONS = [
    {left:'65%', top:'-30px'}, {left:'-25%', top:'25px'},
    {left:'60%', top:'35px'},  {left:'-20%', top:'-28px'},
    {left:'58%', top:'-18px'}, {left:'-10%', top:'30px'},
];

function setupBtnNo() {
    const btnNo = document.getElementById('btn-no');
    if (!btnNo) return;
    noEscapes = 0; noLastTime = 0;
    function tryEscape() {
        const now = Date.now();
        if (now - noLastTime < 200) return;
        noLastTime = now;
        noEscapes++;
        playEscape();
        if (noEscapes >= MAX_ESCAPES) {
            const lang = (new URLSearchParams(location.search).get('l')) || currentLang;
            btnNo.textContent = config[lang].games.amor.noSurrender;
            btnNo.style.cssText = '';
            btnNo.style.position = 'relative';
            btnNo.classList.add('btn-no-surrender', 'bg-pink-100', 'text-pink-500');
            btnNo.removeEventListener('mouseover',  tryEscape);
            btnNo.removeEventListener('touchstart', tryEscape);
            btnNo.onclick = celebrate;
            return;
        }
        const pos = NO_POSITIONS[(noEscapes-1) % NO_POSITIONS.length];
        btnNo.style.left = pos.left; btnNo.style.top = pos.top;
    }
    btnNo.addEventListener('mouseover',  tryEscape);
    btnNo.addEventListener('touchstart', tryEscape, { passive:true });
}

function celebrate() {
    document.getElementById('btn-no-wrapper').style.display = 'none';
    document.getElementById('celebrate-msg').classList.remove('hidden');
    playFanfare();
    launchConfetti();
    setTimeout(launchConfetti, 600);
}

// ── AMISTAD ───────────────────────────────────────────────────
function handleTapGame() {
    tapCount++;
    playDing(440 + tapCount*60, 660 + tapCount*60);
    const btn = document.getElementById('tap-game-btn');
    btn.classList.add('game-tap-active');
    setTimeout(() => btn.classList.remove('game-tap-active'), 180);
    updateTapProgress(currentLang);
    if (tapCount >= TAP_TARGET) {
        btn.style.pointerEvents = 'none';
        document.getElementById('tap-done-msg').classList.remove('hidden');
        playCheer(); launchConfetti();
        btn.textContent = '🤝';
    }
}
function updateTapProgress(lang) {
    const g = config[lang]?.games?.amistad;
    if (!g) return;
    const pct = Math.min(100, Math.round((tapCount/TAP_TARGET)*100));
    document.getElementById('tap-progress').style.width = pct + '%';
    document.getElementById('tap-progress-text').textContent =
        g.progress.replace('{n}', Math.min(tapCount,TAP_TARGET)).replace('{total}', TAP_TARGET);
    const doneEl = document.getElementById('tap-done-text');
    if (doneEl) doneEl.textContent = g.done;
}

// ── FAMILIAR ──────────────────────────────────────────────────
function handleHugGame() {
    hugCount++;
    playDing(300 + hugCount*30, 500 + hugCount*30);
    const btn = document.getElementById('hug-game-btn');
    btn.classList.add('game-tap-active');
    setTimeout(() => btn.classList.remove('game-tap-active'), 200);
    updateHugProgress(currentLang);
    if (hugCount >= HUG_TARGET) {
        btn.style.pointerEvents = 'none';
        document.getElementById('hug-done-msg').classList.remove('hidden');
        playCheer(); launchConfetti();
        btn.textContent = '💝';
    }
}
function updateHugProgress(lang) {
    const g = config[lang]?.games?.familiar;
    if (!g) return;
    const pct = Math.min(100, Math.round((hugCount/HUG_TARGET)*100));
    document.getElementById('hug-progress').style.width = pct + '%';
    document.getElementById('hug-progress-text').textContent =
        g.progress.replace('{n}', Math.min(hugCount,HUG_TARGET)).replace('{total}', HUG_TARGET);
    const doneEl = document.getElementById('hug-done-text');
    if (doneEl) doneEl.textContent = g.done;
}

// ═══════════════════════════════════════════════════════════════
// CONFETI
// ═══════════════════════════════════════════════════════════════
function launchConfetti() {
    const colors = ['#ff4d6d','#ff85a1','#ffd6e0','#ff0054','#ffccd5'];
    confetti({ particleCount:110, spread:70, origin:{y:0.65}, colors });
    setTimeout(() => {
        confetti({ particleCount:65, angle:60,  spread:55, origin:{x:0, y:0.7}, colors });
        confetti({ particleCount:65, angle:120, spread:55, origin:{x:1, y:0.7}, colors });
    }, 380);
}

// ═══════════════════════════════════════════════════════════════
// ACCIONES
// ═══════════════════════════════════════════════════════════════
function goToCreator() { window.location.href = location.origin + location.pathname; }
function showDonationJoke() { alert(config[currentLang].donation); }

// ═══════════════════════════════════════════════════════════════
// STATS (5 clics en footer)
// ═══════════════════════════════════════════════════════════════
function handleStatsTrigger() {
    statsClicks++;
    clearTimeout(statsTimer);
    statsTimer = setTimeout(() => { statsClicks = 0; }, 2000);
    if (statsClicks >= 5) { statsClicks = 0; showStats(); }
}
async function showStats() {
    const t   = config[currentLang];
    const did = getDeviceId();
    const myV = getMyVisitCount();
    const [total, links] = await Promise.all([getCounter('visitas-prank'), getCounter('links-generados')]);
    if (total === '—' && links === '—') { alert(t.statsError); return; }
    alert(t.statsResult.replace('{did}',did).replace('{myvisits}',myV).replace('{total}',total??'?').replace('{links}',links??'?'));
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
window.onload = () => {
    const params = new URLSearchParams(location.search);

    // ★ Configurar listener de primer clic (para música desde el inicio)
    setupFirstClickMusic();

    if (params.has('c')) {
        // ── RECEIVER MODE ──
        document.getElementById('creator-view').classList.add('hidden');
        document.getElementById('receiver-view').classList.remove('hidden');

        const lang = params.get('l') || 'es';
        const t    = config[lang];
        currentLang = lang;

        document.getElementById('tap-title').textContent = t.tapTitle;
        document.getElementById('tap-sub').textContent   = t.tapSub;
        document.getElementById('tap-btn').textContent   = t.tapBtn;
        document.getElementById('tap-hint').textContent  = t.tapHint;

        document.getElementById('btn-lang-es').classList.toggle('active', lang === 'es');
        document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');

        hitCounter('visitas-prank');
        hitCounter(`v-${getDeviceId()}`);
        incrementMyVisitCount();

    } else {
        // ── CREATOR MODE ──
        changeLang('es');
    }
};
