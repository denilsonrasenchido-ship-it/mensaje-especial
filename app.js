/* ================================================================
   app.js — Sorpresa Especial 💝  v4.0
   ✅ Trolleos únicos por sub-categoría
   ✅ Mensajes finales únicos por sub-categoría
   ✅ Cambio de idioma completo (todas las pantallas)
   ✅ Minijuegos: Amor (Sí/No), Amistad (apretón), Familiar (abrazo)
   ✅ Música ambiental Web Audio API (sin URLs externas)
   ✅ Device ID para estadísticas sin contaminar métricas
   ================================================================ */

// ═══════════════════════════════════════════════════════════════
// CONFIG — TEXTOS COMPLETOS POR SUB-CATEGORÍA
// ═══════════════════════════════════════════════════════════════

const config = {

// ──────────────────────────────────────────────────────────────
// ESPAÑOL
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
      'Amigo/a': [
        '> ACCESO: Escaneando historial compartido...',
        '> Encontrado: 47 fotos vergonzosas de 2023... 📸',
        '> Subiendo a Instagram Stories automáticamente...',
        '> Enviando capturas a TODOS tus contactos...',
        '> ¡Proceso completado en todos los dispositivos!',
        '> Estado: PUBLICADO — 100% COMPLETO ✓'
      ].join('\n'),
      'Mejor Amigo/a': [
        '> MODO TRAICIÓN: Nivel MÁXIMO activado...',
        '> Accediendo a secretos compartidos... 🤫',
        '> Recopilando: "lo que me dijiste que no le dijera a nadie"',
        '> Exportando al grupo de WhatsApp familiar...',
        '> Adjuntando: audios + fotos sin filtro + confesiones...',
        '> Estado: ENVIADO A 23 PERSONAS ✓'
      ].join('\n'),
      'Cómplice': [
        '> INVESTIGACIÓN ACTIVA: Expediente N°4829...',
        '> Recuperando: todas las aventuras compartidas... 🕵️',
        '> Listando: excusas dadas a los padres = 47',
        '> Compilando: evidencia de cada travesura registrada...',
        '> Enviando reporte a [Autoridad competente]...',
        '> Estado: EXPEDIENTE COMPLETO ⚠️'
      ].join('\n'),
      'Hermano/a del alma': [
        '> ANÁLISIS DE VÍNCULO EMOCIONAL...',
        '> Crisis existenciales resueltas juntos = 847 📊',
        '> Calculando: horas de llamadas nocturnas = 2,400 hrs',
        '> Contando: "¿sigues despierto/a?" enviados = 1,203',
        '> Presentando factura emocional acumulada... 💸',
        '> Estado: DEUDA EMOCIONAL — IMPAGABLE ❤️'
      ].join('\n')
    },

    amor: {
      'Crush': [
        '> ALERTA MÁXIMA: Confesión en progreso...',
        '> Redactando: "Me gustas muchísimo desde hace tiempo" 💌',
        '> Destinatarios: [nombre] + toda su clase + sus padres 😱',
        '> Adjuntando: capturas de tus stalkeos...',
        '> Notificando: sus amigos, familia y ex novios/as...',
        '> Estado: ENVIADO — SIN POSIBILIDAD DE RETRACTO ✓'
      ].join('\n'),
      'Pareja': [
        '> ALERTA: Actualizando estado civil en TODAS las redes...',
        '> Publicando: las 47 fotos sin filtro de los dos... 📸',
        '> Activando: modo "leer en voz alta" tus notas de voz...',
        '> Enviando historial de ubicaciones a su ex... 📍',
        '> Organizando: reunión urgente con ambas familias...',
        '> Estado: RELACIÓN EXPUESTA AL 100% ✓'
      ].join('\n'),
      'Novio/a': [
        '> PROCESANDO: Propuesta de matrimonio masiva...',
        '> Redactando: "¿Te casas conmigo?" a todos tus ex... 💍',
        '> Reservando: salón de bodas + iglesia + catering...',
        '> Notificando: suegros, cuñados y familia extendida...',
        '> Fecha publicada en redes: 14 Feb — No cancelable',
        '> Estado: BODA CONFIRMADA PÚBLICAMENTE ✓'
      ].join('\n'),
      'Amor Platónico': [
        '> MODO CONFESIÓN SILENCIOSA ACTIVADO...',
        '> Recopilando: 847 veces que revisaste su perfil... 👀',
        '> Compilando: "me gusta" en fotos de 2018 y anteriores...',
        '> Exportando: screenshots de sus stories privadas...',
        '> Enviando a: la persona + su grupo de mejores amigos/as',
        '> Estado: STALKEO OFICIALMENTE CONFIRMADO ✓'
      ].join('\n'),
      'Esposa/o': [
        '> AUDITORÍA DOMÉSTICA EN CURSO...',
        '> Calculando: veces que no pusiste el plato en el fregadero 🍽️',
        '> Listando: "lo que iba a decir pero no dije" = 1,847',
        '> Detectado: 3,847 "¿en qué piensas?" sin respuesta...',
        '> Factura emocional: $12,500 en palabras nunca dichas 💸',
        '> Estado: DEUDA EMOCIONAL SIN PRECEDENTES ⚠️'
      ].join('\n')
    },

    familiar: {
      'Mamá': [
        '> SISTEMA: Detectada deuda de abrazos acumulada...',
        '> Auditando: llamadas no contestadas este mes = 47... 📞',
        '> Contabilizando: "ya comí" siendo mentira = 203 veces',
        '> Bloqueando: acceso a ropa limpia + comida casera...',
        '> Enviando reporte a: papá + abuelos + grupo familiar...',
        '> Estado: SIN SUBSIDIO MATERNO — BLOQUEADO ⚠️'
      ].join('\n'),
      'Papá': [
        '> PROCESANDO: Factura de crianza pendiente...',
        '> Calculando: lecciones de vida ignoradas = $15,000 USD 🚗',
        '> Sumando: consejos no seguidos × años = 2,400 💡',
        '> Detectando: veces que dijiste "ahora voy" y tardaste horas',
        '> Activando: recordatorio "cuando yo tenía tu edad..."',
        '> Estado: FACTURA DE CRIANZA — IMPAGABLE 💸'
      ].join('\n'),
      'Hermano/a': [
        '> MODO DELACIÓN FAMILIAR ACTIVADO...',
        '> Accediendo: secretos que me confiaste... 🤫',
        '> Preparando: la vez que llegaste tarde + excusas inventadas',
        '> Compilando: fotos de infancia más vergonzosas del álbum...',
        '> Enviando al grupo familiar + al grupo de tus amigos...',
        '> Estado: DELATADO/A EN TIEMPO REAL ✓'
      ].join('\n'),
      'Tío/a': [
        '> ANALIZANDO: Árbol genealógico familiar...',
        '> Calculando: el/la favorito/a entre todos los sobrinos... 🏆',
        '> Resultado del sistema: NO ERES EL/LA FAVORITO/A 🫢',
        '> Preparando: discurso para la próxima reunión navideña',
        '> Listando: logros impresionantes de los otros sobrinos...',
        '> Estado: FAVORITO/A OFICIAL — IDENTIFICADO/A ✓'
      ].join('\n'),
      'Primo/a': [
        '> ESCANEANDO: Álbum familiar compartido en la nube...',
        '> Encontrado: foto de cumpleaños con pastel en la cara 🎂',
        '> Recuperado: el video de la actuación escolar de 2009...',
        '> Subiendo a: Instagram + Facebook + grupos WhatsApp...',
        '> Etiquetando: a toda la familia extendida + amigos...',
        '> Estado: VERGÜENZA FAMILIAR — AHORA VIRAL ✓'
      ].join('\n'),
      'Abuela/o': [
        '> ALERTA: Nieto/a en situación crítica de nutrición...',
        '> Detectado: lleva 3 días sin comer sopa de pollo... 🍲',
        '> Midiendo: horas sin abrazo abuelx = 72 horas exactas',
        '> Calculando: besos en mejilla pendientes = 15 🥰',
        '> Activando: protocolo de cuidado abuelx urgente...',
        '> Estado: NIETO/A NECESITA ATENCIÓN — LLAMADA EN CAMINO ❤️'
      ].join('\n')
    }
  },

  final: {
    amistad: {
      'Amigo/a': '¡Era una broma! 😂 Solo quería recordarte que eres un amigo/a increíble. Gracias por estar ahí siempre, por el apoyo y por aguantarme en mis días difíciles. ¡Te quiero mucho! 🤝❤️',
      'Mejor Amigo/a': '¡Jamás traicionaría nuestros secretos! 😂 Tú eres esa persona que elegí y me alegra haber elegido tan bien. Eres mi mejor amigo/a y eso no tiene precio en el mundo. ¡Te quiero cantidad! 💙',
      'Cómplice': '¡Era solo una broma, cómplice! 😂 Gracias por ser mi aliado/a en la vida. Por todas las aventuras compartidas, las excusas inventadas y los momentos que solo nosotros entendemos. ¡Eres irreemplazable! 🕵️❤️',
      'Hermano/a del alma': '¡Asustón/a! 😂 No hay factura que pague lo que significas para mí. Elegimos ser familia aunque la sangre no nos una, y eso lo hace más especial aún. Eres mi hermano/a del alma y lo sabes. ❤️✨'
    },
    amor: {
      'Crush': '¡Casi te da algo! 😜 Era solo una broma. Pero sí quería decirte que me pareces alguien muy especial. Me alegra que estés en mi vida aunque sea desde lejos. ¡Feliz día! 💕',
      'Pareja': '¡Te pillé! 😂 Era solo una broma, amor. Todo lo que compartimos es nuestro y solo nuestro. Gracias por ser mi persona favorita en este mundo tan grande. ¡Te amo muchísimo! 💕',
      'Novio/a': '¡Respira! 😂 No hay boda sorpresa (todavía 😏). Solo quería recordarte que eres la persona más importante en mi vida y que cada día contigo vale mil. ¡Feliz San Valentín, amor! ❤️',
      'Amor Platónico': '¡Tranquilidad! 😅 Solo era una broma. Pero sí quería decirte que me pareces una persona increíble y especial. Tienes una energía única y el mundo es mejor contigo en él. ✨💕',
      'Esposa/o': '¡Asustona/o! 😂 Sabes que jamás haría eso. Solo quería recordarte que eres mi persona favorita, mi hogar y mi aventura más bonita. Gracias por elegirme cada día. ¡Te amo! 💕🏠'
    },
    familiar: {
      'Mamá': '¡Te asustamos! 😅 Perdón, era una broma. Solo quería recordarte que no hay palabras para agradecerte todo lo que has dado por mí. Eres la persona más increíble que conozco. ¡Te quiero con todo mi corazón, mamá! ❤️',
      'Papá': '¡Te pillamos! 😂 Era una broma. Pero en serio, no hay forma de pagarte todo lo que has enseñado. Gracias por ser mi guía, mi referente y mi ejemplo. ¡Te quiero muchísimo, papá! 💙',
      'Hermano/a': '¡Era solo una broma! 😂 Aunque te tenga ganas, no haría eso. Eres de lo mejor que tengo en mi vida. Gracias por ser mi cómplice, mi ejemplo y mi apoyo incondicional. ¡Te quiero mucho! 🤝❤️',
      'Tío/a': '¡Te asustaste! 😂 Era una broma. Eres sin duda el/la tío/a favorito/a (¡no se lo cuentes a los demás!). Gracias por los consejos y por siempre estar cuando te necesito. ¡Te quiero! ❤️',
      'Primo/a': '¡Era solo una broma! 😂 Las fotos están a salvo, lo juro. Gracias por ser parte de los mejores recuerdos de la infancia y por seguir siendo parte importante de mi vida. ¡Te quiero, primo/a! 🎉❤️',
      'Abuela/o': '¡Descansa, todo está bien! 😊 Era una broma. Eres de las personas más importantes en mi vida y quería que lo supieras. Gracias por tanto amor, sabiduría y sopa de pollo. ¡Te quiero infinito, abuela/o! ❤️'
    }
  },

  games: {
    amor: {
      question:      '¿Me perdonas la broma? 🥺',
      yesBtn:        'Sí ❤️',
      noBtn:         'NO',
      noSurrender:   '💕 ¡Igual te quiero!',
      celebrateText: '¡Lo sabía! 🥰',
      celebrateSub:  '¡Gracias por perdonarme! Te quiero mucho ❤️'
    },
    amistad: {
      title:    '¡Demuestra que somos amigos/as! 🤝',
      emoji:    '🤜',
      target:   7,
      progress: 'Apretones: {n} / {total}',
      done:     '¡Queda demostrado! Somos los mejores amigos/as 🤝💕'
    },
    familiar: {
      title:    '¡Paga tu deuda de abrazos! 🤗',
      emoji:    '🤗',
      target:   5,
      progress: 'Abrazos dados: {n} / {total}',
      done:     '¡Deuda saldada! Ya podemos estar en paz ❤️'
    }
  },

  tapTitle: 'Tienes una sorpresa',
  tapSub:   'Alguien pensó en ti hoy 💕',
  tapBtn:   '¡Abrir! 💝',
  tapHint:  '🔊 Activa el sonido para la experiencia completa',
  greeting: '¡Para mi {sub}!',
  shareBtn: '💌 ¡Quiero enviarle esto a alguien!',
  shareSub: 'Crea tu propia sorpresa personalizada →',
  donationBtn: '☕ Invitar un café al creador',
  donation: '⚠️ ERROR DE TRANSACCIÓN:\n\nEl sistema de pagos se ha bloqueado porque el programador aún no tiene edad legal para tener cuenta bancaria.\n\n¡Mejor regálale un chocolate! 🍫🍭',
  copied:   '✓ COPIADO',
  musicOn:  '🎵 Música ON',
  musicOff: '🔇 Música OFF',
  statsResult: '📊 ESTADÍSTICAS\n\n🆔 Tu dispositivo: {did}\n👆 Tus visitas: {myvisits}\n👥 Visitas totales: {total}\n🔗 Links generados: {links}\n\n💡 Filtra "{did}" para descontar tus pruebas.',
  statsError: 'No se pudieron cargar las estadísticas.',
  ui: {
    title:    'MENSAJERÍA VIP',
    desc:     'Personaliza tu envío 💝',
    gen:      'Generar Link 🚀',
    rel:      'Tipo de relación',
    dest:     '¿Para quién es?',
    msg:      'Tu mensaje especial',
    msgOpt:   '✨ Opcional',
    msgHint:  '💡 Si lo dejas vacío se usará un mensaje bonito por defecto',
    msgHolder:'Escribe algo especial para esa persona... 💕',
    copy:     'COPIAR',
    result:   '✅ ¡Tu link está listo! Cópialo y envíalo:'
  }
},

// ──────────────────────────────────────────────────────────────
// ENGLISH
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
      'Friend': [
        '> ACCESS: Scanning shared history...',
        '> Found: 47 embarrassing photos from 2023... 📸',
        '> Uploading to Instagram Stories automatically...',
        '> Sending screenshots to ALL your contacts...',
        '> Process completed on all devices!',
        '> Status: PUBLISHED — 100% COMPLETE ✓'
      ].join('\n'),
      'Best Friend': [
        '> BETRAYAL MODE: MAXIMUM level activated...',
        '> Accessing shared secrets... 🤫',
        '> Gathering: "what you told me not to tell anyone"',
        '> Exporting to family WhatsApp group...',
        '> Attaching: voice notes + unfiltered photos + confessions...',
        '> Status: SENT TO 23 PEOPLE ✓'
      ].join('\n'),
      'Partner in crime': [
        '> ACTIVE INVESTIGATION: File No. 4829...',
        '> Recovering: all shared adventures... 🕵️',
        '> Listing: lies told to parents = 47',
        '> Compiling: evidence of every recorded prank...',
        '> Sending report to [Competent Authority]...',
        '> Status: FILE COMPLETED ⚠️'
      ].join('\n'),
      'Soul sibling': [
        '> EMOTIONAL BOND ANALYSIS...',
        '> Existential crises solved together = 847 📊',
        '> Calculating: hours of late-night calls = 2,400 hrs',
        '> Counting: "are you still awake?" messages = 1,203',
        '> Presenting accumulated emotional bill... 💸',
        '> Status: EMOTIONAL DEBT — UNPAYABLE ❤️'
      ].join('\n')
    },

    amor: {
      'Crush': [
        '> MAXIMUM ALERT: Confession in progress...',
        '> Drafting: "I really like you, like a lot" 💌',
        '> Recipients: [name] + entire school + their parents 😱',
        '> Attaching: screenshots of your stalk sessions...',
        '> Notifying: their friends, family and exes...',
        '> Status: SENT — NO TAKE-BACKS POSSIBLE ✓'
      ].join('\n'),
      'Partner': [
        '> ALERT: Updating relationship status on ALL platforms...',
        '> Publishing: 47 unfiltered photos of you two... 📸',
        '> Activating: "read aloud" mode for your voice messages...',
        '> Sending location history to their ex... 📍',
        '> Organizing: urgent family meeting for both sides...',
        '> Status: RELATIONSHIP 100% EXPOSED ✓'
      ].join('\n'),
      'Boyfriend/Girlfriend': [
        '> PROCESSING: Mass marriage proposal...',
        '> Drafting: "Will you marry me?" to all your exes... 💍',
        '> Booking: wedding venue + church + catering...',
        '> Notifying: in-laws, siblings and extended family...',
        '> Date published on social media: Feb 14 — Non-refundable',
        '> Status: WEDDING PUBLICLY CONFIRMED ✓'
      ].join('\n'),
      'Platonic love': [
        '> SILENT CONFESSION MODE ACTIVATED...',
        '> Collecting: 847 times you checked their profile... 👀',
        '> Compiling: likes on photos from 2018 and earlier...',
        '> Exporting: screenshots of their private stories...',
        '> Sending to: them + their closest friends group',
        '> Status: STALKING OFFICIALLY CONFIRMED ✓'
      ].join('\n'),
      'Spouse': [
        '> HOUSEHOLD AUDIT IN PROGRESS...',
        '> Counting: times you left dishes in the sink 🍽️',
        '> Listing: "was going to say but didn\'t" = 1,847',
        '> Detected: 3,847 "what are you thinking?" unanswered...',
        '> Emotional bill: $12,500 in words never said 💸',
        '> Status: UNPRECEDENTED EMOTIONAL DEBT ⚠️'
      ].join('\n')
    },

    familiar: {
      'Mom': [
        '> SYSTEM: Accumulated hug debt detected...',
        '> Auditing: unanswered calls this month = 47... 📞',
        '> Counting: "I already ate" while lying = 203 times',
        '> Blocking: access to clean clothes + home food...',
        '> Sending report to: dad + grandparents + family group...',
        '> Status: NO MATERNAL SUPPORT — BLOCKED ⚠️'
      ].join('\n'),
      'Dad': [
        '> PROCESSING: Outstanding parenting bill...',
        '> Calculating: ignored life lessons = $15,000 USD 🚗',
        '> Adding up: unheeded advice × years = 2,400 💡',
        '> Detecting: times you said "I\'m coming" then took hours',
        '> Activating: "back in my day..." auto-reminder',
        '> Status: PARENTING BILL — UNPAYABLE 💸'
      ].join('\n'),
      'Sibling': [
        '> FAMILY SNITCH MODE ACTIVATED...',
        '> Accessing: secrets you confided in me... 🤫',
        '> Preparing: the time you came home late + your excuses',
        '> Compiling: most embarrassing childhood album photos...',
        '> Sending to: family group + your friends group...',
        '> Status: RATTED OUT IN REAL TIME ✓'
      ].join('\n'),
      'Uncle/Aunt': [
        '> ANALYZING: Family tree...',
        '> Calculating: favorite among all nieces/nephews... 🏆',
        '> System result: YOU ARE NOT THE FAVORITE 🫢',
        '> Preparing: announcement for next family gathering',
        '> Listing: other nieces/nephews impressive achievements...',
        '> Status: OFFICIAL FAVORITE — IDENTIFIED ✓'
      ].join('\n'),
      'Cousin': [
        '> SCANNING: Shared family album on the cloud...',
        '> Found: birthday photo with cake on your face 🎂',
        '> Recovered: the school play video from 2009...',
        '> Uploading to: Instagram + Facebook + WhatsApp groups...',
        '> Tagging: all extended family + friends...',
        '> Status: FAMILY EMBARRASSMENT — NOW VIRAL ✓'
      ].join('\n'),
      'Grandma/pa': [
        '> ALERT: Grandchild in critical nutrition situation...',
        '> Detected: 3 days without homemade food... 🍲',
        '> Measuring: hours without grandparent hug = 72 hours',
        '> Calculating: pending cheek kisses = 15 🥰',
        '> Activating: grandparent care protocol...',
        '> Status: GRANDCHILD NEEDS ATTENTION — CALL INCOMING ❤️'
      ].join('\n')
    }
  },

  final: {
    amistad: {
      'Friend': 'Just a prank! 😂 I just wanted to remind you that you\'re an incredible friend. Thanks for always being there, for the support and for putting up with me on my bad days. Love you tons! 🤝❤️',
      'Best Friend': 'I would NEVER betray our secrets! 😂 You\'re the person I chose and I\'m so glad I chose so well. You are my best friend and that is priceless. Love you so much! 💙',
      'Partner in crime': 'Just a prank, partner! 😂 Thanks for being my partner in crime. For all the shared adventures, invented excuses and moments only we understand. You are irreplaceable! 🕵️❤️',
      'Soul sibling': 'Gotcha! 😂 No invoice can pay for what you mean to me. We chose to be family even though blood doesn\'t bind us, and that makes it even more special. You are my soul sibling and you know it. ❤️✨'
    },
    amor: {
      'Crush': 'Almost got you! 😜 Just a prank. But I did want to say you seem like someone really special to me. I\'m glad you\'re in my life. Happy day! 💕',
      'Partner': 'Got you! 😂 Just a prank, love. Everything we share is ours and ours alone. Thank you for being my favorite person in this whole wide world. Love you so much! 💕',
      'Boyfriend/Girlfriend': 'Breathe! 😂 No surprise wedding (yet 😏). I just wanted to remind you that you\'re the most important person in my life and every day with you is worth a thousand. Happy Valentine\'s Day! ❤️',
      'Platonic love': 'Take it easy! 😅 Just a prank. But I did want to say I think you\'re an incredible and special person. You have unique energy and the world is better with you in it. ✨💕',
      'Spouse': 'Scaredy-cat! 😂 You know I\'d never do that. I just wanted to remind you that you\'re my favorite person, my home and my favorite adventure. Thank you for choosing me every day. Love you! 💕🏠'
    },
    familiar: {
      'Mom': 'We got you! 😅 Sorry, just a prank. I just wanted to remind you that there are no words to thank you for everything you\'ve given me. You\'re the most incredible person I know. Love you with all my heart, Mom! ❤️',
      'Dad': 'Got you! 😂 Just a prank. But seriously, there\'s no way to repay everything you\'ve taught me. Thanks for being my guide, my reference and my example. Love you so much, Dad! 💙',
      'Sibling': 'Just a prank! 😂 Even if I tease you, I\'d never actually do that. You\'re one of the best things in my life. Thanks for being my partner in crime, my example and my unconditional support. Love you! 🤝❤️',
      'Uncle/Aunt': 'Got you! 😂 Just a prank. You\'re definitely the favorite aunt/uncle (don\'t tell the others!). Thanks for the advice and for always being there when I need you. Love you! ❤️',
      'Cousin': 'Just a prank! 😂 The photos are safe, I promise. Thanks for being part of the best childhood memories and for still being an important part of my life. Love you, cuz! 🎉❤️',
      'Grandma/pa': 'Everything\'s fine, relax! 😊 Just a prank. You\'re one of the most important people in my life and I wanted you to know it. Thanks for so much love, wisdom and homemade food. Love you infinitely, grandma/pa! ❤️'
    }
  },

  games: {
    amor: {
      question:      'Do you forgive me for the prank? 🥺',
      yesBtn:        'Yes ❤️',
      noBtn:         'NO',
      noSurrender:   '💕 I love you too!',
      celebrateText: 'I knew it! 🥰',
      celebrateSub:  'Thanks for forgiving me! Love you so much ❤️'
    },
    amistad: {
      title:    'Prove we\'re real friends! 🤝',
      emoji:    '🤜',
      target:   7,
      progress: 'Handshakes: {n} / {total}',
      done:     'Proven! We\'re the best of friends 🤝💕'
    },
    familiar: {
      title:    'Pay off your hug debt! 🤗',
      emoji:    '🤗',
      target:   5,
      progress: 'Hugs given: {n} / {total}',
      done:     'Debt cleared! We can be at peace ❤️'
    }
  },

  tapTitle: 'You have a surprise',
  tapSub:   'Someone was thinking of you today 💕',
  tapBtn:   'Open it! 💝',
  tapHint:  '🔊 Turn on sound for the full experience',
  greeting: 'For my {sub}!',
  shareBtn: '💌 I want to send this to someone!',
  shareSub: 'Create your own personalized surprise →',
  donationBtn: '☕ Buy the creator a coffee',
  donation: '⚠️ TRANSACTION ERROR:\n\nPayment system is locked because the developer is not legally old enough to have a bank account.\n\nSend chocolate instead! 🍫🍭',
  copied:   '✓ COPIED',
  musicOn:  '🎵 Music ON',
  musicOff: '🔇 Music OFF',
  statsResult: '📊 STATS\n\n🆔 Your device: {did}\n👆 Your visits: {myvisits}\n👥 Total visits: {total}\n🔗 Links generated: {links}\n\n💡 Use "{did}" to filter out your test visits.',
  statsError: 'Could not load statistics.',
  ui: {
    title:    'VIP MESSAGING',
    desc:     'Customize your gift 💝',
    gen:      'Generate Link 🚀',
    rel:      'Relationship type',
    dest:     'Who is it for?',
    msg:      'Your special message',
    msgOpt:   '✨ Optional',
    msgHint:  '💡 If left blank a beautiful default message will be used',
    msgHolder:'Write something special for this person... 💕',
    copy:     'COPY',
    result:   '✅ Your link is ready! Copy and send it:'
  }
}

}; // end config

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let currentLang   = 'es';
let audioCtx      = null;
let audioUnlocked = false;
let musicPlaying  = false;
let musicNodes    = [];
let musicChordTimer = null;
let statsClicks   = 0;
let statsTimer    = null;
let noEscapes     = 0;
let noLastTime    = 0;
let tapCount      = 0;
let hugCount      = 0;
const MAX_ESCAPES = 6;

// ═══════════════════════════════════════════════════════════════
// DEVICE ID  — para estadísticas sin contaminar métricas
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

function getMyVisitCount() {
    return parseInt(localStorage.getItem('sp_visits') || '0', 10);
}
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
    try {
        const r = await fetch(`https://api.countapi.xyz/hit/${NS}/${key}`);
        return (await r.json()).value ?? null;
    } catch (_) { return null; }
}
async function getCounter(key) {
    try {
        const r = await fetch(`https://api.countapi.xyz/get/${NS}/${key}`);
        return (await r.json()).value ?? 0;
    } catch (_) { return '—'; }
}

// ═══════════════════════════════════════════════════════════════
// WEB AUDIO ENGINE  — sin URLs externas
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

// --- FX: clic de teclado (durante tipeo) ---
function playKeyClick() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.03), ctx.sampleRate);
        const d   = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++)
            d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2) * 0.3;
        const src  = ctx.createBufferSource();
        const gain = ctx.createGain();
        src.buffer = buf;
        gain.gain.value = 0.15;
        src.connect(gain); gain.connect(ctx.destination);
        src.start();
    } catch (_) {}
}

// --- FX: alarma susto (55% barra) ---
function playAlarm() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        [0, 0.20, 0.40, 0.60, 0.80].forEach(off => {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(980, t + off);
            osc.frequency.exponentialRampToValueAtTime(220, t + off + 0.18);
            gain.gain.setValueAtTime(0.22, t + off);
            gain.gain.exponentialRampToValueAtTime(0.001, t + off + 0.18);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + off); osc.stop(t + off + 0.18);
        });
    } catch (_) {}
}

// --- FX: glitch noise (80% barra) ---
function playGlitch() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        for (let i = 0; i < 6; i++) {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.value = 100 + Math.random() * 2000;
            gain.gain.setValueAtTime(0.07, t + i * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.04 + 0.035);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.04); osc.stop(t + i * 0.04 + 0.04);
        }
    } catch (_) {}
}

// --- FX: fanfarria de revelación (arpeggio Do mayor) ---
function playFanfare() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, i) => {
            const osc  = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type  = 'sine'; osc.frequency.value  = freq;
            osc2.type = 'triangle'; osc2.frequency.value = freq * 2;
            gain.gain.setValueAtTime(0, t + i * 0.10);
            gain.gain.linearRampToValueAtTime(0.20, t + i * 0.10 + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.10 + 0.6);
            osc.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.10); osc.stop(t + i * 0.10 + 0.6);
            osc2.start(t + i * 0.10); osc2.stop(t + i * 0.10 + 0.6);
        });
    } catch (_) {}
}

// --- FX: pop suave (generar link) ---
function playPop() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, t);
        osc.frequency.exponentialRampToValueAtTime(200, t + 0.12);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(t); osc.stop(t + 0.12);
    } catch (_) {}
}

// --- FX: ding (copiar / juego tap) ---
function playDing(freq1 = 880, freq2 = 1320) {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        [freq1, freq2].forEach((f, i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.value = f;
            gain.gain.setValueAtTime(0, t + i * 0.09);
            gain.gain.linearRampToValueAtTime(0.16, t + i * 0.09 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.09 + 0.45);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.09); osc.stop(t + i * 0.09 + 0.5);
        });
    } catch (_) {}
}

// --- FX: escape NO button ---
function playEscape() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(300, t);
        osc.frequency.exponentialRampToValueAtTime(900, t + 0.07);
        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(t); osc.stop(t + 0.07);
    } catch (_) {}
}

// --- FX: celebración tap/hug game ---
function playCheer() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    try {
        const t = ctx.currentTime;
        // Acorde de celebración C-E-G-C ascendente
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = 'sine'; osc.frequency.value = f;
            gain.gain.setValueAtTime(0, t + i * 0.08);
            gain.gain.linearRampToValueAtTime(0.14, t + i * 0.08 + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.08 + 0.5);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(t + i * 0.08); osc.stop(t + i * 0.08 + 0.5);
        });
    } catch (_) {}
}

// ═══════════════════════════════════════════════════════════════
// MÚSICA AMBIENTAL — progresión F mayor loop
// ═══════════════════════════════════════════════════════════════
// I - vi - IV - V en Fa mayor (Fa, Re-m, Sib, Do)
const CHORDS = [
    [174.61, 261.63, 329.63, 392.00],  // F major:  F3 C4 E4 G4
    [146.83, 220.00, 261.63, 329.63],  // D minor:  D3 A3 C4 E4
    [116.54, 174.61, 220.00, 261.63],  // Bb major: Bb2 F3 A3 C4
    [130.81, 196.00, 261.63, 329.63],  // C major:  C3 G3 C4 E4
];
let chordIdx = 0;
let chordOscNodes = [];

function startChord() {
    if (!musicPlaying) return;
    const ctx = getAudioCtx();
    if (!ctx) return;

    // Fade out previous chord oscillators
    chordOscNodes.forEach(({ gain, osc }) => {
        try {
            gain.gain.setTargetAtTime(0, ctx.currentTime, 0.8);
            setTimeout(() => { try { osc.stop(); } catch (_) {} }, 2500);
        } catch (_) {}
    });
    chordOscNodes = [];

    const chord = CHORDS[chordIdx % CHORDS.length];
    chordIdx++;

    chord.forEach(freq => {
        try {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            // Vibrato suave
            const lfo  = ctx.createOscillator();
            const lfog = ctx.createGain();
            lfo.frequency.value = 4.5;
            lfog.gain.value = 1.5;
            lfo.connect(lfog); lfog.connect(osc.frequency);
            lfo.start();
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.022, ctx.currentTime + 1.5);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start();
            chordOscNodes.push({ osc, gain, lfo });
            musicNodes.push(osc, gain, lfo, lfog);
        } catch (_) {}
    });

    musicChordTimer = setTimeout(startChord, 4000);
}

function startMusic() {
    const ctx = getAudioCtx();
    if (!ctx || !audioUnlocked) return;
    stopMusic();
    musicPlaying = true;
    chordIdx = 0;
    startChord();
    updateMusicBtn();
}

function stopMusic() {
    musicPlaying = false;
    clearTimeout(musicChordTimer);
    musicNodes.forEach(n => {
        try { if (n.stop)       n.stop();       } catch (_) {}
        try { if (n.disconnect) n.disconnect(); } catch (_) {}
    });
    musicNodes = []; chordOscNodes = [];
    updateMusicBtn();
}

function toggleMusic() {
    unlockAudio();
    musicPlaying ? stopMusic() : startMusic();
}

function updateMusicBtn() {
    const btn = document.getElementById('music-btn');
    if (btn) btn.textContent = musicPlaying ? '🎵' : '🔇';
}

// ═══════════════════════════════════════════════════════════════
// HELPERS DE CONTENIDO
// ═══════════════════════════════════════════════════════════════

/**
 * Busca el índice de una sub-categoría en cualquier idioma.
 * Sirve para hacer lookup cross-language (ej: "Mamá" → index 0 → "Mom")
 */
function getSubIndex(cat, sub) {
    for (const l of ['es', 'en']) {
        const idx = (config[l].sub[cat] || []).indexOf(sub);
        if (idx >= 0) return idx;
    }
    return 0;
}

/**
 * Obtiene el trolleo correcto según idioma, categoría y sub-categoría.
 * Fallback: primer trolleo de la categoría.
 */
function getTrolleo(lang, cat, sub) {
    const pool = config[lang]?.trolleos?.[cat];
    if (!pool) return '';
    if (pool[sub]) return pool[sub];
    // Intentar por índice (sub en otro idioma)
    const idx  = getSubIndex(cat, sub);
    const keys = Object.keys(pool);
    return pool[keys[idx]] || pool[keys[0]] || '';
}

/**
 * Obtiene el mensaje final correcto.
 */
function getFinalMsg(lang, cat, sub) {
    const pool = config[lang]?.final?.[cat];
    if (!pool) return '';
    if (pool[sub]) return pool[sub];
    const idx  = getSubIndex(cat, sub);
    const keys = Object.keys(pool);
    return pool[keys[idx]] || pool[keys[0]] || '';
}

// ═══════════════════════════════════════════════════════════════
// LANGUAGE SWITCHING — actualiza TODO el DOM visible
// ═══════════════════════════════════════════════════════════════
function changeLang(lang) {
    currentLang = lang;
    const t  = config[lang];
    const ui = t.ui;

    document.getElementById('btn-lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');

    // ── Actualizar CREATOR VIEW ──
    const cv = document.getElementById('creator-view');
    if (cv && !cv.classList.contains('hidden')) {
        document.getElementById('ui-title').textContent   = ui.title;
        document.getElementById('ui-desc').textContent    = ui.desc;
        document.getElementById('lbl-rel').textContent    = ui.rel;
        document.getElementById('lbl-dest').textContent   = ui.dest;
        document.getElementById('lbl-msg').textContent    = ui.msg;
        document.getElementById('lbl-opt').textContent    = ui.msgOpt;
        document.getElementById('lbl-hint').textContent   = ui.msgHint;
        document.getElementById('lbl-result').textContent = ui.result;
        document.getElementById('custom-message').placeholder = ui.msgHolder;
        document.getElementById('btn-generate').textContent   = ui.gen;
        document.getElementById('btn-copy').textContent       = ui.copy;

        // Reconstruir categorías
        const catSel = document.getElementById('main-category');
        catSel.innerHTML = '';
        for (const key in t.categories) catSel.add(new Option(t.categories[key], key));
        updateSubCats();
    }

    // ── Actualizar RECEIVER VIEW ──
    const rv = document.getElementById('receiver-view');
    if (!rv || rv.classList.contains('hidden')) return;

    const params = new URLSearchParams(window.location.search);

    // Tap overlay (siempre actualizar)
    const el = id => document.getElementById(id);
    if (el('tap-title')) el('tap-title').textContent = t.tapTitle;
    if (el('tap-sub'))   el('tap-sub').textContent   = t.tapSub;
    if (el('tap-btn'))   el('tap-btn').textContent   = t.tapBtn;
    if (el('tap-hint'))  el('tap-hint').textContent  = t.tapHint;

    // Final screen — si está visible, re-renderizar todo
    const fs = el('final-screen');
    if (fs && !fs.classList.contains('hidden')) {
        refreshFinalScreen(lang, params);
    }
}

function refreshFinalScreen(lang, params) {
    const t    = config[lang];
    const cat  = params.get('c') || 'amistad';
    const sub  = decodeURIComponent(params.get('s') || '');
    const el   = id => document.getElementById(id);

    // Saludo
    el('final-greeting').textContent = t.greeting.replace('{sub}', sub);

    // Mensaje (custom o por sub-categoría)
    const rawB64 = params.get('m');
    let msg = getFinalMsg(lang, cat, sub);
    if (rawB64) {
        try {
            const dec = decodeURIComponent(escape(atob(rawB64)));
            if (dec.trim()) msg = dec;
        } catch (_) {}
    }
    el('final-text').textContent = msg;

    // Botones generales
    if (el('btn-share'))   el('btn-share').textContent   = t.shareBtn;
    if (el('share-sub'))   el('share-sub').textContent   = t.shareSub;
    if (el('btn-donation'))el('btn-donation').textContent = t.donationBtn;

    // Textos del juego
    refreshGameUI(lang, cat);
}

function refreshGameUI(lang, cat) {
    const t  = config[lang];
    const g  = t.games[cat];
    const el = id => document.getElementById(id);
    if (!g) return;

    if (cat === 'amor') {
        if (el('question-text'))   el('question-text').textContent   = g.question;
        if (el('btn-yes'))         el('btn-yes').textContent         = g.yesBtn;
        if (el('celebrate-text'))  el('celebrate-text').textContent  = g.celebrateText;
        if (el('celebrate-sub'))   el('celebrate-sub').textContent   = g.celebrateSub;
        // btn-no: solo actualizar si no ha capitulado
        const btnNo = el('btn-no');
        if (btnNo && !btnNo.classList.contains('btn-no-surrender')) {
            btnNo.textContent = g.noBtn;
        }
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
    const text   = document.getElementById('final-url').value;
    const btnCpy = document.getElementById('btn-copy');
    try { await navigator.clipboard.writeText(text); }
    catch (_) {
        const inp = document.getElementById('final-url');
        inp.select(); inp.setSelectionRange(0, 99999);
        try { document.execCommand('copy'); } catch (_2) {}
    }
    playDing();
    const orig = btnCpy.textContent;
    btnCpy.textContent = config[currentLang].copied;
    btnCpy.classList.add('bg-green-700');
    setTimeout(() => { btnCpy.textContent = config[currentLang].ui.copy; btnCpy.classList.remove('bg-green-700'); }, 2000);
}

// ═══════════════════════════════════════════════════════════════
// RECEIVER: PRANK FLOW
// ═══════════════════════════════════════════════════════════════
function beginPrank() {
    unlockAudio();
    document.getElementById('tap-overlay').classList.add('hidden');
    const ps = document.getElementById('prank-screen');
    ps.classList.remove('hidden');
    ps.classList.add('fade-in');
    startTyping(new URLSearchParams(location.search));
}

function startTyping(p) {
    const lang = p.get('l') || 'es';
    const cat  = p.get('c') || 'amistad';
    const sub  = decodeURIComponent(p.get('s') || '');
    const msg  = getTrolleo(lang, cat, sub);

    const el = document.getElementById('prank-text');
    // FIX: white-space:pre-wrap en CSS + textContent (no innerText)
    el.style.whiteSpace = 'pre-wrap';
    el.textContent = '';
    el.classList.remove('terminal-cursor');

    let i = 0, clickEvery = 0;
    const typer = setInterval(() => {
        el.textContent += msg.charAt(i);
        i++;
        clickEvery++;
        const ch = msg.charAt(i - 1);
        if (clickEvery >= 3 && ch !== '\n' && ch !== ' ') {
            clickEvery = 0; playKeyClick();
        }
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
    setTimeout(startMusic, 800); // música empieza después del fanfare

    document.getElementById('prank-screen').classList.add('hidden');
    const fs = document.getElementById('final-screen');
    fs.classList.remove('hidden');
    fs.classList.add('fade-in');

    const lang = p.get('l') || 'es';
    const cat  = p.get('c') || 'amistad';
    const sub  = decodeURIComponent(p.get('s') || '');
    const t    = config[lang];

    // Mensaje final
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

    // Mostrar juego correcto
    initGame(lang, cat, sub);
}

// ═══════════════════════════════════════════════════════════════
// GAMES — un juego por categoría
// ═══════════════════════════════════════════════════════════════
function initGame(lang, cat) {
    const ga = document.getElementById('game-area');
    ga.classList.remove('hidden');

    ['amor','amistad','familiar'].forEach(c => {
        document.getElementById('game-' + c).classList.add('hidden');
    });
    document.getElementById('game-' + cat).classList.remove('hidden');

    refreshGameUI(lang, cat);

    if (cat === 'amistad') initBtnNo = () => {}; // ya no usar initBtnNo para amistad
    if (cat === 'amor')    setTimeout(setupBtnNo, 150);
}

// ── AMOR: Sí / NO fugitivo ──────────────────────────────────

const NO_POSITIONS = [
    { left:'65%',  top:'-30px' },
    { left:'-25%', top:'25px'  },
    { left:'60%',  top:'35px'  },
    { left:'-20%', top:'-28px' },
    { left:'58%',  top:'-18px' },
    { left:'-10%', top:'30px'  },
];

function setupBtnNo() {
    const btnNo = document.getElementById('btn-no');
    if (!btnNo) return;
    noEscapes = 0;
    noLastTime = 0;

    function tryEscape() {
        const now = Date.now();
        if (now - noLastTime < 200) return;
        noLastTime = now;
        noEscapes++;
        playEscape();

        if (noEscapes >= MAX_ESCAPES) {
            // Capitula → se convierte en botón de amor
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
        const pos = NO_POSITIONS[(noEscapes - 1) % NO_POSITIONS.length];
        btnNo.style.left = pos.left;
        btnNo.style.top  = pos.top;
    }

    btnNo.addEventListener('mouseover',  tryEscape);
    btnNo.addEventListener('touchstart', tryEscape, { passive: true });
}

function celebrate() {
    document.getElementById('btn-no-wrapper').style.display = 'none';
    const cm = document.getElementById('celebrate-msg');
    cm.classList.remove('hidden');
    playFanfare();
    launchConfetti();
    setTimeout(() => launchConfetti(), 600);
}

// ── AMISTAD: Apretón de manos ───────────────────────────────
const TAP_TARGET = 7;

function handleTapGame() {
    tapCount++;
    playDing(440 + tapCount * 60, 660 + tapCount * 60);

    // Bounce animation
    const btn = document.getElementById('tap-game-btn');
    btn.classList.add('game-tap-active');
    setTimeout(() => btn.classList.remove('game-tap-active'), 180);

    updateTapProgress(currentLang);

    if (tapCount >= TAP_TARGET) {
        btn.style.pointerEvents = 'none';
        document.getElementById('tap-done-msg').classList.remove('hidden');
        playCheer();
        launchConfetti();
        btn.textContent = '🤝'; // fist meets fist = handshake
    }
}

function updateTapProgress(lang) {
    const g  = config[lang]?.games?.amistad;
    if (!g) return;
    const pct = Math.min(100, Math.round((tapCount / TAP_TARGET) * 100));
    document.getElementById('tap-progress').style.width = pct + '%';
    const txt = g.progress.replace('{n}', Math.min(tapCount, TAP_TARGET)).replace('{total}', TAP_TARGET);
    document.getElementById('tap-progress-text').textContent = txt;
    const doneEl = document.getElementById('tap-done-text');
    if (doneEl) doneEl.textContent = g.done;
}

// ── FAMILIAR: Abrazos virtuales ─────────────────────────────
const HUG_TARGET = 5;

function handleHugGame() {
    hugCount++;
    playDing(300 + hugCount * 30, 500 + hugCount * 30);

    const btn = document.getElementById('hug-game-btn');
    btn.classList.add('game-tap-active');
    setTimeout(() => btn.classList.remove('game-tap-active'), 200);

    updateHugProgress(currentLang);

    if (hugCount >= HUG_TARGET) {
        btn.style.pointerEvents = 'none';
        document.getElementById('hug-done-msg').classList.remove('hidden');
        playCheer();
        launchConfetti();
        btn.textContent = '💝';
    }
}

function updateHugProgress(lang) {
    const g  = config[lang]?.games?.familiar;
    if (!g) return;
    const pct = Math.min(100, Math.round((hugCount / HUG_TARGET) * 100));
    document.getElementById('hug-progress').style.width = pct + '%';
    const txt = g.progress.replace('{n}', Math.min(hugCount, HUG_TARGET)).replace('{total}', HUG_TARGET);
    document.getElementById('hug-progress-text').textContent = txt;
    const doneEl = document.getElementById('hug-done-text');
    if (doneEl) doneEl.textContent = g.done;
}

// ═══════════════════════════════════════════════════════════════
// CONFETI
// ═══════════════════════════════════════════════════════════════
function launchConfetti() {
    const colors = ['#ff4d6d','#ff85a1','#ffd6e0','#ff0054','#ffccd5'];
    confetti({ particleCount: 110, spread: 70, origin:{ y:0.65 }, colors });
    setTimeout(() => {
        confetti({ particleCount: 65, angle: 60,  spread: 55, origin:{ x:0, y:0.7 }, colors });
        confetti({ particleCount: 65, angle: 120, spread: 55, origin:{ x:1, y:0.7 }, colors });
    }, 380);
}

// ═══════════════════════════════════════════════════════════════
// ACCIONES
// ═══════════════════════════════════════════════════════════════
function goToCreator() {
    window.location.href = location.origin + location.pathname;
}

function showDonationJoke() {
    alert(config[currentLang].donation);
}

// ═══════════════════════════════════════════════════════════════
// STATS — clic 5 veces en "Hecho con ❤️ amor"
// ═══════════════════════════════════════════════════════════════
function handleStatsTrigger() {
    statsClicks++;
    clearTimeout(statsTimer);
    statsTimer = setTimeout(() => { statsClicks = 0; }, 2000);
    if (statsClicks >= 5) { statsClicks = 0; showStats(); }
}

async function showStats() {
    const t    = config[currentLang];
    const did  = getDeviceId();
    const myV  = getMyVisitCount();
    const [total, links] = await Promise.all([
        getCounter('visitas-prank'),
        getCounter('links-generados')
    ]);
    if (total === '—' && links === '—') { alert(t.statsError); return; }
    alert(
        t.statsResult
            .replace('{did}',      did)
            .replace('{myvisits}', myV)
            .replace('{total}',    total ?? '?')
            .replace('{links}',    links ?? '?')
    );
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
window.onload = () => {
    const params = new URLSearchParams(location.search);

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

        // Tracking
        hitCounter('visitas-prank');
        hitCounter(`v-${getDeviceId()}`);
        incrementMyVisitCount();

    } else {
        // ── CREATOR MODE ──
        changeLang('es');
    }
};
