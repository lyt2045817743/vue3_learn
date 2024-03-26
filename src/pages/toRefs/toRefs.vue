<template>
  <!-- <div>跳转中...</div> -->
  <span>测试H5页面跳转零售通：</span>
  <input style="width: 600px" id="input" placeholder="请输入跳转链接" />
  <button id="button">点击跳转</button>
  <button id="clearBtn">清空内容</button>
  <div id="content"></div>
</template>

<script lang="js">
import { toRefs, reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Messager from "./messager";

export default {
  name: "toRefs",
  emits: ["onAfterPush"],
  setup(_props, { emit }) {
    onMounted(() => {
      const oInput = document.querySelector("#input");
      const oBtn = document.querySelector("#button");
      const clearBtn = document.querySelector("#clearBtn");

      const str =
        "smartmijia://feishu/scene?url=https://m.xiaomiyoupin.com/manager/SalesHome?_rt=rn&appLaunchDefaultPage=false";

      oInput.value = str;

      oBtn.onclick = pushUrl;
      clearBtn.onclick = clear;


      document.addEventListener('visibilityChangeProperty', () => {
        oInput.value = 'visibilityChangeProperty';
        console.log('fdsafdsfsafds');
      });

      // window.onpageshow = () => {
      //   alert('chenggong')
      //   window.close()
      // }
    });

    function pushUrl() {
      const oInput = document.querySelector("#input");
      const content = document.querySelector('#content');
      const str = "smartmijia://feishu/scene?url=https://m.xiaomiyoupin.com/manager/SalesHome?_rt=rn&appLaunchDefaultPage=false";
      // const { search } = window.location;
      // // const url = oInput.value ? oInput.value : str + search;
      // // console.log(url);
      // const [_unUse, appUrl] = search.split('appUrl=');
      // const str = 'weixin://dl/moments'
      // const str = 'https://www.baidu.com'
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // const obj = window.open(str); // appUrl
        // const keys = Object.keys(obj);
        // content.innerText = keys;
        // content.innerText = obj.name;

        // obj.onpagehide = () => {
        //   window.close()
        //
        // for(let i=0; i<keys.length; i++) {
        //   content.innerText += keys[i] + '   ' + obj[keys[i]] + '\n';
        // }

        var last = Date.now(),
          doc = window.document,
          ifr = doc.createElement('iframe');

        //创建一个隐藏的iframe
        ifr.src = str;
        ifr.style.cssText = 'display:none;border:0;width:0;height:0;';
        doc.body.appendChild(ifr);

        setTimeout(function() {
          doc.body.removeChild(ifr);
          //setTimeout回小于2000一般为唤起失败
          if (Date.now() - last < 2000) {
              if (typeof onFail == 'function') {
                  onFail();
              } else {
                  // const nowText = '现在:' + new Date(Date.now()) + '\n';
                  // const lastText = '跳转时：' + new Date(last);
                  // content.innerText = nowText + lastText;
                  //弹窗提示或下载处理等
                  alert('请安装零售通app后操作')
              }
          } else {
              if (typeof onSuccess == 'function') {
                  onSuccess();
              }
              window.close();
          }
        }, 1000);
      } else {
        alert('请前往移动端操作');
      }
    }

    function clear() {
      const oInput = document.querySelector("#input");

      oInput.value = "";
    }
    // setTimeout(()=>{
    //     window.close()
    // }, 0)
    return {};
  },
};
</script>

<style></style>
