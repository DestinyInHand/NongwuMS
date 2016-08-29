/**
 * Created by Administrator on 2016/8/12.
 */
<!-- 江苏推广员分布 -->
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
        var myChart = ec.init(document.getElementById('main'));

        var cityMap = {
             // "江苏" : "320000",
            "南京市": "320100",
            "无锡市": "320200",
            "徐州市": "320300",
            "常州市": "320400",
            "苏州市": "320500",
            "南通市": "320600",
            "连云港市": "320700",
            "淮安市": "320800",
            "盐城市": "320900",
            "扬州市": "321000",
            "镇江市": "321100",
            "泰州市": "321200",
            "宿迁市": "321300"
        };

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

        var ecConfig = require('echarts/config');
        myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
            var mt = param.target;
            var len = mapType.length;
            var f= false;
            for(var i=0;i<len;i++){
                if(mt == mapType[i]){
                    f =true;
                    mt=mapType[i];
                }
            }
            if(!f){
                mt='江苏';
            }
            //option.series[0].mapType = mt;
            for(var i =0; i<option.series.length; i++){
                option.series[i].mapType = mt;
            }

            option.title.subtext = mt;
            myChart.setOption(option, true);
        });

        var  jsjson = [
            {name: '六合区',value: Math.round(Math.random()*1000)},
            {name: '栖霞区',value: Math.round(Math.random()*1000)},
            {name: '下关区',value: Math.round(Math.random()*1000)},
            {name: '鼓楼区',value: Math.round(Math.random()*1000)},
            {name: '玄武区',value: Math.round(Math.random()*1000)},
            {name: '建邺区',value: Math.round(Math.random()*1000)},
            {name: '白下区',value: Math.round(Math.random()*1000)},
            {name: '浦口区',value: Math.round(Math.random()*1000)},
            {name: '秦淮区',value: Math.round(Math.random()*1000)},
            {name: '雨花台区',value: Math.round(Math.random()*1000)},
            {name: '江宁区',value: Math.round(Math.random()*1000)},
            {name: '溧水区',value: Math.round(Math.random()*1000)},
            {name: '高淳区',value: Math.round(Math.random()*1000)},
            {name: '南京市',value:0 },
            {name: '江阴市',value: Math.round(Math.random()*1000)},
            {name: '惠山区',value: Math.round(Math.random()*1000)},
            {name: '北塘区',value: Math.round(Math.random()*1000)},
            {name: '崇安区',value: Math.round(Math.random()*1000)},
            {name: '锡山区',value: Math.round(Math.random()*1000)},
            {name: '南长区',value: Math.round(Math.random()*1000)},
            {name: '滨湖区',value: Math.round(Math.random()*1000)},
            {name: '宜兴市',value: Math.round(Math.random()*1000)},
            {name: '无锡市',value:0 },
            {name: '丰县',value: Math.round(Math.random()*1000)},
            {name: '沛县',value: Math.round(Math.random()*1000)},
            {name: '鼓楼区',value: Math.round(Math.random()*1000)},
            {name: '铜山区',value: Math.round(Math.random()*1000)},
            {name: '泉山区',value: Math.round(Math.random()*1000)},
            {name: '云龙区',value: Math.round(Math.random()*1000)},
            {name: '贾汪区',value: Math.round(Math.random()*1000)},
            {name: '邳州市',value: Math.round(Math.random()*1000)},
            {name: '睢宁县',value: Math.round(Math.random()*1000)},
            {name: '新沂市',value: Math.round(Math.random()*1000)},
            {name: '徐州市',value:0 },
            {name: '新北区',value: Math.round(Math.random()*1000)},
            {name: '钟楼区',value: Math.round(Math.random()*1000)},
            {name: '天宁区',value: Math.round(Math.random()*1000)},
            {name: '戚墅堰区',value: Math.round(Math.random()*1000)},
            {name: '武进区',value: Math.round(Math.random()*1000)},
            {name: '金坛市',value: Math.round(Math.random()*1000)},
            {name: '溧阳市',value: Math.round(Math.random()*1000)},
            {name: '常州市',value:0 },
            {name: '张家港市',value: Math.round(Math.random()*1000)},
            {name: '常熟市',value: Math.round(Math.random()*1000)},
            {name: '太仓市',value: Math.round(Math.random()*1000)},
            {name: '昆山市',value: Math.round(Math.random()*1000)},
            {name: '相城区',value: Math.round(Math.random()*1000)},
            {name: '姑苏区',value: Math.round(Math.random()*1000)},
            {name: '虎丘区',value: Math.round(Math.random()*1000)},
            {name: '吴中区',value: Math.round(Math.random()*1000)},
            {name: '吴江区',value: Math.round(Math.random()*1000)},
            {name: '苏州市',value:0 },
            {name: '海安县',value: Math.round(Math.random()*1000)},
            {name: '如东县',value: Math.round(Math.random()*1000)},
            {name: '如皋市',value: Math.round(Math.random()*1000)},
            {name: '港闸区',value: Math.round(Math.random()*1000)},
            {name: '通州区',value: Math.round(Math.random()*1000)},
            {name: '崇川区',value: Math.round(Math.random()*1000)},
            {name: '海门市',value: Math.round(Math.random()*1000)},
            {name: '启东市',value: Math.round(Math.random()*1000)},
            {name: '南通市',value:0 },
            {name: '赣榆县',value: Math.round(Math.random()*1000)},
            {name: '东海县',value: Math.round(Math.random()*1000)},
            {name: '连云区',value: Math.round(Math.random()*1000)},
            {name: '新浦区',value: Math.round(Math.random()*1000)},
            {name: '海州区',value: Math.round(Math.random()*1000)},
            {name: '灌云县',value: Math.round(Math.random()*1000)},
            {name: '灌南县',value: Math.round(Math.random()*1000)},
            {name: '连云港市',value:0 },
            {name: '涟水县',value: Math.round(Math.random()*1000)},
            {name: '淮阴区',value: Math.round(Math.random()*1000)},
            {name: '清河区',value: Math.round(Math.random()*1000)},
            {name: '淮安区',value: Math.round(Math.random()*1000)},
            {name: '清浦区',value: Math.round(Math.random()*1000)},
            {name: '洪泽县',value: Math.round(Math.random()*1000)},
            {name: '金湖县',value: Math.round(Math.random()*1000)},
            {name: '盱眙县',value: Math.round(Math.random()*1000)},
            {name: '淮安市',value:0 },
            {name: '响水县',value: Math.round(Math.random()*1000)},
            {name: '滨海县',value: Math.round(Math.random()*1000)},
            {name: '射阳县',value: Math.round(Math.random()*1000)},
            {name: '阜宁县',value: Math.round(Math.random()*1000)},
            {name: '建湖县',value: Math.round(Math.random()*1000)},
            {name: '盐都区',value: Math.round(Math.random()*1000)},
            {name: '亭湖区',value: Math.round(Math.random()*1000)},
            {name: '大丰市',value: Math.round(Math.random()*1000)},
            {name: '东台市',value: Math.round(Math.random()*1000)},
            {name: '盐城市',value:0 },
            {name: '宝应县',value: Math.round(Math.random()*1000)},
            {name: '高邮市',value: Math.round(Math.random()*1000)},
            {name: '江都区',value: Math.round(Math.random()*1000)},
            {name: '邗江区',value: Math.round(Math.random()*1000)},
            {name: '广陵区',value: Math.round(Math.random()*1000)},
            {name: '仪征市',value: Math.round(Math.random()*1000)},
            {name: '扬州市',value:0 },
            {name: '扬中市',value: Math.round(Math.random()*1000)},
            {name: '京口区',value: Math.round(Math.random()*1000)},
            {name: '润州区',value: Math.round(Math.random()*1000)},
            {name: '丹徒区',value: Math.round(Math.random()*1000)},
            {name: '丹阳市',value: Math.round(Math.random()*1000)},
            {name: '句容市',value: Math.round(Math.random()*1000)},
            {name: '镇江市',value:0 },
            {name: '兴化市',value: Math.round(Math.random()*1000)},
            {name: '姜堰市',value: Math.round(Math.random()*1000)},
            {name: '海陵区',value: Math.round(Math.random()*1000)},
            {name: '高港区',value: Math.round(Math.random()*1000)},
            {name: '泰兴市',value: Math.round(Math.random()*1000)},
            {name: '靖江市',value: Math.round(Math.random()*1000)},
            {name: '泰州市',value:0 },
            {name: '沭阳县',value: Math.round(Math.random()*1000)},
            {name: '宿豫区',value: Math.round(Math.random()*1000)},
            {name: '宿城区',value: Math.round(Math.random()*1000)},
            {name: '泗阳县',value: Math.round(Math.random()*1000)},
            {name: '泗洪县',value: Math.round(Math.random()*1000)},
            {name: '宿迁市',value:0 }
        ];
        //南京市数据
        for(var i=0;i<13;i++){
            jsjson[13].value += jsjson[i].value;
        }
        //无锡市数据
        for(var i=15;i<22;i++){
            jsjson[22].value += jsjson[i].value;
        }
        //徐州市数据
        for(var i=23;i<33;i++){
            jsjson[33].value += jsjson[i].value;
        }
        //常州市数据
        for(var i=34;i<41;i++){
            jsjson[41].value += jsjson[i].value;
        }
        //苏州市数据
        for(var i=42;i<51;i++){
            jsjson[51].value += jsjson[i].value;
        }
        //南通市数据
        for(var i=52;i<60;i++){
            jsjson[60].value += jsjson[i].value;
        }
        //连云港市数据
        for(var i=61;i<68;i++){
            jsjson[68].value += jsjson[i].value;
        }
        //淮安市数据
        for(var i=69;i<77;i++){
            jsjson[77].value += jsjson[i].value;
        }
        //盐城市数据
        for(var i=78;i<87;i++){
            jsjson[87].value += jsjson[i].value;
        }
        //扬州市数据
        for(var i=88;i<94;i++){
            jsjson[94].value += jsjson[i].value;
        }
        //镇江市数据
        for(var i=95;i<101;i++){
            jsjson[101].value += jsjson[i].value;
        }
        //泰州市数据
        for(var i=102;i<108;i++){
            jsjson[108].value += jsjson[i].value;
        }
        //宿迁市数据
        for(var i=109;i<114;i++){
            jsjson[114].value += jsjson[i].value;
        }

        var option = {
            title: {
                text : '江苏省各区域用户资源分布情况',
            },
            toolbox: {
                show: true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    //mark : {show: true},
                    //	dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            tooltip : {
                trigger: 'item',
                //formatter:"{b}<br>{a}:{c}"
                formatter : function(params){
                    console.log(params.name);
                    var res = params.name + '各类用户人数' +'<br>';
                    var myseries = option.series;
                    for(var i=0; i<myseries.length;i++){
                        for(var j=0; j<myseries[i].data.length; j++){
                            if(myseries[i].data[j].name === params.name){
                                res += myseries[i].name + ':' + myseries[i].data[j].value + '<br>';
                            }
                        }
                    }
                    return res;
                }
            },
            legend: {
                orient: 'vertical',
                x:'right',
                data:['专家','农技员','推广员','普通用户']
            },
            dataRange : {
                orient: 'vertical',
                x: 'left',
                min: 0,
                max: 50000,
                //	color:['#87CEFA','#32CD32'],
                text:['高','低'],           // 文本，默认为数值文本
                splitNumber:0
            },
            series : [
                {
                    name: '专家',
                    type: 'map',
                    mapType: '江苏',
                    selectedMode : 'single',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:false}}
                    },
                    data: jsjson
                },
                {
                    name : '农技员',
                    type : 'map',
                    mapType: '江苏',
                    // selectedMode : 'single',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:false}}
                    },
                    data: jsjson
                },
                {
                    name : '推广员',
                    type : 'map',
                    mapType: '江苏',
                    selectedMode : 'single',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:false}}
                    },
                    data: jsjson
                },
                {
                    name : '普通用户',
                    type : 'map',
                    mapType: '江苏',
                    selectedMode : 'single',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:false}}
                    },
                    data: jsjson
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);


    }
);
