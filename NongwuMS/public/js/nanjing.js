/**
 * Created by Administrator on 2016/8/12.
 */
// 路径配置
require.config({
    paths: {
        echarts: 'echarts/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/map' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('nanjing'));

        var cityMap = {
            "南京市": "320100"
        };
        var curIndx = 0;
        var mapType = [];
        var mapGeoData = require('echarts/util/mapData/params');
        for (var city in cityMap) {
            mapType.push(city);
            // 自定义扩展图表类型
            mapGeoData.params[city] = {
                getGeoJson: (function (c) {
                    var geoJsonName = cityMap[c];
                    return function (callback) {
                        $.getJSON('echarts/geoJson/china-main-city/' + geoJsonName + '.json', callback);
                    }
                })(city)
            }
        }
        var option = {
            title : {
                text: '南京市各区一周农技推广任务'
            },
            tooltip : {
                show:true,
                trigger : 'item',
                formatter : function(params) {
                    console.log(params.name);
                    var res = params.name + '农技推广任务:'+ '<br/>';
                    var myseries = option.series;
                    for (var i = 0; i < myseries.length; i++) {
                        res += myseries[i].name;
                        for (var j = 0; j < myseries[i].data.length; j++) {
                            if (myseries[i].data[j].name === params.name) {
                                res += ':' + myseries[i].data[j].value + '<br/>';
                            }
                        }
                    }
                    return res;
                }
            },
            legend: {
                orient: 'vertical',
                x:'right',
                data:['已完成','超时','进行中','新增任务']
            },
            dataRange: {
                min: 0,
                max: 4000,
                x: 'left',
                y: 'bottom',
                text:['高','低'],           // 文本，默认为数值文本
                calculable : true
            },
            toolbox: {
                show : true,
                orient : 'vertical',
                y : 'center',
                feature : {
                    restore : {show:true,title:'还原'},
                    saveAsImage : {
                        show:true,
                        title:'保存为图片',
                        type:'png',
                        lang:['点击保存']
                    }
                }
            },
            // roamController: {
            //     show: true,
            //     x: 'right',
            //     mapTypeControl: {
            //         '南京市': true
            //     }
            // },
            series : [
                {
                    name: '已完成',
                    type: 'map',
                    mapType: '南京市',
                    roam: false,
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '六合区',value: Math.round(Math.random()*1000)},
                        {name: '栖霞区',value: Math.round(Math.random()*1000)},
                        {name: '下关区',value: Math.round(Math.random()*1000)},
                        {name: '鼓楼区',value: Math.round(Math.random()*1000)},
                        {name: '玄武区',value: Math.round(Math.random()*1000)},

                        {name: '建邺区',value: Math.round(Math.random()*1000)},
                        {name: '白下区',value: Math.round(Math.random()*1000)},
                        {name: '秦淮区',value: Math.round(Math.random()*1000)},
                        {name: '浦口区',value: Math.round(Math.random()*1000)},
                        {name: '雨花台区',value: Math.round(Math.random()*1000)},

                        {name: '江宁区',value: Math.round(Math.random()*1000)},
                        {name: '溧水区',value: Math.round(Math.random()*1000)},
                        {name: '高淳区',value: Math.round(Math.random()*1000)}
                    ]
                },
                {
                    name: '超时',
                    type: 'map',
                    mapType: '南京市',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '六合区',value: Math.round(Math.random()*1000)},
                        {name: '栖霞区',value: Math.round(Math.random()*1000)},
                        {name: '下关区',value: Math.round(Math.random()*1000)},
                        {name: '鼓楼区',value: Math.round(Math.random()*1000)},
                        {name: '玄武区',value: Math.round(Math.random()*1000)},

                        {name: '建邺区',value: Math.round(Math.random()*1000)},
                        {name: '白下区',value: Math.round(Math.random()*1000)},
                        {name: '秦淮区',value: Math.round(Math.random()*1000)},
                        {name: '浦口区',value: Math.round(Math.random()*1000)},
                        {name: '雨花台区',value: Math.round(Math.random()*1000)},

                        {name: '江宁区',value: Math.round(Math.random()*1000)},
                        {name: '溧水区',value: Math.round(Math.random()*1000)},
                        {name: '高淳区',value: Math.round(Math.random()*1000)}
                    ]
                },
                {
                    name: '进行中',
                    type: 'map',
                    mapType: '南京市',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '六合区',value: Math.round(Math.random()*1000)},
                        {name: '栖霞区',value: Math.round(Math.random()*1000)},
                        {name: '下关区',value: Math.round(Math.random()*1000)},
                        {name: '鼓楼区',value: Math.round(Math.random()*1000)},
                        {name: '玄武区',value: Math.round(Math.random()*1000)},

                        {name: '建邺区',value: Math.round(Math.random()*1000)},
                        {name: '白下区',value: Math.round(Math.random()*1000)},
                        {name: '秦淮区',value: Math.round(Math.random()*1000)},
                        {name: '浦口区',value: Math.round(Math.random()*1000)},
                        {name: '雨花台区',value: Math.round(Math.random()*1000)},

                        {name: '江宁区',value: Math.round(Math.random()*1000)},
                        {name: '溧水区',value: Math.round(Math.random()*1000)},
                        {name: '高淳区',value: Math.round(Math.random()*1000)}
                    ]
                },
                {
                    name: '新增任务',
                    type: 'map',
                    mapType: '南京市',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '六合区',value: Math.round(Math.random()*1000)},
                        {name: '栖霞区',value: Math.round(Math.random()*1000)},
                        {name: '下关区',value: Math.round(Math.random()*1000)},
                        {name: '鼓楼区',value: Math.round(Math.random()*1000)},
                        {name: '玄武区',value: Math.round(Math.random()*1000)},

                        {name: '建邺区',value: Math.round(Math.random()*1000)},
                        {name: '白下区',value: Math.round(Math.random()*1000)},
                        {name: '秦淮区',value: Math.round(Math.random()*1000)},
                        {name: '浦口区',value: Math.round(Math.random()*1000)},
                        {name: '雨花台区',value: Math.round(Math.random()*1000)},

                        {name: '江宁区',value: Math.round(Math.random()*1000)},
                        {name: '溧水区',value: Math.round(Math.random()*1000)},
                        {name: '高淳区',value: Math.round(Math.random()*1000)}
                    ]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);