function addFontChangeListener(buttonId, fontFamily) {
    document.getElementById(buttonId).addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            if (tabs.length > 0) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    func: changeFontFamily,
                    args: [fontFamily]
                });
            }
        });
    });
}

function changeFontFamily(fontFamily) {
    document.body.style.fontFamily = fontFamily;
}

document.getElementById('restore').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs.length > 0) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: function() {
                    document.querySelectorAll('*').forEach(function(node) {
                        node.style.fontFamily = "";
                    });
                }
            });
        }
    });
});

function clearActive() {
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('active');
    });
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        clearActive();
        this.classList.add('active');
    });
});

function changeFont(fontName) {
    const elements = document.querySelectorAll('body, body *');
    elements.forEach(el => {
        if (window.getComputedStyle(el).display === 'inline') {
            el.style.setProperty('font-family', `${fontName}, sans-serif`, 'important');
        }
    });
}

addFontChangeListener('comic-neue', "'Comic Neue', cursive");
addFontChangeListener('lobster', "'Lobster', cursive");
addFontChangeListener('kode-mono', "'Kode Mono', monospace");
addFontChangeListener('playwrite-fr-moderne', "'Playwrite FR Moderne', cursive");
addFontChangeListener('source-code-pro', "'Source Code Pro', monospace");
addFontChangeListener('caveat', "'Caveat', cursive");
addFontChangeListener('danfo', "'Danfo', serif");