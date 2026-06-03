// Mobile Navigation Toggle
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  header.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
if (siteNav) {
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) {
    header.classList.remove('open');
    navToggle.classList.remove('active');
  }
});


const faqData = [
    ["How do I use the mod?", "To open the menu, press Shift + . while on the main menu or escape menu. You can change this shortcut in the dlad mod menu. Features such as the meteor detector and sausage finder let you hover over the display and middle-click to hide it."],
    ["Is dlad mod safe?", 'Short answer:<br>- Yes, dlad mod is safe as long as you download it from our <a href="https://dladmodmc.github.io/dladmodmc/downloads.html">official website</a>.<br><br><a href="https://www.virustotal.com/gui/file/a976ffeb939c3e38e405f040af2d20293c777262cf8aa22d062fd8d56f08b80f">VirusTotal</a><br><br>Long answer:<br>- If the dlad mod file comes directly from our website, it is guaranteed to be safe. We encourage you to download it only from here. This project is open source and available <a href="https://github.com/dladmodmc/dladmodsource">here</a>.'],
    ["How do I install?", "<div style='text-align: center;'>Installation must be done manually:<br><br>1. Make sure you have Java installed (<a href='https://docs.fabricmc.net/players/installing-java/windows' target='_blank'>see the Fabric guide</a>).<br><br>2. Download and run the Fabric installer from the <a href='https://fabricmc.net/use/' target='_blank'>official site</a> for Minecraft version 1.21 or later.<br><br>3. Download both the <a href='https://www.curseforge.com/minecraft/mc-mods/fabric-api' target='_blank'>Fabric API</a> and <a href='downloads.html'>dlad mod</a> .jar files for your selected Minecraft version.<br><br>4. Place both .jar files in your Minecraft <a href='https://docs.fabricmc.net/players/installing-mods' target='_blank'><code>mods/</code> folder</a>.<br><br>5. Launch Minecraft using the <a href='https://docs.fabricmc.net/players/installing-fabric' target='_blank'>Fabric profile</a> in the launcher.<br><br>For detailed instructions, visit the <a href='https://docs.fabricmc.net/players/faq' target='_blank'>Fabric Player FAQ</a>.</div>"],
    ["Is the mod detectable?", "No, as long as you use the features responsibly. dlad is client-side except for autofish. Caution is still advised, because staff may notice suspicious behavior."],
    ["Will I get banned for using the mod?", "The mod only provides information, except for autofish, and lets you decide how to use it. As long as your behavior is not blatant, you should be fine."],
    ["Open source?", "Source: <a href='https://github.com/dladmodmc/dladmodsource' target='_blank'>GitHub</a><br>This project is fully open source."],
    ["Why these features?", "As a client-side mod, dlad is limited to features that can stay undetectable. Most features provide Mlum-specific information, letting you decide what to do with it. This means the mod does not interact with the server, except for autofish."],
    ["Why display features like this?", "We focus on non-intrusive displays. You can change HUD positions and display sizes while keeping the layout minimal. ESP-style displays provide relevant information without getting in the way."],
    ["How often is the mod updated?", "As a single-developer project, updates can take anywhere from a few days to a few weeks. Updates may be slower when life gets busy."]
];

const featureData = [
    {
        title: "Completely Hidden",
        description: "Every feature can be disabled, and the mod sends no chat messages.",
        usage: "Keep only the displays you need enabled when you want a low-profile setup."
    },
    {
        title: "Privacy Focused",
        description: "No personal data is collected or transmitted.",
        usage: 'Review the project source any time on <a href="https://github.com/dladmodmc/dladmodsource" target="_blank">GitHub</a>.'
    },
    {
        title: "Escape Detector",
        description: "Displays escapee's locations.",
        usage: "Use it as a guard or prisoner when you need quick escape-location context."
    },
    {
        title: "Guard Finder",
        description: "Shows nearby guards with color coding for role and distance.",
        usage: "Watch the display while moving through risky areas."
    },
    {
        title: "Autofish",
        description: "Automates fishing and is the only server-side action performed by the mod.",
        usage: "Enable it only when you intentionally want automated fishing."
    },
    {
        title: "Sausage Finder",
        description: "Displays sausage sign locations within a chosen radius.",
        usage: 'Use the display or the <a href="sausages.html">Sausages</a> page checklist to track finds.'
    },
    {
        title: "Meteor Finder",
        description: "Shows regular and gold meteors based on render distance.",
        usage: "Middle-click the display while hovering over it to hide a meteor marker."
    },
    {
        title: "Job Helper",
        description: "Adds job context for farming, Mars fixing, turnip bottling, mopping, and metal detecting.",
        usage: "Follow the highlighted blocks or nearest important targets."
    },
    {
        title: "QOL Texture Pack",
        description: "Makes stains and cleanup spots easier to see.",
        usage: 'Download it from the <a href="downloads.html">Downloads</a> page and enable it as a resource pack.'
    }
];

function initFAQ() {
    // Only run on FAQ page
    if (!window.location.pathname.includes('faq.html')) {
        return;
    }
    
    const faqContainer = document.querySelector('.hero');
    if (!faqContainer) return;

    const faqHTML = faqData.map(([question, answer]) => `
        <div class="faq-item">
            <button class="faq-question">${question}</button>
            <div class="faq-answer"><p>${answer}</p></div>
        </div>
    `).join('');

    const faqSection = document.createElement('div');
    faqSection.innerHTML = faqHTML;
    faqContainer.appendChild(faqSection);

    // Add click handlers to FAQ buttons
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            // Close all other open FAQs
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            
            // Open current FAQ if it wasn't open
            if (!isOpen) {
                answer.classList.add('open');
                btn.classList.add('active');
            }
        });
    });
}

// Initialize FAQ on page load
document.addEventListener('DOMContentLoaded', initFAQ);

function initFeatureChips() {
    const featureGrid = document.getElementById('feature-grid');
    if (!featureGrid) return;

    featureGrid.innerHTML = featureData.map(feature => `
        <article class="feature-chip">
            <button class="feature-chip-toggle" type="button" aria-expanded="false">
                <span class="feature-title">${feature.title}</span>
                <span class="feature-cue" aria-hidden="true">+</span>
            </button>
            <div class="feature-chip-body">
                <p>${feature.description}</p>
                <p>${feature.usage}</p>
            </div>
        </article>
    `).join('');

    document.querySelectorAll('.feature-chip-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const chip = button.closest('.feature-chip');
            const isOpen = chip.classList.toggle('open');
            button.setAttribute('aria-expanded', String(isOpen));
        });
    });
}

document.addEventListener('DOMContentLoaded', initFeatureChips);


const toggleButton = document.querySelector('.extras-toggle');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const content = document.querySelector('.extras-content');
        const isOpen = content.style.display === 'block';
        content.style.display = isOpen ? 'none' : 'block';
        const baseText = toggleButton.getAttribute('data-text') || toggleButton.textContent.replace(/[▼▲]/, '').trim();
        toggleButton.textContent = `${baseText} ${isOpen ? '▼' : '▲'}`;
        toggleButton.classList.toggle('active');
    });
}




const changelogData = [
    {version:"1.2",
        changes:[
            "Fully reworked many features, improving performance and stability",
            "Added Job Helper",
            "Reworked Sausage Finder. It now includes all sausage locations and can show locations up to any radius",
            "Meteor Detector now shows the distance from each meteor to the player",
            "Sausage Finder and Meteor Detector now support middle-clicking a display to remove it",
            "Added a public Mlum world download and sausage locations, both available on the Downloads page",
        ]
    },
    {
        version: "1.11",
        changes: [
            "Reworked Meteor Detector. It can now reach greater distances based on render distance and uses different colors depending on meteor rarity",
            "Improved stability"
        ]
    },

    {
        version: "1.1",
        changes: [
            "Support for all 1.21.x versions",
            "Warning sizes can now be edited for each feature, except Autofish",
            "Sausage Finder now checks a radius around the camera, making it compatible with freecam mods",
            "Reworked Escape Detector and fixed a bug that occurred when a player left render distance",
            "Added Meteor Detector"
        ]
    },
    {
        version: "1.0",
        changes: [
            "Initial release"
        ]
    }
];

function initChangelog() {
    const changelogSection = document.getElementById('changelog');
    if (!changelogSection) return;

    const changelogHTML = changelogData.map(release => `
        <h3>Version ${release.version}</h3>
        <ul>
            ${release.changes.map(change => `<li>${change}</li>`).join('')}
        </ul>
    `).join('');
    changelogSection.innerHTML = '<h2>Changelog</h2>' + changelogHTML;
}

if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
    initChangelog();
}

const sausageStateKey = 'dladSausageChecklist';
let sausageLocations = [];
let playerCoords = null;
let orderedByNearest = false;

function parseCoords(value) {
    const parts = value.match(/-?\d+(?:\.\d+)?/g);
    if (!parts || parts.length < 3) return null;
    return parts.slice(0, 3).map(Number);
}

function formatDistance(distance) {
    return `${Math.round(distance)} blocks`;
}

function getCheckedSausages() {
    try {
        return new Set(JSON.parse(localStorage.getItem(sausageStateKey)) || []);
    } catch {
        return new Set();
    }
}

function saveCheckedSausages(checked) {
    localStorage.setItem(sausageStateKey, JSON.stringify([...checked]));
}

function getSausageDistance(location) {
    if (!playerCoords || !location.coords) return null;
    const [x, y, z] = location.coords;
    const [px, py, pz] = playerCoords;
    return Math.hypot(x - px, y - py, z - pz);
}

function getSausageImagePath(location) {
    return `images/sausages/${encodeURIComponent(location.label)}.png`;
}

function renderSausages() {
    const list = document.getElementById('sausage-list');
    const count = document.getElementById('sausage-count');
    if (!list || !count) return;

    const checked = getCheckedSausages();
    const sorted = [...sausageLocations].sort((a, b) => {
        const checkedDelta = Number(checked.has(a.id)) - Number(checked.has(b.id));
        if (checkedDelta) return checkedDelta;
        if (orderedByNearest && playerCoords) return getSausageDistance(a) - getSausageDistance(b);
        return a.index - b.index;
    });

    const checkedCount = sorted.filter(item => checked.has(item.id)).length;
    count.textContent = `${checkedCount}/${sorted.length} checked`;

    list.innerHTML = sorted.map(location => {
        const isChecked = checked.has(location.id);
        const distance = orderedByNearest ? getSausageDistance(location) : null;
        const distanceText = distance === null ? '' : `<span class="sausage-distance">${formatDistance(distance)}</span>`;
        const hasImage = location.hasImage === true;
        const imageText = location.hasImage === false ? 'No image' : 'Image';
        return `
            <li class="sausage-item${isChecked ? ' checked' : ''}${hasImage ? '' : ' no-image'}" data-id="${location.id}">
                <div class="sausage-row">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} aria-label="Mark ${location.label} checked">
                    <span class="sausage-coords">${location.label}</span>
                    ${distanceText}
                    <button class="sausage-image-toggle" type="button" ${hasImage ? '' : 'disabled'}>${imageText}</button>
                </div>
                <div class="sausage-image-wrap">
                    <img data-src="${getSausageImagePath(location)}" alt="Sausage at ${location.label}" loading="lazy">
                </div>
            </li>
        `;
    }).join('');

    list.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.addEventListener('click', event => event.stopPropagation());
        input.addEventListener('change', event => {
            const id = event.target.closest('.sausage-item').dataset.id;
            const current = getCheckedSausages();
            if (event.target.checked) {
                current.add(id);
            } else {
                current.delete(id);
            }
            saveCheckedSausages(current);
            renderSausages();
        });
    });

    list.querySelectorAll('.sausage-item').forEach(item => {
        item.addEventListener('click', event => {
            if (item.classList.contains('no-image')) return;
            const image = item.querySelector('.sausage-image-wrap');
            const img = image.querySelector('img');
            if (!img.src) img.src = img.dataset.src;
            image.classList.toggle('open');
        });
    });
}

function updateNearestSausage() {
    const input = document.getElementById('player-coords');
    const result = document.getElementById('nearest-result');
    if (!input || !result) return;

    playerCoords = parseCoords(input.value);
    if (!playerCoords) {
        orderedByNearest = false;
        result.textContent = 'Enter coordinates as x, y, z.';
        result.classList.add('sausage-error');
        renderSausages();
        return;
    }

    result.classList.remove('sausage-error');
    orderedByNearest = true;

    if (!sausageLocations.length) {
        result.textContent = 'No sausage locations loaded.';
        return;
    }

    result.textContent = 'Ordered by nearest sausage.';
    renderSausages();
}

function checkSausageImages() {
    sausageLocations.forEach(location => {
        fetch(getSausageImagePath(location), { method: 'HEAD' })
            .then(response => {
                location.hasImage = response.ok;
                renderSausages();
            })
            .catch(() => {
                location.hasImage = false;
                renderSausages();
            });
    });
}

function initSausages() {
    const list = document.getElementById('sausage-list');
    if (!list) return;

    fetch('internal/sausages.txt')
        .then(response => {
            if (!response.ok) throw new Error('Could not load sausage locations.');
            return response.text();
        })
        .then(text => {
            sausageLocations = text.split(/\r?\n/)
                .map(line => line.trim())
                .filter(Boolean)
                .map((label, index) => ({
                    id: label,
                    label,
                    index,
                    coords: parseCoords(label),
                    hasImage: null
                }));

            if (!sausageLocations.length) {
                document.getElementById('sausage-count').textContent = 'No locations found in internal/sausages.txt.';
                return;
            }

            renderSausages();
            checkSausageImages();
        })
        .catch(error => {
            document.getElementById('sausage-count').textContent = error.message;
            document.getElementById('sausage-count').classList.add('sausage-error');
        });

    const nearestButton = document.getElementById('nearest-sausage');
    const coordInput = document.getElementById('player-coords');
    const resetButton = document.getElementById('reset-sausages');

    if (nearestButton) nearestButton.addEventListener('click', updateNearestSausage);
    if (coordInput) coordInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') updateNearestSausage();
    });
    if (resetButton) resetButton.addEventListener('click', () => {
        localStorage.removeItem(sausageStateKey);
        renderSausages();
    });
}

document.addEventListener('DOMContentLoaded', initSausages);

// Create popup elements
const popup = document.createElement('div');
popup.className = 'popup-overlay';
const popupContainer = document.createElement('div');
popupContainer.className = 'popup-container';
const popupImage = document.createElement('img');
popupImage.className = 'popup-image';
popupContainer.appendChild(popupImage);
popup.appendChild(popupContainer);
document.body.appendChild(popup);

// Add click handlers to all gallery images
document.querySelectorAll('.features img').forEach(img => {
    img.classList.add('gallery-image');
    img.addEventListener('click', (e) => {
        popupImage.src = e.target.src;
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Handle popup clicks
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

popupImage.addEventListener('click', (e) => {
    e.stopPropagation();
    popupImage.classList.toggle('zoomed');
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.style.display === 'block') {
        closePopup();
    }
});

function closePopup() {
    popup.style.display = 'none';
    popupImage.classList.remove('zoomed');
    document.body.style.overflow = '';
}
