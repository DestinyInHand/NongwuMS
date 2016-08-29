/**
 * Created by Administrator on 2016/8/12.
 */
require.config({
    paths: {
        echarts: 'echarts/build/dist'
    }
});

require(
    [
        'echarts',
        'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('nanjing_work'));

        var itemStyle = {
            normal : {
                color:function(params){
                    var colorList = [
                        '#C0C0C0','#CC3333','#0099FF','#00CC66'
                    ];
                    return colorList[params.dataIndex]
                }
            }
        }
        var option = {
            title : {
                text : '农技推广任务进展情况统计',
                // x : 'center'
            },
            tooltip : {
                show:true,
                trigger : 'axis',
                axisPoint : {
                    type : 'shadow'
                },
            },
            legend : {
                data : ['已完成','超时','进行中','新增任务'],
                x: 'right'
            },
            toolbox : {
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
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitArea : {show : true}
                }
            ],
            grid : {
                x2:40
            },
            series : [
                {
                    name : '已完成',
                    type : 'bar',
                    stack : '总量',
                    data : [0,25,30,45,55,69,75],
                    itemStyle:{
                        normal:{color:'#C0C0C0'}
                    }
                },
                {
                    name : '超时',
                    type : 'bar',
                    stack : '总量',
                    data : [0,10,12,15,20,12,25],
                    itemStyle:{normal:{color:'#CC3333'}}
                },
                {
                    name : '进行中',
                    type : 'bar',
                    stack : '总量',
                    data : [10,22,35,20,38,41,29],
                    itemStyle:{normal:{color:'#0099FF'}}
                },
                {
                    name : '新增任务',
                    type : 'bar',
                    stack : '总量',
                    data : [20,25,35,25,30,22,37],
                    itemStyle:{normal:{color:'#00CC66'}}
                }
            ],
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);