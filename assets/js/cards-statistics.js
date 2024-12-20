! function() {
    let o, e, r, s, t;
    e = isDarkStyle ? (o = config.colors_dark.cardColor, r = config.colors_dark.textMuted, t = config.colors_dark.bodyColor, s = config.colors_dark.headingColor, "dark") : (o = config.colors.cardColor, r = config.colors.textMuted, t = config.colors.bodyColor, s = config.colors.headingColor, "");
    const a = {
        series1: "#66C732",
        series2: "#8DE45F",
        series3: "#AAEB87",
        series4: "#E3F8D7"
    };
    var i = document.querySelector("#orderChart"),
        l = {
            chart: {
                height: 95,
                type: "area",
                toolbar: {
                    show: !1
                },
                sparkline: {
                    enabled: !0
                }
            },
            markers: {
                size: 6,
                colors: "transparent",
                strokeColors: "transparent",
                strokeWidth: 4,
                discrete: [{
                    fillColor: o,
                    seriesIndex: 0,
                    dataPointIndex: 6,
                    strokeColor: config.colors.success,
                    strokeWidth: 2,
                    size: 6,
                    radius: 8
                }],
                hover: {
                    size: 7
                }
            },
            grid: {
                show: !1,
                padding: {
                    right: 8
                }
            },
            colors: [config.colors.success],
            fill: {
                type: "gradient",
                gradient: {
                    shade: e,
                    shadeIntensity: .8,
                    opacityFrom: .8,
                    opacityTo: .25,
                    stops: [0, 85, 100]
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                width: 2,
                curve: "smooth"
            },
            series: [{
                data: [180, 175, 275, 140, 205, 190, 295]
            }],
            xaxis: {
                show: !1,
                lines: {
                    show: !1
                },
                labels: {
                    show: !1
                },
                stroke: {
                    width: 0
                },
                axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                stroke: {
                    width: 0
                },
                show: !1
            }
        },
        i = (null !== i && new ApexCharts(i, l).render(), document.querySelector("#revenueChart")),
        l = {
            chart: {
                height: 95,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "80%",
                    columnWidth: "75%",
                    startingShape: "rounded",
                    endingShape: "rounded",
                    borderRadius: 4,
                    distributed: !0
                }
            },
            grid: {
                show: !1,
                padding: {
                    top: -20,
                    bottom: -12,
                    left: -10,
                    right: 0
                }
            },
            colors: [config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors.primary, config.colors_label.primary, config.colors_label.primary],
            dataLabels: {
                enabled: !1
            },
            series: [{
                data: [40, 95, 60, 45, 90, 50, 75]
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
                        colors: r,
                        fontSize: "13px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            }
        },
        i = (null !== i && new ApexCharts(i, l).render(), document.querySelector("#profitChart")),
        l = {
            series: [{
                data: [58, 28, 50, 80]
            }, {
                data: [50, 22, 65, 72]
            }],
            chart: {
                type: "bar",
                height: 90,
                toolbar: {
                    tools: {
                        download: !1
                    }
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "65%",
                    startingShape: "rounded",
                    endingShape: "rounded",
                    borderRadius: 3,
                    dataLabels: {
                        show: !1
                    }
                }
            },
            grid: {
                show: !1,
                padding: {
                    top: -30,
                    bottom: -12,
                    left: -10,
                    right: 0
                }
            },
            colors: [config.colors.success, config.colors_label.success],
            dataLabels: {
                enabled: !1
            },
            stroke: {
                show: !0,
                width: 5,
                colors: o
            },
            legend: {
                show: !1
            },
            xaxis: {
                categories: ["Jan", "Apr", "Jul", "Oct"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        colors: r,
                        fontSize: "13px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            }
        },
        i = (null !== i && new ApexCharts(i, l).render(), document.querySelector("#sessionsChart")),
        l = {
            chart: {
                height: 90,
                type: "area",
                toolbar: {
                    show: !1
                },
                sparkline: {
                    enabled: !0
                }
            },
            markers: {
                size: 6,
                colors: "transparent",
                strokeColors: "transparent",
                strokeWidth: 4,
                discrete: [{
                    fillColor: o,
                    seriesIndex: 0,
                    dataPointIndex: 8,
                    strokeColor: config.colors.warning,
                    strokeWidth: 2,
                    size: 6,
                    radius: 8
                }],
                hover: {
                    size: 7
                }
            },
            grid: {
                show: !1,
                padding: {
                    right: 8
                }
            },
            colors: [config.colors.warning],
            fill: {
                type: "gradient",
                gradient: {
                    shade: e,
                    shadeIntensity: .8,
                    opacityFrom: .8,
                    opacityTo: .25,
                    stops: [0, 95, 100]
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                width: 2,
                curve: "straight"
            },
            series: [{
                data: [280, 280, 240, 240, 200, 200, 260, 260, 310]
            }],
            xaxis: {
                show: !1,
                lines: {
                    show: !1
                },
                labels: {
                    show: !1
                },
                axisBorder: {
                    show: !1
                }
            },
            yaxis: {
                show: !1
            }
        },
        i = (null !== i && new ApexCharts(i, l).render(), document.querySelector("#expensesChart")),
        l = {
            chart: {
                sparkline: {
                    enabled: !0
                },
                parentHeightOffset: 0,
                type: "radialBar"
            },
            colors: [config.colors.primary],
            series: [78],
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: "65%"
                    },
                    track: {
                        background: config.colors_label.secondary
                    },
                    dataLabels: {
                        name: {
                            show: !1
                        },
                        value: {
                            fontSize: "18px",
                            fontFamily: "Public Sans",
                            color: s,
                            fontWeight: 500,
                            offsetY: -5
                        }
                    }
                }
            },
            grid: {
                show: !1,
                padding: {
                    left: -10,
                    right: -10,
                    bottom: 5
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: ["Progress"]
        },
        i = (null !== i && new ApexCharts(i, l).render(), document.querySelector("#visitorsChart")),
        l = {
            chart: {
                height: 120,
                width: 200,
                parentHeightOffset: 0,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "75%",
                    columnWidth: "40px",
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
            colors: [config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors.primary, config.colors_label.primary],
            dataLabels: {
                enabled: !1
            },
            series: [{
                data: [40, 95, 60, 45, 90, 50, 75]
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
                        colors: r,
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
                breakpoint: 1440,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 9,
                            columnWidth: "60%"
                        }
                    }
                }
            }, {
                breakpoint: 1300,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 9,
                            columnWidth: "60%"
                        }
                    }
                }
            }, {
                breakpoint: 1200,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            columnWidth: "50%"
                        }
                    }
                }
            }, {
                breakpoint: 1040,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            columnWidth: "50%"
                        }
                    }
                }
            }, {
                breakpoint: 991,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            columnWidth: "50%"
                        }
                    }
                }
            }, {
                breakpoint: 420,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 8,
                            columnWidth: "50%"
                        }
                    }
                }
            }]
        },
        i = (null !== i && new ApexCharts(i, l).render(), document.querySelector("#activityChart")),
        l = {
            chart: {
                height: 120,
                width: 220,
                parentHeightOffset: 0,
                toolbar: {
                    show: !1
                },
                type: "area"
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                width: 2,
                curve: "smooth"
            },
            series: [{
                data: [15, 22, 17, 40, 12, 35, 25]
            }],
            colors: [config.colors.success],
            fill: {
                type: "gradient",
                gradient: {
                    shade: e,
                    shadeIntensity: .8,
                    opacityFrom: .8,
                    opacityTo: .25,
                    stops: [0, 85, 100]
                }
            },
            grid: {
                show: !1,
                padding: {
                    top: -20,
                    bottom: -8
                }
            },
            legend: {
                show: !1
            },
            xaxis: {
                categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                axisBorder: {
                    show: !1
                },
                axisTicks: {
                    show: !1
                },
                labels: {
                    style: {
                        fontSize: "13px",
                        colors: r
                    }
                }
            },
            yaxis: {
                labels: {
                    show: !1
                }
            }
        },
        i = (null !== i && new ApexCharts(i, l).render(), document.querySelector("#leadsReportChart")),
        l = {
            chart: {
                height: 157,
                width: 130,
                parentHeightOffset: 0,
                type: "donut"
            },
            labels: ["Electronic", "Sports", "Decor", "Fashion"],
            series: [20, 30, 20, 30],
            colors: [a.series1, a.series4, a.series3, a.series2],
            stroke: {
                width: 0
            },
            dataLabels: {
                enabled: !1,
                formatter: function(o, e) {
                    return parseInt(o) + "%"
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
                    top: 15
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "75%",
                        labels: {
                            show: !0,
                            value: {
                                fontSize: "1.5rem",
                                fontFamily: "Public Sans",
                                color: s,
                                fontWeight: 500,
                                offsetY: -15,
                                formatter: function(o) {
                                    return parseInt(o) + "%"
                                }
                            },
                            name: {
                                offsetY: 20,
                                fontFamily: "Public Sans"
                            },
                            total: {
                                show: !0,
                                fontSize: "15px",
                                fontFamily: "Public Sans",
                                label: "Average",
                                color: t,
                                formatter: function(o) {
                                    return "25%"
                                }
                            }
                        }
                    }
                }
            }
        };
    null !== i && new ApexCharts(i, l).render()
}();