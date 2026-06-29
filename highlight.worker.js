importScripts('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js');

self.onmessage = function(e) {
    var data = e.data;
    var text = data.text;
    var lang = data.lang;
    var id = data.id;
    
    if (!text || !lang || !hljs.getLanguage(lang)) {
        self.postMessage({ id: id, html: null, text: text });
        return;
    }
    
    try {
        var result = hljs.highlight(text, { language: lang, ignoreIllegals: true });
        self.postMessage({ id: id, html: result.value, text: text });
    } catch(ex) {
        self.postMessage({ id: id, html: null, text: text });
    }
};