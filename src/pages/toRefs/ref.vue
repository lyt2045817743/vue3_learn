<template>
    <el-pagination
        @size-change="handleSizeChange"   
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,20,50,100,1000]"   
        :page-size="pagesize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="tableData.length"
    >
    </el-pagination>
    <br>
    <el-button type="primary" @click="check">审核</el-button>
    <el-table border ref="multipleTable" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" @selection-change="handleSelectionChange">
         <el-table-column type="selection" width="55" > </el-table-column>
        <el-table-column prop="description" label="问题描述">  </el-table-column>
        <el-table-column prop="similarity" label="相似问题" > </el-table-column>
        <el-table-column prop="answer" label="问题答案" > </el-table-column>
    </el-table>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
    name: 'CheckQuestion',
    setup() {
        let tableData = ref([])
        let currentPage = ref(1)
        let pagesize = ref(10)
        let getMachineSize= async (obj) => {
            const path = 'http://10.221.91.145:5001/test'
            axios.get(path).then(function (response){
                tableData.value = response.data
            })   
        }
        getMachineSize();
        let handleSizeChange = (val) => {
            pagesize.value = val
            currentPage.value = 1
        };
        let handleCurrentChange = (val) => {
            currentPage.value = val
        };
         let multipleTable = ref(null);
        function check(){
            console.log(multipleTable.value.selection)
        }
        return {
            tableData,
            currentPage,
            pagesize,
            handleSizeChange,
            handleCurrentChange,
            check,
            multipleTable
        }
    },
}
</script>