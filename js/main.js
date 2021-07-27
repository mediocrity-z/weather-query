// 请求地址:http://wthrcdn.etouch.cn/weather_mini
// 请求方法：get
// 请求参数：city
// 请求内容:天气信息

var app=new Vue({
    el:'#app',
    data(){
        return{
        city:"北京",
        // 天气信息
        weatherList:[]
        }
    },
    methods:{
        // 天气查询
       async search(){
    const res=await axios.get(
           'http://wthrcdn.etouch.cn/weather_mini?city='+this.city
        )
        if(res.data.desc==="invilad-citykey"){
            alert('该城市不存在或未查询到该城市的天气信息!')
        }
       
       this.weatherList=res.data.data.forecast;
       
        },
        // 点击城市直接查询
        changeCity(city){
           this.city=city;
           this.search()
        }
    }
})