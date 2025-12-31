function hotspotTemplate(config){
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${config.company} - Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<style>
body {
  margin:0;
  padding:0;
  font-family:sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  background:${config.bgColor};
}
.form {
  background:${config.formColor};
  border-radius:${config.formRadius}px;
  padding:20px;
  width:90%;
  max-width:400px;
  text-align:center;
  box-shadow:0 4px 8px rgba(0,0,0,0.5);
}
.form-header {
  font-size:24px;
  font-weight:bold;
  background:linear-gradient(to right, ${config.grad1}, ${config.grad2});
  -webkit-background-clip:text;
  color:transparent;
  text-align:${config.align};
  animation:${config.titleAnim} 1s ease;
  margin-bottom:20px;
}
input {
  width:80%;
  margin:10px auto;
  padding:10px;
  border-radius:4px;
  border:1px solid #444;
  background:#2c2c2c;
  color:#fff;
  display:block;
}
input[type=submit] {
  background:${config.btnColor};
  color:${config.btnTextColor};
  border-radius:${config.btnRadius}px;
  cursor:pointer;
  transition:0.3s;
}
${config.btnHover === "yes" ? `
input[type=submit]:hover {
  transform:scale(1.05);
  filter:brightness(1.2);
}` : ``}
.error {
  background:#b71c1c;
  margin:10px auto;
  padding:10px;
  color:#fff;
  border-radius:4px;
}
</style>

<script>
function hex_md5(s){return binl2hex(core_md5(str2binl(s), s.length * 8));}
function core_md5(x, len){
  x[len >> 5] |= 0x80 << (len % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a=1732584193,b=-271733879,c=-1732584194,d=271733878;
  for(var i=0;i<x.length;i+=16){
    var oa=a,ob=b,oc=c,od=d;
    a=ff(a,b,c,d,x[i],7,-680876936);
    d=ff(d,a,b,c,x[i+1],12,-389564586);
    c=ff(c,d,a,b,x[i+2],17,606105819);
    b=ff(b,c,d,a,x[i+3],22,-1044525330);
    a+=oa;b+=ob;c+=oc;d+=od;
  }
  return [a,b,c,d];
}
function ff(a,b,c,d,x,s,t){
  return ((a+((b&c)|(~b&d))+x+t)<<s|((a+((b&c)|(~b&d))+x+t)>>> (32-s)))+b;
}
function str2binl(str){
  var bin=[];
  for(var i=0;i<str.length*8;i+=8)
    bin[i>>5]|=(str.charCodeAt(i/8)&255)<<(i%32);
  return bin;
}
function binl2hex(bin){
  var hex="0123456789abcdef",out="";
  for(var i=0;i<bin.length*4;i++)
    out+=hex.charAt((bin[i>>2]>>((i%4)*8+4))&15)+hex.charAt((bin[i>>2]>>((i%4)*8))&15);
  return out;
}

function doLogin(){
  var f=document.login;
  if(f['chap-id'].value!==""){
    f.password.value=hex_md5(
      f['chap-id'].value+f.password.value+f['chap-challenge'].value
    );
  }
  f.submit();
}
</script>

</head>

<body>
<form name="login" method="post" action="$(link-login-only)">
  <div class="form">
    <div class="form-header">${config.company}</div>

    <input type="hidden" name="dst" value="$(link-orig)">
    <input type="hidden" name="popup" value="true">
    <input type="hidden" name="chap-id" value="$(chap-id)">
    <input type="hidden" name="chap-challenge" value="$(chap-challenge)">

    <input name="username" type="text" placeholder="Username">
    <input name="password" type="password" placeholder="Password">

    <input type="submit" value="LOGIN" onclick="doLogin(); return false;">

    $(if error)<div class="error">$(error)</div>$(endif)
  </div>
</form>
</body>
</html>`;
}
