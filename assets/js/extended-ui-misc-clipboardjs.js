! function() {
    var o = [].slice.call(document.querySelectorAll(".clipboard-btn"));
    ClipboardJS ? o.map(function(o) {
        new ClipboardJS(o).on("success", function(o) {
            "copy" == o.action && toastr.success("", "Copied to Clipboard!!")
        })
    }) : o.map(function(o) {
        o.setAttribute("disabled", !0)
    })
}();