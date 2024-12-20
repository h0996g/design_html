$(function() {
    var e, t, a = $(".datatable-project"),
        s = $(".datatable-invoice");
    a.length && (e = a.DataTable({
        ajax: assetsPath + "json/user-profile.json",
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "project_name"
        }, {
            data: "project_leader"
        }, {
            data: ""
        }, {
            data: "status"
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
            responsivePriority: 4,
            render: function(e, t, a, s) {
                var n = a.project_img,
                    r = a.project_name,
                    l = a.date;
                return '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' + (n ? '<img src="' + assetsPath + "img/icons/brands/" + n + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (n = (((n = (r = a.project_name).match(/\b\w/g) || []).shift() || "") + (n.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column gap-50"><span class="text-truncate fw-medium text-heading">' + r + '</span><small class="text-truncate">' + l + "</small></div></div>"
            }
        }, {
            targets: 3,
            render: function(e, t, a, s) {
                return '<span class="text-heading">' + a.project_leader + "</span>"
            }
        }, {
            targets: 4,
            orderable: !1,
            searchable: !1,
            render: function(e, t, a, s) {
                for (var n = a.team, r = "", l = 0, i = 0; i < n.length && (r += '<li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Karlos" class="avatar avatar-xs pull-up"><img class="rounded-circle" src="' + assetsPath + "img/avatars/" + n[i] + '"  alt="Avatar"></li>', !(2 < ++l)); i++);
                return 2 < l && 0 < (a = n.length - 3) && (r += '<li class="avatar avatar-xs"><span class="avatar-initial rounded-circle pull-up text-heading" data-bs-toggle="tooltip" data-bs-placement="top" title="' + a + ' more">+' + a + "</span ></li>"), '<div class="d-flex align-items-center"><ul class="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">' + r + "</ul></div>"
            }
        }, {
            targets: -2,
            render: function(e, t, a, s) {
                a = a.status;
                return '<div class="d-flex align-items-center"><div class="progress w-100 me-3" style="height: 6px;"><div class="progress-bar" style="width: ' + a + '" aria-valuenow="' + a + '" aria-valuemin="0" aria-valuemax="100"></div></div><span class="text-heading">' + a + "</span></div>"
            }
        }, {
            targets: -1,
            searchable: !1,
            title: "Action",
            orderable: !1,
            render: function(e, t, a, s) {
                return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded bx-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div>'
            }
        }],
        order: [
            [2, "desc"]
        ],
        dom: '<"d-flex justify-content-between align-items-center flex-column flex-sm-row mx-6 row"<"col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center"l><"col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center mt-sm-0 mt-n6"f>>t<"d-flex justify-content-between mx-6 row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        displayLength: 7,
        lengthMenu: [7, 10, 25, 50, 75, 100],
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Project",
            paginate: {
                next: '<i class="bx bx-chevron-right bx-18px"></i>',
                previous: '<i class="bx bx-chevron-left bx-18px"></i>'
            }
        },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return 'Details of "' + e.data().project_name + '" Project'
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
    }), $(".datatable-project tbody").on("click", ".delete-record", function() {
        e.row($(this).parents("tr")).remove().draw()
    })), s.length && (t = s.DataTable({
        ajax: assetsPath + "json/invoice-list.json",
        columns: [{
            data: ""
        }, {
            data: "invoice_id"
        }, {
            data: "invoice_status"
        }, {
            data: "total"
        }, {
            data: "issued_date"
        }, {
            data: "action"
        }],
        columnDefs: [{
            className: "control",
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, a, s) {
                return ""
            }
        }, {
            targets: 1,
            render: function(e, t, a, s) {
                return '<a href="app-invoice-preview.html"><span>#' + a.invoice_id + "</span></a>"
            }
        }, {
            targets: 2,
            render: function(e, t, a, s) {
                var n = a.invoice_status,
                    r = a.due_date;
                return "<span class='d-inline-block' data-bs-toggle='tooltip' data-bs-html='true' title='<span>" + n + '<br> <span class="fw-medium">Balance:</span> ' + a.balance + '<br> <span class="fw-medium">Due Date:</span> ' + r + "</span>'>" + {
                    Sent: '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-success w-px-30 h-px-30"><i class="bx bx-check bx-xs"></i></span>',
                    Draft: '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-primary w-px-30 h-px-30"><i class="bx bx-folder bx-xs"></i></span>',
                    "Past Due": '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-danger w-px-30 h-px-30"><i class="bx bx-error bx-xs"></i></span>',
                    "Partial Payment": '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-secondary w-px-30 h-px-30"><i class="bx bx-envelope bx-xs"></i></span>',
                    Paid: '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-warning w-px-30 h-px-30"><i class="bx bx-pie-chart-alt bx-xs"></i></span>',
                    Downloaded: '<span class="badge badge-center d-flex align-items-center justify-content-center rounded-pill bg-label-info w-px-30 h-px-30"><i class="bx bx-down-arrow-alt bx-xs"></i></span>'
                }[n] + "</span>"
            }
        }, {
            targets: 3,
            render: function(e, t, a, s) {
                return "$" + a.total
            }
        }, {
            targets: -1,
            title: "Actions",
            orderable: !1,
            render: function(e, t, a, s) {
                return '<div class="d-flex align-items-center"><a href="javascript:;" class="btn btn-icon delete-record"><i class="bx bx-trash bx-md"></i></a><a href="app-invoice-preview.html" class="btn btn-icon" data-bs-toggle="tooltip" title="Preview"><i class="bx bx-show bx-md"></i></a><div class="d-inline-block"><a href="javascript:;" class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded bx-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Download</a><a href="app-invoice-edit.html" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Duplicate</a></div></div>'
            }
        }],
        order: [
            [1, "desc"]
        ],
        dom: '<"row mx-6"<"col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-sm-start mt-6 mt-sm-0"<"head-label">><"col-sm-6 col-12 d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row align-items-baseline gap-4"lB>>>t<"row mx-6"<"col-sm-12 col-xxl-6 text-center text-xxl-start pb-md-2 pb-xxl-0"i><"col-sm-12 col-xxl-6 d-md-flex justify-content-xxl-end justify-content-center"p>>',
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Invoice",
            paginate: {
                next: '<i class="bx bx-chevron-right bx-18px"></i>',
                previous: '<i class="bx bx-chevron-left bx-18px"></i>'
            }
        },
        buttons: [{
            extend: "collection",
            className: "btn btn-label-secondary dropdown-toggle float-sm-end mb-3 mb-sm-0",
            text: '<i class="bx bx-export bx-sm me-2"></i>Export',
            buttons: [{
                extend: "print",
                text: '<i class="bx bx-printer me-2" ></i>Print',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4]
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4]
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4]
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4]
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4]
                }
            }]
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().full_name
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
    }), $("div.head-label").html('<h5 class="card-title mb-0">Invoice List</h5>'), $(".dataTables_length .form-select").addClass("mx-0")), s.on("draw.dt", function() {
        [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
            return new bootstrap.Tooltip(e, {
                boundary: document.body
            })
        })
    }), $(".datatable-invoice tbody").on("click", ".delete-record", function() {
        t.row($(this).parents("tr")).remove().draw()
    }), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
});