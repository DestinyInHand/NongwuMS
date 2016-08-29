/**
 * Created by zky on 2016/8/19.
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
        'echarts/chart/bar',// 使用柱状图就加载bar模块，按需加载
        'echarts/chart/line'
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('PersonFlu'));
        var dataStyle = {
            normal: {
                label : {
                    show: false,
                    formatter: '{c}%'
                }
            }
        };
        var option = {
            title:{
                text:'平台用户量统计'
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter : '{b}<br/>{a0}:{c0}万人<br/>{a1}:{c1}%<br/>{a2}:{c2}%'
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true},
                }
            },
            legend: {
                data:['活跃用户数','新用户比例','用户流失率'],
                formatter: function (name) {
                    return  name;
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ["1月","2月","3月","4月","5月","6月"]
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : 'X10000',
                    max :500
                },
                {
                    type : 'value',
                    max:100,
                    axisLabel:{
                        formatter:'{value}%'
                    }
                }
            ],
            series : [
                {
                    "name":"活跃用户数",
                    "type":"bar",
                    barCategoryGap: '70%',
                    "data":[310, 360, 365, 340, 290, 275]
                },
                {
                    "name":"新用户比例",
                    "type":"line",
                    itemStyle : dataStyle,
                    yAxisIndex:1,
                    "data":[65, 50, 45, 43, 42, 40]
                },
                {
                    "name":"用户流失率",
                    "type":"line",
                    itemStyle : dataStyle,
                    yAxisIndex:1,
                    "data":[50, 52, 49, 48, 51, 50]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);