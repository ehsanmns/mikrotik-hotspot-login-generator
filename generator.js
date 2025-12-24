document.addEventListener("DOMContentLoaded", () => {

  const output = document.getElementById("output");
  const previewFrame = document.getElementById("previewFrame");

  const ids = [
    "companyName","companyGrad1","companyGrad2","companyAlign",
    "titleAnim","bgColor","formColor","btnColor","btnTextColor",
    "formRadius","btnRadius"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener("input", update);
  });

  function c(id){
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function update(){
    const config = {
      company: c("companyName"),
      grad1: c("companyGrad1"),
      grad2: c("companyGrad2"),
      align: c("companyAlign"),
      titleAnim: c("titleAnim"),
      bgColor: c("bgColor"),
      formColor: c("formColor"),
      btnColor: c("btnColor"),
      btnTextColor: c("btnTextColor"),
      formRadius: c("formRadius"),
      btnRadius: c("btnRadius")
    };
    const html = hotspotTemplate(config);
    output.value = html;
    previewFrame.srcdoc = html;
  }

  window.copyCode = function(){
    navigator.clipboard.writeText(output.value);
    alert("HTML copied ✔");
  };

  window.exportZIP = function(){
    const zip = new JSZip();
    zip.file("login.html", output.value);
    zip.generateAsync({type:"blob"}).then(blob=>{
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "mikrotik-hotspot-login.zip";
      a.click();
    });
  };

  update(); // initial render
});
