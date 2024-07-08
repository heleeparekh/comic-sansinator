document.getElementById('comic-sans').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs.length > 0) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: function() {
                    document.body.style.fontFamily = "'Comic Sans MS'";
                }
            });
        }
    });
});

document.getElementById('papyrus').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs.length > 0) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: function() {
                    document.body.style.fontFamily = "'Papyrus', fantasy";
                }
            });
        }
    });
});

document.getElementById('lobster').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs.length > 0) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: function() {
                    document.body.style.fontFamily = "'Lobster', cursive";
                }
            });
        }
    });
});

document.getElementById('kode-mono-123').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs.length > 0) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: function() {
                    document.body.style.fontFamily = "'Kode Mono', monospace";
                }
            });
        }
    });
});

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
            el.style.fontFamily = `${fontName}, sans-serif !important`;
        }
    });
}


// function setFontFamily(fontName) {
//     document.querySelectorAll('*').forEach(function(node) {
//         node.style.fontFamily = `${fontName}, sans-serif !important`;
//     });
// }
