$(function() {
    var e = document.getElementById("createApp");
    let t = document.querySelector(".app-credit-card-mask"),
        n = document.querySelector(".app-expiry-date-mask"),
        r = document.querySelector(".app-cvv-code-mask"),
        c;

    function l() {
        t && (c = new Cleave(t, {
            creditCard: !0,
            onCreditCardTypeChanged: function(e) {
                document.querySelector(".app-card-type").innerHTML = "" != e && "unknown" != e ? '<img src="' + assetsPath + "img/icons/payments/" + e + '-cc.png" class="cc-icon-image" height="20"/>' : ""
            }
        }))
    }
    n && new Cleave(n, {
        date: !0,
        delimiter: "/",
        datePattern: ["m", "y"]
    }), r && new Cleave(r, {
        numeral: !0,
        numeralPositiveOnly: !0
    }), e.addEventListener("show.bs.modal", function(e) {
        var n = document.querySelector("#wizard-create-app");
        if (null !== n) {
            var r = [].slice.call(n.querySelectorAll(".btn-next")),
                c = [].slice.call(n.querySelectorAll(".btn-prev")),
                a = n.querySelector(".btn-submit");
            let t = new Stepper(n, {
                linear: !1
            });
            r && r.forEach(e => {
                e.addEventListener("click", e => {
                    t.next(), l()
                })
            }), c && c.forEach(e => {
                e.addEventListener("click", e => {
                    t.previous(), l()
                })
            }), a && a.addEventListener("click", e => {
                alert("Submitted..!!")
            })
        }
    })
});