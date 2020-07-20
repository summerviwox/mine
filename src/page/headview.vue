<template>
    <div>
        <div class="flex-row">
            <el-image :src="headurl" class="headview-head"></el-image>
            <div class="flex-column headview-right">
                <div class="headview-name headview-item">summer viwox</div>
                <div class="headview-info headview-item">
                    <div class="dis-inline">图片:<span>10000</span>张</div>&nbsp;<div class="dis-inline">相册:<span>10000</span>本</div>
                </div>
            </div>
        </div>
        <div class="headview-line">

        </div>
        <div>
            <div v-for="item in listoption" :key="item.index" >
                <div class="headview-option" @click="click(item.index)">{{item.text}}</div>
                <div class="headview-line-thin"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headview",
        data() {
            return{
                rs:'123',
                headurl:'http://222.186.36.75:8888/records/20191223/7.png',
                listoption:[
                    {text:'每排图片个数',index:0},
                    {text:'每排月份个数',index:1},
                    {text:'每排文件个数',index:2}
                ]
            }
        },
        methods:{
            click(e){
                this.sendMsg(e)
                // this.$mine.android(e)
            },
            //js调app
            sendMsg(e){
                this.$bridge.callHandler('android',e,(res)=>{
                    this.rs = res
                })
            },

            //app调js
            getAPPDate(){
                this.$bridge.registerHandler('js', (data, responseCallback) => {
                    let a = JSON.parse(data)
                    this.listoption = []
                    for(let i=0;i<a.length;i++){
                        this.listoption.push(a[i])
                    }
                    responseCallback(a.length)
                })
            }
        },
        mounted(){
            this.getAPPDate()
        }

    }
</script>

<style scoped>
    .headview-head{
        padding: 10px;
        width: 100px;
        height: 100px;
    }
    .headview-right{
        padding: 10px 10px 10px 0px;
        flex: 1;
        align-items: flex-start;
        justify-content: space-around;
    }
    .headview-item{
        font-size: 20px;
        padding-left: 10px;
    }
    .headview-info{
        font-size: 14px;
    }
    .headview-line{
        height: 10px;
        background-color: #e0e0e0;
    }
    .headview-line-thin{
        height: 1px;
        background-color: #e0e0e0;
    }
    .headview-option{
        padding: 10px 10px 10px 10px;
        text-align: left;
    }

</style>