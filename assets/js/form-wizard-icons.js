$(function() {
        var e = $(".select2"),
            l = $(".selectpicker");
        l.length && l.selectpicker(), e.length && e.each(function() {
            var e = $(this);
            e.wrap('<div class="position-relative"></div>'), e.select2({
                placeholder: "Select value",
                dropdownParent: e.parent()
            })
        })
    }),
    function() {
        var e = document.querySelector(".wizard-icons-example");
        if (null !== e) {
            var t = [].slice.call(e.querySelectorAll(".btn-next")),
                r = [].slice.call(e.querySelectorAll(".btn-prev")),
                c = e.querySelector(".btn-submit");
            let l = new Stepper(e, {
                linear: !1
            });
            t && t.forEach(e => {
                e.addEventListener("click", e => {
                    l.next()
                })
            }), r && r.forEach(e => {
                e.addEventListener("click", e => {
                    l.previous()
                })
            }), c && c.addEventListener("click", e => {
                alert("Submitted..!!")
            })
        }
        e = document.querySelector(".wizard-vertical-icons-example");
        if (null !== e) {
            t = [].slice.call(e.querySelectorAll(".btn-next")), r = [].slice.call(e.querySelectorAll(".btn-prev")), c = e.querySelector(".btn-submit");
            let l = new Stepper(e, {
                linear: !1
            });
            t && t.forEach(e => {
                e.addEventListener("click", e => {
                    l.next()
                })
            }), r && r.forEach(e => {
                e.addEventListener("click", e => {
                    l.previous()
                })
            }), c && c.addEventListener("click", e => {
                alert("Submitted..!!")
            })
        }
        e = document.querySelector(".wizard-modern-icons-example");
        if (null !== e) {
            t = [].slice.call(e.querySelectorAll(".btn-next")), r = [].slice.call(e.querySelectorAll(".btn-prev")), c = e.querySelector(".btn-submit");
            let l = new Stepper(e, {
                linear: !1
            });
            t && t.forEach(e => {
                e.addEventListener("click", e => {
                    l.next()
                })
            }), r && r.forEach(e => {
                e.addEventListener("click", e => {
                    l.previous()
                })
            }), c && c.addEventListener("click", e => {
                alert("Submitted..!!")
            })
        }
        e = document.querySelector(".wizard-modern-vertical-icons-example");
        if (null !== e) {
            t = [].slice.call(e.querySelectorAll(".btn-next")), r = [].slice.call(e.querySelectorAll(".btn-prev")), c = e.querySelector(".btn-submit");
            let l = new Stepper(e, {
                linear: !1
            });
            t && t.forEach(e => {
                e.addEventListener("click", e => {
                    l.next()
                })
            }), r && r.forEach(e => {
                e.addEventListener("click", e => {
                    l.previous()
                })
            }), c && c.addEventListener("click", e => {
                alert("Submitted..!!")
            })
        }
    }();