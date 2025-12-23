# 🚀 MikroTik Hotspot Login Page Generator

> A modern, zero-backend, fully customizable **MikroTik Hotspot Login Page Generator**  
> Built for ISPs, Network Engineers, SysAdmins, and MikroTik lovers ❤️

![MikroTik](https://img.shields.io/badge/MikroTik-Hotspot-blue)
![Status](https://img.shields.io/badge/Status-Stable-success)
![License](https://img.shields.io/badge/License-MIT-green)
![Stars](https://img.shields.io/badge/⭐-Star%20the%20repo-yellow)

---

## ✨ What is this?

This project is a **client-side web application** that allows anyone to generate a **fully working, MikroTik-compatible Hotspot Login page** in seconds.

No backend.  
No installation.  
No MikroTik variables broken.  

Just open, customize, generate, and upload.

---

## 🎯 Why this exists

Designing MikroTik login pages is usually:
- ❌ Time-consuming
- ❌ Hard to customize
- ❌ Risky (breaking `$(chap-id)` and login logic)

This tool solves all of that.

---

## 🧠 Key Features

✅ Fully compatible with **MikroTik Hotspot (CHAP / PAP)**  
✅ Dark & Light themes  
✅ Custom background, form & button colors  
✅ Custom company / ISP name  
✅ Clean, responsive HTML output  
✅ Works **offline**  
✅ GitHub Pages ready  
✅ No dependencies  
✅ Beginner-friendly  

---

## 🖥 Live Demo

👉 **Try it online:**  
https://ehsanmns.github.io/mikrotik-hotspot-login-generator/

## 📸 How it works

1. Open the generator
2. Customize:
   - Company name
   - Theme
   - Colors
3. Click **Generate**
4. Download `login.html`
5. Upload to MikroTik Hotspot
6. Done ✅

---

## 🧩 Generated Output

The generated HTML:
- Keeps **all MikroTik variables intact**
- Supports:
  - `$(chap-id)`
  - `$(chap-challenge)`
  - `$(link-login-only)`
  - `$(error)`
- Is production-ready

---

## 🛠 Installation (2 Minutes)

### Option 1: Use Online (Recommended)
Just open the GitHub Pages link.

### Option 2: Run Locally
```bash
git clone https://github.com/ehsanmns/mikrotik-hotspot-login-generator.git
cd mikrotik-hotspot-login-generator
open index.html

