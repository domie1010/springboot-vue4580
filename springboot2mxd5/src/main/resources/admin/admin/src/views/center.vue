<template>
  <div>
    <el-form
	  :style='{"padding":"35px 15px","boxShadow":"0 0px 0px #999","borderRadius":"0px","flexWrap":"wrap","background":"rgba(255,255,255,.3)","display":"flex","justifyContent":"space-between"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      label-width="120px"
    >  
     <el-row>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yunyingshangguan'"  label="运营账号" prop="yunyingzhanghao">
          <el-input v-model="ruleForm.yunyingzhanghao" readonly              placeholder="运营账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yunyingshangguan'"  label="运营姓名" prop="yunyingxingming">
          <el-input v-model="ruleForm.yunyingxingming"               placeholder="运营姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='yunyingshangguan'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yunyingshangguanxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yunyingshangguan'"  label="电话" prop="dianhua">
          <el-input v-model="ruleForm.dianhua"               placeholder="电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yunyingshangguan'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='yunyingshangguan'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="yunyingshangguantouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='jieruguanli'"  label="接入账号" prop="jieruzhanghao">
          <el-input v-model="ruleForm.jieruzhanghao" readonly              placeholder="接入账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='jieruguanli'"  label="接入姓名" prop="jieruxingming">
          <el-input v-model="ruleForm.jieruxingming"               placeholder="接入姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='jieruguanli'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in jieruguanlixingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='jieruguanli'"  label="电话" prop="dianhua">
          <el-input v-model="ruleForm.dianhua"               placeholder="电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='jieruguanli'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='jieruguanli'"  label="管理范围" prop="guanlifanwei">
          <el-input v-model="ruleForm.guanlifanwei"               placeholder="管理范围" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='jieruguanli'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="jieruguanlitouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yonghu'"  label="用户账号" prop="yonghuzhanghao">
          <el-input v-model="ruleForm.yonghuzhanghao" readonly              placeholder="用户账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yonghu'"  label="用户姓名" prop="yonghuxingming">
          <el-input v-model="ruleForm.yonghuxingming"               placeholder="用户姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='yonghu'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yonghuxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yonghu'"  label="电话" prop="dianhua">
          <el-input v-model="ruleForm.dianhua"               placeholder="电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yonghu'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yonghu'"  label="住址" prop="zhuzhi">
          <el-input v-model="ruleForm.zhuzhi"               placeholder="住址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}'   v-if="flag=='yonghu'"  label="ip地址" prop="ipdizhi">
          <el-input v-model="ruleForm.ipdizhi"               placeholder="ip地址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='yonghu'"  label="用户组" prop="yonghuzu">
          <el-select v-model="ruleForm.yonghuzu"  placeholder="请选择用户组">
            <el-option
                v-for="(item,index) in yonghuyonghuzuOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='yonghu'"  label="用户类型" prop="yonghuleixing">
          <el-select v-model="ruleForm.yonghuleixing"  placeholder="请选择用户类型">
            <el-option
                v-for="(item,index) in yonghuyonghuleixingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='yonghu'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="yonghutouxiangUploadChange"
          ></file-upload>
        </el-form-item>
		<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-if="flag=='users'" label="用户名" prop="username">
			<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item :style='{"width":"100%","padding":"0","margin":"20px 0"}'>
			<el-button :style='{"cursor":"pointer","padding":"0 34px","margin":"0 20px 0 0","borderColor":"#1fbfae","color":"#1fbfae","outline":"none","borderRadius":"20px","background":"#e9faf8","borderWidth":"4px","width":"auto","lineHeight":"40px","fontSize":"14px","borderStyle":"solid double solid double","height":"44px"}' type="primary" @click="onUpdateHandler">修 改</el-button>
		</el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yunyingshangguanxingbieOptions: [],
      jieruguanlixingbieOptions: [],
      yonghuxingbieOptions: [],
      yonghuyonghuzuOptions: [],
      yonghuyonghuleixingOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yunyingshangguanxingbieOptions = "男,女".split(',')
    this.jieruguanlixingbieOptions = "男,女".split(',')
    this.yonghuxingbieOptions = "男,女".split(',')
    this.$http({
      url: `option/yonghuzu/yonghuzu`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.yonghuyonghuzuOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yonghuyonghuleixingOptions = "普通用户,认证用户".split(',')
  },
  methods: {
    yunyingshangguantouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    jieruguanlitouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    yonghutouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    onUpdateHandler() {
      if((!this.ruleForm.yunyingzhanghao)&& 'yunyingshangguan'==this.flag){
        this.$message.error('运营账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'yunyingshangguan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if( 'yunyingshangguan' ==this.flag && this.ruleForm.dianhua&&(!isMobile(this.ruleForm.dianhua))){
        this.$message.error(`电话应输入手机格式`);
        return
      }
      if( 'yunyingshangguan' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.jieruzhanghao)&& 'jieruguanli'==this.flag){
        this.$message.error('接入账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'jieruguanli'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if( 'jieruguanli' ==this.flag && this.ruleForm.dianhua&&(!isMobile(this.ruleForm.dianhua))){
        this.$message.error(`电话应输入手机格式`);
        return
      }
      if( 'jieruguanli' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.yonghuzhanghao)&& 'yonghu'==this.flag){
        this.$message.error('用户账号不能为空');
        return
      }
      if((!this.ruleForm.mima)&& 'yonghu'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
      if( 'yonghu' ==this.flag && this.ruleForm.dianhua&&(!isMobile(this.ruleForm.dianhua))){
        this.$message.error(`电话应输入手机格式`);
        return
      }
      if( 'yonghu' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  overflow: hidden;
	  	  text-shadow: 0 0px 0px #fff;
	  	  color: #fff;
	  	  background: none;
	  	  font-weight: 500;
	  	  display: block;
	  	  width: 120px;
	  	  clear: both;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 120px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  padding: 0 12px;
	  	  color: #666;
	  	  clear: both;
	  	  font-size: 14px;
	  	  border-color: #366280;
	  	  border-radius: 20px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  overflow: hidden;
	  	  background: rgba(255,255,255,.9);
	  	  width: 360px;
	  	  border-width: 4px;
	  	  border-style: solid double solid double;
	  	  min-width: 300px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  padding: 0 10px;
	  	  color: #666;
	  	  font-size: 14px;
	  	  border-color: #366280;
	  	  border-radius: 20px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  background: rgba(255,255,255,.9);
	  	  width: 360px;
	  	  border-width: 4px;
	  	  border-style: solid double solid double;
	  	  min-width: 200px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 0px solid #333;
	  	  padding: 0 10px 0 30px;
	  	  color: #666;
	  	  font-size: 14px;
	  	  border-color: #366280;
	  	  border-radius: 20px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  background: rgba(255,255,255,.9);
	  	  width: 360px;
	  	  border-width: 4px;
	  	  border-style: solid double solid double;
	  	  min-width: 200px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px solid #ddd;
	  	  cursor: pointer;
	  	  color: #366280;
	  	  font-size: 32px;
	  	  border-color: #366280;
	  	  line-height: 90px;
	  	  border-radius: 20px;
	  	  background: rgba(255,255,255,.9);
	  	  width: 200px;
	  	  border-width: 4px;
	  	  border-style: solid double solid double;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px solid #ddd;
	  	  cursor: pointer;
	  	  color: #366280;
	  	  font-size: 32px;
	  	  border-color: #366280;
	  	  line-height: 90px;
	  	  border-radius: 20px;
	  	  background: rgba(255,255,255,.9);
	  	  width: 200px;
	  	  border-width: 4px;
	  	  border-style: solid double solid double;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  padding: 12px;
	  	  color: #666;
	  	  font-size: 14px;
	  	  border-color: #366280;
	  	  min-height: 150px;
	  	  border-radius: 20px;
	  	  box-shadow: 0 0 0px #4b681d;
	  	  outline: none;
	  	  background: rgba(255,255,255,.9);
	  	  width: 450px;
	  	  border-width: 4px;
	  	  border-style: solid double solid double;
	  	  min-width: 200px;
	  	  height: auto;
	  	}
</style>
