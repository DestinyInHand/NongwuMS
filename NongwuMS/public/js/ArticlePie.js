/**
 * Created by zky on 2016/8/19.
 */
require.config({
    paths: {
        echarts: 'echarts/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/pie'
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('Articlepie'));
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
                text:'农业资讯各栏目文章统计'
            },
            tooltip: {
                trigger: 'item',
                formatter : '{a0}<br/>{b}:{c0}篇({d}%)<br/>'
            },
            legend: {
                orient:'vertical',
                x:'right',
                data : ["应时农事","农技科技","品牌农资","农业政策","市场行情","供求信息","质量监督"]

            },
            series : [
                {
                    "name":"各栏目文章统计",
                    "type":"pie",
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:3350, name:'应时农事'},
                        {value:3100, name:'农技科技'},
                        {value:3350, name:'品牌农资'},
                        {value:3100, name:'农业政策'},
                        {value:2340, name:'市场行情'},
                        {value:1350, name:'供求信息'},
                        {value:1548, name:'质量监督'}
                    ]
                }
            ]
        };

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);