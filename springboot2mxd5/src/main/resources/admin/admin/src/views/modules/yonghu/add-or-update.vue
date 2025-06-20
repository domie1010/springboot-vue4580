<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"padding":"35px 15px","boxShadow":"0 0px 0px #999","borderRadius":"0px","flexWrap":"wrap","background":"rgba(255,255,255,.3)","display":"flex","justifyContent":"space-between"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="120px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="密码" prop="mima">
					<el-input v-model="ruleForm.mima" placeholder="密码" clearable  :readonly="ro.mima"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="密码" prop="mima">
					<el-input v-model="ruleForm.mima" placeholder="密码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="select" v-if="type!='info'"  label="性别" prop="xingbie">
					<el-select :disabled="ro.xingbie" v-model="ruleForm.xingbie" placeholder="请选择性别" >
						<el-option
							v-for="(item,index) in xingbieOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="性别" prop="xingbie">
					<el-input v-model="ruleForm.xingbie"
						placeholder="性别" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="电话" prop="dianhua">
					<el-input v-model="ruleForm.dianhua" placeholder="电话" clearable  :readonly="ro.dianhua"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="电话" prop="dianhua">
					<el-input v-model="ruleForm.dianhua" placeholder="电话" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="邮箱" prop="youxiang">
					<el-input v-model="ruleForm.youxiang" placeholder="邮箱" clearable  :readonly="ro.youxiang"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="邮箱" prop="youxiang">
					<el-input v-model="ruleForm.youxiang" placeholder="邮箱" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="住址" prop="zhuzhi">
					<el-input v-model="ruleForm.zhuzhi" placeholder="住址" clearable  :readonly="ro.zhuzhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="住址" prop="zhuzhi">
					<el-input v-model="ruleForm.zhuzhi" placeholder="住址" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="input" v-if="type!='info'"  label="ip地址" prop="ipdizhi">
					<el-input v-model="ruleForm.ipdizhi" placeholder="ip地址" clearable  :readonly="ro.ipdizhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="ip地址" prop="ipdizhi">
					<el-input v-model="ruleForm.ipdizhi" placeholder="ip地址" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="select" v-if="type!='info'"  label="用户组" prop="yonghuzu">
					<el-select :disabled="ro.yonghuzu" v-model="ruleForm.yonghuzu" placeholder="请选择用户组" >
						<el-option
							v-for="(item,index) in yonghuzuOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="用户组" prop="yonghuzu">
					<el-input v-model="ruleForm.yonghuzu"
						placeholder="用户组" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="select" v-if="type!='info'"  label="用户类型" prop="yonghuleixing">
					<el-select :disabled="ro.yonghuleixing" v-model="ruleForm.yonghuleixing" placeholder="请选择用户类型" >
						<el-option
							v-for="(item,index) in yonghuleixingOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' v-else class="input" label="用户类型" prop="yonghuleixing">
					<el-input v-model="ruleForm.yonghuleixing"
						placeholder="用户类型" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="upload" v-if="type!='info' && !ro.touxiang" label="头像" prop="touxiang">
					<file-upload
						tip="点击上传头像"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
						@change="touxiangUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 30px 0","flexWrap":"wrap","textAlign":"left","background":"none","display":"block","width":"100%","float":"left","justifyContent":"flex-start"}' class="upload" v-else-if="ruleForm.touxiang" label="头像" prop="touxiang">
					<img class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
			</template>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"20px 0"}' class="btn">
				<el-button :style='{"cursor":"pointer","padding":"0 34px","margin":"0 20px 0 0","borderColor":"#1fbfae","color":"#1fbfae","outline":"none","borderRadius":"20px","background":"#e9faf8","borderWidth":"4px","width":"auto","lineHeight":"40px","fontSize":"14px","borderStyle":"solid double solid double","height":"44px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"cursor":"pointer","padding":"0 34px","margin":"0","borderColor":"#dc333b","color":"#dc333b","outline":"none","borderRadius":"20px","background":"#fbeced","borderWidth":"4px","width":"auto","lineHeight":"40px","fontSize":"14px","borderStyle":"solid double solid double","height":"44px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"cursor":"pointer","padding":"0 34px","margin":"0","borderColor":"#dc333b","color":"#dc333b","outline":"none","borderRadius":"20px","background":"#fbeced","borderWidth":"4px","width":"auto","lineHeight":"40px","fontSize":"14px","borderStyle":"solid double solid double","height":"44px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				yonghuzhanghao : false,
				mima : false,
				yonghuxingming : false,
				xingbie : false,
				dianhua : false,
				youxiang : false,
				zhuzhi : false,
				ipdizhi : false,
				yonghuzu : false,
				yonghuleixing : false,
				touxiang : false,
				sfsh : false,
				shhf : false,
			},
			
			
			ruleForm: {
				yonghuzhanghao: '',
				mima: '',
				yonghuxingming: '',
				xingbie: '',
				dianhua: '',
				youxiang: '',
				zhuzhi: '',
				ipdizhi: '',
				yonghuzu: '',
				yonghuleixing: '',
				touxiang: '',
				shhf: '',
			},
		
			xingbieOptions: [],
			yonghuzuOptions: [],
			yonghuleixingOptions: [],
			
			rules: {
				yonghuzhanghao: [
					{ required: true, message: '用户账号不能为空', trigger: 'blur' },
				],
				mima: [
					{ required: true, message: '密码不能为空', trigger: 'blur' },
				],
				yonghuxingming: [
				],
				xingbie: [
				],
				dianhua: [
					{ validator: validateMobile, trigger: 'blur' },
				],
				youxiang: [
					{ validator: validateEmail, trigger: 'blur' },
				],
				zhuzhi: [
				],
				ipdizhi: [
				],
				yonghuzu: [
				],
				yonghuleixing: [
				],
				touxiang: [
				],
				sfsh: [
				],
				shhf: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='mima'){
							this.ruleForm.mima = obj[o];
							this.ro.mima = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
						if(o=='xingbie'){
							this.ruleForm.xingbie = obj[o];
							this.ro.xingbie = true;
							continue;
						}
						if(o=='dianhua'){
							this.ruleForm.dianhua = obj[o];
							this.ro.dianhua = true;
							continue;
						}
						if(o=='youxiang'){
							this.ruleForm.youxiang = obj[o];
							this.ro.youxiang = true;
							continue;
						}
						if(o=='zhuzhi'){
							this.ruleForm.zhuzhi = obj[o];
							this.ro.zhuzhi = true;
							continue;
						}
						if(o=='ipdizhi'){
							this.ruleForm.ipdizhi = obj[o];
							this.ro.ipdizhi = true;
							continue;
						}
						if(o=='yonghuzu'){
							this.ruleForm.yonghuzu = obj[o];
							this.ro.yonghuzu = true;
							continue;
						}
						if(o=='yonghuleixing'){
							this.ruleForm.yonghuleixing = obj[o];
							this.ro.yonghuleixing = true;
							continue;
						}
						if(o=='touxiang'){
							this.ruleForm.touxiang = obj[o];
							this.ro.touxiang = true;
							continue;
						}
				}
				













			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.xingbieOptions = "男,女".split(',')
            this.$http({
				url: `option/yonghuzu/yonghuzu`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.yonghuzuOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
            this.yonghuleixingOptions = "普通用户,认证用户".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `yonghu/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {






















	if(this.ruleForm.touxiang!=null) {
		this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
	}





var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "yonghu/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `yonghu/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.yonghuCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `yonghu/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.yonghuCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.yonghuCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    touxiangUploadChange(fileUrls) {
	this.ruleForm.touxiang = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
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
	
	.add-update-preview /deep/ .upload .upload-img {
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
