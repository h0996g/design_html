! function() {
    var e = document.querySelector(".invoice-amount");
    e && new Cleave(e, {
        numeral: !0
    });
    let t = new Date,
        n = document.querySelectorAll(".invoice-date");
    n && n.forEach(function(e) {
        e.flatpickr({
            monthSelectorType: "static",
            defaultDate: t
        })
    })
}();