/* ==========================================================
   KIMPRO — Propuesta interactiva
   Todo el contenido editable está en CONFIG y DATA.
   ========================================================== */

const CONFIG = {
  author: "Eduardo Shande Guerrero",
  authorRole: "Automatización, datos e inteligencia artificial",
  email: "eduardoshandeone@gmail.com",
  phoneDisplay: "+591 731 15185",
  whatsapp: "59173115185",
  proposalId: "KIM-2026-001",
  date: "13 de octubre de 2026",
  validUntil: "28 de octubre de 2026",
  client: "KIMPRO",
  defaultPackage: "profesional",
  workDaysPerMonth: 26,
  aiUsageEstimate: { min: 30, max: 120, mid: 75 } // USD / mes
};

const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");

/* ---------------------------------------------------------- */
/* DATA                                                        */
/* ---------------------------------------------------------- */

const PACKAGES = [
  {
    id: "basico",
    name: "Básico",
    tagline: "Ordenar WhatsApp y quitar a los asesores las preguntas repetitivas.",
    implementation: 1300,
    monthly: 150,
    weeks: 2,
    supportHours: 2,
    summary: "Un agente de IA atiende su WhatsApp las 24 horas, responde preguntas frecuentes, envía el catálogo y pasa al asesor cada cliente listo para comprar, con sus datos ya cargados.",
    dayToDay: [
      "La IA responde al instante en WhatsApp las preguntas frecuentes y envía el catálogo.",
      "Da precios de cliente final desde su lista oficial. Cualquier otro tipo de cliente pasa directamente a un asesor.",
      "Cuando el cliente quiere cotizar o tiene un caso complejo, la conversación llega a un asesor con un resumen y los datos del cliente.",
      "Los 3 asesores trabajan desde una bandeja compartida: nadie responde dos veces y ningún cliente queda sin atender."
    ],
    notIncluded: [
      "Instagram y Facebook",
      "CRM con etapas de venta",
      "Precios diferenciados por tipo de cliente",
      "Cotizaciones y seguimientos automáticos"
    ],
    implBreakdown: [
      ["Conexión oficial de WhatsApp con Meta", 300],
      ["Agente de IA: preguntas frecuentes, catálogo y captura de datos", 650],
      ["Bandeja compartida para los 3 asesores", 200],
      ["Pruebas, capacitación y lanzamiento", 150]
    ],
    monthlyBreakdown: [
      ["Servidor dedicado, copias de seguridad y monitoreo", 40],
      ["Soporte, mantenimiento y mejoras", 110]
    ],
    whatsappEstimate: [0, 10],
    timeline: [
      ["Diagnóstico y entrega de información", 0, 0.5, "client"],
      ["Conexión oficial de WhatsApp", 0.3, 1.2, "work"],
      ["Agente de IA y catálogo", 0.5, 1.6, "work"],
      ["Bandeja compartida", 1.0, 1.6, "work"],
      ["Pruebas con su equipo", 1.5, 1.9, "client"],
      ["Lanzamiento", 1.85, 2, "launch"]
    ]
  },
  {
    id: "profesional",
    name: "Profesional",
    recommended: true,
    tagline: "Los tres canales, precios correctos por tipo de cliente y un CRM con cada oportunidad.",
    implementation: 3200,
    monthly: 320,
    weeks: 5,
    supportHours: 4,
    summary: "Todo lo del Básico en WhatsApp, Instagram y Facebook, más un CRM donde cada consulta calificada se convierte en una oportunidad con su asesor responsable. La IA identifica el tipo de cliente y da el precio correcto desde su lista oficial.",
    why: "Es el paquete que resuelve sus dos problemas principales: tres canales sin un registro central y precios distintos según el tipo de cliente. El Avanzado conviene cuando el equipo ya trabaja a diario en el CRM; si pasan a Avanzado dentro de los primeros 6 meses, pagan solo la diferencia.",
    dayToDay: [
      "Las conversaciones de WhatsApp, Instagram y Facebook llegan a una sola bandeja.",
      "La IA pregunta si el cliente compra para uso propio, para su empresa o para revender, y aplica el precio de esa lista. Los precios de distribuidor solo se muestran a distribuidores registrados.",
      "Cada consulta calificada se registra en el CRM como oportunidad y se asigna automáticamente a un asesor.",
      "Gerencia ve cuántas oportunidades hay en cada etapa, de qué canal vienen y qué asesor las atiende."
    ],
    notIncluded: [
      "Cotización en PDF preparada por la IA",
      "Seguimientos automáticos a clientes que no responden",
      "Tablero de indicadores y reporte semanal"
    ],
    implBreakdown: [
      ["Conexión oficial de WhatsApp, Instagram y Facebook", 500],
      ["CRM: etapas de venta, tipos de cliente y listas de precios", 900],
      ["Agente de IA con acceso controlado a catálogo y precios", 1200],
      ["Bandeja compartida y asignación automática de asesores", 300],
      ["Pruebas, capacitación y lanzamiento", 300]
    ],
    monthlyBreakdown: [
      ["Servidor dedicado, copias de seguridad y monitoreo", 60],
      ["Soporte, mantenimiento y mejoras", 260]
    ],
    whatsappEstimate: [0, 10],
    timeline: [
      ["Diagnóstico y entrega de información", 0, 0.8, "client"],
      ["Conexión de canales oficiales de Meta", 0.5, 2.0, "work"],
      ["CRM, tipos de cliente y listas de precios", 0.8, 2.5, "work"],
      ["Agente de IA con catálogo y precios", 1.5, 3.6, "work"],
      ["Bandeja compartida y asignación", 2.5, 3.6, "work"],
      ["Pruebas con los asesores", 3.6, 4.4, "client"],
      ["Capacitación y lanzamiento", 4.4, 5, "launch"]
    ]
  },
  {
    id: "avanzado",
    name: "Avanzado",
    tagline: "Automatización completa de ventas: cotizaciones, seguimientos e indicadores.",
    implementation: 5500,
    monthly: 450,
    weeks: 8,
    supportHours: 6,
    summary: "Todo lo del Profesional, más cotizaciones en PDF preparadas por la IA y aprobadas por el asesor, seguimiento automático a los clientes que no responden y un tablero de indicadores para gerencia.",
    dayToDay: [
      "Todo lo del paquete Profesional, en los tres canales.",
      "La IA prepara la cotización en PDF con los precios correctos; el asesor la revisa y la envía con un clic.",
      "Si un cliente no responde una cotización, el sistema le escribe a las 24 horas, a los 3 días y a los 7 días.",
      "Gerencia recibe un reporte semanal y tiene un tablero con conversión por canal y por asesor."
    ],
    notIncluded: [
      "Integración con sistemas contables o de inventario (se cotiza aparte si la necesitan)"
    ],
    implBreakdown: [
      ["Todo el paquete Profesional", 3200],
      ["Cotizaciones en PDF preparadas por la IA", 1000],
      ["Seguimientos automáticos por WhatsApp", 600],
      ["Tablero de indicadores y reporte semanal", 500],
      ["Pruebas adicionales y segunda capacitación", 200]
    ],
    monthlyBreakdown: [
      ["Servidor dedicado, copias de seguridad y monitoreo", 70],
      ["Soporte, mantenimiento y mejoras", 380]
    ],
    whatsappEstimate: [10, 40],
    timeline: [
      ["Diagnóstico y entrega de información", 0, 0.8, "client"],
      ["Canales, CRM y agente de IA (fase 1)", 0.5, 3.6, "work"],
      ["Pruebas con los asesores", 3.6, 4.4, "client"],
      ["Lanzamiento fase 1", 4.4, 5, "launch"],
      ["Cotizaciones automáticas", 4.5, 6.2, "work"],
      ["Seguimientos automáticos", 5.5, 6.8, "work"],
      ["Tablero de indicadores", 6.0, 7.2, "work"],
      ["Pruebas finales", 7.0, 7.6, "client"],
      ["Lanzamiento fase 2", 7.6, 8, "launch"]
    ]
  }
];

const COMPARE = [
  { group: "Canales" },
  ["WhatsApp (API oficial de Meta)", true, true, true],
  ["Instagram", false, true, true],
  ["Facebook Messenger", false, true, true],
  ["Bandeja compartida para los 3 asesores", true, true, true],
  { group: "Inteligencia artificial" },
  ["Respuesta 24/7 a preguntas frecuentes", true, true, true],
  ["Envío de catálogo", true, true, true],
  ["Recomendación de productos según la necesidad", true, true, true],
  ["Captura de datos del cliente", true, true, true],
  ["Paso al asesor con resumen de la conversación", true, true, true],
  ["Clasificación por tipo de cliente", false, true, true],
  ["Precios desde la lista oficial", "Solo cliente final", "Todos los tipos", "Todos los tipos"],
  ["Verificación de distribuidores", false, true, true],
  { group: "CRM y ventas" },
  ["CRM con etapas de venta", false, true, true],
  ["Asignación de asesor", "Manual", "Automática", "Automática"],
  ["Historial central de clientes", "Contactos", true, true],
  ["Cotización en PDF preparada por la IA", false, false, true],
  ["Seguimientos automáticos", false, false, true],
  ["Tablero de indicadores y reporte semanal", false, false, true],
  { group: "Servicio" },
  ["Capacitación del equipo", "1 sesión", "2 sesiones", "3 sesiones"],
  ["Cambios menores incluidos al mes", "2 horas", "4 horas", "6 horas"],
  ["Optimización después del lanzamiento", "15 días", "30 días", "30 días"]
];

const FLOW = [
  {
    title: "El cliente escribe",
    who: "sistema",
    whoLabel: "Sistema",
    text: "Por WhatsApp, Instagram o Facebook, a cualquier hora. Todos los mensajes entran al mismo sistema, sin importar el canal.",
    example: "<b>Cliente:</b> “Hola, ¿tienen hidrolavadoras para uso industrial?” — domingo, 21:40."
  },
  {
    title: "La IA entiende la consulta",
    who: "ia",
    whoLabel: "IA",
    text: "Identifica qué necesita el cliente: información general, un producto, un precio, una cotización o un reclamo. Responde al instante lo que puede resolver sola.",
    example: "Responde preguntas frecuentes, envía el catálogo y hace las preguntas que haría un buen vendedor: uso, frecuencia, superficie, cantidad."
  },
  {
    title: "Identifica el tipo de cliente",
    who: "ia",
    whoLabel: "IA",
    text: "Pregunta si compra para uso propio, para su empresa o para revender. Los distribuidores se verifican contra su registro: decir “soy distribuidor” no basta para ver precios mayoristas.",
    example: "<b>Clave para KIMPRO:</b> el precio de distribuidor nunca se muestra a alguien que no esté registrado como distribuidor."
  },
  {
    title: "Recomienda y da el precio correcto",
    who: "sistema",
    whoLabel: "IA + lista oficial",
    text: "El precio sale siempre de su lista oficial para ese tipo de cliente. La IA no puede inventar ni calcular precios. Si un producto no tiene precio cargado, pasa la consulta a un asesor.",
    example: "Ustedes actualizan los precios en el CRM y la IA usa el dato nuevo desde ese momento."
  },
  {
    title: "Registra la oportunidad",
    who: "sistema",
    whoLabel: "Sistema",
    text: "Nombre, empresa, teléfono, ciudad, tipo de cliente, producto, cantidad y canal quedan registrados en el CRM como una oportunidad de venta, con el historial de la conversación.",
    example: "Si el cliente vuelve a escribir en un mes, el sistema ya sabe quién es y qué consultó."
  },
  {
    title: "Asigna un asesor",
    who: "sistema",
    whoLabel: "Sistema",
    text: "La conversación pasa al asesor que corresponde, por turnos o por tipo de cliente (por ejemplo, un asesor dedicado a distribuidores). El asesor recibe un resumen y continúa en el mismo chat.",
    example: "También pasa a un asesor si el cliente lo pide, si es una venta grande, un reclamo o una negociación de precio."
  },
  {
    title: "Cotización",
    who: "asesor",
    whoLabel: "Asesor",
    text: "El asesor prepara y envía la cotización. En el paquete Avanzado, la IA deja la cotización lista en PDF con los precios correctos y el asesor solo la revisa y la envía.",
    example: "La oportunidad pasa a la etapa “Cotización enviada” y queda visible para gerencia."
  },
  {
    title: "Seguimiento y cierre",
    who: "asesor",
    whoLabel: "Asesor + sistema",
    text: "El asesor negocia y cierra. El CRM le recuerda las cotizaciones pendientes; en el paquete Avanzado, el sistema además escribe al cliente que no respondió.",
    example: "Cada oportunidad termina como ganada o perdida, con el motivo. Así se mide qué canal y qué productos venden más."
  }
];

const SCENARIOS = [
  {
    id: "faq",
    tab: "Consulta frecuente",
    channel: "Instagram",
    messages: [
      { from: "c", text: "Hola! Tienen catálogo de productos de limpieza para hoteles?" },
      { from: "a", text: "¡Hola! Sí, tenemos una línea institucional para hoteles: detergentes, desinfectantes, productos para lavandería y máquinas para pisos y alfombras. Te envío el catálogo." },
      { from: "a", text: "📄 Catálogo KIMPRO — Línea institucional.pdf" },
      { from: "a", text: "Para recomendarte lo justo: ¿cuántas habitaciones tiene el hotel y qué necesitas resolver primero, lavandería, pisos o áreas comunes?" },
      { from: "c", text: "Son 40 habitaciones, lo que más nos urge es lavandería" },
      { from: "a", text: "Perfecto. ¿Me compartes el nombre del hotel y un número de contacto? Un asesor te enviará una propuesta para lavandería de 40 habitaciones." }
    ],
    log: [
      [1, "ia", "Consulta frecuente resuelta sin asesor"],
      [2, "sistema", "Catálogo institucional enviado"],
      [4, "ia", "Necesidad detectada: lavandería, hotel de 40 habitaciones"],
      [5, "sistema", "Contacto creado en el CRM: Hotel · canal Instagram"]
    ]
  },
  {
    id: "producto",
    tab: "Recomendación de producto",
    channel: "WhatsApp",
    messages: [
      { from: "c", text: "Buenas, necesito una hidrolavadora para la cocina de un restaurante. Limpiamos pisos y campanas todos los días." },
      { from: "a", text: "¡Hola! Con gusto te ayudo. ¿Cuántas horas al día la usarían, aproximadamente? ¿Y hay mucha grasa acumulada?" },
      { from: "c", text: "Unas 2 horas diarias, y sí, bastante grasa." },
      { from: "a", text: "Para grasa intensa y uso diario conviene agua caliente, que desengrasa sin tanto químico. Tengo dos opciones:\n\n1. Hidrolavadora profesional de agua fría — Bs 7.900\n2. Hidrolavadora profesional de agua caliente — Bs 24.500\n\n¿La compra es a nombre de tu empresa? Así la cotización sale con los datos correctos." },
      { from: "c", text: "Sí, Restaurante El Patio. Me interesa la de agua caliente." },
      { from: "a", text: "Excelente elección para ese uso. Te paso con un asesor que te enviará la cotización formal hoy mismo." },
      { from: "h", text: "Hola, soy el asesor de KIMPRO. Ya tengo tus datos y el modelo. En unos minutos te envío la cotización." }
    ],
    log: [
      [1, "ia", "Necesidad detectada: limpieza de cocina, uso diario"],
      [3, "sistema", "Precios tomados de la lista oficial: cliente empresa"],
      [4, "ia", "Tipo de cliente: empresa"],
      [5, "sistema", "Oportunidad creada: Restaurante El Patio · Bs 24.500"],
      [5, "sistema", "Asignada a Asesor 1 · etapa: Cotización"],
      [6, "asesor", "El asesor continúa en el mismo chat, con el resumen"]
    ]
  },
  {
    id: "distribuidor",
    tab: "Distribuidor no verificado",
    channel: "Facebook",
    messages: [
      { from: "c", text: "Buenas tardes, soy distribuidor en Warnes. ¿Me pasan su lista de precios mayoristas?" },
      { from: "a", text: "¡Buenas tardes! Con gusto. Para compartir precios de distribuidor primero verificamos la cuenta. ¿Me indicas el nombre de tu empresa y tu NIT?" },
      { from: "c", text: "Limpieza Total Warnes, NIT 4587120" },
      { from: "a", text: "Gracias. No encuentro esa empresa en nuestro registro de distribuidores, así que te comunico con el asesor que atiende distribuidores para habilitar tu cuenta. Mientras tanto, te comparto el catálogo general." },
      { from: "h", text: "Hola, soy el asesor de distribuidores de KIMPRO. Te ayudo con el registro y te envío las condiciones para distribuidores." }
    ],
    log: [
      [0, "ia", "Solicitud de precio mayorista detectada"],
      [2, "sistema", "Empresa no registrada como distribuidor", true],
      [3, "sistema", "Precios de distribuidor bloqueados"],
      [3, "sistema", "Lead creado: distribuidor por verificar · Warnes"],
      [3, "sistema", "Asignado a Asesor 2 (distribuidores) · notificación enviada"],
      [4, "asesor", "El asesor toma la conversación"]
    ]
  }
];

const FAQ = [
  ["¿La IA reemplaza a los asesores?", "No. La IA se encarga de lo repetitivo (preguntas frecuentes, catálogo, datos del cliente) para que los 3 asesores dediquen su tiempo a negociar y cerrar ventas. Toda venta pasa por un asesor."],
  ["¿Qué pasa si la IA no sabe responder algo?", "Lo dice y pasa la conversación a un asesor con el resumen. Está configurada para responder solo con la información de KIMPRO; no inventa datos, precios ni plazos de entrega."],
  ["¿Puede dar un precio equivocado?", "Los precios no los escribe la IA: los toma de su lista oficial según el tipo de cliente. Si un producto no tiene precio cargado o el cliente pide un descuento, la consulta pasa a un asesor."],
  ["¿Qué pasa con nuestro número de WhatsApp actual?", "En el diagnóstico revisamos su número. Según su configuración, puede seguir usándose en la app de WhatsApp Business junto con el sistema, o migrarse por completo a la API oficial. Le explicamos las opciones antes de tocar nada."],
  ["¿Por qué usar la API oficial de Meta y no una conexión no oficial?", "Las conexiones no oficiales son más baratas, pero Meta puede bloquear el número sin aviso. Para un negocio que recibe 100 consultas diarias, perder el número principal es un riesgo que no recomendamos correr."],
  ["¿Quién es dueño de los datos de clientes?", "KIMPRO. El sistema se aloja en un servidor dedicado para ustedes y pueden exportar clientes, oportunidades y conversaciones en cualquier momento, incluso si dejan de trabajar con nosotros."],
  ["¿Qué necesitamos entregar para empezar?", "Catálogo de productos, listas de precios por tipo de cliente, registro de distribuidores, las preguntas que más reciben y acceso a la cuenta comercial de Meta (Facebook Business). Les enviamos una lista de verificación el primer día."],
  ["¿Podemos empezar con un paquete y crecer después?", "Sí. Todo se construye para crecer: lo implementado en un paquete se mantiene al pasar al siguiente. Si pasan a un paquete superior dentro de los primeros 6 meses, pagan solo la diferencia de implementación."]
];

/* ---------------------------------------------------------- */
/* STATE                                                       */
/* ---------------------------------------------------------- */

const state = {
  pkg: getInitialPackage(),
  flowIndex: 0,
  scenario: 0,
  simTimers: []
};

function getInitialPackage() {
  const p = new URLSearchParams(location.search).get("paquete");
  return PACKAGES.some((x) => x.id === p) ? p : CONFIG.defaultPackage;
}
const currentPkg = () => PACKAGES.find((p) => p.id === state.pkg);
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

/* ---------------------------------------------------------- */
/* CONFIG BINDINGS                                             */
/* ---------------------------------------------------------- */

function renderConfig() {
  document.querySelectorAll("[data-config]").forEach((n) => {
    n.textContent = CONFIG[n.dataset.config] ?? "";
  });
  document.querySelectorAll("[data-config-href]").forEach((n) => {
    if (n.dataset.configHref === "email") {
      n.href = "mailto:" + CONFIG.email;
      n.textContent = CONFIG.email;
    } else {
      n.href = "https://wa.me/" + CONFIG.whatsapp;
      n.textContent = CONFIG.phoneDisplay;
    }
  });
}

/* ---------------------------------------------------------- */
/* FLOW                                                        */
/* ---------------------------------------------------------- */

function renderFlow() {
  const list = $("#flowSteps");
  list.innerHTML = "";
  FLOW.forEach((step, i) => {
    const li = el("li");
    const b = el("button", "flow__step");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(i === state.flowIndex));
    b.innerHTML = `<span class="flow__num">${i + 1}</span><span>${step.title}</span><span class="who who--${step.who}">${step.whoLabel}</span>`;
    b.addEventListener("click", () => { state.flowIndex = i; renderFlow(); });
    b.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        state.flowIndex = (i + (e.key === "ArrowDown" ? 1 : -1) + FLOW.length) % FLOW.length;
        renderFlow();
        list.querySelectorAll("button")[state.flowIndex].focus();
      }
    });
    li.appendChild(b);
    list.appendChild(li);
  });

  const s = FLOW[state.flowIndex];
  const panel = $("#flowPanel");
  panel.innerHTML = `
    <p class="small">Paso ${state.flowIndex + 1} de ${FLOW.length}</p>
    <h3>${s.title}</h3>
    <span class="who who--${s.who}">${s.whoLabel}</span>
    <p>${s.text}</p>
    <div class="flow__example">${s.example}</div>
    <div class="flow__nav">
      <button type="button" class="btn btn--small btn--ghost" data-dir="-1" ${state.flowIndex === 0 ? "disabled" : ""}>Paso anterior</button>
      <button type="button" class="btn btn--small btn--primary" data-dir="1" ${state.flowIndex === FLOW.length - 1 ? "disabled" : ""}>Siguiente paso</button>
    </div>`;
  panel.querySelectorAll("[data-dir]").forEach((b) =>
    b.addEventListener("click", () => {
      state.flowIndex = Math.min(FLOW.length - 1, Math.max(0, state.flowIndex + Number(b.dataset.dir)));
      renderFlow();
    })
  );
}

function renderFlowPrint() {
  const box = el("ol", "print-only print-flow");
  box.id = "flowPrint";
  box.innerHTML = FLOW.map((s, i) => `<li><b>${i + 1}. ${s.title}</b> (${s.whoLabel}). ${s.text}</li>`).join("");
  $(".flow").after(box);
}

/* ---------------------------------------------------------- */
/* CONVERSATION SIMULATOR                                      */
/* ---------------------------------------------------------- */

function renderSimTabs() {
  const tabs = $("#simTabs");
  tabs.innerHTML = "";
  SCENARIOS.forEach((sc, i) => {
    const b = el("button", "sim__tab", `${sc.tab} <span class="small">(${sc.channel})</span>`);
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(i === state.scenario));
    b.addEventListener("click", () => { state.scenario = i; renderSimTabs(); playScenario(); });
    tabs.appendChild(b);
  });
}

function bubble(msg) {
  const cls = msg.from === "c" ? "bubble--in" : msg.from === "h" ? "bubble--advisor" : "bubble--out";
  const who = msg.from === "a" ? "Asistente KIMPRO (IA)" : msg.from === "h" ? "Asesor de ventas" : "";
  const p = el("p", "bubble " + cls);
  p.innerHTML = (who ? `<span class="bubble__who">${who}</span>` : "") + escapeHtml(msg.text);
  return p;
}

function logItem([, who, text, alert]) {
  const labels = { ia: "IA", sistema: "Sistema", asesor: "Asesor" };
  const li = el("li", alert ? "is-alert" : "");
  li.innerHTML = `<span class="who who--${who}">${labels[who]}</span><span>${text}</span>`;
  return li;
}

function clearSim() {
  state.simTimers.forEach(clearTimeout);
  state.simTimers = [];
  $("#simChat").innerHTML = "";
  $("#simLog").innerHTML = "";
}

function playScenario() {
  clearSim();
  const sc = SCENARIOS[state.scenario];
  const chat = $("#simChat");
  const log = $("#simLog");
  $("#simChannel").textContent = sc.channel;

  if (prefersReducedMotion()) {
    sc.messages.forEach((m) => chat.appendChild(bubble(m)));
    sc.log.forEach((l) => log.appendChild(logItem(l)));
    return;
  }

  let t = 300;
  sc.messages.forEach((m, i) => {
    const isBot = m.from !== "c";
    if (isBot) {
      state.simTimers.push(setTimeout(() => {
        const typing = el("p", "bubble bubble--out bubble--typing", "escribiendo…");
        typing.dataset.typing = "1";
        chat.appendChild(typing);
        chat.scrollTop = chat.scrollHeight;
      }, t));
      t += 900;
    }
    state.simTimers.push(setTimeout(() => {
      chat.querySelectorAll("[data-typing]").forEach((n) => n.remove());
      chat.appendChild(bubble(m));
      chat.scrollTop = chat.scrollHeight;
      sc.log.filter((l) => l[0] === i).forEach((l) => log.appendChild(logItem(l)));
    }, t));
    t += isBot ? 1300 + Math.min(m.text.length * 12, 1400) : 1500;
  });
}

function renderSimPrint() {
  const box = el("div", "print-only");
  box.id = "simPrint";
  box.innerHTML = SCENARIOS.map((sc) => `
    <div class="print-sim">
      <h4>${sc.tab} (${sc.channel})</h4>
      ${sc.messages.map((m) => `<p class="${m.from === "c" ? "c" : "a"}">${m.from === "c" ? "Cliente" : m.from === "h" ? "Asesor" : "IA"}: ${escapeHtml(m.text).replace(/\n+/g, " ")}</p>`).join("")}
      <p class="small">Sistema: ${sc.log.map((l) => l[2]).join("; ")}.</p>
    </div>`).join("");
  $(".sim").appendChild(box);
}

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

/* ---------------------------------------------------------- */
/* PACKAGES                                                    */
/* ---------------------------------------------------------- */

function renderPackages() {
  const wrap = $("#packages");
  wrap.innerHTML = "";
  PACKAGES.forEach((p) => {
    const b = el("button", "pkg");
    b.type = "button";
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", String(p.id === state.pkg));
    b.innerHTML = `
      ${p.recommended ? '<span class="pkg__badge">Recomendado</span>' : ""}
      <span class="pkg__name">${p.name}</span>
      <span class="pkg__tagline">${p.tagline}</span>
      <span class="pkg__price">${usd(p.implementation)}<small>pago único</small></span>
      <span class="pkg__monthly">+ ${usd(p.monthly)} al mes de soporte e infraestructura</span>
      <span class="pkg__time">Listo en ${p.weeks} semanas</span>
      <span class="pkg__select">${p.id === state.pkg ? "Paquete seleccionado" : "Ver qué incluye"}</span>`;
    b.addEventListener("click", () => selectPackage(p.id, true));
    wrap.appendChild(b);
  });
}

function selectPackage(id, scroll) {
  state.pkg = id;
  const url = new URL(location.href);
  url.searchParams.set("paquete", id);
  history.replaceState(null, "", url);
  renderPackages();
  renderDetail();
  renderCompare();
  renderInvestment();
  renderSupport();
  renderRoi();
  renderCta();
  if (scroll) {
    $("#pkgDetail").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }
}

function renderDetail() {
  const p = currentPkg();
  const firstYear = p.implementation + p.monthly * 12;
  const others = PACKAGES.filter((x) => x.id !== p.id);
  $("#pkgDetail").innerHTML = `
    <div class="detail__head">
      <h3>Si eligen el paquete ${p.name}</h3>
      <span class="detail__switch">Comparar con: ${others.map((o) => `<button type="button" class="btn btn--small btn--ghost" data-switch="${o.id}">${o.name}</button>`).join(" ")}</span>
    </div>
    <p class="detail__summary">${p.summary}</p>
    ${p.why ? `<div class="flow__example" style="margin:-8px 0 28px"><b>Por qué lo recomendamos.</b> ${p.why}</div>` : ""}
    <div class="detail__grid">
      <div>
        <h4>Cómo cambia el día a día</h4>
        <ul class="list list--check">${p.dayToDay.map((d) => `<li>${d}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Lo que no incluye</h4>
        <ul class="list list--minus">${p.notIncluded.map((d) => `<li>${d}</li>`).join("")}</ul>
        <h4 style="margin-top:28px">Inversión</h4>
        <div class="invest__line"><span>Implementación (pago único)</span><strong>${usd(p.implementation)}</strong></div>
        <div class="invest__line"><span>Soporte e infraestructura</span><strong>${usd(p.monthly)} / mes</strong></div>
        <div class="invest__line"><span>Primer año, sin costos de terceros</span><strong>${usd(firstYear)}</strong></div>
        <p class="small" style="margin-top:8px"><a href="#inversion">Ver el detalle completo, incluidos los costos de terceros</a></p>
      </div>
    </div>
    ${renderTimeline(p)}`;
  $("#pkgDetail").querySelectorAll("[data-switch]").forEach((b) =>
    b.addEventListener("click", () => selectPackage(b.dataset.switch, false))
  );
}

function renderTimeline(p) {
  const total = Math.ceil(p.weeks);
  const scale = Array.from({ length: total }, (_, i) => `<span>Semana ${i + 1}</span>`).join("");
  const rows = p.timeline.map(([label, start, end, type]) => {
    const left = (start / total) * 100;
    const width = Math.max(((end - start) / total) * 100, 2);
    const cls = type === "client" ? "timeline__bar--client" : type === "launch" ? "timeline__bar--launch" : "";
    return `<div class="timeline__row"><span class="timeline__label">${label}</span>
      <div class="timeline__track"><span class="timeline__bar ${cls}" style="left:${left}%;width:${width}%"></span></div></div>`;
  }).join("");
  return `
    <div class="timeline">
      <h4>Cronograma: ${p.weeks} semanas desde la entrega de información</h4>
      <div class="timeline__scale" style="grid-template-columns:repeat(${total},1fr)">${scale}</div>
      ${rows}
      <div class="timeline__legend"><span>Trabajo nuestro</span><span class="lg-client">Participación de su equipo</span><span class="lg-launch">Lanzamiento</span></div>
      <p class="small" style="margin-top:10px">La verificación de la cuenta comercial en Meta depende de Meta y puede tomar algunos días; la iniciamos en la primera semana para que no retrase el lanzamiento.</p>
    </div>`;
}

function renderCompare() {
  const idx = PACKAGES.findIndex((p) => p.id === state.pkg) + 1;
  const sel = (i) => (i === idx ? ' class="is-selected"' : "");
  const cell = (v) => (v === true ? '<span class="yes" aria-label="Incluido">✓</span>' : v === false ? '<span class="no" aria-label="No incluido">—</span>' : v);
  const head = `<thead><tr><th scope="col">Función</th>${PACKAGES.map((p, i) => `<th scope="col"${sel(i + 1)}>${p.name}</th>`).join("")}</tr></thead>`;
  const body = COMPARE.map((row) =>
    row.group
      ? `<tr class="group"><td colspan="4">${row.group}</td></tr>`
      : `<tr><td>${row[0]}</td>${row.slice(1).map((v, i) => `<td${sel(i + 1)}>${cell(v)}</td>`).join("")}</tr>`
  ).join("");
  $("#compareTable").innerHTML = head + "<tbody>" + body + "</tbody>";
}

/* ---------------------------------------------------------- */
/* INVESTMENT                                                  */
/* ---------------------------------------------------------- */

function thirdParty(p) {
  const ai = CONFIG.aiUsageEstimate;
  const [wMin, wMax] = p.whatsappEstimate;
  return { min: ai.min + wMin, max: ai.max + wMax, mid: ai.mid + (wMin + wMax) / 2, wMin, wMax };
}

function renderInvestment() {
  const p = currentPkg();
  const tp = thirdParty(p);
  const firstYearMin = p.implementation + p.monthly * 12 + tp.min * 12;
  const firstYearMax = p.implementation + p.monthly * 12 + tp.max * 12;
  const lines = (arr) => arr.map(([l, v]) => `<div class="invest__line"><span>${l}</span><strong>${usd(v)}</strong></div>`).join("");

  $("#investBlock").innerHTML = `
    <div class="invest__box">
      <h3>Implementación, pago único</h3>
      <span class="who who--ia">Paquete ${p.name}</span>
      ${lines(p.implBreakdown)}
      <div class="invest__line invest__line--total"><span>Total implementación</span><strong>${usd(p.implementation)}</strong></div>
    </div>
    <div class="invest__box">
      <h3>Mensualidad a nosotros</h3>
      <span class="who who--sistema">Desde el lanzamiento</span>
      ${lines(p.monthlyBreakdown)}
      <div class="invest__line invest__line--total"><span>Total mensual</span><strong>${usd(p.monthly)}</strong></div>
    </div>
    <div class="invest__box invest__box--wide">
      <h3>Costos de terceros, estimados</h3>
      <span class="who who--asesor">Se pagan al costo, sin margen nuestro</span>
      <div class="invest__line"><span>Uso de inteligencia artificial (según volumen de conversaciones)</span><strong>${usd(CONFIG.aiUsageEstimate.min)} – ${usd(CONFIG.aiUsageEstimate.max)} / mes</strong></div>
      <div class="invest__line"><span>WhatsApp: respuestas a mensajes que inicia el cliente</span><strong>Sin costo</strong></div>
      <div class="invest__line"><span>WhatsApp: mensajes que inicia KIMPRO después de 24 horas${p.id === "avanzado" ? " (seguimientos)" : ""}</span><strong>${tp.wMax === 0 ? "Sin costo" : `${usd(tp.wMin)} – ${usd(tp.wMax)} / mes`}</strong></div>
      <div class="invest__line"><span>Instagram y Facebook Messenger</span><strong>Sin costo</strong></div>
      <div class="invest__line"><span>Licencias de CRM y bandeja compartida (código abierto, en su servidor)</span><strong>Sin costo</strong></div>
      <div class="invest__line invest__line--total"><span>Primer año completo, estimado (implementación + 12 meses + terceros)</span><strong>${usd(firstYearMin)} – ${usd(firstYearMax)}</strong></div>
      <p>Las tarifas de Meta y de los proveedores de IA las fijan ellos y pueden cambiar. Les mostramos el consumo real cada mes.</p>
    </div>`;
}

function renderInvestmentPrint() {
  const rows = [
    ["Implementación (pago único)", (p) => usd(p.implementation)],
    ["Soporte e infraestructura mensual", (p) => usd(p.monthly) + " / mes"],
    ["Costos de terceros estimados", (p) => { const t = thirdParty(p); return `${usd(t.min)} – ${usd(t.max)} / mes`; }],
    ["Plazo de implementación", (p) => `${p.weeks} semanas`],
    ["Cambios menores incluidos", (p) => `${p.supportHours} h / mes`],
    ["Primer año estimado", (p) => { const t = thirdParty(p); return `${usd(p.implementation + p.monthly * 12 + t.min * 12)} – ${usd(p.implementation + p.monthly * 12 + t.max * 12)}`; }]
  ];
  $("#investPrint").innerHTML = `
    <table class="print-table">
      <thead><tr><th></th>${PACKAGES.map((p) => `<th class="${p.recommended ? "rec" : ""}">${p.name}${p.recommended ? " (recomendado)" : ""}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([l, f]) => `<tr><td>${l}</td>${PACKAGES.map((p) => `<td class="${p.recommended ? "rec" : ""}">${f(p)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
    <p class="small">Costos de terceros: uso de IA (${usd(CONFIG.aiUsageEstimate.min)}–${usd(CONFIG.aiUsageEstimate.max)} al mes) y mensajes de WhatsApp que inicia KIMPRO fuera de la ventana de 24 horas. Las respuestas a clientes, Instagram, Facebook y las licencias de CRM y bandeja no tienen costo. Se pagan al costo, sin margen.</p>`;
}

function renderSupport() {
  const p = currentPkg();
  $("#supportList").innerHTML = [
    "Servidor dedicado, copias de seguridad diarias y monitoreo.",
    "Corrección de errores sin costo adicional.",
    "Revisión mensual de conversaciones para mejorar las respuestas de la IA.",
    `Hasta ${p.supportHours} horas al mes de cambios menores: textos, preguntas frecuentes, ajustes de flujos.`,
    "Soporte por WhatsApp en horario laboral; respuesta en menos de 4 horas hábiles ante fallas críticas.",
    "Actualizaciones de seguridad."
  ].map((t) => `<li>${t}</li>`).join("");
}

/* ---------------------------------------------------------- */
/* ROI CALCULATOR                                              */
/* ---------------------------------------------------------- */

const ROI_FIELDS = [
  { id: "consultas", label: "Consultas por día", min: 20, max: 300, step: 5, value: 100, fmt: (v) => v, help: "Suma de WhatsApp, Instagram y Facebook." },
  { id: "resueltas", label: "Consultas que la IA resuelve o califica sola", min: 10, max: 80, step: 5, value: 50, fmt: (v) => v + "%", help: "Preguntas frecuentes, catálogo, datos del cliente. 40–60% es habitual en el primer mes." },
  { id: "minutos", label: "Minutos de asesor que ahorra cada una", min: 1, max: 15, step: 1, value: 5, fmt: (v) => v + " min", help: "Leer, responder, buscar el precio, pedir datos." },
  { id: "costoHora", label: "Costo por hora de un asesor", min: 2, max: 10, step: 0.5, value: 3.5, fmt: (v) => "$" + v.toFixed(1), help: "Sueldo y cargas sociales divididos por horas trabajadas." },
  { id: "ventasExtra", label: "Ventas adicionales al mes", min: 0, max: 20, step: 1, value: 4, fmt: (v) => v, help: "Por responder al instante, fuera de horario y con seguimiento. Es el valor más incierto: use un número prudente." },
  { id: "ticket", label: "Venta promedio", min: 100, max: 3000, step: 50, value: 600, fmt: (v) => usd(v), help: "Valor promedio de una venta en dólares." },
  { id: "margen", label: "Margen bruto", min: 10, max: 60, step: 5, value: 30, fmt: (v) => v + "%", help: "" }
];
const roiValues = Object.fromEntries(ROI_FIELDS.map((f) => [f.id, f.value]));

function renderRoiForm() {
  const form = $("#roiForm");
  form.innerHTML = ROI_FIELDS.map((f) => `
    <div class="field">
      <label for="roi-${f.id}"><span>${f.label}</span><output id="roi-${f.id}-out">${f.fmt(f.value)}</output></label>
      <input type="range" id="roi-${f.id}" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}">
      ${f.help ? `<small>${f.help}</small>` : ""}
    </div>`).join("");
  ROI_FIELDS.forEach((f) => {
    $("#roi-" + f.id).addEventListener("input", (e) => {
      roiValues[f.id] = Number(e.target.value);
      $("#roi-" + f.id + "-out").textContent = f.fmt(roiValues[f.id]);
      renderRoi();
    });
  });
}

function renderRoi() {
  const p = currentPkg();
  const v = roiValues;
  const hours = (v.consultas * CONFIG.workDaysPerMonth * (v.resueltas / 100) * v.minutos) / 60;
  const timeValue = hours * v.costoHora;
  const salesValue = v.ventasExtra * v.ticket * (v.margen / 100);
  const monthlyCost = p.monthly + thirdParty(p).mid;
  const net = timeValue + salesValue - monthlyCost;
  const payback = net > 0 ? p.implementation / net : null;
  const fte = hours / (8 * CONFIG.workDaysPerMonth);

  $("#roiOut").innerHTML = `
    <dl class="roi__card roi__card--main">
      <dt>Beneficio neto mensual estimado, paquete ${p.name}</dt>
      <dd>${net > 0 ? usd(net) : "Sin beneficio neto"}</dd>
      <dt style="margin-top:14px">La implementación se recupera en</dt>
      <dd>${payback ? (payback < 1 ? "menos de 1 mes" : payback.toFixed(1).replace(".", ",") + " meses") : "No se recupera con estos supuestos"}</dd>
    </dl>
    <dl class="roi__grid">
      <div class="roi__card"><dt>Horas de asesor liberadas al mes</dt><dd>${Math.round(hours)} <small>h (${fte.toFixed(1).replace(".", ",")} personas)</small></dd></div>
      <div class="roi__card"><dt>Valor de ese tiempo</dt><dd>${usd(timeValue)}</dd></div>
      <div class="roi__card"><dt>Margen de ventas adicionales</dt><dd>${usd(salesValue)}</dd></div>
      <div class="roi__card"><dt>Costo mensual total</dt><dd>${usd(monthlyCost)} <small>incl. terceros</small></dd></div>
    </dl>
    <p class="roi__note">El tiempo liberado no reduce costos por sí solo: su valor real está en que los asesores lo usen para vender más. Por eso las ventas adicionales pesan más en el resultado que las horas.</p>`;
}

/* ---------------------------------------------------------- */
/* FAQ + CTA                                                   */
/* ---------------------------------------------------------- */

function renderFaq() {
  $("#faq").innerHTML = FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
}

function renderCta() {
  const p = currentPkg();
  $("#ctaPkg").textContent = `${p.name} (${usd(p.implementation)} + ${usd(p.monthly)}/mes)`;
  const msg = `Hola Eduardo, revisamos la propuesta ${CONFIG.proposalId}. Nos interesa el paquete ${p.name}. ¿Coordinamos la reunión para confirmar el alcance?`;
  $("#ctaWhatsapp").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  $("#ctaWhatsapp").textContent = `Elegir ${p.name} por WhatsApp`;
  $("#ctaEmail").href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Propuesta " + CONFIG.proposalId + " — paquete " + p.name)}&body=${encodeURIComponent(msg)}`;
}

/* ---------------------------------------------------------- */
/* PRINT                                                       */
/* ---------------------------------------------------------- */

function setupPrint() {
  // Open all FAQ and the technical detail when printing, then restore.
  let opened = [];
  window.addEventListener("beforeprint", () => {
    opened = [...document.querySelectorAll("details:not([open])")];
    opened.forEach((d) => d.setAttribute("open", ""));
  });
  window.addEventListener("afterprint", () => opened.forEach((d) => d.removeAttribute("open")));

  // If the PDF file is not in the repository yet, fall back to the browser's print dialog.
  document.querySelectorAll("[data-pdf-link]").forEach((a) => {
    fetch(a.getAttribute("href"), { method: "HEAD" })
      .then((r) => { if (!r.ok) throw new Error(); })
      .catch(() => {
        a.removeAttribute("download");
        a.addEventListener("click", (e) => { e.preventDefault(); window.print(); });
      });
  });
}

/* ---------------------------------------------------------- */
/* INIT                                                        */
/* ---------------------------------------------------------- */

function init() {
  renderConfig();
  renderFlow();
  renderFlowPrint();
  renderSimTabs();
  renderSimPrint();
  renderRoiForm();
  renderFaq();
  renderInvestmentPrint();
  selectPackage(state.pkg, false);
  $("#simReplay").addEventListener("click", playScenario);

  // Start the conversation only when the section becomes visible.
  const sim = $("#demo");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { playScenario(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(sim);
  } else {
    playScenario();
  }
  setupPrint();
}

document.addEventListener("DOMContentLoaded", init);
