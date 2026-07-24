const SHEET_ID = '1YJqISqU7KNN3mv-Vs1x6iTBfsNFcckOT1a_9ENnFmAA';
    const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
    const COURSE_DATA = [{"courseNumber": "AIMLCZG557", "course": "Artificial and Computational Intelligence (Core)", "ec2Regular": "21-06-2026 (AN)", "ec2MakeUp": "28-06-2026 (AN)", "ec3Regular": "06-09-2026 (AN)", "ec3MakeUp": "13-09-2026 (AN)"}, {"courseNumber": "AIMLCZG512", "course": "Deep Reinforcement Learning (Core)", "ec2Regular": "21-06-2026 (FN)", "ec2MakeUp": "28-06-2026 (FN)", "ec3Regular": "06-09-2026 (FN)", "ec3MakeUp": "13-09-2026 (FN)"}, {"courseNumber": "AIML ZG540", "course": "Video Analysis", "ec2Regular": "21-06-2026 (EN)", "ec2MakeUp": "28-06-2026 (EN)", "ec3Regular": "06-09-2026 (EN)", "ec3MakeUp": "13-09-2026 (EN)"}, {"courseNumber": "AIMLCZG533", "course": "Unsupervised Deep learning", "ec2Regular": "21-06-2026 (EN)", "ec2MakeUp": "28-06-2026 (EN)", "ec3Regular": "06-09-2026 (EN)", "ec3MakeUp": "13-09-2026 (EN)"}, {"courseNumber": "AIMLCZG530", "course": "Natural Language Processing", "ec2Regular": "20-06-2026 (FN)", "ec2MakeUp": "27-06-2026 (FN)", "ec3Regular": "05-09-2026 (FN)", "ec3MakeUp": "12-09-2026 (FN)"}, {"courseNumber": "AIMLCZG567", "course": "AI and ML Techniques for Cyber Security", "ec2Regular": "20-06-2026 (AN)", "ec2MakeUp": "27-06-2026 (AN)", "ec3Regular": "05-09-2026 (AN)", "ec3MakeUp": "12-09-2026 (AN)"}, {"courseNumber": "AIMLCZG525", "course": "Computer Vision", "ec2Regular": "20-06-2026 (AN)", "ec2MakeUp": "27-06-2026 (AN)", "ec3Regular": "05-09-2026 (AN)", "ec3MakeUp": "12-09-2026 (AN)"}, {"courseNumber": "AIMLCZG546", "course": "Software Engineering for Machine Learning", "ec2Regular": "20-06-2026 (AN)", "ec2MakeUp": "27-06-2026 (AN)", "ec3Regular": "05-09-2026 (AN)", "ec3MakeUp": "12-09-2026 (AN)"}, {"courseNumber": "AIMLCZG537", "course": "Information Retrieval", "ec2Regular": "20-06-2026 (EN)", "ec2MakeUp": "27-06-2026 (EN)", "ec3Regular": "05-09-2026 (EN)", "ec3MakeUp": "12-09-2026 (EN)"}, {"courseNumber": "AIMLCZG529", "course": "Data Management for Machine Learning", "ec2Regular": "20-06-2026 (EN)", "ec2MakeUp": "27-06-2026 (EN)", "ec3Regular": "05-09-2026 (EN)", "ec3MakeUp": "12-09-2026 (EN)"}, {"courseNumber": "AIMLCZG515", "course": "Distributed Machine Learning", "ec2Regular": "20-06-2026 (EN)", "ec2MakeUp": "27-06-2026 (EN)", "ec3Regular": "05-09-2026 (EN)", "ec3MakeUp": "12-09-2026 (EN)"}];

    function showTab(tabId, btn) {

  document.querySelectorAll('.subject-content').forEach(el => {
    el.style.display = 'none';
  });

const main = document.getElementById('sem2-main-content');
if (main && tabId === 'sem2') {
    main.style.display = '';
}
      
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.add('hidden');
  });

  const tab = document.getElementById(tabId);

  if (tab) {
    tab.classList.remove('hidden');

    tab.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  document.querySelectorAll('.tab').forEach(el => {
    el.classList.remove('active');
  });

  btn.classList.add('active');
}

    function openModal(id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }

    document.getElementById('announcementsModal').addEventListener('click', (e) => {
      if (e.target.id === 'announcementsModal') closeModal('announcementsModal');
    });
    document.getElementById('deadlinesModal').addEventListener('click', (e) => {
      if (e.target.id === 'deadlinesModal') closeModal('deadlinesModal');
    });

 function renderCourseSchedule() {
   
  const schedule = {
    regular: [
      {
        date: "5 Sep 2026 (Sat)",
        slots: [
          {
            time: "9:00 AM – 11:30 AM",
            cls: "slot-morning",
            subjects: ["NLP"]
          },
          {
            time: "1:00 PM – 3:30 PM",
            cls: "slot-afternoon",
            subjects: ["Cyber", "CV", "SEML"]
          },
          {
            time: "4:30 PM – 7:00 PM",
            cls: "slot-evening",
            subjects: ["IR", "DMML", "DML"]
          }
        ]
      },
      {
        date: "6 Sep 2026 (Sun)",
        slots: [
          {
            time: "9:00 AM – 11:30 AM",
            cls: "slot-morning",
            subjects: ["DRL"]
          },
          {
            time: "1:00 PM – 3:30 PM",
            cls: "slot-afternoon",
            subjects: ["ACI"]
          },
          {
            time: "4:30 PM – 7:00 PM",
            cls: "slot-evening",
            subjects: ["VA", "UDL"]
          }
        ]
      }
    ],

    makeup: [
      {
        date: "12 Sep 2026 (Sat)",
        slots: [
          {
            time: "9:00 AM – 11:30 AM",
            cls: "slot-morning",
            subjects: ["NLP"]
          },
          {
            time: "1:00 PM – 3:30 PM",
            cls: "slot-afternoon",
            subjects: ["Cyber", "CV", "SEML"]
          },
          {
            time: "4:30 PM – 7:00 PM",
            cls: "slot-evening",
            subjects: ["IR", "DMML", "DML"]
          }
        ]
      },
      {
        date: "13 Sep 2026 (Sun)",
        slots: [
          {
            time: "9:00 AM – 11:30 AM",
            cls: "slot-morning",
            subjects: ["DRL"]
          },
          {
            time: "1:00 PM – 3:30 PM",
            cls: "slot-afternoon",
            subjects: ["ACI"]
          },
          {
            time: "4:30 PM – 7:00 PM",
            cls: "slot-evening",
            subjects: ["VA", "UDL"]
          }
        ]
      }
    ]
  };

  function buildCard(title, cssClass, data) {

    return `
      <div class="ec-card ${cssClass}">

        <div class="ec-title ${cssClass}">
          ${cssClass === "regular" ? "📘" : "🟣"} ${title}
        </div>

        <div class="ec-days" style="padding-bottom:16px;">

          ${data.map(day => `

            <div class="ec-day">

              <div class="ec-date">
    <div style="font-size:1.8rem;">📅</div>
    <div>${day.date}</div>
</div>

              <div class="ec-slots">

                ${day.slots.map(slot => `

                  <div class="ec-slot ${slot.cls}">

                    <div class="slot-time">
                      ${slot.time}
                    </div>

                    <div class="subject-list">

                      ${slot.subjects.map(subject => `

                        <span class="subject-pill">
                          ${subject}
                        </span>

                      `).join("")}

                    </div>

                  </div>

                `).join("")}

              </div>

            </div>

          `).join("")}

        </div>

      </div>
    `;
  }

  document.getElementById("ecScheduleGrid").innerHTML = `

    <div class="ec-wrapper">

      ${buildCard(
        "EC3 Regular Examination",
        "regular",
        schedule.regular
      )}

      ${buildCard(
        "EC3 Make-up Examination",
        "makeup",
        schedule.makeup
      )}

    </div>

  `;
}
    function parseCSV(text) {
      const rows = [];
      let row = [];
      let field = '';
      let inQuotes = false;

      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const next = text[i + 1];

        if (char === '"' && inQuotes && next === '"') {
          field += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          row.push(field);
          field = '';
        } else if ((char === '\n' || char === '\r') && !inQuotes) {
          if (char === '\r' && next === '\n') continue;
          row.push(field);
          if (row.some(cell => cell.trim() !== '')) rows.push(row);
          row = [];
          field = '';
        } else {
          field += char;
        }
      }

      if (field.length || row.length) {
        row.push(field);
        if (row.some(cell => cell.trim() !== '')) rows.push(row);
      }
      return rows;
    }

    function normalizeHeader(h) {
      return String(h || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '');
    }

    function rowToObject(headers, row) {
      const obj = {};
      headers.forEach((header, index) => {
        obj[normalizeHeader(header)] = (row[index] || '').trim();
      });
      return obj;
    }

    const MONTHS = {
      jan: 0, january: 0,
      feb: 1, february: 1,
      mar: 2, march: 2,
      apr: 3, april: 3,
      may: 4,
      jun: 5, june: 5,
      jul: 6, july: 6,
      aug: 7, august: 7,
      sep: 8, sept: 8, september: 8,
      oct: 9, october: 9,
      nov: 10, november: 10,
      dec: 11, december: 11
    };

    function toDateKey(dateObj) {
      if (!dateObj) return '';
      const y = dateObj.getFullYear();
      const m = String(dateObj.getMonth() + 1).padStart(2, '0');
      const d = String(dateObj.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }

    function startOfLocalDay(dateObj) {
      return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 0, 0, 0, 0);
    }

    function formatDate(dateObj) {
      return dateObj.toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    }

function formatDateTime(dateObj) {
  if (!dateObj) return '';

  if (!dateObj._hasExplicitTime) {
    return dateObj.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  return dateObj.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

    function cleanText(...parts) {
      return parts.filter(Boolean).join(' • ').replace(/\s+/g, ' ').trim();
    }

    function normalizeText(value) {
      return String(value || '')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
    }

    function parseFlexibleDate(value, defaultMode = 'start') {
  if (!value) return null;

  let raw = String(value).trim();
  if (!raw || raw === '-') return null;

  raw = raw.replace(/\([^)]*\)/g, ' ');
  raw = raw.replace(/\b(?:IST|GMT|UTC)\b/gi, ' ');
  raw = raw.replace(/(\d+)(st|nd|rd|th)/gi, '$1');
  raw = raw.replace(/\s+/g, ' ').trim();

  const applyDefaultTime = (dateObj, hasTime) => {
    if (hasTime) {
      dateObj._hasExplicitTime = true;
      return dateObj;
    }

    if (defaultMode === 'end') {
      dateObj.setHours(23, 59, 0, 0);
    } else {
      dateObj.setHours(0, 0, 0, 0);
    }

    dateObj._hasExplicitTime = true;
    return dateObj;
  };

  const direct = new Date(raw);
  if (!Number.isNaN(direct.getTime())) {
    const hasTime = /\d{1,2}:\d{2}\s*(AM|PM)?/i.test(raw);
    return applyDefaultTime(direct, hasTime);
  }

  const patterns = [
    /^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})(?:\s+(?:at\s+)?)?(?:(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?)?$/i,
    /^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})(?:\s+(?:at\s+)?)?(?:(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?)?$/i,
    /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})(?:\s+(?:at\s+)?)?(?:(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?)?$/i,
    /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})(?:\s+(?:at\s+)?)?(?:(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?)?$/i
  ];

  const buildDate = (year, monthIdx, day, hour, minute, ampm) => {
    if (monthIdx === undefined || monthIdx === null || Number.isNaN(monthIdx)) return null;
    if (Number.isNaN(year) || Number.isNaN(day)) return null;

    const hasTime =
      hour !== undefined &&
      hour !== null &&
      hour !== '';
let h = hasTime ? Number(hour) : (defaultMode === 'end' ? 23 : 0);
    let m;

if (hasTime) {
  m = minute !== undefined && minute !== null && minute !== ''
    ? Number(minute)
    : 0;
} else {
  m = defaultMode === 'end' ? 59 : 0;
}

    if (Number.isNaN(h)) h = defaultMode === 'end' ? 23 : 0;
    if (Number.isNaN(m)) m = defaultMode === 'end' ? 59 : 0;

    const suffix = ampm ? String(ampm).toUpperCase() : null;
    if (suffix) {
      if (h === 12) h = 0;
      if (suffix === 'PM') h += 12;
    }

    const date = new Date(Number(year), Number(monthIdx), Number(day), h, m, 0, 0);
    date._hasExplicitTime = true;
    return date;
  };

  for (const pattern of patterns) {
    const m = raw.match(pattern);
    if (!m) continue;

    if (pattern === patterns[0]) {
      const year = Number(m[1]);
      const month = Number(m[2]) - 1;
      const day = Number(m[3]);
      return buildDate(year, month, day, m[4], m[5], m[6]);
    }

    if (pattern === patterns[1]) {
      const day = Number(m[1]);
      const month = Number(m[2]) - 1;
      const year = Number(m[3]);
      return buildDate(year, month, day, m[4], m[5], m[6]);
    }

    if (pattern === patterns[2]) {
      const day = Number(m[1]);
      const monthName = m[2].toLowerCase();
      const year = Number(m[3]);
      return buildDate(year, MONTHS[monthName], day, m[4], m[5], m[6]);
    }

    if (pattern === patterns[3]) {
      const monthName = m[1].toLowerCase();
      const day = Number(m[2]);
      const year = Number(m[3]);
      return buildDate(year, MONTHS[monthName], day, m[4], m[5], m[6]);
    }
  }

  return null;
}

    function isAnnouncementRow(row) {
      const type = normalizeText(row.type || row.category || row.section || '');
      const event = normalizeText(row.event || row.title || row.name || '');
      return type.includes('announcement') || event.includes('announcement');
    }

    function isWebinarRow(row) {
      const type = normalizeText(row.type || row.category || row.section || '');
      const event = normalizeText(row.event || row.title || row.name || '');
      return type.includes('webinar') || event.includes('webinar');
    }

    function isDeadlineRow(row) {
      const type = normalizeText(row.type || row.category || row.section || '');
      const event = normalizeText(row.event || row.title || row.name || '');
      if (type.includes('announcement') || event.includes('announcement')) return false;
      if (type.includes('webinar') || event.includes('webinar')) return false;
      if (type.includes('deadline')) return true;
      return Boolean(row.endObj);
    }

    function renderAnnouncements(items) {
      const track = document.getElementById('announcementTrack');
      track.innerHTML = '';

      if (!items.length) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.textContent = 'No announcements at the moment.';
        track.appendChild(empty);
        return;
      }

      items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'announcement-item';

        const pill = document.createElement('span');
        pill.className = 'announcement-pill';
        pill.textContent = item.subject || 'Info';

const text = document.createElement('span');
text.className = 'announcement-text';

const summary = [item.event];

if (item.startObj) {
  summary.push(`Starts: ${formatDateTime(item.startObj)}`);
}

if (item.endObj) {
  summary.push(`Ends: ${formatDateTime(item.endObj)}`);
}

const lines = [];

lines.push(item.event);

if (item.startObj) {
  lines.push(`• Starts: ${formatDateTime(item.startObj)}`);
}

if (item.endObj) {
  lines.push(`• Ends: ${formatDateTime(item.endObj)}`);
}

text.innerHTML =
  lines.join('<br>') +
  (item.moredetails
    ? `<br><span class="announcement-detail">${item.moredetails}</span>`
    : '');

row.append(pill, text);
track.appendChild(row);
      });

      if (items.length > 1) {
        let index = 0;
        const itemHeight = 42;
        const visibleCount = 2.5;
        const maxOffset = Math.max(0, items.length - visibleCount);
        const viewport = document.querySelector('.announcement-viewport');
        viewport.style.minHeight = `${Math.round(visibleCount * itemHeight)}px`;

        const rotate = () => {
          const offset = Math.min(index, maxOffset) * itemHeight;
          track.style.transform = `translateY(-${offset}px)`;
          index += 1;
          if (index > maxOffset) index = 0;
        };

        rotate();
        clearInterval(window.__announcementInterval);
        window.__announcementInterval = setInterval(rotate, 8000);
      } else {
        track.style.transform = 'translateY(0)';
        clearInterval(window.__announcementInterval);
      }
    }

    function renderDeadlines(items) {
      const grid = document.getElementById('topDeadlinesGrid');
      const status = document.getElementById('deadlineStatus');
      grid.innerHTML = '';

      if (!items.length) {
        status.textContent = 'No upcoming deadlines found in the Google Sheet.';
        return;
      }

      status.textContent = `${items.length} upcoming deadline${items.length === 1 ? '' : 's'} loaded.`;

      items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'deadline-card';
        if (index < 3) card.classList.add('top');

        const title = document.createElement('h3');
        title.className = 'deadline-title';
        title.textContent = `${item.subject ? item.subject + ' — ' : ''}${item.event}`;

        const meta1 = document.createElement('div');
        meta1.className = 'deadline-meta';
        meta1.textContent = `Due: ${formatDateTime(item.endObj)}`;

        card.append(title, meta1);
        if (item.moredetails) {
          const meta2 = document.createElement('div');
          meta2.className = 'deadline-meta';
          meta2.textContent = item.moredetails;
          card.appendChild(meta2);
        }

        grid.appendChild(card);
      });
    }

    function renderWebinars(items) {
      const grid = document.getElementById('webinarGrid');
      grid.innerHTML = '';

      if (!items.length) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.textContent = 'No webinars are scheduled in the next 3 days.';
        grid.appendChild(empty);
        return;
      }

      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'webinar-card';

        const title = document.createElement('h3');
        title.className = 'webinar-title';
        title.textContent = `${item.subject ? item.subject + ' — ' : ''}${item.event || 'Webinar'}`;

        const meta1 = document.createElement('div');
        meta1.className = 'webinar-meta';
        meta1.textContent = item.startObj ? `Starts: ${formatDateTime(item.startObj)}` : '';

        const meta2 = document.createElement('div');
        meta2.className = 'webinar-meta';
        meta2.textContent = item.endObj ? `Ends: ${formatDateTime(item.endObj)}` : '';

        card.append(title);
        if (meta1.textContent) card.appendChild(meta1);
        if (meta2.textContent) card.appendChild(meta2);
        if (item.moredetails) {
          const meta3 = document.createElement('div');
          meta3.className = 'webinar-meta';
          meta3.textContent = item.moredetails;
          card.appendChild(meta3);
        }

        grid.appendChild(card);
      });
    }

    function fillModalList(elementId, items, kind) {
      const list = document.getElementById(elementId);
      list.innerHTML = '';

      if (!items.length) {
        return;
      }

      items.forEach(item => {
        const box = document.createElement('div');
        box.className = 'modal-item';
        const title = `${item.subject ? item.subject + ' — ' : ''}${item.event || item.title || 'Item'}`;
        const body = item.moredetails ? `<div class="small">${item.moredetails}</div>` : '';
        const deadlineLine = kind === 'Deadline' && item.endObj ? `<div class="small"><strong>Due:</strong> ${formatDateTime(item.endObj)}</div>` : '';
const webinarLines = kind === 'Webinar'
  ? `${item.startObj ? `<div class="small"><strong>Starts:</strong> ${formatDateTime(item.startObj)}</div>` : ''}${item.endObj ? `<div class="small"><strong>Ends:</strong> ${formatDateTime(item.endObj)}</div>` : ''}`
  : '';
const announcementLines = kind === 'Announcement'
  ? `${item.startObj ? `<div class="small"><strong>Starts:</strong> ${formatDateTime(item.startObj)}</div>` : ''}${item.endObj ? `<div class="small"><strong>Ends:</strong> ${formatDateTime(item.endObj)}</div>` : ''}`
  : '';
box.innerHTML = `<strong>${title}</strong>${announcementLines}${deadlineLine}${webinarLines}${body}`;
        list.appendChild(box);
      });
    }

    function getUpcomingDeadlines(deadlineRows) {
      const now = Date.now();
      const active = deadlineRows
        .filter(item => item.endObj && item.endObj.getTime() >= now)
        .sort((a, b) => a.endObj - b.endObj);

      const buckets = new Map();

      for (const item of active) {
        const subject = (item.subject || 'General').trim() || 'General';
        const dayKey = toDateKey(item.endObj);
        if (!buckets.has(subject)) buckets.set(subject, []);
        buckets.get(subject).push({ ...item, dayKey });
      }

      const selected = [];
      for (const items of buckets.values()) {
        items.sort((a, b) => a.endObj - b.endObj);
        const earliestDay = items[0].dayKey;
        selected.push(...items.filter(item => item.dayKey === earliestDay));
      }

      selected.sort((a, b) => a.endObj - b.endObj);
      return selected;
    }

    async function loadGoogleSheet() {
      try {
        const response = await fetch(SHEET_URL, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const csvText = await response.text();
        const rows = parseCSV(csvText);
        if (rows.length < 2) throw new Error('Sheet has no data rows');

        const headers = rows[0];
        const objects = rows.slice(1).map(row => rowToObject(headers, row));

        const normalized = objects.map(row => {
          const subject = row.subject || '';
          const event = row.event || row.title || row.name || '';
          const moredetails = row.moredetails || row.details || row.description || row.message || '';
          const startRaw = row.starttime || row.start || row.begins || '';
const endRaw = row.endtime || row.deadline || row.duedate || row.end || '';

const startObj = parseFlexibleDate(startRaw, 'start');
const endObj = parseFlexibleDate(endRaw, 'end');
          const type = String(row.type || row.category || row.section || '').trim().toLowerCase();
          return { ...row, subject, event, moredetails, startRaw, endRaw, startObj, endObj, type };
        });

        const announcements = normalized.filter(isAnnouncementRow);
        const webinarRows = normalized.filter(isWebinarRow)
          .filter(item => {
            const base = item.startObj || item.endObj;
            if (!base) return false;
            return base.getTime() >= Date.now() && base.getTime() <= Date.now() + (3 * 24 * 60 * 60 * 1000);
          })
          .sort((a, b) => (a.startObj || a.endObj) - (b.startObj || b.endObj));
        const deadlineRows = normalized.filter(isDeadlineRow);

        const upcomingDeadlines = getUpcomingDeadlines(deadlineRows);

        const fortyEightHoursMs = 48 * 60 * 60 * 1000;
        const nowMs = Date.now();
        const nearTermDeadlines = deadlineRows
          .filter(item => item.endObj && item.endObj.getTime() >= nowMs && item.endObj.getTime() <= nowMs + fortyEightHoursMs)
          .sort((a, b) => a.endObj - b.endObj);

        renderAnnouncements(announcements);
        renderDeadlines(upcomingDeadlines);
        renderWebinars(webinarRows);

        fillModalList('announcementsModalList', announcements, 'Announcement');
        fillModalList('deadlinesModalList', nearTermDeadlines, 'Deadline');

        if (announcements.length) {
  openModal('announcementsModal');
}

if (nearTermDeadlines.length) {
  openModal('deadlinesModal');
}
      } catch (error) {
        console.error('Google Sheet load failed:', error);
        document.getElementById('deadlineStatus').textContent = 'Could not load the sheet right now. Check that it is published or publicly accessible.';
        renderAnnouncements([]);
        renderDeadlines([]);
        renderWebinars([]);
        fillModalList('announcementsModalList', [], 'Announcement');
        fillModalList('deadlinesModalList', [], 'Deadline');
      }
    }

    renderCourseSchedule();
    loadGoogleSheet();

function showSubject(subjectId, btn) {

document.querySelectorAll('.subject-btn').forEach(b=>{
    b.classList.remove('active');
});
btn.classList.add('active');
  
  document.querySelectorAll('.subject-content').forEach(el => {
    el.style.display = 'none';
  });

  const main = document.getElementById('sem2-main-content');

  if (main) {
    main.style.display = 'none';
  }

  const target = document.getElementById(subjectId);

  if (target) {
    target.style.display = 'block';

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}