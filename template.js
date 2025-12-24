function hotspotTemplate(config) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Login Hotspot</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
body {
  margin:0; padding:0; font-family:sans-serif; display:flex; justify-content:center; align-items:center;
  min-height:100vh; background:${config.bgColor};
}
.form {
  background:${config.formColor}; border-radius:${config.formRadius}px; padding:20px; width:90%; max-width:400px;
  box-shadow:0 4px 8px rgba(0,0,0,0.5); text-align:center;
}
.form-header {
  font-size:24px; font-weight:bold;
  background: linear-gradient(to right, ${config.grad1}, ${config.grad2});
  -webkit-background-clip: text; color: transparent;
  text-align:${config.align};
  animation:${config.titleAnim} 1s ease;
}
@keyframes fade { from{opacity:0;} to{opacity:1;} }
@keyframes slide { from{transform:translateY(-20px);opacity:0;} to{transform:translateY(0);opacity:1;} }
@keyframes zoom { from{transform:scale(0.5);opacity:0;} to{transform:scale(1);opacity:1;} }
@keyframes flip { from{transform:rotateY(90deg);opacity:0;} to{transform:rotateY(0deg);opacity:1;} }
@keyframes bounce { 0%,20%,50%,80%,100%{transform:translateY(0);} 40%{transform:translateY(-15px);} 60%{transform:translateY(-7px);} }
@keyframes shake { 0%,100%{transform:translateX(0);} 25%{transform:translateX(-5px);} 50%{transform:translateX(5px);} 75%{transform:translateX(-5px);} }
@keyframes glow { 0%,100%{text-shadow:0 0 5px ${config.grad1},0 0 10px ${config.grad2};} 50%{text-shadow:0 0 15px ${config.grad2},0 0 20px ${config.grad1};} }
@keyframes rotate { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
@keyframes pulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.1);} }
@keyframes flipX { from{transform:rotateX(90deg);opacity:0;} to{transform:rotateX(0deg);opacity:1;} }
@keyframes flipY { from{transform:rotateY(90deg);opacity:0;} to{transform:rotateY(0deg);opacity:1;} }

input { width:80%; margin:10px auto; padding:10px; border-radius:4px; border:1px solid #444; background:#2c2c2c; color:#fff; display:block; }
input[type=submit] { width:80%; background:${config.btnColor}; color:${config.btnTextColor}; border-radius:${config.btnRadius}px; cursor:pointer; transition:0.3s; }
input[type=submit]:hover { filter: brightness(1.2); }
.error { background:#b71c1c; width:90%; margin:10px auto; padding:10px; color:#fff; border-radius:4px; }
@media screen and (max-width:600px) { .form { width:95%; } }
</style>
</head>
<body>
<form name="login" method="post" action="$(link-login-only)">
  <div class="form">
    <div class="form-header">${config.company}</div>
    <div class="form-body">
      <input type="hidden" name="dst" value="$(link-orig)">
      <input type="hidden" name="popup" value="true">
      <input name="username" type="text" placeholder="Username"><br>
      <input name="password" type="password" placeholder="Password"><br>
      <input type="submit" value="LOGIN"><br>
    </div>
    $(if error)<div class="error">$(error)</div>$(endif)
  </div>
</form>
</body>
</html>
`;
}

