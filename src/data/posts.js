export const POSTS = [
  {
    slug: 'claude-design-progetto-reale',
    date: '2026-04-19',
    readTime: 5,
    tag: { it: 'AI', en: 'AI' },
    cover: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    title: {
      it: 'Ho usato Claude Design per un progetto reale: potenziale enorme, limiti concreti',
      en: 'I used Claude Design on a real project: enormous potential, concrete limits',
    },
    excerpt: {
      it: 'Non un test da cinque minuti. Un brief preciso, iterazioni, feedback, modifiche. Ecco cosa ho trovato.',
      en: 'Not a five-minute test. A precise brief, iterations, feedback, revisions. Here\'s what I found.',
    },
    body: {
      it: [
        {
          type: 'lead',
          text: 'Quando Anthropic ha rilasciato Claude Design l\'ho aperto il giorno stesso. Non per curiosità generica — stavo lavorando a un progetto reale e volevo capire se uno strumento del genere potesse cambiare davvero il flusso di lavoro di un frontend developer. Quindi l\'ho usato sul serio, con un brief preciso, iterazioni, feedback, modifiche. Non un test da cinque minuti.',
        },
        {
          type: 'h2',
          text: 'Cosa fa Claude Design, per chi non lo conosce ancora',
        },
        {
          type: 'p',
          html: true,
          text: 'È uno strumento di <strong>Anthropic</strong> — ancora in fase beta — che genera interfacce web direttamente da prompt testuali. Non wireframe, non mockup statici: HTML e CSS funzionanti, con layout, tipografia, colori, interazioni. Descrivi quello che vuoi e lui lo costruisce.',
        },
        {
          type: 'p',
          text: 'Il punto interessante è che non ragiona solo da "esecutore di istruzioni". Fa scelte di design autonome — propone gerarchie visive, sceglie font, bilancia lo spazio. A volte meglio di quanto ti aspetteresti.',
        },
        {
          type: 'h2',
          text: 'Dove funziona davvero bene',
        },
        {
          type: 'p',
          text: 'La velocità di esplorazione è impressionante. In pochi minuti puoi avere tre direzioni visive completamente diverse su cui ragionare. Per la fase di concept — quando ancora non sai esattamente dove vuoi andare — è genuinamente utile.',
        },
        {
          type: 'p',
          text: 'La qualità del primo output è spesso sorprendente. Non il solito risultato generico da template. Con un brief dettagliato riesce a produrre qualcosa con una sua identità visiva, scelte tipografiche coerenti, una palette che funziona.',
        },
        {
          type: 'p',
          text: 'Le iterazioni sono rapide. Descrivi cosa non ti piace e lui aggiusta. Non devi toccare codice, non devi aprire Figma. Per certi tipi di feedback — "i bordi sono troppo squadrati", "voglio qualcosa di più editoriale" — risponde in modo preciso.',
        },
        {
          type: 'h2',
          text: 'Dove si ferma',
        },
        {
          type: 'p',
          html: true,
          text: 'Il limite principale l\'ho incontrato abbastanza presto: l\'<strong>allowance settimanale</strong> si esaurisce velocemente, specialmente se lavori in modo intensivo. Claude Design ha un piano di utilizzo separato dal normale abbonamento Claude, con un tetto che si resetta ogni sette giorni. Per un flusso di lavoro professionale continuativo — non sessioni sporadiche — questo diventa un problema reale.',
        },
        {
          type: 'p',
          text: 'In più, durante le ore di punta il consumo accelera. Quindi non puoi pianificare con precisione quanta autonomia hai in una giornata di lavoro.',
        },
        {
          type: 'p',
          text: 'L\'altro limite è strutturale: è ottimo per esplorare, meno affidabile per definire. Quando hai bisogno di controllo preciso — spaziature esatte, logica di componenti riutilizzabili, integrazione con uno stack specifico — prima o poi devi uscire dallo strumento e metterci le mani tu.',
        },
        {
          type: 'h2',
          text: 'Come lo vedo io, alla fine',
        },
        {
          type: 'p',
          text: 'Non è uno strumento che sostituisce un designer o un frontend developer. È uno strumento che accelera la fase in cui ancora non sai esattamente cosa vuoi. E quella fase, in molti progetti, vale tanto.',
        },
        {
          type: 'p',
          text: 'Se sai usarlo al posto giusto — esplorazione iniziale, validazione rapida di concept, comunicazione visiva con il cliente — diventa un vantaggio reale. Se ti aspetti che gestisca l\'intero processo, ti delude.',
        },
        {
          type: 'p',
          text: 'È beta, e si vede. Ma il potenziale è serio. Vale la pena tenerlo d\'occhio.',
        },
      ],
      en: [
        {
          type: 'lead',
          text: 'When Anthropic released Claude Design I opened it the same day. Not out of general curiosity — I was working on a real project and wanted to understand if a tool like this could genuinely change a frontend developer\'s workflow. So I used it seriously, with a precise brief, iterations, feedback, revisions. Not a five-minute test.',
        },
        {
          type: 'h2',
          text: 'What Claude Design does, for those who don\'t know it yet',
        },
        {
          type: 'p',
          html: true,
          text: 'It\'s a tool by <strong>Anthropic</strong> — still in beta — that generates web interfaces directly from text prompts. Not wireframes, not static mockups: working HTML and CSS, with layout, typography, colors, interactions. Describe what you want and it builds it.',
        },
        {
          type: 'p',
          text: 'The interesting thing is it doesn\'t just act as an "instruction executor". It makes autonomous design choices — proposes visual hierarchies, picks fonts, balances space. Sometimes better than you\'d expect.',
        },
        {
          type: 'h2',
          text: 'Where it actually works well',
        },
        {
          type: 'p',
          text: 'The exploration speed is impressive. In a few minutes you can have three completely different visual directions to think about. For the concept phase — when you don\'t yet know exactly where you want to go — it\'s genuinely useful.',
        },
        {
          type: 'p',
          text: 'The quality of the first output is often surprising. Not the usual generic template result. With a detailed brief it can produce something with its own visual identity, coherent typographic choices, a palette that works.',
        },
        {
          type: 'p',
          text: 'Iterations are fast. Describe what you don\'t like and it adjusts. You don\'t need to touch code, you don\'t need to open Figma. For certain types of feedback — "the borders are too sharp", "I want something more editorial" — it responds precisely.',
        },
        {
          type: 'h2',
          text: 'Where it stops',
        },
        {
          type: 'p',
          html: true,
          text: 'I hit the main limit fairly quickly: the <strong>weekly allowance</strong> runs out fast, especially if you work intensively. Claude Design has a separate usage plan from the regular Claude subscription, with a cap that resets every seven days. For a continuous professional workflow — not sporadic sessions — this becomes a real problem.',
        },
        {
          type: 'p',
          text: 'On top of that, consumption accelerates during peak hours. So you can\'t precisely plan how much capacity you have in a working day.',
        },
        {
          type: 'p',
          text: 'The other limit is structural: it\'s great for exploring, less reliable for defining. When you need precise control — exact spacing, reusable component logic, integration with a specific stack — sooner or later you have to step outside the tool and do it yourself.',
        },
        {
          type: 'h2',
          text: 'How I see it, in the end',
        },
        {
          type: 'p',
          text: 'It\'s not a tool that replaces a designer or a frontend developer. It\'s a tool that accelerates the phase where you don\'t yet know exactly what you want. And that phase, in many projects, is worth a lot.',
        },
        {
          type: 'p',
          text: 'If you know how to use it in the right place — initial exploration, rapid concept validation, visual communication with the client — it becomes a real advantage. If you expect it to manage the entire process, it disappoints.',
        },
        {
          type: 'p',
          text: 'It\'s beta, and it shows. But the potential is serious. Worth keeping an eye on.',
        },
      ],
    },
  },
  {
    slug: 'framer-vs-react',
    date: '2026-04-17',
    readTime: 4,
    tag: { it: 'Front-End', en: 'Front-End' },
    cover: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=80',
    title: {
      it: 'Framer vs React: quando uso l\'uno e quando uso l\'altro',
      en: 'Framer vs React: when I use one and when I use the other',
    },
    excerpt: {
      it: 'Me lo chiedono spesso. La risposta non è "dipende" nel senso vago — è una risposta precisa che viene dal progetto davanti a te.',
      en: 'People ask me often. The answer isn\'t a vague "it depends" — it\'s a precise answer that comes from the project in front of you.',
    },
    body: {
      it: [
        {
          type: 'lead',
          text: 'Me lo chiedono spesso. "Ma tu usi Framer o React?" Come se fosse una scelta definitiva, un\'identità da scegliere. La risposta è: dipende. E non è una risposta vaga — è la risposta più onesta e più utile che posso darti.',
        },
        {
          type: 'h2',
          text: 'Il problema della domanda sbagliata',
        },
        {
          type: 'p',
          text: 'Il confronto Framer vs React presuppone che siano alternative sullo stesso piano. Non lo sono. Sono strumenti diversi che risolvono problemi diversi, e usarli entrambi non è una contraddizione — è un vantaggio.',
        },
        {
          type: 'p',
          text: 'Ho costruito portfolio, siti vetrina e landing page con Framer. Ho costruito gestionali, CRM e interfacce applicative con React. La scelta non l\'ho mai fatta in astratto — l\'ho sempre fatta guardando il progetto davanti a me.',
        },
        {
          type: 'h2',
          text: 'Quando uso Framer',
        },
        {
          type: 'p',
          text: 'Il cliente ha bisogno di un sito online in tempi ragionevoli. Il progetto è prevalentemente visivo — presentazione aziendale, portfolio, landing page di prodotto. Le animazioni e le interazioni contano quanto il contenuto. Non ci sarà logica applicativa complessa, autenticazione, o dati dinamici da gestire.',
        },
        {
          type: 'p',
          text: 'In questi casi Framer è imbattibile. Il risultato finale è visivamente curato, le animazioni sono fluide, e il tempo di consegna si riduce drasticamente. Il cliente ottiene quello che vuole senza aspettare settimane.',
        },
        {
          type: 'p',
          html: true,
          text: 'Ho usato Framer per il portfolio di <strong>Lorenzo Piovani</strong>: un sito interattivo, con transizioni curate, zero compromessi sul design. Fatto in una frazione del tempo che avrei impiegato in React.',
        },
        {
          type: 'h2',
          text: 'Quando uso React',
        },
        {
          type: 'p',
          text: 'Il progetto ha logica. Autenticazione, ruoli utente, dati che cambiano, form complessi, integrazioni con API esterne. Oppure il cliente ha bisogno di qualcosa che cresca nel tempo — nuove funzionalità, nuovi moduli, manutenibilità.',
        },
        {
          type: 'p',
          html: true,
          text: 'React è la scelta giusta quando il frontend è una vera applicazione, non solo una vetrina. Ho lavorato su <strong>due gestionali enterprise</strong> con React e Vite: interfacce complesse, flussi di dati articolati, componenti riutilizzabili. Framer non sarebbe stato nemmeno considerato.',
        },
        {
          type: 'h2',
          text: 'L\'unica cosa che conta davvero',
        },
        {
          type: 'p',
          text: 'La domanda giusta non è "quale strumento preferisci?" ma "cosa deve fare questo progetto?"',
        },
        {
          type: 'p',
          text: 'Un sito vetrina costruito in React quando bastava Framer è tempo sprecato — tuo e del cliente. Un\'applicazione gestionale costruita in Framer è un disastro annunciato.',
        },
        {
          type: 'p',
          text: 'Conoscere entrambi non ti rende indeciso. Ti rende più utile.',
        },
      ],
      en: [
        {
          type: 'lead',
          text: 'People ask me often. "Do you use Framer or React?" As if it were a definitive choice, an identity to pick. The answer is: it depends. And that\'s not a vague answer — it\'s the most honest and useful one I can give you.',
        },
        {
          type: 'h2',
          text: 'The problem with the wrong question',
        },
        {
          type: 'p',
          text: 'Framer vs React assumes they\'re alternatives on the same level. They\'re not. They\'re different tools that solve different problems, and using both isn\'t a contradiction — it\'s an advantage.',
        },
        {
          type: 'p',
          text: 'I\'ve built portfolios, showcase sites and landing pages with Framer. I\'ve built management tools, CRMs and application interfaces with React. I\'ve never made the choice in the abstract — I\'ve always made it by looking at the project in front of me.',
        },
        {
          type: 'h2',
          text: 'When I use Framer',
        },
        {
          type: 'p',
          text: 'The client needs a site online in a reasonable timeframe. The project is primarily visual — company presentation, portfolio, product landing page. Animations and interactions matter as much as the content. There won\'t be complex application logic, authentication, or dynamic data to manage.',
        },
        {
          type: 'p',
          text: 'In these cases Framer is unbeatable. The final result is visually refined, animations are smooth, and delivery time drops dramatically. The client gets what they want without waiting weeks.',
        },
        {
          type: 'p',
          html: true,
          text: 'I used Framer for <strong>Lorenzo Piovani\'s</strong> portfolio: an interactive site with polished transitions, zero design compromises. Done in a fraction of the time it would have taken in React.',
        },
        {
          type: 'h2',
          text: 'When I use React',
        },
        {
          type: 'p',
          text: 'The project has logic. Authentication, user roles, changing data, complex forms, integrations with external APIs. Or the client needs something that grows over time — new features, new modules, maintainability.',
        },
        {
          type: 'p',
          html: true,
          text: 'React is the right choice when the frontend is a real application, not just a showcase. I\'ve worked on <strong>two enterprise management systems</strong> with React and Vite: complex interfaces, articulated data flows, reusable components. Framer wouldn\'t have even been considered.',
        },
        {
          type: 'h2',
          text: 'The only thing that actually matters',
        },
        {
          type: 'p',
          text: 'The right question isn\'t "which tool do you prefer?" but "what does this project need to do?"',
        },
        {
          type: 'p',
          text: 'A showcase site built in React when Framer would have done is wasted time — yours and the client\'s. A management application built in Framer is a guaranteed disaster.',
        },
        {
          type: 'p',
          text: 'Knowing both doesn\'t make you indecisive. It makes you more useful.',
        },
      ],
    },
  },
  {
    slug: 'rag-cos-e-e-perche-lo-userai',
    date: '2026-04-10',
    readTime: 5,
    tag: { it: 'AI', en: 'AI' },
    cover: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
    title: {
      it: 'RAG: cos\'è e perché lo userai prima di quanto pensi',
      en: 'RAG: what it is and why you\'ll use it sooner than you think',
    },
    excerpt: {
      it: 'Gli LLM non sanno nulla dei tuoi dati aziendali. RAG risolve questo — in modo elegante.',
      en: 'LLMs know nothing about your company data. RAG solves this — elegantly.',
    },
    body: {
      it: [
        {
          type: 'lead',
          text: 'C\'è un problema fondamentale con gli LLM che nessuno ti dice subito.',
        },
        {
          type: 'p',
          text: 'ChatGPT, Claude, Gemini — sono tutti addestrati su enormi quantità di dati pubblici fino a una certa data. Poi vengono "congelati" e messi in produzione. Da quel momento in poi non sanno nulla di quello che succede nel mondo. E soprattutto non sanno nulla di dati privati: i tuoi documenti aziendali, il tuo CRM, i contratti con i clienti.',
        },
        {
          type: 'p',
          text: 'Risultato: gli chiedi qualcosa di specifico sulla tua azienda e il modello inventa. Oppure non risponde. In entrambi i casi, inutile.',
        },
        {
          type: 'p',
          text: 'RAG risolve questo problema. E lo fa in modo elegante.',
        },
        {
          type: 'h2',
          text: 'Come funziona, senza fronzoli',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>RAG</strong> sta per <strong>Retrieval Augmented Generation</strong>. Il nome è tecnico ma il concetto è semplice: invece di ri-addestrare il modello ogni volta che hai dati nuovi — operazione costosissima — gli passi le informazioni rilevanti al momento della domanda.',
        },
        {
          type: 'p',
          text: 'Il flusso è questo:',
        },
        {
          type: 'ol',
          items: [
            'L\'utente fa una domanda',
            'Il sistema cerca nei tuoi documenti i pezzi più rilevanti',
            'Li passa al modello insieme alla domanda',
            'Il modello risponde usando quei dati come contesto',
          ],
        },
        {
          type: 'p',
          text: 'Il modello non "impara" i tuoi dati. Li legge al volo, come se stesse consultando un documento prima di risponderti. Per questo si chiama Retrieval Augmented Generation: prima recupera, poi genera.',
        },
        {
          type: 'h2',
          text: 'Perché questo cambia tutto per chi costruisce prodotti',
        },
        {
          type: 'p',
          text: 'Tre vantaggi concreti.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Primo: aggiornamenti near real-time.</strong> Non devi ri-addestrare niente. Aggiorni la knowledge base e il modello risponde con informazioni fresche.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Secondo: risposte specifiche per dominio.</strong> Il modello smette di rispondere in modo generico e inizia a rispondere sul tuo contesto specifico — i tuoi prodotti, i tuoi clienti, la tua documentazione.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Terzo: molto più affidabile.</strong> Il modello si basa su fatti recuperati, non su memoria generica. Meno invenzioni, più precisione.',
        },
        {
          type: 'h2',
          text: 'Chi lo usa già, e su cosa',
        },
        {
          type: 'p',
          text: 'Non è teoria. Ci sono prodotti in produzione che funzionano esattamente così.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Telescope</strong> integra il RAG con i CRM dei clienti: il modello accede a dati sui lead aggiornati e specifici per ogni account, restituendo informazioni contestuali invece di risposte generiche.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Causal</strong> lo usa per la contabilità: integrazione con piattaforme finanziarie, il modello accede ai rendiconti in tempo reale e produce analisi basate sui numeri reali dell\'azienda.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>AIDOC</strong> lo applica alla diagnostica medica per immagini: segnalazione rapida delle anomalie critiche integrando immagini con dati clinici aggiornati.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>COACH AI</strong> di JP Morgan è un agente usato da venditori e consulenti che si interfacciano con clienti. Aggiornato costantemente con dati di mercato in real-time, risponde a domande complesse in modo preciso e tempestivo.',
        },
        {
          type: 'h2',
          text: 'Dove sono io con questo',
        },
        {
          type: 'p',
          html: true,
          text: 'Ho studiato RAG nella prima parte del corso <strong>AI Developer</strong> che sto seguendo con DataMasters. È uno dei concetti che ha più senso pratico da subito — non serve aspettare di essere un ML engineer per capire quando e perché usarlo.',
        },
        {
          type: 'p',
          text: 'Il prossimo step per me è costruirci qualcosa sopra. Probabilmente un chatbot su documenti aziendali, usando LangChain. Quando sarà fatto, ne scrivo qui.',
        },
      ],
      en: [
        {
          type: 'lead',
          text: 'There\'s a fundamental problem with LLMs that nobody tells you about upfront.',
        },
        {
          type: 'p',
          text: 'ChatGPT, Claude, Gemini — they\'re all trained on massive amounts of public data up to a certain date. Then they get "frozen" and deployed. From that point on they know nothing about what happens in the world. And above all, they know nothing about private data: your company documents, your CRM, your client contracts.',
        },
        {
          type: 'p',
          text: 'Result: you ask something specific about your company and the model makes things up. Or it doesn\'t answer. Either way, useless.',
        },
        {
          type: 'p',
          text: 'RAG solves this problem. And it does it elegantly.',
        },
        {
          type: 'h2',
          text: 'How it works, no fluff',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>RAG</strong> stands for <strong>Retrieval Augmented Generation</strong>. The name is technical but the concept is simple: instead of re-training the model every time you have new data — an extremely expensive operation — you pass the relevant information at query time.',
        },
        {
          type: 'p',
          text: 'The flow looks like this:',
        },
        {
          type: 'ol',
          items: [
            'The user asks a question',
            'The system searches your documents for the most relevant pieces',
            'It passes them to the model along with the question',
            'The model responds using that data as context',
          ],
        },
        {
          type: 'p',
          text: 'The model doesn\'t "learn" your data. It reads it on the fly, like consulting a document before answering you. That\'s why it\'s called Retrieval Augmented Generation: first retrieve, then generate.',
        },
        {
          type: 'h2',
          text: 'Why this changes everything for product builders',
        },
        {
          type: 'p',
          text: 'Three concrete advantages.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>First: near real-time updates.</strong> No re-training needed. Update the knowledge base and the model responds with fresh information.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Second: domain-specific responses.</strong> The model stops responding generically and starts answering in your specific context — your products, your clients, your documentation.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Third: much more reliable.</strong> The model relies on retrieved facts, not generic memory. Less hallucination, more precision.',
        },
        {
          type: 'h2',
          text: 'Who\'s already using it, and for what',
        },
        {
          type: 'p',
          text: 'This isn\'t theory. There are products in production that work exactly like this.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Telescope</strong> integrates RAG with client CRMs: the model accesses up-to-date, account-specific lead data, returning contextual information instead of generic responses.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Causal</strong> uses it for accounting: integration with financial platforms, the model accesses real-time statements and produces analysis based on the company\'s actual numbers.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>AIDOC</strong> applies it to medical imaging diagnostics: rapid flagging of critical anomalies by integrating images with updated clinical data.',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>JP Morgan\'s COACH AI</strong> is an agent used by salespeople and advisors interfacing with clients. Constantly updated with real-time market data, it answers complex questions precisely and promptly.',
        },
        {
          type: 'h2',
          text: 'Where I am with this',
        },
        {
          type: 'p',
          html: true,
          text: 'I studied RAG in the first part of the <strong>AI Developer</strong> course I\'m following with DataMasters. It\'s one of the concepts that makes the most practical sense right away — you don\'t need to wait to be an ML engineer to understand when and why to use it.',
        },
        {
          type: 'p',
          text: 'My next step is to build something with it. Probably a chatbot on company documents, using LangChain. When it\'s done, I\'ll write about it here.',
        },
      ],
    },
  },
  {
    slug: 'da-frontend-a-ai-developer',
    date: '2026-04-03',
    readTime: 4,
    tag: { it: 'AI', en: 'AI' },
    cover: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
    title: {
      it: 'Da frontend developer a AI developer: cosa sta cambiando davvero',
      en: 'From frontend developer to AI developer: what\'s actually changing',
    },
    excerpt: {
      it: 'Non l\'ho fatto perché era di moda. L\'ho fatto perché continuavo a usare strumenti AI e volevo capire cosa ci stava sotto.',
      en: 'I didn\'t do it because it was trendy. I did it because I kept using AI tools and wanted to understand what was underneath.',
    },
    body: {
      it: [
        {
          type: 'lead',
          text: 'Non ho iniziato a studiare AI perché era di moda.',
        },
        {
          type: 'p',
          html: true,
          text: 'Ho iniziato perché continuavo a usare strumenti AI — <strong>Cursor</strong>, <strong>Claude</strong>, <strong>n8n</strong> — e ad un certo punto mi sono reso conto che non capivo cosa stava succedendo sotto. Li usavo come scatole nere. E usare una scatola nera senza capirla significa non poterla controllare, non poterla migliorare, non sapere quando ti sta ingannando.',
        },
        {
          type: 'p',
          text: 'Quindi mi sono iscritto al corso AI Developer di DataMasters e ho iniziato.',
        },
        {
          type: 'h2',
          text: 'Cosa sapevo già, senza saperlo',
        },
        {
          type: 'p',
          text: 'La prima sorpresa era positiva. Venire dal frontend aiuta più di quanto pensassi.',
        },
        {
          type: 'p',
          text: 'Lavori già con API, con dati asincroni, con strutture JSON. Hai già l\'abitudine mentale di pensare a input e output, a trasformazioni di dati, a cosa succede quando qualcosa va storto. Questi non sono dettagli — sono la base di come funzionano i sistemi AI in produzione.',
        },
        {
          type: 'p',
          text: 'Anche l\'abitudine a leggere documentazione, a debuggare senza capire subito il problema, a lavorare con librerie che non hai scritto tu — tutto questo trasferisce direttamente.',
        },
        {
          type: 'h2',
          text: 'Cosa ho dovuto imparare davvero da zero',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Python.</strong> Non è difficile — specialmente se conosci già JS — ma richiede tempo per abituarsi alla sintassi, all\'ecosistema, al modo in cui si strutturano i progetti. Ho dovuto rallentare e non dare nulla per scontato.',
        },
        {
          type: 'p',
          text: 'E poi i concetti. Supervised learning, embeddings, vector databases, RAG, fine-tuning — non sono cose che puoi fingere di capire. O le capisci o non puoi usarle bene. Ho dedicato più tempo di quanto mi aspettassi a costruire la base teorica prima di toccare il codice.',
        },
        {
          type: 'h2',
          text: 'Cosa mi ha sorpreso',
        },
        {
          type: 'p',
          text: 'Quanto è pratico, già da subito. Non stai studiando teoria accademica per anni prima di toccare qualcosa di reale. Dopo poche settimane stai già costruendo pipeline, connettendo modelli a dati, vedendo i risultati.',
        },
        {
          type: 'p',
          text: 'RAG, per esempio, l\'ho capito costruendolo — non leggendolo. Ho preso dei documenti, li ho indicizzati in un vector store, ho scritto la pipeline di retrieval, ho visto il modello rispondere con informazioni precise invece di inventare. Quel momento vale più di dieci spiegazioni teoriche.',
        },
        {
          type: 'h2',
          text: 'Dove sono adesso',
        },
        {
          type: 'p',
          text: 'Sto ancora studiando. Non ho finito, e non penso che si finisca mai davvero in un campo che si muove così veloce. Ma ho già una direzione chiara.',
        },
        {
          type: 'p',
          html: true,
          text: 'E questa combinazione — design, frontend, AI — mi sembra la più interessante in cui trovarsi adesso. Non perché sia trendy, ma perché le interfacce tra utenti e sistemi AI sono ancora tutte da inventare. E qualcuno deve farlo bene.',
        },
        {
          type: 'p',
          text: 'Il blog continuerà a documentare questo percorso. Non solo concetti tecnici — anche decisioni, errori, e quello che costruisco strada facendo.',
        },
      ],
      en: [
        {
          type: 'lead',
          text: 'I didn\'t start studying AI because it was trendy.',
        },
        {
          type: 'p',
          html: true,
          text: 'I started because I kept using AI tools — <strong>Cursor</strong>, <strong>Claude</strong>, <strong>n8n</strong> — and at some point I realized I didn\'t understand what was happening underneath. I was using them as black boxes. And using a black box without understanding it means you can\'t control it, can\'t improve it, can\'t tell when it\'s misleading you.',
        },
        {
          type: 'p',
          text: 'So I enrolled in the AI Developer course at DataMasters and started.',
        },
        {
          type: 'h2',
          text: 'What I already knew, without knowing it',
        },
        {
          type: 'p',
          text: 'The first surprise was positive. Coming from frontend helps more than I expected.',
        },
        {
          type: 'p',
          text: 'You already work with APIs, async data, JSON structures. You already have the mental habit of thinking in terms of inputs and outputs, data transformations, what happens when things go wrong. These aren\'t minor details — they\'re the foundation of how AI systems work in production.',
        },
        {
          type: 'p',
          text: 'The habit of reading documentation, debugging without immediately understanding the problem, working with libraries you didn\'t write — all of this transfers directly.',
        },
        {
          type: 'h2',
          text: 'What I had to learn from scratch',
        },
        {
          type: 'p',
          html: true,
          text: '<strong>Python.</strong> It\'s not hard — especially if you already know JS — but it takes time to get used to the syntax, the ecosystem, how projects are structured. I had to slow down and take nothing for granted.',
        },
        {
          type: 'p',
          text: 'And then the concepts. Supervised learning, embeddings, vector databases, RAG, fine-tuning — these aren\'t things you can fake understanding. Either you get them or you can\'t use them well. I spent more time than expected building the theoretical foundation before touching code.',
        },
        {
          type: 'h2',
          text: 'What surprised me',
        },
        {
          type: 'p',
          text: 'How practical it is, right from the start. You\'re not studying academic theory for years before touching anything real. After a few weeks you\'re already building pipelines, connecting models to data, seeing results.',
        },
        {
          type: 'p',
          text: 'RAG, for example, I understood by building it — not by reading about it. I took some documents, indexed them in a vector store, wrote the retrieval pipeline, watched the model answer with precise information instead of making things up. That moment is worth more than ten theoretical explanations.',
        },
        {
          type: 'h2',
          text: 'Where I am now',
        },
        {
          type: 'p',
          text: 'I\'m still studying. I\'m not done, and I don\'t think you\'re ever really done in a field that moves this fast. But I have a clear direction.',
        },
        {
          type: 'p',
          html: true,
          text: 'And this combination — design, frontend, AI — feels like the most interesting place to be right now. Not because it\'s trendy, but because the interfaces between users and AI systems are still all to be invented. And someone has to do it well.',
        },
        {
          type: 'p',
          text: 'This blog will keep documenting the journey. Not just technical concepts — also decisions, mistakes, and what I build along the way.',
        },
      ],
    },
  },
]
