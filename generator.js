document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const previewFrame = document.getElementById("previewFrame");

  const ids = ["companyName","companyGrad1","companyGrad2","companyAlign","titleAnim",
               "bgColor","formColor","btnColor","btnTextColor","formRadius","btnRadius","btnHover"];
  
  ids.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener("input", update);
    if(el) el.addEventListener("change", update);
  });

  function c(id){ return document.getElementById(id)?.value || ""; }

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
      btnRadius: c("btnRadius"),
      btnHover: c("btnHover")
    };
    const html = hotspotTemplate(config);
    output.value = html;
    previewFrame.srcdoc = html;
  }

  window.copyCode = function(){
    navigator.clipboard.writeText(output.value);
    alert("HTML copied ✔");
  };

  // ========================
  // Export ZIP شامل HTML، CSS و JS جدا
  // ========================
  window.exportZIP = async function(){
    const zip = new JSZip();
    const htmlContent = output.value;

    // اضافه کردن فایل HTML
    zip.file("login.html", htmlContent);

    // اضافه کردن فایل CSS
    const cssResponse = await fetch("style.css");
    const cssText = await cssResponse.text();
    zip.file("style.css", cssText);

    // اضافه کردن فایل template.js
    const templateResponse = await fetch("template.js");
    const templateText = await templateResponse.text();
    zip.file("template.js", templateText);

    // اضافه کردن فایل generator.js
    const generatorResponse = await fetch("generator.js");
    const generatorText = await generatorResponse.text();
    zip.file("generator.js", generatorText);

    // ساخت و دانلود ZIP
    zip.generateAsync({type:"blob"}).then(blob=>{
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "mikrotik-hotspot-login.zip";
      a.click();
    });
  };

  update(); // initial render
});
