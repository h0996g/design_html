$(function() {
        var e, t = $(".datatables-users"),
            n = {
                1: {
                    title: "Pending",
                    class: "bg-label-warning"
                },
                2: {
                    title: "Active",
                    class: "bg-label-success"
                },
                3: {
                    title: "Inactive",
                    class: "bg-label-secondary"
                }
            },
            c = "app-user-view-account.html";
        t.length && (e = t.DataTable({
            ajax: assetsPath + "json/user-list.json",
            columns: [{
                data: "id"
            }, {
                data: "id"
            }, {
                data: "full_name"
            }, {
                data: "role"
            }, {
                data: "current_plan"
            }, {
                data: "billing"
            }, {
                data: "status"
            }, {
                data: ""
            }],
            columnDefs: [{
                className: "control",
                orderable: !1,
                searchable: !1,
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
                responsivePriority: 4,
                render: function(e, t, a, s) {
                    var n = a.full_name,
                        r = a.email,
                        l = a.avatar;
                    return '<div class="d-flex justify-content-left align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-4">' + (l ? '<img src="' + assetsPath + "img/avatars/" + l + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random()) + 1] + '">' + (l = (((l = (n = a.full_name).match(/\b\w/g) || []).shift() || "") + (l.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><a href="' + c + '" class="text-heading text-truncate"><span class="fw-medium">' + n + "</span></a><small>@" + r + "</small></div></div>"
                }
            }, {
                targets: 3,
                render: function(e, t, a, s) {
                    a = a.role;
                    return "<span class='text-truncate d-flex align-items-center text-heading'>" + {
                        Subscriber: '<i class="bx bx-crown text-primary me-2"></i>',
                        Author: '<i class="bx bx-edit text-warning me-2"></i>',
                        Maintainer: '<i class="bx bx-user text-success me-2"></i>',
                        Editor: '<i class="bx bx-pie-chart-alt text-info me-2"></i>',
                        Admin: '<i class="bx bx-desktop text-danger me-2"></i>'
                    }[a] + a + "</span>"
                }
            }, {
                targets: 4,
                render: function(e, t, a, s) {
                    return '<span class="text-heading">' + a.current_plan + "</span>"
                }
            }, {
                targets: 6,
                render: function(e, t, a, s) {
                    a = a.status;
                    return '<span class="badge ' + n[a].class + '" text-capitalized>' + n[a].title + "</span>"
                }
            }, {
                targets: -1,
                title: "Actions",
                searchable: !1,
                orderable: !1,
                render: function(e, t, a, s) {
                    return '<div class="d-flex align-items-center"><a href="javascript:;" class="btn btn-icon delete-record"><i class="bx bx-trash bx-md"></i></a><a href="' + c + '" class="btn btn-icon"><i class="bx bx-show bx-md"></i></a><a href="javascript:;" class="btn btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded bx-md"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Suspend</a></div></div>'
                }
            }],
            order: [
                [2, "desc"]
            ],
            dom: '<"row"<"col-sm-12 col-md-4 col-lg-6" l><"col-sm-12 col-md-8 col-lg-6"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end justify-content-center align-items-center flex-sm-nowrap flex-wrap flex-sm-row flex-column"<"me-4"f><"user_role w-px-200 me-sm-4 mb-6 mb-sm-0"><"user_plan w-px-200 mb-6 mb-sm-0">>>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
            language: {
                sLengthMenu: "_MENU_",
                search: "",
                searchPlaceholder: "Search User",
                paginate: {
                    next: '<i class="bx bx-chevron-right bx-18px"></i>',
                    previous: '<i class="bx bx-chevron-left bx-18px"></i>'
                }
            },
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
            },
            initComplete: function() {
                this.api().columns(3).every(function() {
                    var t = this,
                        a = $('<select id="UserRole" class="form-select text-capitalize"><option value=""> Select Role </option></select>').appendTo(".user_role").on("change", function() {
                            var e = $.fn.dataTable.util.escapeRegex($(this).val());
                            t.search(e ? "^" + e + "$" : "", !0, !1).draw()
                        });
                    t.data().unique().sort().each(function(e, t) {
                        a.append('<option value="' + e + '" class="text-capitalize">' + e + "</option>")
                    })
                }), this.api().columns(4).every(function() {
                    var t = this,
                        a = $('<select id="Userplan" class="form-select text-capitalize"><option value=""> Select Plan </option></select>').appendTo(".user_plan").on("change", function() {
                            var e = $.fn.dataTable.util.escapeRegex($(this).val());
                            t.search(e ? "^" + e + "$" : "", !0, !1).draw()
                        });
                    t.data().unique().sort().each(function(e, t) {
                        a.append('<option value="' + e + '" class="text-capitalize">' + e + "</option>")
                    })
                })
            }
        })), $(".datatables-users tbody").on("click", ".delete-record", function() {
            e.row($(this).parents("tr")).remove().draw()
        }), setTimeout(() => {
            $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm"), $(".dataTables_length .form-select").addClass("mx-0"), $(".dataTables_length").addClass("mb-0 mb-md-6")
        }, 300)
    }),
    function() {
        var e = document.querySelectorAll(".role-edit-modal"),
            t = document.querySelector(".add-new-role"),
            a = document.querySelector(".role-title");
        t.onclick = function() {
            a.innerHTML = "Add New Role"
        }, e && e.forEach(function(e) {
            e.onclick = function() {
                a.innerHTML = "Edit Role"
            }
        })
    }();