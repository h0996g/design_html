! function() {
    let o, a, e, r;
    a = (isDarkStyle ? (o = config.colors_dark.cardColor, r = config.colors_dark.textMuted, e = config.colors_dark.bodyColor, config.colors_dark) : (o = config.colors.cardColor, r = config.colors.textMuted, e = config.colors.bodyColor, config.colors)).headingColor;
    var t = document.querySelectorAll(".chart-progress"),
        t = (t && t.forEach(function(o) {
            var e = config.colors[o.dataset.color],
                r = o.dataset.series,
                t = o.dataset.progress_variant || "false",
                e = (e = e, r = r, {
                    chart: {
                        height: "true" == (t = t) ? 58 : 55,
                        width: "true" == t ? 58 : 45,
                        type: "radialBar"
                    },
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "true" == t ? "50%" : "25%"
                            },
                            dataLabels: {
                                show: "true" == t,
                                value: {
                                    offsetY: -10,
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    fontFamily: "Public Sans",
                                    color: a
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
                    colors: [e],
                    grid: {
                        padding: {
                            top: "true" == t ? -12 : -15,
                            bottom: "true" == t ? -17 : -15,
                            left: "true" == t ? -17 : -5,
                            right: -15
                        }
                    },
                    series: [r],
                    labels: "true" == t ? [""] : ["Progress"]
                });
            new ApexCharts(o, e).render()
        }), document.querySelector("#orderStatisticsChart")),
        s = {
            chart: {
                height: 145,
                width: 110,
                type: "donut"
            },
            labels: ["Electronic", "Sports", "Decor", "Fashion"],
            series: [50, 85, 25, 40],
            colors: [config.colors.success, config.colors.primary, config.colors.secondary, config.colors.info],
            stroke: {
                width: 5,
                colors: [o]
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
            grid: {
                padding: {
                    top: 0,
                    bottom: 0,
                    right: 15
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "75%",
                        labels: {
                            show: !0,
                            value: {
                                fontSize: "18px",
                                fontFamily: "Public Sans",
                                fontWeight: 500,
                                color: a,
                                offsetY: -17,
                                formatter: function(o) {
                                    return parseInt(o) + "%"
                                }
                            },
                            name: {
                                offsetY: 17,
                                fontFamily: "Public Sans"
                            },
                            total: {
                                show: !0,
                                fontSize: "13px",
                                color: e,
                                label: "Weekly",
                                formatter: function(o) {
                                    return "38%"
                                }
                            }
                        }
                    }
                }
            },
            states: {
                active: {
                    filter: {
                        type: "none"
                    }
                }
            }
        },
        t = (null !== t && new ApexCharts(t, s).render(), document.querySelector("#reportBarChart")),
        s = {
            chart: {
                height: 200,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    barHeight: "60%",
                    columnWidth: "60%",
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
                    bottom: 0,
                    left: -10,
                    right: -10
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
                categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
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
        t = (null !== t && new ApexCharts(t, s).render(), document.querySelector("#conversionRateChart")),
        s = {
            chart: {
                height: 80,
                width: 140,
                type: "line",
                toolbar: {
                    show: !1
                },
                dropShadow: {
                    enabled: !0,
                    top: 10,
                    left: 5,
                    blur: 3,
                    color: config.colors.primary,
                    opacity: .15
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
                    dataPointIndex: 3,
                    strokeColor: config.colors.primary,
                    strokeWidth: 4,
                    size: 6,
                    radius: 2
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
            colors: [config.colors.primary],
            dataLabels: {
                enabled: !1
            },
            stroke: {
                width: 5,
                curve: "smooth"
            },
            series: [{
                data: [137, 210, 160, 245]
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
        t = (new ApexCharts(t, s).render(), document.querySelector(".credit-card-payment")),
        s = document.querySelector(".expiry-date-payment"),
        i = document.querySelectorAll(".cvv-code-payment");
    t && new Cleave(t, {
        creditCard: !0,
        onCreditCardTypeChanged: function(o) {
            document.querySelector(".card-payment-type").innerHTML = "" != o && "unknown" != o ? '<img src="' + assetsPath + "img/icons/payments/" + o + '-cc.png" class="cc-icon-image" height="20"/>' : ""
        }
    }), s && new Cleave(s, {
        date: !0,
        delimiter: "/",
        datePattern: ["m", "y"]
    }), i && i.forEach(function(o) {
        new Cleave(o, {
            numeral: !0,
            numeralPositiveOnly: !0
        })
    })
}();