! function() {
    let e, t, a, o;
    t = isDarkStyle ? (e = config.colors_dark.cardColor, a = config.colors_dark.textMuted, o = config.colors_dark.headingColor, "dark") : (e = config.colors.cardColor, a = config.colors.textMuted, o = config.colors.headingColor, "");
    var s = document.querySelector("#reviewsChart"),
        r = {
            chart: {
                height: 160,
                width: 190,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "75%",
                    columnWidth: "40%",
                    startingShape: "rounded",
                    endingShape: "rounded",
                    borderRadius: 5,
                    distributed: !0
                }
            },
            grid: {
                show: !1,
                padding: {
                    top: -25,
                    bottom: -12
                }
            },
            colors: [config.colors_label.success, config.colors_label.success, config.colors_label.success, config.colors_label.success, config.colors.success, config.colors_label.success, config.colors_label.success],
            dataLabels: {
                enabled: !1
            },
            series: [{
                data: [20, 40, 60, 80, 100, 80, 60]
            }],
            legend: {
                show: !1
            },
            xaxis: {
                categories: ["M", "T", "W", "T", "F", "S", "S"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        colors: a,
                        fontSize: "13px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            },
            responsive: [{
                breakpoint: 0,
                options: {
                    chart: {
                        width: "100%"
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 1440,
                options: {
                    chart: {
                        height: 150,
                        width: 190,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 1400,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 1200,
                options: {
                    chart: {
                        height: 130,
                        width: 190,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 992,
                chart: {
                    height: 150,
                    width: 190,
                    toolbar: {
                        show: !1
                    }
                },
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 883,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 150,
                        width: 190,
                        toolbar: {
                            show: !1
                        }
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 4,
                            columnWidth: "40%"
                        }
                    }
                }
            }, {
                breakpoint: 576,
                options: {
                    chart: {
                        width: "100%",
                        height: "200",
                        type: "bar"
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 6,
                            columnWidth: "30% "
                        }
                    }
                }
            }, {
                breakpoint: 420,
                options: {
                    plotOptions: {
                        chart: {
                            width: "100%",
                            height: "200",
                            type: "bar"
                        },
                        bar: {
                            borderRadius: 3,
                            columnWidth: "30%"
                        }
                    }
                }
            }]
        };
    null !== s && new ApexCharts(s, r).render()
}(), $(function() {
    let t, a, o;
    o = (isDarkStyle ? (t = config.colors_dark.borderColor, a = config.colors_dark.bodyBg, config.colors_dark) : (t = config.colors.borderColor, a = config.colors.bodyBg, config.colors)).headingColor;
    var e, s = $(".datatables-review"),
        r = {
            Pending: {
                title: "Pending",
                class: "bg-label-warning"
            },
            Published: {
                title: "Published",
                class: "bg-label-success"
            }
        };
    s.length && (e = s.DataTable({
        ajax: assetsPath + "json/app-ecommerce-reviews.json",
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "product"
        }, {
            data: "reviewer"
        }, {
            data: "review"
        }, {
            data: "date"
        }, {
            data: "status"
        }, {
            data: " "
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, a, o) {
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
            render: function(e, t, a, o) {
                var s = a.product,
                    r = a.company_name,
                    n = a.id,
                    i = a.product_image;
                return '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-4 rounded-2 bg-label-secondary">' + (i ? '<img src="' + assetsPath + "img/ecommerce-images/" + i + '" alt="Product-' + n + '" class="rounded">' : '<span class="avatar-initial rounded bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (i = (((i = (s = a.product).match(/\b\w/g) || []).shift() || "") + (i.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><span class="fw-medium text-nowrap text-heading">' + s + "</span></a><small>" + r + "</small></div></div>"
            }
        }, {
            targets: 3,
            responsivePriority: 1,
            render: function(e, t, a, o) {
                var s = a.reviewer,
                    r = a.email,
                    n = a.avatar;
                return '<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar avatar-sm me-4">' + (n ? '<img src="' + assetsPath + "img/avatars/" + n + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (n = (((n = (s = a.reviewer).match(/\b\w/g) || []).shift() || "") + (n.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><a href="app-ecommerce-customer-details-overview.html"><span class="fw-medium">' + s + '</span></a><small class="text-nowrap">' + r + "</small></div></div>"
            }
        }, {
            targets: 4,
            responsivePriority: 2,
            sortable: !1,
            render: function(e, t, a, o) {
                var s = a.review,
                    r = a.head,
                    a = a.para,
                    n = $('<div class="read-only-ratings ps-0 mb-1"></div>');
                r = "string" != typeof(r = r) || 0 === r.length ? r : r.charAt(0).toUpperCase() + r.slice(1);
                return n.rateYo({
                    rating: s,
                    rtl: isRtl,
                    readOnly: !0,
                    starWidth: "24px",
                    spacing: "3px",
                    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M20.1188 8.41458C20.0611 8.24488 19.9551 8.09576 19.8137 7.98564C19.6723 7.87552 19.5017 7.80922 19.3231 7.79492L14.0972 7.37967L11.8358 2.37375C11.7637 2.21252 11.6466 2.07558 11.4985 1.97945C11.3503 1.88333 11.1776 1.83213 11.001 1.83203C10.8244 1.83193 10.6515 1.88295 10.5033 1.97891C10.3551 2.07487 10.2378 2.21168 10.1656 2.37283L7.90417 7.37967L2.67826 7.79492C2.50268 7.80883 2.33482 7.87303 2.19477 7.97984C2.05472 8.08665 1.9484 8.23155 1.88854 8.3972C1.82869 8.56284 1.81782 8.74223 1.85724 8.9139C1.89666 9.08556 1.98471 9.24223 2.11084 9.36517L5.97276 13.1299L4.60693 19.0443C4.56545 19.2233 4.57874 19.4106 4.64508 19.582C4.71141 19.7534 4.82772 19.9009 4.97891 20.0053C5.1301 20.1098 5.3092 20.1664 5.49296 20.1678C5.67672 20.1692 5.85666 20.1153 6.00943 20.0132L11.0007 16.6857L15.9919 20.0132C16.1481 20.1168 16.3322 20.1702 16.5196 20.1661C16.707 20.162 16.8886 20.1006 17.04 19.9902C17.1915 19.8798 17.3055 19.7256 17.3667 19.5485C17.4279 19.3713 17.4335 19.1797 17.3825 18.9993L15.7059 13.1327L19.8639 9.39084C20.1362 9.14517 20.2361 8.762 20.1188 8.41458Z"/></svg>'
                }), "<div>" + n.prop("outerHTML") + '<p class="h6 mb-1 text-truncate">' + r + '</p><small class="text-break pe-3">' + a + "</small></div>"
            }
        }, {
            targets: 5,
            render: function(e, t, a, o) {
                return '<span class="text-nowrap">' + new Date(a.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                }) + "</span>"
            }
        }, {
            targets: 6,
            render: function(e, t, a, o) {
                a = a.status;
                return '<span class="badge ' + r[a].class + '" text-capitalize>' + r[a].title + "</span>"
            }
        }, {
            targets: -1,
            title: "Actions",
            searchable: !1,
            orderable: !1,
            render: function(e, t, a, o) {
                return '<div class="text-xxl-center"><div class="dropdown"><a href="javascript:;" class="btn btn-icon dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded bx-md"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Download</a><a href="javascript:;" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Duplicate</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item delete-record text-danger">Delete</a></div></div></div>'
            }
        }],
        order: [
            [2, "asc"]
        ],
        dom: '<"card-header d-flex align-items-md-center align-items-start py-0 flex-wrap flex-md-row flex-column"<"me-5 ms-n4"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-start align-items-sm-center justify-content-md-end pt-0 gap-sm-4 gap-6 flex-wrap flex-sm-row flex-column mb-6 mb-sm-0"l<"review_filter"> <"mx-0 me-md-n3 mt-sm-0"B>>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Review",
            paginate: {
                next: '<i class="bx bx-chevron-right bx-18px"></i>',
                previous: '<i class="bx bx-chevron-left bx-18px"></i>'
            }
        },
        buttons: [{
            extend: "collection",
            className: "btn btn-label-secondary dropdown-toggle me-3",
            text: '<i class="bx bx-export bx-sm me-2"></i>Export',
            buttons: [{
                extend: "print",
                text: '<i class="bx bx-printer me-2" ></i>Print',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                },
                customize: function(e) {
                    $(e.document.body).css("color", o).css("border-color", t).css("background-color", a), $(e.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: [1, 2, 3, 4, 5, 6],
                    format: {
                        body: function(e, t, a) {
                            var o;
                            return e.length <= 0 ? e : (e = $.parseHTML(e), o = "", $.each(e, function(e, t) {
                                void 0 !== t.classList && t.classList.contains("customer-name") ? o += t.lastChild.firstChild.textContent : void 0 === t.innerText ? o += t.textContent : o += t.innerText
                            }), o)
                        }
                    }
                }
            }]
        }],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().reviewer
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
            this.api().columns(6).every(function() {
                var t = this,
                    a = $('<select id="Review" class="form-select"><option value=""> All </option></select>').appendTo(".review_filter").on("change", function() {
                        var e = $.fn.dataTable.util.escapeRegex($(this).val());
                        t.search(e ? "^" + e + "$" : "", !0, !1).draw()
                    });
                t.data().unique().sort().each(function(e, t) {
                    a.append('<option value="' + e + '" class="text-capitalize">' + e + "</option>")
                })
            })
        }
    })), $(".datatables-review tbody").on("click", ".delete-record", function() {
        e.row($(this).parents("tr")).remove().draw()
    }), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_filter").addClass("mb-0 mb-md-6"), $(".dataTables_length .form-select").removeClass("form-select-sm"), $(".dataTables_length").addClass("ms-n2 me-n2 mb-0 mb-sm-6")
    }, 300)
});