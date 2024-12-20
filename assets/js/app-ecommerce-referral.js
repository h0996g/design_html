$(function() {
    let t, s, a;
    a = (isDarkStyle ? (t = config.colors_dark.borderColor, s = config.colors_dark.bodyBg, config.colors_dark) : (t = config.colors.borderColor, s = config.colors.bodyBg, config.colors)).headingColor;
    var e = $(".datatables-referral"),
        n = {
            1: {
                title: "Paid",
                class: "bg-label-success"
            },
            2: {
                title: "Unpaid",
                class: "bg-label-warning"
            },
            3: {
                title: "Rejected",
                class: "bg-label-danger"
            }
        };
    e.length && (e.DataTable({
        ajax: assetsPath + "json/ecommerce-referral.json",
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "user"
        }, {
            data: "referred_id"
        }, {
            data: "status"
        }, {
            data: "value"
        }, {
            data: "earning"
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, s, a) {
                return ""
            }
        }, {
            targets: 1,
            orderable: !1,
            searchable: !1,
            responsivePriority: 3,
            checkboxes: !0,
            checkboxes: {
                selectAllRender: '<input type="checkbox" class="form-check-input">'
            },
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input">'
            }
        }, {
            targets: 2,
            responsivePriority: 1,
            render: function(e, t, s, a) {
                var n = s.user,
                    r = s.email,
                    o = s.avatar;
                return '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-4">' + (o ? '<img src="' + assetsPath + "img/avatars/" + o + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (o = (((o = (n = s.user).match(/\b\w/g) || []).shift() || "") + (o.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html" class="text-heading"><span class="fw-medium">' + n + '</span></a><small class="text-nowrap">' + r + "</small></div></div>"
            }
        }, {
            targets: 3,
            render: function(e, t, s, a) {
                return "<span>" + s.referred_id + "</span>"
            }
        }, {
            targets: 4,
            render: function(e, t, s, a) {
                s = s.status;
                return '<span class="badge ' + n[s].class + '" text-capitalized>' + n[s].title + "</span>"
            }
        }, {
            targets: 5,
            render: function(e, t, s, a) {
                return "<span>" + s.value + "</span>"
            }
        }, {
            targets: 6,
            render: function(e, t, s, a) {
                return '<span class="text-heading">' + s.earning + "</span > "
            }
        }],
        order: [
            [2, "asc"]
        ],
        dom: '<"card-header d-flex flex-column flex-sm-row align-items-center py-0"<"head-label"><"d-flex align-items-center justify-content-end"l<"dt-action-buttons"B>>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
            sLengthMenu: "_MENU_",
            paginate: {
                next: '<i class="bx bx-chevron-right bx-18px"></i>',
                previous: '<i class="bx bx-chevron-left bx-18px"></i>'
            }
        },
        buttons: [{
            extend: "collection",
            className: "btn btn-label-secondary dropdown-toggle",
            text: '<i class="bx bx-export bx-sm me-2"></i>Export',
            buttons: [{
                extend: "print",
                text: '<i class="bx bx-printer me-2" ></i>Print',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                },
                customize: function(e) {
                    $(e.document.body).css("color", a).css("border-color", t).css("background-color", s), $(e.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5],
                    format: {
                        body: function(e, t, s) {
                            var a;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), a = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("user-name") ? a += t.lastChild.firstChild.textContent : void 0 === t.innerText ? a += t.textContent : a += t.innerText
                            }), a)
                        }
                    }
                }
            }]
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().user
                    }
                }),
                type: "column",
                renderer: function(e, t, s) {
                    s = $.map(s, function(e, t) {
                        return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                    }).join("");
                    return !!s && $('<table class="table"/><tbody />').append(s)
                }
            }
        }
    }), $("div.head-label").html('<h5 class="card-title mb-0 text-nowrap mt-6 mt-sm-0">Referred users</h5>'), $(".dataTables_length").addClass("me-2 ms-n2 ms-sm-0"), $(".dt-action-buttons").addClass("pt-0")), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
});