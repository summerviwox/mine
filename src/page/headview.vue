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
            <div v-for="item in listoption" :key="item" >
                <div class="headview-option" @click="click(item)">{{item}}</div>
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
                headurl:'http://222.186.36.75:8888/records/20191223/7.png',
                listoption:[
                    '每排图片个数',
                    '每排月份个数',
                    '文件每排个数',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                ]
            }
        },
        methods:{
            click(e){
                alert(e)
            }
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