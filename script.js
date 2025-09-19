const header = document.querySelector('.site-header');
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  header.classList.toggle('open');
});

const faqData = [
    ["How do I use the mod?", "To open the menu that brings up all the features, while in the main menu or the escape menu, press shift + . (this can be changed in the dlad mod menu itself). Features such as meteor detector allows you to hover over the display and pressing middle click to hide said display (also avilable for sausage finder)"],
    ["Is dlad mod safe?", 'Short answer:<br>- Yes, dlad mod is 100% safe as long as you download it from our <a href="https://dladmodmc.github.io/dladmodmc/downloads.html">official website</a><br><br><a href="https://www.virustotal.com/gui/file/a976ffeb939c3e38e405f040af2d20293c777262cf8aa22d062fd8d56f08b80f">Virustotal</a><br><br>Long answer:<br> - If the dlad mod file comes directly from our website it is gauranteed to be safe, and so we encourage you ONLY download it from here. While the features from the mod are not open source, the surrounding code and the website is, this is available <a href="https://github.com/dladmodmc/dladmodsource">here</a>.'],
    ["How do I install?", "<div style='text-align: center;'>Installation must be done manually:<br><br>1) Make sure you have Java installed (<a href='https://docs.fabricmc.net/players/installing-java/windows' target='_blank'>see Fabric guide</a>)<br><br>2) Download and run the Fabric installer from the <a href='https://fabricmc.net/use/' target='_blank'>official site</a> for Minecraft version 1.21 or later <br><br>3) Download both the <a href='https://www.curseforge.com/minecraft/mc-mods/fabric-api' target='_blank'>Fabric API</a> and <a href='downloads.html'>dlad mod</a> .jar files for your selected Minecraft version <br><br>4) Place both .jar files in your Minecraft's <a href='https://docs.fabricmc.net/players/installing-mods' target='_blank'><code>mods/</code> folder</a><br><br>5) Launch Minecraft using the <a href='https://docs.fabricmc.net/players/installing-fabric' target='_blank'>Fabric profile</a> in the launcher<br><br>For detailed instructions, visit the <a href='https://docs.fabricmc.net/players/faq' target='_blank'>Fabric Player FAQ</a>.</div>"],
    ["Is the mod detectable?", "No, as long as you're responsible and use the features wisely, in itself dlad is not detectable as it's all client side (exception of autofish). But caution is always advised as staff can see suspicious behaviour."],
    ["Will I get banned for using the mod?", "No, the mod only provides you with information (exception of autofish) and allows you to take advantage of that information. As long as whatever you do isn't blatantly obvious, you should be fine."],
    ["Open source?", "Source: <a href='https://github.com/dladmodmc/dladmodsource' target='_blank'>GitHub</a><br>The features themselves are not open source, but the surrounding code and website is. This is to prevent easy patching of the features, please understand with the mod being fully open source, the features might last much less (if the devs are competent)."],
    ["Why these features?", "As a client side mod, we're limited to what we can do while being undetectable. This means most features most features mainly just give you advantageous information specific to mlum, allowing you to decide what to do with said information. This gaurantees the mod never interacts server side (exception of autofish) making it practically undetectable."],
    ["Why display features like this?","We focus on a non-intrusive display, giving you the option to change where the hud is located and changing the size of the displays while keeping a minimal design. To give you the relevant information we rely on an esp like display, keeping it simple and non intrusive."],
    ["How regularly is the mod updated?", "As a single dev it may take from days to weeks to update. Also, as personally my life's been really busy, updates may be slow to come"]
    
];

function initFAQ() {
    const faqContainer = document.querySelector('main');
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

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            
            if (!isOpen) {
                answer.classList.add('open');
                btn.classList.add('active');
            }
        });
    });
}

if (window.location.pathname.includes('faq.html')) {
    initFAQ();
}


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
            "Full rework of many features, improving performance and stability",
            "Added job helper",
            "Reworked sausage finder, now equiped with the locations of all sausages, it can show you the location up to any radius",
            "Meteor detector now shows distance from meteor to player",
            "Sausage finder & meteor detector now have extra functionality, middle click while looking at one of the displays to remove it",
            "Now offering public world download of mlum map and sausage locations (all available in downloads page)",
        ]
    },
    {
        version: "1.11",
        changes: [
            "Reworked meteor detector, can now reach greater distances (render distance) and shows different colors depending on meteor rarity",
            "Improved stability"
        ]
    },

    {
        version: "1.1",
        changes: [
            "Support for all 1.21.x versions",
            "The size of warnings can now be edited for each feature (except autofish)",
            "Sausage finder now will check in a radius around the camera, making it compatible with freecam mods",
            "Reworked escape detector, fixes bug when the player goes out of render distance",
            "Added meteor detector"
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