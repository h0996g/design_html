! function() {
    var e = document.querySelector("#dealDuration"),
        e = (e && e.flatpickr({
            mode: "range"
        }), window.Helpers.initCustomOptionCheck(), document.querySelector("#wizard-create-deal"));
    if (null !== e) {
        var n = e.querySelector("#wizard-create-deal-form"),
            r = n.querySelector("#deal-type"),
            s = n.querySelector("#deal-details"),
            d = n.querySelector("#deal-usage"),
            u = n.querySelector("#review-complete"),
            c = [].slice.call(n.querySelectorAll(".btn-next")),
            n = [].slice.call(n.querySelectorAll(".btn-prev"));
        let t = new Stepper(e, {
                linear: !0
            }),
            a = FormValidation.formValidation(r, {
                fields: {
                    dealAmount: {
                        validators: {
                            notEmpty: {
                                message: "Please enter amount"
                            },
                            numeric: {
                                message: "The amount must be a number"
                            }
                        }
                    },
                    dealRegion: {
                        validators: {
                            notEmpty: {
                                message: "Please select region"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap5: new FormValidation.plugins.Bootstrap5({
                        eleValidClass: "",
                        rowSelector: ".col-sm-6"
                    }),
                    autoFocus: new FormValidation.plugins.AutoFocus,
                    submitButton: new FormValidation.plugins.SubmitButton
                }
            }).on("core.form.valid", function() {
                t.next()
            });
        e = $("#dealRegion");
        e.length && (e.wrap('<div class="position-relative"></div>'), e.select2({
            placeholder: "Select an region",
            dropdownParent: e.parent()
        }).on("change", function() {
            a.revalidateField("dealRegion")
        }));
        let o = FormValidation.formValidation(s, {
            fields: {
                dealTitle: {
                    validators: {
                        notEmpty: {
                            message: "Please enter deal title"
                        }
                    }
                },
                dealCode: {
                    validators: {
                        notEmpty: {
                            message: "Please enter deal code"
                        },
                        stringLength: {
                            min: 4,
                            max: 10,
                            message: "The deal code must be more than 4 and less than 10 characters long"
                        },
                        regexp: {
                            regexp: /^[A-Z0-9]+$/,
                            message: "The deal code can only consist of capital alphabetical and number"
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger,
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: "",
                    rowSelector: ".col-sm-6"
                }),
                autoFocus: new FormValidation.plugins.AutoFocus,
                submitButton: new FormValidation.plugins.SubmitButton
            }
        }).on("core.form.valid", function() {
            t.next()
        });
        r = $("#dealOfferedItem");
        r.length && (r.wrap('<div class="position-relative"></div>'), r.select2({
            placeholder: "Select an offered item",
            dropdownParent: r.parent()
        }).on("change", function() {}));
        let i = FormValidation.formValidation(d, {
                fields: {},
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap5: new FormValidation.plugins.Bootstrap5({
                        eleValidClass: "",
                        rowSelector: ".col-sm-6"
                    }),
                    autoFocus: new FormValidation.plugins.AutoFocus,
                    submitButton: new FormValidation.plugins.SubmitButton
                }
            }).on("core.form.valid", function() {
                t.next()
            }),
            l = FormValidation.formValidation(u, {
                fields: {},
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap5: new FormValidation.plugins.Bootstrap5({
                        eleValidClass: "",
                        rowSelector: ".col-md-12"
                    }),
                    autoFocus: new FormValidation.plugins.AutoFocus,
                    submitButton: new FormValidation.plugins.SubmitButton
                }
            }).on("core.form.valid", function() {
                alert("Submitted..!!")
            });
        c.forEach(e => {
            e.addEventListener("click", e => {
                switch (t._currentIndex) {
                    case 0:
                        a.validate();
                        break;
                    case 1:
                        o.validate();
                        break;
                    case 2:
                        i.validate();
                        break;
                    case 3:
                        l.validate()
                }
            })
        }), n.forEach(e => {
            e.addEventListener("click", e => {
                switch (t._currentIndex) {
                    case 3:
                    case 2:
                    case 1:
                        t.previous()
                }
            })
        })
    }
}();