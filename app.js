/* ================================================================
   app.js — Sorpresa Especial 💝  v5.1
   ✅ FIX definitivo texto cortado
   ✅ Fuentes más grandes
   ✅ Trivia card + celebrate-flash
   ✅ 4 modos de música
   ✅ BASE DE DATOS GLOBAL (Firebase) INTEGRADA
   ================================================================ */

// ═══════════════════════════════════════════════════════════════
// 🔥 CONFIGURACIÓN DE FIREBASE (¡EDITA ESTO!) 🔥
// ═══════════════════════════════════════════════════════════════
const firebaseConfig = {
  // ⚠️ COPIA Y PEGA AQUÍ LOS DATOS QUE TE DA FIREBASE CONSOLE ⚠️
 apiKey: "AIzaSyDyHajRLQkSOALF3skm0-Zv7FGNLLPBEj8",
  authDomain: "mensajeriavip-9fb0e.firebaseapp.com",
  databaseURL: "https://mensajeriavip-9fb0e-default-rtdb.firebaseio.com",
  projectId: "mensajeriavip-9fb0e",
  storageBucket: "mensajeriavip-9fb0e.firebasestorage.app",
  messagingSenderId: "412577866667",
  appId: "1:412577866667:web:5b5f99ff7a17a3ba6728ee",
  measurementId: "G-6TW8EH763V"
};

// Inicializar Firebase (Manejo de errores por si no configuras)
let db;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    console.log("Firebase conectado correctamente 🟢");
} catch (e) {
    console.error("Error conectando Firebase (¿Pusiste las keys?):", e);
}

// Función auxiliar para subir contadores a la nube
function subirContadorGlobal(tipo) {
    if (!db) return; // Si no hay DB, no hace nada
    const ref = db.ref('estadisticas_globales/' + tipo);
    ref.set(firebase.database.ServerValue.increment(1));
    
    // Opcional: Registrar visita anónima detallada
    if(tipo === 'visitas') {
        const did = getDeviceId();
        db.ref('visitas_detalle/' + did).update({
            ultima_vez: new Date().toLocaleString(),
            contador_personal: firebase.database.ServerValue.increment(1)
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// CONFIG DE IDIOMAS Y TEXTOS
// ═══════════════════════════════════════════════════════════════
const config = {

// ─── ESPAÑOL ──────────────────────────────────────────────────
es: {
  categories: { amistad:'Amistad 🤝', amor:'Amor ❤️', familiar:'Familiar 🏠' },
  sub: {
    amistad:  ['Amigo/a','Mejor Amigo/a','Cómplice','Hermano/a del alma'],
    amor:     ['Crush','Pareja','Novio/a','Amor Platónico','Esposa/o'],
    familiar: ['Mamá','Papá','Hermano/a','Tío/a','Primo/a','Abuela/o']
  },
  privateGreeting: ['Crush','Amor Platónico'],
  privateGreetingText: '¡Alguien tiene un mensaje secreto para ti!',
  publicGreetingText: '¡{name} te ha enviado una sorpresa!', 
  tapTitle: '¡Sorpresa!',
  tapSub: 'Tienes una dedicatoria especial esperando.',
  tapBtn: 'ABRIR AHORA',
  tapHint: 'Sube el volumen 🔊',
  finalTitle: 'Para ti...',
  finalSubtitle: 'LEE CON ATENCIÓN',
  loadingMsg: 'Descifrando mensaje del corazón...',
  msgTemplate: `Hola, soy {name}. 
  
  Quería tomarme un momento para decirte que eres una persona increíble. {relation_msg}
  
  Gracias por formar parte de mi vida. ✨`,
  relationMsgs: {
    amistad: "Tu amistad es un regalo que valoro muchísimo. Gracias por las risas y los buenos momentos.",
    amor: "Haces que mis días sean más brillantes. Eres muy especial para mí.",
    familiar: "La familia es lo primero y tú eres una parte esencial de la mía. Te quiero."
  },
  question: '¿Aceptas ser mi San Valentín? 🌹',
  btnYes: 'SÍ, ACEPTO ❤️',
  btnNo: 'No...',
  shareBtn: '💌 ¡Quiero enviarle esto a alguien!',
  shareSub: 'Crea tu propia sorpresa personalizada →',
  coffeeBtn: '☕ INVITAR UN CAFÉ AL CREADOR',
  coffeeMsg: '¡Gracias por el gesto! Pero tu sonrisa es el mejor pago. 😊 (Es broma, no hay link de pago)',
  statsResult: `📊 ESTADÍSTICAS DEL SISTEMA 📊\n-----------------------------\n👤 TUS DATOS (Local):\n   - Has entrado: {myvisits} veces\n   - Links creados: {mylinks}\n\n🌍 DATOS GLOBALES (Mundo):\n   - Total Vistas Web: {globalVisits}\n   - Total Links Creados: {globalLinks}\n\n📱 Tu ID: {did}`,
  
  // TRIVIA
  triviaTitle: '🧐 Trivia de San Valentín',
  triviaQuestion: '¿Cuál es el origen de San Valentín?',
  triviaOptions: [
    'Un sacerdote romano encarcelado',
    'Un invento de las tarjetas',
    'Un dios griego antiguo',
    'Un rey medieval enamorado'
  ],
  triviaCorrect: 0,
  triviaSuccess: '¡Correcto! ❤️ Era un sacerdote que casaba parejas en secreto.',
  triviaFail: 'Ups... 💔 Era un sacerdote romano.'
},

// ─── ENGLISH ──────────────────────────────────────────────────
en: {
  categories: { amistad:'Friendship 🤝', amor:'Love ❤️', familiar:'Family 🏠' },
  sub: {
    amistad:  ['Friend','Bestie','Partner in Crime','Soul Sibling'],
    amor:     ['Crush','Partner','Boyfriend/Girlfriend','Platonic Love','Wife/Husband'],
    familiar: ['Mom','Dad','Sibling','Uncle/Aunt','Cousin','Grandparent']
  },
  privateGreeting: ['Crush','Platonic Love'],
  privateGreetingText: 'Someone has a secret message for you!',
  publicGreetingText: '{name} sent you a surprise!',
  tapTitle: 'Surprise!',
  tapSub: 'A special dedication is waiting for you.',
  tapBtn: 'OPEN NOW',
  tapHint: 'Turn up the volume 🔊',
  finalTitle: 'For you...',
  finalSubtitle: 'READ CAREFULLY',
  loadingMsg: 'Deciphering heartfelt message...',
  msgTemplate: `Hi, I'm {name}.
  
  I wanted to take a moment to tell you that you are amazing. {relation_msg}
  
  Thanks for being part of my life. ✨`,
  relationMsgs: {
    amistad: "Your friendship is a gift I cherish. Thanks for the laughs and good times.",
    amor: "You make my days brighter. You are very special to me.",
    familiar: "Family comes first and you are an essential part of mine. Love you."
  },
  question: 'Will you be my Valentine? 🌹',
  btnYes: 'YES, I DO ❤️',
  btnNo: 'No...',
  shareBtn: '💌 I want to send this to someone!',
  shareSub: 'Create your own custom surprise →',
  coffeeBtn: '☕ BUY CREATOR A COFFEE',
  coffeeMsg: 'Thanks! But your smile is the best payment. 😊 (Just kidding, no payment link)',
  statsResult: `📊 SYSTEM STATS 📊\n-----------------------------\n👤 YOUR DATA (Local):\n   - Visits: {myvisits}\n   - Links Created: {mylinks}\n\n🌍 GLOBAL DATA (World):\n   - Total Web Views: {globalVisits}\n   - Total Links Created: {globalLinks}\n\n📱 Your ID: {did}`,
  
  triviaTitle: '🧐 Valentine\'s Trivia',
  triviaQuestion: 'What is the origin of St. Valentine?',
  triviaOptions: [
    'An imprisoned Roman priest',
    'Invention of card companies',
    'An ancient Greek god',
    'A medieval king in love'
  ],
  triviaCorrect: 0,
  triviaSuccess: 'Correct! ❤️ He was a priest who married couples in secret.',
  triviaFail: 'Oops... 💔 He was a Roman priest.'
},

// ─── PORTUGUÊS ────────────────────────────────────────────────
pt: {
  categories: { amistad:'Amizade 🤝', amor:'Amor ❤️', familiar:'Família 🏠' },
  sub: {
    amistad:  ['Amigo(a)','Melhor Amigo(a)','Cúmplice','Irmão(ã) de alma'],
    amor:     ['Crush','Parceiro(a)','Namorado(a)','Amor Platônico','Esposo(a)'],
    familiar: ['Mãe','Pai','Irmão(ã)','Tio(a)','Primo(a)','Avô(ó)']
  },
  privateGreeting: ['Crush','Amor Platônico'],
  privateGreetingText: 'Alguém tem uma mensagem secreta para você!',
  publicGreetingText: '{name} te enviou uma surpresa!',
  tapTitle: 'Surpresa!',
  tapSub: 'Uma dedicatória especial te espera.',
  tapBtn: 'ABRIR AGORA',
  tapHint: 'Aumente o volume 🔊',
  finalTitle: 'Para você...',
  finalSubtitle: 'LEIA COM ATENÇÃO',
  loadingMsg: 'Decifrando mensagem do coração...',
  msgTemplate: `Oi, sou {name}.
  
  Queria tirar um momento para dizer que você é incrível. {relation_msg}
  
  Obrigado por fazer parte da minha vida. ✨`,
  relationMsgs: {
    amistad: "Sua amizade é um presente que valorizo muito. Obrigado pelas risadas.",
    amor: "Você faz meus dias brilharem. É muito especial para mim.",
    familiar: "Família vem primeiro e você é essencial na minha. Te amo."
  },
  question: 'Aceita ser meu San Valentin? 🌹',
  btnYes: 'SIM, ACEITO ❤️',
  btnNo: 'Não...',
  shareBtn: '💌 Quero enviar isso para alguém!',
  shareSub: 'Crie sua própria surpresa →',
  coffeeBtn: '☕ PAGAR UM CAFÉ AO CRIADOR',
  coffeeMsg: 'Obrigado! Mas seu sorriso é o melhor pagamento. 😊',
  statsResult: `📊 ESTATÍSTICAS 📊\n-----------------------------\n👤 SEUS DADOS:\n   - Visitas: {myvisits}\n   - Links criados: {mylinks}\n\n🌍 DADOS GLOBAIS:\n   - Total Visualizações: {globalVisits}\n   - Total Links Criados: {globalLinks}\n\n📱 ID: {did}`,
  triviaTitle: '🧐 Trivia de Namorados',
  triviaQuestion: 'Qual a origem de São Valentim?',
  triviaOptions: ['Sacerdote romano preso','Invenção comercial','Deus grego','Rei medieval'],
  triviaCorrect: 0,
  triviaSuccess: 'Correto! ❤️', triviaFail: 'Ups... 💔 Era um sacerdote.'
},

// ─── FRANÇAIS ─────────────────────────────────────────────────
fr: {
  categories: { amistad:'Amitié 🤝', amor:'Amour ❤️', familiar:'Famille 🏠' },
  sub: {
    amistad:  ['Ami(e)','Meilleur(e) Ami(e)','Complice','Âme sœur'],
    amor:     ['Crush','Partenaire','Petit(e) Ami(e)','Amour Platonique','Époux/se'],
    familiar: ['Maman','Papa','Frère/Sœur','Oncle/Tante','Cousin(e)','Grand-parent']
  },
  privateGreeting: ['Crush','Amour Platonique'],
  privateGreetingText: 'Quelqu\'un a un message secret pour toi!',
  publicGreetingText: '{name} t\'a envoyé une surprise!',
  tapTitle: 'Surprise!',
  tapSub: 'Une dédicace spéciale t\'attend.',
  tapBtn: 'OUVRIR MAINTENANT',
  tapHint: 'Monte le son 🔊',
  finalTitle: 'Pour toi...',
  finalSubtitle: 'LIS ATTENTIVEMENT',
  loadingMsg: 'Déchiffrage du message...',
  msgTemplate: `Salut, c'est {name}.
  
  Je voulais prendre un moment pour te dire que tu es incroyable. {relation_msg}
  
  Merci de faire partie de ma vie. ✨`,
  relationMsgs: {
    amistad: "Ton amitié est un cadeau. Merci pour les rires.",
    amor: "Tu illumines mes journées. Tu es très spécial(e) pour moi.",
    familiar: "La famille d'abord, et tu es essentiel(le). Je t'aime."
  },
  question: 'Veux-tu être mon Valentin? 🌹',
  btnYes: 'OUI, JE LE VEUX ❤️',
  btnNo: 'Non...',
  shareBtn: '💌 Je veux envoyer ça à quelqu\'un!',
  shareSub: 'Crée ta propre surprise →',
  coffeeBtn: '☕ OFFRIR UN CAFÉ AU CRÉATEUR',
  coffeeMsg: 'Merci! Ton sourire suffit. 😊',
  statsResult: `📊 STATISTIQUES 📊\n-----------------------------\n👤 TES DONNÉES:\n   - Visites: {myvisits}\n   - Liens: {mylinks}\n\n🌍 DONNÉES MONDIALES:\n   - Vues: {globalVisits}\n   - Liens: {globalLinks}\n\n📱 ID: {did}`,
  triviaTitle: '🧐 Quiz Saint-Valentin',
  triviaQuestion: 'Origine de Saint Valentin?',
  triviaOptions: ['Prêtre romain','Invention commerciale','Dieu grec','Roi médiéval'],
  triviaCorrect: 0,
  triviaSuccess: 'Correct! ❤️', triviaFail: 'Oups... 💔 C\'était un prêtre.'
},

// ─── ITALIANO ─────────────────────────────────────────────────
it: {
  categories: { amistad:'Amicizia 🤝', amor:'Amore ❤️', familiar:'Famiglia 🏠' },
  sub: {
    amistad:  ['Amico/a','Migliore Amico/a','Complice','Fratello/Sorella'],
    amor:     ['Crush','Partner','Fidanzato/a','Amore Platonico','Sposo/a'],
    familiar: ['Mamma','Papà','Fratello/Sorella','Zio/a','Cugino/a','Nonno/a']
  },
  privateGreeting: ['Crush','Amore Platonico'],
  privateGreetingText: 'Qualcuno ha un messaggio segreto per te!',
  publicGreetingText: '{name} ti ha inviato una sorpresa!',
  tapTitle: 'Sorpresa!',
  tapSub: 'Una dedica speciale ti aspetta.',
  tapBtn: 'APRI ORA',
  tapHint: 'Alza il volume 🔊',
  finalTitle: 'Per te...',
  finalSubtitle: 'LEGGI ATTENTAMENTE',
  loadingMsg: 'Decifrando il messaggio...',
  msgTemplate: `Ciao, sono {name}.
  
  Volevo dirti che sei incredibile. {relation_msg}
  
  Grazie di far parte della mia vita. ✨`,
  relationMsgs: {
    amistad: "La tua amicizia è un dono. Grazie per le risate.",
    amor: "Illumini le mie giornate. Sei speciale.",
    familiar: "La famiglia prima di tutto. Ti voglio bene."
  },
  question: 'Vuoi essere il mio San Valentino? 🌹',
  btnYes: 'SÌ, LO VOGLIO ❤️',
  btnNo: 'No...',
  shareBtn: '💌 Voglio inviarlo a qualcuno!',
  shareSub: 'Crea la tua sorpresa →',
  coffeeBtn: '☕ OFFRI UN CAFFÈ',
  coffeeMsg: 'Grazie! Il tuo sorriso basta. 😊',
  statsResult: `📊 STATISTICHE 📊\n-----------------------------\n👤 I TUOI DATI:\n   - Visite: {myvisits}\n   - Link: {mylinks}\n\n🌍 DATI GLOBALI:\n   - Viste: {globalVisits}\n   - Link: {globalLinks}\n\n📱 ID: {did}`,
  triviaTitle: '🧐 Quiz San Valentino',
  triviaQuestion: 'Origine di San Valentino?',
  triviaOptions: ['Sacerdote romano','Invenzione commerciale','Dio greco','Re medievale'],
  triviaCorrect: 0,
  triviaSuccess: 'Corretto! ❤️', triviaFail: 'Ops... 💔 Era un sacerdote.'
},

// ─── DEUTSCH ──────────────────────────────────────────────────
de: {
  categories: { amistad:'Freundschaft 🤝', amor:'Liebe ❤️', familiar:'Familie 🏠' },
  sub: {
    amistad:  ['Freund(in)','Beste(r) Freund(in)','Komplize','Seelenverwandte(r)'],
    amor:     ['Schwarm','Partner','Freund(in)','Platonische Liebe','Ehepartner'],
    familiar: ['Mama','Papa','Geschwister','Onkel/Tante','Cousin(e)','Großeltern']
  },
  privateGreeting: ['Schwarm','Platonische Liebe'],
  privateGreetingText: 'Jemand hat eine geheime Nachricht für dich!',
  publicGreetingText: '{name} hat dir eine Überraschung geschickt!',
  tapTitle: 'Überraschung!',
  tapSub: 'Eine besondere Widmung wartet auf dich.',
  tapBtn: 'JETZT ÖFFNEN',
  tapHint: 'Ton einschalten 🔊',
  finalTitle: 'Für dich...',
  finalSubtitle: 'BITTE AUFMERKSAM LESEN',
  loadingMsg: 'Nachricht wird entschlüsselt...',
  msgTemplate: `Hallo, ich bin {name}.
  
  Du bist unglaublich. {relation_msg}
  
  Danke, dass du Teil meines Lebens bist. ✨`,
  relationMsgs: {
    amistad: "Deine Freundschaft ist ein Geschenk. Danke für die gute Zeit.",
    amor: "Du machst meine Tage heller. Du bist etwas Besonderes.",
    familiar: "Familie geht vor. Hab dich lieb."
  },
  question: 'Willst du mein Valentin sein? 🌹',
  btnYes: 'JA, ICH WILL ❤️',
  btnNo: 'Nein...',
  shareBtn: '💌 Ich möchte das versenden!',
  shareSub: 'Erstelle deine eigene Überraschung →',
  coffeeBtn: '☕ KAFFEE SPENDIEREN',
  coffeeMsg: 'Danke! Dein Lächeln reicht. 😊',
  statsResult: `📊 STATISTIK 📊\n-----------------------------\n👤 DEINE DATEN:\n   - Besuche: {myvisits}\n   - Links: {mylinks}\n\n🌍 WELTWEITE DATEN:\n   - Aufrufe: {globalVisits}\n   - Links: {globalLinks}\n\n📱 ID: {did}`,
  triviaTitle: '🧐 Valentinstag Quiz',
  triviaQuestion: 'Ursprung von Valentin?',
  triviaOptions: ['Römischer Priester','Kommerzielle Erfindung','Griechischer Gott','König im Mittelalter'],
  triviaCorrect: 0,
  triviaSuccess: 'Richtig! ❤️', triviaFail: 'Ups... 💔 Er war Priester.'
}

};

// ═══════════════════════════════════════════════════════════════
// STATE & VARIABLES
// ═══════════════════════════════════════════════════════════════
let currentCategory = 'amistad';
let currentSub = '';
let currentLang = 'es';

let musicPlaying = false;
let audio = null;

// Stats Secret Menu
let statsClicks = 0;
let statsTimer;

// Trivia State
let isTriviaMode = false;

// ═══════════════════════════════════════════════════════════════
// CREATOR LOGIC
// ═══════════════════════════════════════════════════════════════

function setCategory(cat) {
    currentCategory = cat;
    // Update UI Buttons
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active','border-pink-500','bg-pink-50','text-pink-700'));
    const activeBtn = document.getElementById(`cat-${cat}`);
    activeBtn.classList.add('active','border-pink-500','bg-pink-50','text-pink-700');

    renderSubOptions();
}

function renderSubOptions() {
    const container = document.getElementById('sub-options');
    container.innerHTML = '';
    const subs = config[currentLang].sub[currentCategory];
    
    // Default select first if not set
    if(!subs.includes(currentSub)) currentSub = subs[0];

    subs.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = `py-2 px-3 rounded-xl border text-xs font-bold transition ${sub === currentSub ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`;
        btn.innerText = sub;
        btn.onclick = () => {
            currentSub = sub;
            renderSubOptions(); // Re-render to update classes
        };
        container.appendChild(btn);
    });
}

function generateLink() {
    const nameInput = document.getElementById('sender-name');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert("¡Por favor escribe tu nombre primero! ✍️");
        nameInput.focus();
        return;
    }

    // 1. Guardar en contador GLOBAL (Nube)
    subirContadorGlobal('links');

    // 2. Guardar en contador LOCAL (Tu PC)
    addLink(); 

    // 3. Generar URL
    const baseUrl = window.location.href.split('?')[0];
    const params = new URLSearchParams();
    params.set('c', '1'); // Modo receiver
    params.set('n', encodeURIComponent(name));
    params.set('cat', currentCategory);
    params.set('sub', currentSub);
    params.set('l', currentLang); // Persist Language

    const finalLink = `${baseUrl}?${params.toString()}`;

    // Copy to clipboard
    navigator.clipboard.writeText(finalLink).then(() => {
        alert(`¡Link copiado! 📋\n\nEnvíaselo a tu ${currentSub} ahora mismo.`);
    }).catch(err => {
        prompt("Copia el link manualmente:", finalLink);
    });
}

// ═══════════════════════════════════════════════════════════════
// RECEIVER LOGIC
// ═══════════════════════════════════════════════════════════════

function openGift() {
    document.getElementById('screen-tap').classList.add('hidden');
    document.getElementById('screen-content').classList.remove('hidden');
    
    playMusic();
    typeWriterEffect();
}

function typeWriterEffect() {
    const p = new URLSearchParams(location.search);
    const lang = currentLang;
    const t = config[lang];

    // Decode Name
    let senderName = decodeURIComponent(p.get('n') || '???');
    const cat = p.get('cat') || 'amistad';
    const sub = p.get('sub') || '';

    // Privacy Check
    if (t.privateGreeting.includes(sub)) {
        document.getElementById('final-title').textContent = "Shhh...";
        document.getElementById('msg-line-1').textContent = "Encrypted Message Received";
    }

    // Prepare Text
    let msg = t.msgTemplate
        .replace('{name}', senderName)
        .replace('{relation_msg}', t.relationMsgs[cat]);
    
    // Typing Animation
    const line2 = document.getElementById('msg-line-2');
    line2.innerHTML = ''; 
    let i = 0;
    const speed = 30; // ms

    function type() {
        if (i < msg.length) {
            line2.innerHTML += msg.charAt(i) === '\n' ? '<br>' : msg.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Finished typing
            document.getElementById('msg-line-3').textContent = "— " + senderName;
            setupInteraction(cat, sub, t);
        }
    }
    type();
}

function setupInteraction(cat, sub, t) {
    const interactionArea = document.getElementById('interaction-area');
    const questionText = document.getElementById('question-text');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const triviaArea = document.getElementById('trivia-area');

    // Reset visibility
    interactionArea.classList.remove('hidden');
    triviaArea.classList.add('hidden');

    // Logic: If it is "Novio/a", "Esposo/a" -> PRANK MODE
    const romanticKeywords = ['Novio/a','Esposo/a','Pareja','Boyfriend/Girlfriend','Wife/Husband','Parceiro(a)','Namorado(a)','Petit(e) Ami(e)','Fidanzato/a','Sposo/a'];
    
    if (cat === 'amor' && romanticKeywords.includes(sub)) {
        // PRANK MODE
        questionText.textContent = t.question;
        btnYes.textContent = t.btnYes;
        btnNo.textContent = t.btnNo;
        btnNo.style.display = 'inline-block'; // Ensure it's visible
    } 
    // Logic: If 14 Feb specific or Trivia desired (Example logic)
    else {
        // TRIVIA MODE for friends/family or casual
        interactionArea.classList.add('hidden'); // Hide prank buttons
        triviaArea.classList.remove('hidden');
        isTriviaMode = true;

        document.querySelector('#trivia-area h3').textContent = t.triviaTitle;
        document.getElementById('trivia-question').textContent = t.triviaQuestion;
        
        const optionsContainer = document.getElementById('trivia-options');
        optionsContainer.innerHTML = '';
        t.triviaOptions.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-left hover:bg-slate-100 transition font-medium trivia-btn';
            btn.textContent = opt;
            btn.onclick = () => checkTrivia(idx);
            optionsContainer.appendChild(btn);
        });
    }
}

// ═══════════════════════════════════════════════════════════════
// INTERACTION: PRANK NO BUTTON
// ═══════════════════════════════════════════════════════════════
function moveButton() {
    const btnNo = document.getElementById('btn-no');
    const container = document.getElementById('btn-container'); // Contenedor relativo
    
    // Obtener dimensiones
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Calcular límites dentro del contenedor
    const maxX = containerRect.width - btnRect.width;
    const maxY = 200; // Permitimos que baje un poco más fuera del eje Y original si queremos, o usamos container height
    
    // Generar nueva posición aleatoria
    // Usamos position absolute relativa al contenedor
    // Nota: en CSS #btn-no debe tener position: absolute para que funcione dentro del wrapper
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * 100 - 50; // Mueve arriba/abajo un poco

    btnNo.style.transform = `translate(${newX - (maxX/2)}px, ${newY}px)`;
}

function celebrate() {
    alert("🥰 ¡Sabía que dirías que sí!");
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    playMusic(true); // Switch to celebration music if available
}

// ═══════════════════════════════════════════════════════════════
// TRIVIA LOGIC
// ═══════════════════════════════════════════════════════════════
function checkTrivia(idx) {
    const t = config[currentLang];
    const resultDiv = document.getElementById('trivia-result');
    const resultText = document.getElementById('trivia-result-text');
    const resultIcon = document.getElementById('trivia-result-icon');

    resultDiv.classList.remove('hidden');
    
    if (idx === t.triviaCorrect) {
        // WIN
        resultDiv.className = 'mt-4 p-4 rounded-xl bg-green-100 text-green-700 animate-bounce';
        resultIcon.textContent = '🎉';
        resultText.textContent = t.triviaSuccess;
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        playMusic(true); // Phonk mode
    } else {
        // LOSE
        resultDiv.className = 'mt-4 p-4 rounded-xl bg-red-100 text-red-700 shake';
        resultIcon.textContent = '😢';
        resultText.textContent = t.triviaFail;
    }
}

// ═══════════════════════════════════════════════════════════════
// UTILS & STATS
// ═══════════════════════════════════════════════════════════════
function getDeviceId() {
    let id = localStorage.getItem('device_id');
    if(!id) {
        id = 'U-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        localStorage.setItem('device_id', id);
    }
    return id;
}
function getMyVisits() { return localStorage.getItem('my_visits') || 0; }
function addVisit() { 
    const v = parseInt(getMyVisits()) + 1; 
    localStorage.setItem('my_visits', v); 
}
function getMyLinks() { return localStorage.getItem('my_links') || 0; }
function addLink() {
    const l = parseInt(getMyLinks()) + 1;
    localStorage.setItem('my_links', l);
}

function handleStatsTrigger() {
    statsClicks++; clearTimeout(statsTimer);
    statsTimer = setTimeout(()=>{statsClicks=0;}, 2000);
    if (statsClicks >= 5){ statsClicks=0; showStats(); }
}

function showStats() {
    const t = config[currentLang];
    const did = getDeviceId();
    const myV = getMyVisits();
    const myL = getMyLinks();

    // Mensaje temporal
    const loadingMsg = "📡 Conectando con el mundo...";
    
    if(!db) {
        // Fallback si no hay firebase
        alert(t.statsResult
            .replace('{did}',did)
            .replace('{myvisits}',myV)
            .replace('{mylinks}',myL)
            .replace('{globalVisits}', 'Error DB')
            .replace('{globalLinks}', 'Error DB')
        );
        return;
    }

    // Consulta real a Firebase
    db.ref('estadisticas_globales').once('value').then((snapshot) => {
        const data = snapshot.val() || { visitas: 0, links: 0 };
        const globalV = data.visitas || 0;
        const globalL = data.links || 0;

        alert(t.statsResult
            .replace('{did}',did)
            .replace('{myvisits}',myV)
            .replace('{mylinks}',myL)
            .replace('{globalVisits}', globalV)
            .replace('{globalLinks}', globalL)
        );
    }).catch((error) => {
        alert("Error: " + error.message);
    });
}

function showDonationJoke() {
    alert(config[currentLang].coffeeMsg);
}

function goToCreator() {
    window.location.href = window.location.pathname; // Recarga sin params
}

// ═══════════════════════════════════════════════════════════════
// AUDIO SYSTEM
// ═══════════════════════════════════════════════════════════════
// Melodías (Puedes cambiar las URLs)
const tunes = {
    ambient: "https://cdn.pixabay.com/download/audio/2022/10/05/audio_68636d7596.mp3", // Calm
    romantic: "https://cdn.pixabay.com/download/audio/2022/02/10/audio_fc8c857736.mp3", // Piano Love
    phonk: "https://cdn.pixabay.com/download/audio/2023/04/12/audio_4070fb7630.mp3"    // Celebration
};

function setupFirstClickMusic() {
    document.body.addEventListener('click', () => {
        if(!audio && musicPlaying) playMusic();
    }, { once: true });
}

function playMusic(isCelebration = false) {
    if (audio) audio.pause();
    
    let src = tunes.ambient;
    if (isCelebration) src = tunes.phonk;
    else if (currentCategory === 'amor') src = tunes.romantic;

    audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().then(() => {
        musicPlaying = true;
    }).catch(e => console.log("Autoplay blocked waiting for click"));
}

function toggleMusic() {
    if (!audio) return;
    if (audio.paused) {
        audio.play();
        musicPlaying = true;
    } else {
        audio.pause();
        musicPlaying = false;
    }
}

// ═══════════════════════════════════════════════════════════════
// LANGUAGE HANDLING
// ═══════════════════════════════════════════════════════════════
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.add('grayscale','opacity-60');
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`btn-lang-${lang}`);
    if(activeBtn) {
        activeBtn.classList.remove('grayscale','opacity-60');
        activeBtn.classList.add('active');
    }

    // Refresh text elements
    const t = config[lang];
    
    // Receiver View
    document.getElementById('tap-title').textContent = t.tapTitle;
    document.getElementById('tap-sub').textContent = t.tapSub;
    document.getElementById('tap-btn').textContent = t.tapBtn;
    document.getElementById('tap-hint').textContent = t.tapHint;
    
    document.getElementById('final-subtitle').textContent = t.finalSubtitle;
    document.getElementById('btn-share').textContent = t.shareBtn;
    document.getElementById('share-sub').textContent = t.shareSub;
    document.getElementById('btn-donation').textContent = t.coffeeBtn;

    // Creator View (refresh options)
    renderSubOptions();
    
    // Refresh Categories Names
    document.getElementById('cat-amistad').textContent = t.categories.amistad;
    document.getElementById('cat-amor').textContent = t.categories.amor;
    document.getElementById('cat-familiar').textContent = t.categories.familiar;
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
window.onload = () => {
    
    // --- NUEVO: Contar visita GLOBAL al abrir la web ---
    subirContadorGlobal('visitas'); 
    // ---------------------------------------------------

    // Visita Local
    addVisit();

    const p = new URLSearchParams(location.search);
    setupFirstClickMusic();

    if (p.has('c')) {
        // RECEIVER MODE
        document.getElementById('creator-view').classList.add('hidden');
        document.getElementById('receiver-view').classList.remove('hidden');
        
        // Detect Language from URL
        const lang = p.get('l') || 'es';
        if(config[lang]) changeLanguage(lang);
        
    } else {
        // CREATOR MODE
        renderSubOptions();
        
        // Detect Browser Language (optional auto-select)
        const userLang = navigator.language || navigator.userLanguage; 
        if(userLang.startsWith('en')) changeLanguage('en');
        else if(userLang.startsWith('pt')) changeLanguage('pt');
        // else default es
    }
};
