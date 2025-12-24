const output = document.getElementById("output");
const previewFrame = document.getElementById("previewFrame");

const ids = [
  "companyName","companyGrad1","companyGrad2","companyAlign",
  "titleSize","titleAnim","bgColor","formColor","inputBg",
  "inputText","btnColor","btnTextColor","formWidth",
  "formRadius","btnRadius","shadow"
];

ids.forEach(id => {
  document.getElementById(id).addEventListener("input", update);
});

function update() {
  const c = id => document.getElementById(id).value;

  const config = {
    company: c("companyName"),
    grad1: c("companyGrad1"),
    grad2: c("companyGrad2"),
    align: c("companyAlign"),
    titleSize: c("titleSize"),
    animation: c("titleAnim"),
    bgColor: c("bgColor"),
    formColor: c("formColor"),
    inputBg: c("inputBg"),
    inputText: c("inputText"),
    btnColor: c("btnColor"),
    btnTextColor: c("btnTextColor"),
    formWidth: c("formWidth"),
    formRadius: c("formRadius"),
    btnRadius: c("btnRadius"),
    shadow: c("shadow")
  };

  const html = hotspotTemplate(config);

  output.value = html;
  previewFrame.srcdoc = html;
}

function download() {
  const blob = new Blob([output.value], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "login.html";
  a.click();
}

update(); // render اولیه
function copyCode() {
  if (!output.value) {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(output.value).then(() => {
    alert("HTML copied to clipboard ✔");
  });
}

