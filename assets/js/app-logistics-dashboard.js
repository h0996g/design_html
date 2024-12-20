! function() {
    let e, t, o, r;
    r = (isDarkStyle ? (e = config.colors_dark.textMuted, t = config.colors_dark.headingColor, o = config.colors_dark.borderColor, config.colors_dark) : (e = config.colors.textMuted, t = config.colors.headingColor, o = config.colors.borderColor, config.colors)).bodyColor;
    var s = {
            donut: {
                series1: "#5AB12C",
                series2: "#66C732",
                series3: "#8DE45F",
                series4: "#C6F1AF"
            },
            line: {
                series1: config.colors.warning,
                series2: config.colors.primary,
                series3: "#7367f029"
            }
        },
        a = document.querySelector("#shipmentStatisticsChart"),
        i = {
            series: [{
                name: "Shipment",
                type: "column",
                data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37]
            }, {
                name: "Delivery",
                type: "line",
                data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34]
            }],
            chart: {
                height: 320,
                type: "line",
                stacked: !1,
                parentHeightOffset: 0,
                toolbar: {
                    show: !1
                },
                zoom: {
                    enabled: !1
                }
            },
            markers: {
                size: 5,
                colors: [config.colors.white],
                strokeColors: s.line.series2,
                hover: {
                    size: 6
                },
                borderRadius: 4
            },
            stroke: {
                curve: "smooth",
                width: [0, 3],
                lineCap: "round"
            },
            legend: {
                show: !0,
                position: "bottom",
                markers: {
                    width: 8,
                    height: 8,
                    offsetX: -3
                },
                height: 40,
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                },
                fontSize: "15px",
                fontFamily: "Public Sans",
                fontWeight: 400,
                labels: {
                    colors: t,
                    useSeriesColors: !1
                },
                offsetY: 10
            },
            grid: {
                strokeDashArray: 8,
                borderColor: o
            },
            colors: [s.line.series1, s.line.series2],
            fill: {
                opacity: [1, 1]
            },
            plotOptions: {
                bar: {
                    columnWidth: "30%",
                    startingShape: "rounded",
                    endingShape: "rounded",
                    borderRadius: 4
                }
            },
            dataLabels: {
                enabled: !1
            },
            xaxis: {
                tickAmount: 10,
                categories: ["1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan"],
                labels: {
                    style: {
                        colors: e,
                        fontSize: "13px",
                        fontFamily: "Public Sans",
                        fontWeight: 400
                    }
                },
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                }
            },
            yaxis: {
                tickAmount: 4,
                min: 0,
                max: 50,
                labels: {
                    style: {
                        colors: e,
                        fontSize: "13px",
                        fontFamily: "Public Sans",
                        fontWeight: 400
                    },
                    formatter: function(e) {
                        return e + "%"
                    }
                }
            },
            responsive: [{
                breakpoint: 1400,
                options: {
                    chart: {
                        height: 320
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: "10px"
                            }
                        }
                    },
                    legend: {
                        itemMargin: {
                            vertical: 0,
                            horizontal: 10
                        },
                        fontSize: "13px",
                        offsetY: 12
                    }
                }
            }, {
                breakpoint: 1025,
                options: {
                    chart: {
                        height: 415
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "50%"
                        }
                    }
                }
            }, {
                breakpoint: 982,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "30%"
                        }
                    }
                }
            }, {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 250
                    },
                    legend: {
                        offsetY: 7
                    }
                }
            }]
        },
        a = (null !== a && new ApexCharts(a, i).render(), document.querySelector("#deliveryExceptionsChart")),
        i = {
            chart: {
                height: 430,
                parentHeightOffset: 0,
                type: "donut"
            },
            labels: ["Incorrect address", "Weather conditions", "Federal Holidays", "Damage during transit"],
            series: [13, 25, 22, 40],
            colors: [s.donut.series1, s.donut.series2, s.donut.series3, s.donut.series4],
            stroke: {
                width: 0
            },
            dataLabels: {
                enabled: !1,
                formatter: function(e, t) {
                    return parseInt(e) + "%"
                }
            },
            legend: {
                show: !0,
                position: "bottom",
                offsetY: 15,
                markers: {
                    width: 8,
                    height: 8,
                    offsetX: -3
                },
                itemMargin: {
                    horizontal: 15,
                    vertical: 8
                },
                fontSize: "13px",
                fontFamily: "Public Sans",
                fontWeight: 400,
                labels: {
                    colors: t,
                    useSeriesColors: !1
                }
            },
            tooltip: {
                theme: !1
            },
            grid: {
                padding: {
                    top: 15
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "77%",
                        labels: {
                            show: !0,
                            value: {
                                fontSize: "24px",
                                fontFamily: "Public Sans",
                                color: t,
                                fontWeight: 500,
                                offsetY: -20,
                                formatter: function(e) {
                                    return parseInt(e) + "%"
                                }
                            },
                            name: {
                                offsetY: 30,
                                fontFamily: "Public Sans"
                            },
                            total: {
                                show: !0,
                                fontSize: "15px",
                                fontFamily: "Public Sans",
                                color: r,
                                label: "AVG. Exceptions",
                                formatter: function(e) {
                                    return "30%"
                                }
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 420,
                options: {
                    chart: {
                        height: 360
                    }
                }
            }]
        };
    null !== a && new ApexCharts(a, i).render()
}(), $(function() {
    var e = $(".dt-route-vehicles");
    e.length && (e.DataTable({
        ajax: assetsPath + "json/logistics-dashboard.json",
        columns: [{
            data: "id"
        }, {
            data: "id"
        }, {
            data: "location"
        }, {
            data: "start_city"
        }, {
            data: "end_city"
        }, {
            data: "warnings"
        }, {
            data: "progress"
        }],
        columnDefs: [{
            className: "control",
            orderable: !1,
            searchable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(e, t, o, r) {
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
            responsivePriority: 3,
            render: function() {
                return '<input type="checkbox" class="dt-checkboxes form-check-input">'
            }
        }, {
            targets: 2,
            responsivePriority: 1,
            render: function(e, t, o, r) {
                return '<div class="d-flex justify-content-start align-items-center user-name"><div class="avatar-wrapper"><div class="avatar me-4"><span class="avatar-initial rounded-circle bg-label-secondary"><i class="bx bxs-truck bx-lg"></i></span></div></div><div class="d-flex flex-column"><a class="text-heading fw-medium" href="app-logistics-fleet.html">VOL-' + o.location + "</a></div></div>"
            }
        }, {
            targets: 3,
            render: function(e, t, o, r) {
                return '<div class="text-body">' + o.start_city + ", " + o.start_country + "</div >"
            }
        }, {
            targets: 4,
            render: function(e, t, o, r) {
                return '<div class="text-body">' + o.end_city + ", " + o.end_country + "</div >"
            }
        }, {
            targets: -2,
            render: function(e, t, o, r) {
                var o = o.warnings,
                    s = {
                        1: {
                            title: "No Warnings",
                            class: "bg-label-success"
                        },
                        2: {
                            title: "Temperature Not Optimal",
                            class: "bg-label-warning"
                        },
                        3: {
                            title: "Ecu Not Responding",
                            class: "bg-label-danger"
                        },
                        4: {
                            title: "Oil Leakage",
                            class: "bg-label-info"
                        },
                        5: {
                            title: "fuel problems",
                            class: "bg-label-primary"
                        }
                    };
                return void 0 === s[o] ? e : '<span class="badge rounded ' + s[o].class + '">' + s[o].title + "</span>"
            }
        }, {
            targets: -1,
            render: function(e, t, o, r) {
                o = o.progress;
                return '<div class="d-flex align-items-center"><div div class="progress w-100" style="height: 8px;"><div class="progress-bar" role="progressbar" style="width:' + o + '%;" aria-valuenow="' + o + '" aria-valuemin="0" aria-valuemax="100"></div></div><div class="text-body ms-3">' + o + "%</div></div>"
            }
        }],
        order: [2, "asc"],
        dom: '<"table-responsive"t><"row d-flex align-items-center"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        displayLength: 5,
        language: {
            paginate: {
                next: '<i class="bx bx-chevron-right bx-18px"></i>',
                previous: '<i class="bx bx-chevron-left bx-18px"></i>'
            }
        },
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(e) {
                        return "Details of " + e.data().location
                    }
                }),
                type: "column",
                renderer: function(e, t, o) {
                    o = $.map(o, function(e, t) {
                        return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : ""
                    }).join("");
                    return !!o && $('<table class="table"/><tbody />').append(o)
                }
            }
        }
    }), $(".dataTables_info").addClass("pt-0"))
});