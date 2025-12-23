function hotspotTemplate(config) {
return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Hotspot Login</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
  margin:0;
  background:${config.bgColor};
  font-family:Arial,sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
}

.form {
  background:${config.formColor};
  width:90%;
  max-width:420px;
  padding:24px;
  border-radius:12px;
  box-shadow:0 10px 25px rgba(0,0,0,.4);
  box-sizing:border-box;
}

.company-title {
  text-align:${config.align};
  font-size:28px;
  font-weight:bold;
  margin-bottom:20px;
  background: linear-gradient(90deg, ${config.grad1}, ${config.grad2});
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation: ${config.animation}Anim 1s ease-out;
}

@keyframes fadeAnim {
  from {opacity:0;}
  to {opacity:1;}
}

@keyframes slideAnim {
  from {opacity:0; transform:translateY(-15px);}
  to {opacity:1; transform:translateY(0);}
}

input {
  width:100%;
  padding:12px;
  margin:10px 0;
  border-radius:6px;
  border:none;
  box-sizing:border-box;
  font-size:15px;
}

input[type=submit] {
  background:${config.btnColor};
  color:#fff;
  cursor:pointer;
}

@media(max-width:480px){
  .company-title{font-size:22px;}
  .form{padding:18px;}
}
</style>
</head>

<body>

$(if chap-id)
<form name="sendin" action="$(link-login-only)" method="post">
<input type="hidden" name="username" />
<input type="hidden" name="password" />
<input type="hidden" name="dst" value="$(link-orig)" />
<input type="hidden" name="popup" value="true" />
</form>

<script src="/md5.js"></script>
<script>
function doLogin() {
 document.sendin.username.value = document.login.username.value;
 document.sendin.password.value =
 hexMD5('$(chap-id)' + document.login.password.value + '$(chap-challenge)');
 document.sendin.submit();
 return false;
}
</script>
$(endif)

<form name="login" action="$(link-login-only)" method="post"
$(if chap-id) onSubmit="return doLogin()" $(endif)>
<div class="form">

<div class="company-title">${config.company}</div>

<input type="hidden" name="dst" value="$(link-orig)">
<input name="username" placeholder="Username">
<input name="password" type="password" placeholder="Password">
<input type="submit" value="LOGIN">

$(if error)
<div style="color:red;margin-top:10px;">$(error)</div>
$(endif)

</div>
</form>

</body>
</html>`;
}
