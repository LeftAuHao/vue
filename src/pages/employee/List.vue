<template>
  <div>
    <div>
      <el-button size="small" type="primary" @click="toAddHandler">添加</el-button>
    </div>
    <el-table ref="multipleTable" :data="employees" tooltip-effect="dark" 
    style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column fixed="left" prop="id" label="编号"></el-table-column>
      <el-table-column fixed="left" prop="username" label="用户名"></el-table-column>
      <el-table-column prop="realname" label="姓名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column width="120" prop="telephone" label="联系方式"></el-table-column>
      <el-table-column width="200" prop="idCard" label="身份证号"></el-table-column>
      <el-table-column width="200" prop="bankCard" label="银行卡号"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template v-slot="slot">
          <a href="" @click.prevent="toDeleteHandler(slot.row.id)">删除</a>
          <a href="" @click.prevent="toUpdateHandler(slot.row)">修改</a>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="50">
    </el-pagination>
    <el-dialog :title="title" :visible.sync="visible" width="60%">
      <!-- --{{form}} -->
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"/>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.realname"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.gender">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.telephone"/>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.idCard"/>
        </el-form-item>
        <el-form-item label="银行卡号">
          <el-input v-model="form.bankCard"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.prevent="closeModalHandler">取 消</el-button>
        <el-button type="primary" @click.prevent="submitHandler">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import request from '@/utils/request'
import querstring from 'querystring'
export default {
  created(){
    this.loadData()
  },
  methods:{
    submitHandler(){
      let url = "http://223.4.183.62:5588/waiter/saveOrUpdate"
      request({
        url,
        method:"post",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        },
        data:querstring.stringify(this.form)
      }).then((response)=>{
        this.closeModalHandler();
        this.loadData();
        this.$message({
          type:"success",
          message:response.message
        })
      })
    },
    loadData(){
      let url = "http://223.4.183.62:5588/waiter/findAll"
      request.get(url).then((response)=>{
        this.employees = response.data;
      })
    },
    closeModalHandler(){
      this.visible=false;
    },
    toDeleteHandler(id){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url = "http://223.4.183.62:5588/employee/deleteById?id="+id;
          request.get(url).then((response)=>{
            this.loadData();
            this.$message({
              type: 'success',
              message:response.message
            });
          })
          })
    },
    toUpdateHandler(row){
      this.form=row;
      this.title="修改员工信息";
      this.visible=true;
    },
    toAddHandler(){
      this.form={
        type:"waiter"
      }
      this.title="添加员工信息"
      this.visible=true;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  data(){
    return{
      title:"录入员工信息",
      visible:false,
      employees:[],
      form:{
        type:"waiter"
      }
    }
  },
}
</script>

<style scoped>

</style>
