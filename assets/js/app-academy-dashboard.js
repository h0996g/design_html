! function() {
    let e, r, a;
    a = (isDarkStyle ? (e = config.colors_dark.textMuted, r = config.colors_dark.headingColor, config.colors_dark) : (e = config.colors.textMuted, r = config.colors.headingColor, config.colors)).borderColor;
    var t = {
            donut: {
                series1: "#5AB12C",
                series2: "#66C732",
                series3: config.colors.success,
                series4: "#8DE45F",
                series5: "#AAEB87",
                series6: "#C6F1AF"
            }
        },
        s = document.querySelector("#leadsReportChart"),
        t = {
            chart: {
                height: 170,
                width: 150,
                parentHeightOffset: 0,
                type: "donut"
            },
            labels: ["36h", "56h", "16h", "32h", "56h", "16h"],
            series: [23, 35, 10, 20, 35, 23],
            colors: [t.donut.series1, t.donut.series2, t.donut.series3, t.donut.series4, t.donut.series5, t.donut.series6],
            stroke: {
                width: 0
            },
            dataLabels: {
                enabled: !1,
                formatter: function(e, a) {
                    return parseInt(e) + "%"
                }
            },
            legend: {
                show: !1
            },
            tooltip: {
                theme: !1
            },
            grid: {
                padding: {
                    top: 0
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "70%",
                        labels: {
                            show: !0,
                            value: {
                                fontSize: "1.125rem",
                                fontFamily: "Public Sans",
                                color: r,
                                fontWeight: 500,
                                offsetY: -20,
                                formatter: function(e) {
                                    return parseInt(e) + "%"
                                }
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: "Public Sans"
                            },
                            total: {
                                show: !0,
                                fontSize: ".9375rem",
                                label: "Total",
                                color: e,
                                formatter: function(e) {
                                    return "231h"
                                }
                            }
                        }
                    }
                }
            }
        };
    null !== s && new ApexCharts(s, t).render();
    let o = document.querySelector("#horizontalBarChart"),
        n = {
            chart: {
                height: 300,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    horizontal: !0,
                    barHeight: "70%",
                    distributed: !0,
                    startingShape: "rounded",
                    borderRadius: 7
                }
            },
            grid: {
                strokeDashArray: 10,
                borderColor: a,
                xaxis: {
                    lines: {
                        show: !0
                    }
                },
                yaxis: {
                    lines: {
                        show: !1
                    }
                },
                padding: {
                    top: -35,
                    bottom: -12
                }
            },
            colors: [config.colors.primary, config.colors.info, config.colors.success, config.colors.secondary, config.colors.danger, config.colors.warning],
            fill: {
                opacity: [1, 1, 1, 1, 1, 1]
            },
            dataLabels: {
                enabled: !0,
                style: {
                    colors: ["#fff"],
                    fontWeight: 400,
                    fontSize: "13px",
                    fontFamily: "Public Sans"
                },
                formatter: function(e, a) {
                    return n.labels[a.dataPointIndex]
                },
                offsetX: 0,
                dropShadow: {
                    enabled: !1
                }
            },
            labels: ["UI Design", "UX Design", "Music", "Animation", "React", "SEO"],
            series: [{
                data: [35, 20, 14, 12, 10, 9]
            }],
            xaxis: {
                categories: ["6", "5", "4", "3", "2", "1"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        colors: e,
                        fontFamily: "Public Sans",
                        fontSize: "13px"
                    },
                    formatter: function(e) {
                        return e + "%"
                    }
                }
            },
            yaxis: {
                max: 35,
                labels: {
                    style: {
                        colors: [e],
                        fontFamily: "Public Sans",
                        fontSize: "13px"
                    }
                }
            },
            tooltip: {
                enabled: !0,
                style: {
                    fontSize: "12px"
                },
                onDatasetHover: {
                    highlightDataSeries: !1
                },
                custom: function({
                    series: e,
                    seriesIndex: a,
                    dataPointIndex: t
                }) {
                    return '<div class="px-3 py-2"><span>' + e[a][t] + "%</span></div>"
                }
            },
            legend: {
                show: !1
            }
        };
    null !== o && new ApexCharts(o, n).render();
    var i, s = document.querySelectorAll(".chart-progress"),
        t = (s && s.forEach(function(e) {
            var a = config.colors[e.dataset.color],
                t = e.dataset.series,
                s = e.dataset.progress_variant,
                a = (a = a, t = t, {
                    chart: {
                        height: "true" == (s = s) ? 58 : 55,
                        width: "true" == s ? 58 : 45,
                        type: "radialBar"
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "true" == s ? "45%" : "25%"
                            },
                            dataLabels: {
                                show: "true" == s,
                                value: {
                                    offsetY: -10,
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    fontFamily: "Public Sans",
                                    color: r
                                }
                            },
                            track: {
                                background: config.colors_label.secondary
                            }
                        }
                    },
                    stroke: {
                        lineCap: "round"
                    },
                    colors: [a],
                    grid: {
                        padding: {
                            top: "true" == s ? -12 : -15,
                            bottom: "true" == s ? -17 : -15,
                            left: "true" == s ? -17 : -5,
                            right: -15
                        }
                    },
                    series: [t],
                    labels: "true" == s ? [""] : ["Progress"]
                });
            new ApexCharts(e, a).render()
        }), $(".datatables-academy-course")),
        l = {
            angular: '<span class="badge bg-label-danger rounded p-1_5"><i class="bx bxl-angular bx-28px"></i></span>',
            figma: '<span class="badge bg-label-warning rounded p-1_5"><i class="bx bxl-figma bx-28px"></i></span>',
            react: '<span class="badge bg-label-info rounded p-1_5"><i class="bx bxl-react bx-28px"></i></span>',
            art: '<span class="badge bg-label-success rounded p-1_5"><i class="bx bxs-color bx-28px"></i></span>',
            fundamentals: '<span class="badge bg-label-primary rounded p-1_5"><i class="bx bx-diamond bx-28px"></i></span>'
        };
    t.length && (i = t.DataTable({
        ajax: assetsPath + "json/app-academy-dashboard.json",
        columns: [{
            data: ""
        }, {
            data: "id"
        }, {
            data: "course name"
        }, {
            data: "time"
        }, {
            data: "progress"
        }, {
            data: "status"
        }],
        columnDefs: [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, a, t, s) {
                return ""
            }
        }, {
            targets: 1,
            orderable: !1,
            searchable: !1,
            checkboxes: !0,
            checkboxes: {
                selectAllRender: '<input type="checkbox" class="form-check-input">'
            },
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input">'
            }
        }, {
            targets: 2,
            responsivePriority: 2,
            render: function(e, a, t, s) {
                var r = t.logo,
                    o = t.course,
                    n = t.user,
                    i = t.image;
                return t = i ? '<img src="' + assetsPath + "img/avatars/" + i + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (i = (((i = t.user.match(/\b\w/g) || []).shift() || "") + (i.pop() || "")).toUpperCase()) + "</span>", '<div class="d-flex align-items-center"><span class="me-4">' + l[r] + '</span><div><a class="text-heading text-truncate fw-medium mb-2 text-wrap" href="app-academy-course-details.html">' + o + '</a><div class="d-flex align-items-center mt-1"><div class="avatar-wrapper me-2"><div class="avatar avatar-xs">' + t + '</div></div><small class="text-nowrap text-heading">' + n + "</small></div></div></div>"
            }
        }, {
            targets: 3,
            responsivePriority: 3,
            render: function(e, a, t, s) {
                var e = moment.duration(e),
                    r = Math.floor(e.asHours());
                return '<span class="fw-medium text-nowrap text-heading">' + (r + "h " + (Math.floor(e.asMinutes()) - 60 * r) + "m") + "</span>"
            }
        }, {
            targets: 4,
            render: function(e, a, t, s) {
                var r = t.status;
                return '<div class="d-flex align-items-center gap-3"><p class="fw-medium mb-0 text-heading">' + r + '</p><div class="progress w-100" style="height: 8px;"><div class="progress-bar" style="width: ' + r + '" aria-valuenow="' + r + '" aria-valuemin="0" aria-valuemax="100"></div></div><small>' + t.number + "</small></div>"
            }
        }, {
            targets: 5,
            render: function(e, a, t, s) {
                return '<div class="d-flex align-items-center justify-content-between"><div class="w-px-50 d-flex align-items-center"><i class="bx bx-user bx-lg me-1_5 text-primary"></i><span>' + t.user_number + '</span></div><div class="w-px-50 d-flex align-items-center"><i class="bx bx-book-open bx-lg me-1_5 text-info"></i><span>' + t.note + '</span></div><div class="w-px-50 d-flex align-items-center"><i class="bx bx-video bx-lg me-1_5 text-danger"></i><span>' + t.view + "</span></div></div>"
            }
        }],
        order: [
            [2, "desc"]
        ],
        dom: '<"card-header py-sm-0"<"head-label text-center">f>t<"row mx-md-4 flex-column flex-md-row align-items-center"<"col-sm-6 col-12 text-center text-md-start pb-2 pb-xl-0 px-0"i><"col-sm-6 col-12 d-flex justify-content-center justify-content-md-end px-0"p>>',
        lengthMenu: [5],
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Search Course",
            paginate: {
                next: '<i class="bx bx-chevron-right bx-18px"></i>',
                previous: '<i class="bx bx-chevron-left bx-18px"></i>'
            }
        },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().order
                    }
                }),
                type: "column",
                renderer: function(e, a, t) {
                    t = $.map(t, function(e, a) {
                        return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                    }).join("");
                    return !!t && $('<table class="table"/><tbody />').append(t)
                }
            }
        }
    }), $("div.head-label").html('<h5 class="card-title mb-0 text-nowrap">Course you are taking</h5>')), $(".datatables-orders tbody").on("click", ".delete-record", function() {
        i.row($(this).parents("tr")).remove().draw()
    }), setTimeout(() => {
        $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm")
    }, 300)
}();