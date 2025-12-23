function generate() {
  const config = {
    company: document.getElementById("companyName").value,
    grad1: document.getElementById("companyGrad1").value,
    grad2: document.getElementById("companyGrad2").value,
    align: document.getElementById("companyAlign").value,
    animation: document.getElementById("titleAnim").value,
    bgColor: document.getElementById("bgColor").value,
    formColor: document.getElementById("formColor").value,
    btnColor: document.getElementById("btnColor").value
  };

  document.getElementById("output").value = hotspotTemplate(config);
}

function download() {
  const content = document.getElementById("output").value;
  if (!content) {
    alert("Please generate HTML first.");
    return;
  }

  const blob = new Blob([content], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "login.html";
  a.click();
}
