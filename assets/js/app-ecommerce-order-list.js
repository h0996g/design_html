$(function() {
    let t, a, s;
    s = (isDarkStyle ? (t = config.colors_dark.borderColor, a = config.colors_dark.bodyBg, config.colors_dark) : (t = config.colors.borderColor, a = config.colors.bodyBg, config.colors)).headingColor;
    var e, n = $(".datatables-order"),
        r = {
            1: {
                title: "Dispatched",
                class: "bg-label-warning"
            },
            2: {
                title: "Delivered",
                class: "bg-label-success"
            },
            3: {
                title: "Out for Delivery",
                class: "bg-label-primary"
            },
            4: {
                title: "Ready to Pickup",
                class: "bg-label-info"
            }
        },
        o = {
            1: {
                title: "Paid",
                class: "text-success"
            },
            2: {
                title: "Pending",
                class: "text-warning"
            },
            3: {
                title: "Failed",
                class: "text-danger"
            },
            4: {
                title: "Cancelled",
                class: "text-secondary"
            }
        };
    n.length && (e = n.DataTable({
        ajax: assetsPath + "json/ecommerce-customer-order.json",
        columns: [{
            data: "id"
        }, {
            data: "id"
        }, {
            data: "order"
        }, {
            data: "date"
        }, {
            data: "customer"
        }, {
            data: "payment"
        }, {
            data: "status"
        }, {
            data: "method"
        }, {
            data: ""
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, a, s) {
                return ""
            }
        }, {
            targets: 1,
            orderable: !1,
            checkboxes: {
                selectAllRender: '<input type="checkbox" class="form-check-input">'
            },
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input" >'
            },
            searchable: !1
        }, {
            targets: 2,
            render: function(e, t, a, s) {
                return '<a href="app-ecommerce-order-details.html"><span>#' + a.order + "</span></a>"
            }
        }, {
            targets: 3,
            render: function(e, t, a, s) {
                var n = new Date(a.date),
                    a = a.time.substring(0, 5);
                return '<span class="text-nowrap">' + n.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    time: "numeric"
                }) + ", " + a + "</span>"
            }
        }, {
            targets: 4,
            responsivePriority: 1,
            render: function(e, t, a, s) {
                var n = a.customer,
                    r = a.email,
                    o = a.avatar;
                return '<div class="d-flex justify-content-start align-items-center order-name text-nowrap"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' + (o ? '<img src="' + assetsPath + "img/avatars/" + o + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (o = (((o = (n = a.customer).match(/\b\w/g) || []).shift() || "") + (o.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><h6 class="m-0"><a href="pages-profile-user.html" class="text-heading">' + n + "</a></h6><small>" + r + "</small></div></div>"
            }
        }, {
            targets: 5,
            render: function(e, t, a, s) {
                a = a.payment, a = o[a];
                return a ? '<h6 class="mb-0 align-items-center d-flex w-px-100 ' + a.class + '"><i class="bx bxs-circle bx-8px me-1"></i>' + a.title + "</h6>" : e
            }
        }, {
            targets: -3,
            render: function(e, t, a, s) {
                a = a.status;
                return '<span class="badge px-2 ' + r[a].class + '" text-capitalized>' + r[a].title + "</span>"
            }
        }, {
            targets: -2,
            render: function(e, t, a, s) {
                var n = a.method,
                    a = a.method_number;
                return "paypal" == n && (a = "@gmail.com"), '<div class="d-flex align-items-center text-nowrap"><img src="' + assetsPath + "img/icons/payments/" + n + '.png" alt="' + n + '" width="29"><span><i class="bx bx-dots-horizontal-rounded mt-1"></i>' + a + "</span></div>"
            }
        }, {
            targets: -1,
            title: "Actions",
            searchable: !1,
            orderable: !1,
            render: function(e, t, a, s) {
                return '<div class="d-flex justify-content-sm-start align-items-sm-center"><button class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded bx-md"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="app-ecommerce-order-details.html" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item delete-record">Delete</a></div></div>'
            }
        }],
        order: [3, "asc"],
        dom: '<"card-header py-0 d-flex flex-column flex-md-row align-items-center"<f><"d-flex align-items-center justify-content-md-end gap-2 justify-content-center"l<"dt-action-buttons"B>>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        lengthMenu: [10, 40, 60, 80, 100],
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Order",
            info: "Displaying _START_ to _END_ of _TOTAL_ entries",
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
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                },
                customize: function(e) {
                    $(e.document.body).css("color", s).css("border-color", t).css("background-color", a), $(e.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [2, 3, 4, 5, 6, 7],
                    format: {
                        body: function(e, t, a) {
                            var s;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), s = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("order-name") ? s += t.lastChild.firstChild.textContent : void 0 === t.innerText ? s += t.textContent : s += t.innerText
                            }), s)
                        }
                    }
                }
            }]
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().customer
                    }
                }),
                type: "column",
                renderer: function(e, t, a) {
                    a = $.map(a, function(e, t) {
                        return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                    }).join("");
                    return !!a && $('<table class="table"/><tbody />').append(a)
                }
            }
        }
    }), $(".dataTables_length").addClass("ms-n2"), $(".dt-action-buttons").addClass("pt-0"), $(".dataTables_filter").addClass("ms-n3 mb-0 mb-md-6")), $(".datatables-order tbody").on("click", ".delete-record", function() {
        e.row($(this).parents("tr")).remove().draw()
    }), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
});