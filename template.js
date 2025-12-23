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
  background:${config.bgColor};
  color:${config.theme === 'dark' ? '#ffffff' : '#000000'};
  font-family: Arial, sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
}

.form {
  background:${config.formColor};
  padding:20px;
  width:90%;
  max-width:400px;
  border-radius:8px;
  text-align:center;
}

input {
  width:80%;
  padding:10px;
  margin:10px 0;
}

input[type=submit] {
  background:${config.btnColor};
  color:white;
  border:none;
  cursor:pointer;
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
<h2>${config.company}</h2>

<input type="hidden" name="dst" value="$(link-orig)">
<input name="username" placeholder="Username">
<input name="password" type="password" placeholder="Password">
<input type="submit" value="LOGIN">
</div>

$(if error)
<div style="color:red">$(error)</div>
$(endif)
</form>

</body>
</html>`;
}
