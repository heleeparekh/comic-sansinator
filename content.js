function injectFontLink(fontName, fontUrl) {
    const link = document.createElement('link');
    link.href = fontUrl;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
    //console.log(`Font link for ${fontName} injected: ${link.href}`);
}
injectFontLink('Comic Neue','https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap')
injectFontLink('Lobster', 'https://fonts.googleapis.com/css2?family=Lobster&display=swap');
injectFontLink('Kode Mono', 'https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap');
injectFontLink('Playwrite FR Moderne', 'https://fonts.googleapis.com/css2?family=Playwrite+FR+Moderne:wght@100..400&display=swap');
injectFontLink("Source Code Pro", 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
injectFontLink("Caveat",'https://fonts.googleapis.com/css2?family=Caveat:wght@400&display=swap');
injectFontLink("Danfo", 'https://fonts.googleapis.com/css2?family=Danfo&display=swap');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const fontFamilyMap = {
        'comic-neue': "'Comic Neue', cursive",
        'lobster': "'Lobster', cursive",
        'kode-mono': "'Kode Mono', monospace",
        'playwrite-fr-moderne': "'Playwrite FR Moderne', cursive",
        'source-code-pro': "'Source Code Pro', monospace",
        'caveat': "'Caveat', cursive",
        'danfo': "'Danfo', serif"
    };

    function setFontFamily(fontFamily) {
        document.querySelectorAll('*').forEach(node => {
            node.style.fontFamily = fontFamily;
        });
    }

    function restoreFontFamily() {
        document.querySelectorAll('*').forEach(function(node) {
            node.style.fontFamily = "";
        });
    }

    switch (request.font) {
        case 'comic-sans':
        case 'papyrus':
        case 'lobster':
        case 'kode-mono-123':
            setFontFamily(fontFamilyMap[request.font]);
            break;
        case 'restore':
            restoreFontFamily();
            break;
        default:
            console.error('Unknown font request:', request.font);
            break;
    }
});
