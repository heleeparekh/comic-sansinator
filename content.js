chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.font === "comic-sans") {
        document.body.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
    } else if (request.font === "papyrus") {
        document.body.style.fontFamily = "'Papyrus', fantasy";
    } else if (request.font === "lobster") {
        document.body.style.fontFamily = "'Lobster', cursive";
    } else if (request.font === "kode-mono-123") {
        document.body.style.fontFamily = "'Kode Mono', monospace";
    } else if (request.font === "restore") {
        document.querySelectorAll('*').forEach(function(node) {
            node.style.fontFamily = ""; // Clear inline font style
        });
    }
});


