function hotspotTemplate(c) {
return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Hotspot Login</title>

<style>
body{
  margin:0;
  background:${c.bgColor};
  font-family:Arial,sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
}

.form{
  background:${c.formColor};
  width:90%;
  max-width:${c.formWidth}px;
  padding:24px;
  border-radius:${c.formRadius}px;
  box-shadow:${c.shadow==="on"?"0 10px 25px rgba(0,0,0,.4)":"none"};
}

.company-title{
  text-align:${c.align};
  font-size:${c.titleSize}px;
  font-weight:bold;
  margin-bottom:20px;
  background:linear-gradient(90deg,${c.grad1},${c.grad2});
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  animation:${c.animation} 1s ease;
}

@keyframes fade{from{opacity:0}to{opacity:1}}
@keyframes slideDown{from{opacity:0;transform:translateY(-20px)}to{opacity:1}}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1}}
@keyframes zoom{from{opacity:0;transform:scale(.7)}to{opacity:1}}
@keyframes flip{from{transform:rotateX(90deg);opacity:0}to{transform:none;opacity:1}}
@keyframes glow{
  0%{filter:drop-shadow(0 0 0 transparent)}
  100%{filter:drop-shadow(0 0 10px ${c.grad1})}
}

input{
  width:100%;
  padding:12px;
  margin:10px 0;
  border:none;
  border-radius:6px;
  background:${c.inputBg};
  color:${c.inputText};
}

input[type=submit]{
  background:${c.btnColor};
  color:${c.btnTextColor};
  border-radius:${c.btnRadius}px;
}
</style>
</head>

<body>
<div class="form">
  <div class="company-title">${c.company}</div>
  <input placeholder="Username">
  <input type="password" placeholder="Password">
  <input type="submit" value="LOGIN">
</div>
</body>
</html>`;
}
