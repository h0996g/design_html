! function() {
    var n, e, o, t = $(".speech-to-text");
    t.length && null != (n = n || webkitSpeechRecognition) && (e = new n, o = !1, t.on("click", function() {
        let t = $(this);
        !(e.onspeechstart = function() {
            o = !0
        }) === o && e.start(), e.onerror = function(n) {
            o = !1
        }, e.onresult = function(n) {
            t.closest(".form-send-message").find(".message-input").val(n.results[0][0].transcript)
        }, e.onspeechend = function(n) {
            o = !1, e.stop()
        }
    }))
}();