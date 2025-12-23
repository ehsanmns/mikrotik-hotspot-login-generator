function generate() {
  const config = {
    company: companyName.value,
    theme: theme.value,
    bgColor: bgColor.value,
    formColor: formColor.value,
    btnColor: btnColor.value
  };

  output.value = hotspotTemplate(config);
}

function download() {
  const blob = new Blob([output.value], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "login.html";
  a.click();
}