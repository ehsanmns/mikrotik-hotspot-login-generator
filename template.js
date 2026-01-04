// MikroTik Hotspot Login Template Generator - FIXED VERSION
let currentLogoData = '';
let templateCache = '';

function generateHTML() {
    showLoading(true);
    
    setTimeout(() => {
        try {
            // Get all values from controls
            const companyName = document.getElementById('companyName').value || 'Internet Hotspot';
            const companyGrad1 = document.getElementById('companyGrad1').value;
            const companyGrad2 = document.getElementById('companyGrad2').value;
            const companyAlign = document.getElementById('companyAlign').value;
            const titleAnim = document.getElementById('titleAnim').value;
            const bgColor = document.getElementById('bgColor').value;
            const formColor = document.getElementById('formColor').value;
            const btnColor = document.getElementById('btnColor').value;
            const btnTextColor = document.getElementById('btnTextColor').value;
            const inputBgColor = document.getElementById('inputBgColor').value;
            const formRadius = document.getElementById('formRadius').value + 'px';
            const btnRadius = document.getElementById('btnRadius').value + 'px';
            const shadowIntensity = document.getElementById('shadowIntensity').value + 'px';
            const btnHover = document.getElementById('btnHover').value;
            const formGlow = document.getElementById('formGlow').value;
            const logoType = document.getElementById('logoType').value;
            const logoUpload = document.getElementById('logoUpload');
            
            // Animation classes mapping
            const animations = {
                fade: 'animated fadeIn',
                slide: 'animated slideInDown',
                zoom: 'animated zoomIn',
                bounce: 'animated bounceIn',
                flip: 'animated flipInX',
                flipY: 'animated flipInY',
                rotate: 'animated rotateIn',
                pulse: 'animated pulse',
                shake: 'animated shake',
                none: ''
            };
            
            const animationClass = animations[titleAnim] || 'animated fadeIn';
            
            // Logo HTML
            let logoHTML = '';
            
            if (logoUpload.files.length > 0) {
                const file = logoUpload.files[0];
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        currentLogoData = e.target.result;
                        logoHTML = `<img src="${currentLogoData}" alt="${companyName} Logo" style="max-width:200px; max-height:100px; display:block; margin:0 auto 20px;">`;
                        createFinalHTML();
                    };
                    reader.readAsDataURL(file);
                    return;
                }
            }
            
            logoHTML = getDefaultLogo(logoType, companyName);
            createFinalHTML();
            
            function createFinalHTML() {
                // Button hover effect
                const btnHoverCSS = btnHover === 'yes' ? 
                    `input[type="submit"]:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 20px ${hexToRgba(btnColor, 0.4)};
                        filter: brightness(1.1);
                    }` : '';
                
                // Form glow effect
                const formGlowCSS = formGlow === 'yes' ? 
                    `.wrap {
                        box-shadow: 0 0 ${shadowIntensity} ${hexToRgba(btnColor, 0.3)},
                                    0 ${shadowIntensity} ${parseInt(shadowIntensity) * 2}px rgba(0,0,0,0.3);
                    }` : 
                    `.wrap {
                        box-shadow: 0 ${shadowIntensity} ${parseInt(shadowIntensity) * 2}px rgba(0,0,0,0.3);
                    }`;
                
                // ==== HTML TEMPLATE - FIXED FOR MIKROTIK ====
                const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="-1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${companyName} - Hotspot Login</title>
    <style>
        /* Animation definitions */
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes slideInDown { from { transform:translateY(-50px); opacity:0; } to { transform:translateY(0); opacity:1; } }
        @keyframes zoomIn { from { transform:scale(0.5); opacity:0; } to { transform:scale(1); opacity:1; } }
        @keyframes bounceIn { 0% { transform:scale(0.3); opacity:0; } 50% { transform:scale(1.05); } 70% { transform:scale(0.9); } 100% { transform:scale(1); opacity:1; } }
        @keyframes flipInX { from { transform:perspective(400px) rotateX(90deg); opacity:0; } to { transform:perspective(400px) rotateX(0); opacity:1; } }
        @keyframes flipInY { from { transform:perspective(400px) rotateY(90deg); opacity:0; } to { transform:perspective(400px) rotateY(0); opacity:1; } }
        @keyframes rotateIn { from { transform:rotate(-180deg); opacity:0; } to { transform:rotate(0); opacity:1; } }
        @keyframes pulse { 0% { transform:scale(1); } 50% { transform:scale(1.05); } 100% { transform:scale(1); } }
        @keyframes shake { 0%,100% { transform:translateX(0); } 10%,30%,50%,70%,90% { transform:translateX(-5px); } 20%,40%,60%,80% { transform:translateX(5px); } }
        
        .animated { animation-duration: 1s; animation-fill-mode: both; }
        .fadeIn { animation-name: fadeIn; }
        .slideInDown { animation-name: slideInDown; }
        .zoomIn { animation-name: zoomIn; }
        .bounceIn { animation-name: bounceIn; }
        .flipInX { animation-name: flipInX; }
        .flipInY { animation-name: flipInY; }
        .rotateIn { animation-name: rotateIn; }
        .pulse { animation-name: pulse; }
        .shake { animation-name: shake; }
        
        /* Main styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: ${bgColor};
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .main {
            width: 100%;
            max-width: 420px;
            margin: 0 auto;
        }
        
        .wrap {
            background: ${formColor};
            padding: 40px 30px;
            border-radius: ${formRadius};
            ${formGlowCSS}
            transition: all 0.3s ease;
        }
        
        .company-title {
            text-align: ${companyAlign};
            margin: 20px 0 30px;
            background: linear-gradient(45deg, ${companyGrad1}, ${companyGrad2});
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-size: 28px;
            font-weight: bold;
            line-height: 1.3;
        }
        
        .info {
            text-align: center;
            margin-bottom: 25px;
            color: #a0a0a0;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .info.alert {
            color: #ff6b6b;
            background: rgba(255,107,107,0.1);
            padding: 12px;
            border-radius: 8px;
            border-left: 4px solid #ff6b6b;
        }
        
        .info a {
            color: ${btnColor};
            text-decoration: none;
            font-weight: bold;
        }
        
        .info a:hover {
            text-decoration: underline;
        }
        
        label {
            display: block;
            margin-bottom: 20px;
            position: relative;
        }
        
        .ico {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            opacity: 0.7;
            pointer-events: none;
        }
        
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 15px 15px 15px 50px;
            background: ${inputBgColor};
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px;
            color: white;
            font-size: 16px;
            transition: all 0.3s;
        }
        
        input[type="text"]:focus,
        input[type="password"]:focus {
            outline: none;
            border-color: ${btnColor};
            box-shadow: 0 0 0 3px ${hexToRgba(btnColor, 0.2)};
        }
        
        input[type="submit"] {
            width: 100%;
            padding: 16px;
            background: ${btnColor};
            color: ${btnTextColor};
            border: none;
            border-radius: ${btnRadius};
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }
        
        ${btnHoverCSS}
        
        .bt {
            margin-top: 25px;
            font-size: 12px;
            opacity: 0.7;
            text-align: center;
        }
        
        @media (max-width: 480px) {
            .wrap {
                padding: 30px 20px;
            }
            
            .company-title {
                font-size: 24px;
            }
            
            input[type="text"],
            input[type="password"] {
                padding: 12px 12px 12px 45px;
                font-size: 14px;
            }
            
            input[type="submit"] {
                padding: 14px;
                font-size: 15px;
            }
        }
    </style>
</head>
<body>

<!-- HIDDEN FORM FOR CHAP AUTHENTICATION (CRITICAL) -->
\$(if chap-id)
<form name="sendin" action="\$(link-login-only)" method="post" style="display:none">
    <input type="hidden" name="username" />
    <input type="hidden" name="password" />
    <input type="hidden" name="dst" value="\$(link-orig)" />
    <input type="hidden" name="popup" value="true" />
</form>
\$(endif)

    <div class="main">
        <div class="wrap ${animationClass}">
            ${logoHTML}
            
            <div class="company-title">${companyName}</div>
            
            <!-- VISIBLE FORM (always submits to hidden form for CHAP) -->
            <form name="login" action="\$(link-login-only)" method="post" \$(if chap-id)onsubmit="return doLogin()"\$(endif)>
                <input type="hidden" name="dst" value="\$(link-orig)" />
                <input type="hidden" name="popup" value="true" />
                
                <p class="info \$(if error)alert\$(endif)">
                    \$(if error == "")
                        Welcome to ${companyName}. Please log in to access the internet.
                        \$(if trial == 'yes')
                            <br /><br />
                            <strong>Free trial available!</strong>
                            <a href="\$(link-login-only)?dst=\$(link-orig-esc)&username=T-\$(mac-esc)">
                                Click here for free trial access
                            </a>.
                        \$(endif)
                    \$(endif)
                    
                    \$(if error)
                        \$(error)
                    \$(endif)
                </p>
                
                <label>
                    <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    <input name="username" type="text" value="\$(username)" placeholder="Username" autocomplete="username" required />
                </label>

                <label>
                    <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                    <input name="password" type="password" placeholder="Password" autocomplete="current-password" required />
                </label>

                <input type="submit" value="Connect to Internet" />
            </form>
            
            <p class="bt">
                Powered by MikroTik Hotspot System
                <br>
                ${new Date().getFullYear()} ${companyName}
            </p>
        </div>
    </div>

    <!-- MIKROTIK MD5.JS SCRIPT (CRITICAL) -->
    \$(if chap-id)
    <script src="/md5.js"></script>
    \$(endif)

    <!-- LOGIN HANDLER SCRIPT -->
    <script>
        // ===== MIKROTIK STANDARD LOGIN HANDLER =====
        // This is the EXACT pattern used by MikroTik's default login page
        
        \$(if chap-id)
        // CHAP Authentication Handler (Standard MikroTik)
        function doLogin() {
            console.log('CHAP authentication initiated');
            
            // Copy values to hidden form
            document.sendin.username.value = document.login.username.value;
            
            // Calculate CHAP hash using MikroTik's md5.js
            if (typeof hexMD5 === 'function') {
                document.sendin.password.value = hexMD5('\$(chap-id)' + 
                    document.login.password.value + 
                    '\$(chap-challenge)');
            } else {
                // Fallback: try to load md5.js dynamically
                console.error('MD5.js not loaded! Loading now...');
                loadMD5(function() {
                    if (typeof hexMD5 === 'function') {
                        document.sendin.password.value = hexMD5('\$(chap-id)' + 
                            document.login.password.value + 
                            '\$(chap-challenge)');
                        document.sendin.submit();
                    } else {
                        // Last resort fallback
                        alert('Authentication error. Please try again.');
                        return false;
                    }
                });
                return false;
            }
            
            // Submit the hidden form
            document.sendin.submit();
            return false;
        }
        
        // Dynamic MD5.js loader as fallback
        function loadMD5(callback) {
            var script = document.createElement('script');
            script.src = '/md5.js';
            script.onload = function() {
                console.log('MD5.js loaded dynamically');
                if (callback) callback();
            };
            script.onerror = function() {
                console.error('Failed to load MD5.js');
                if (callback) callback();
            };
            document.head.appendChild(script);
        }
        \$(else)
        // Normal Authentication (no CHAP)
        function doLogin() {
            return true; // Let form submit normally
        }
        \$(endif)
        
        // ===== ENHANCED UX FEATURES =====
        document.addEventListener('DOMContentLoaded', function() {
            // Auto-focus username field
            var usernameField = document.querySelector('input[name="username"]');
            if (usernameField && !usernameField.value) {
                setTimeout(function() {
                    usernameField.focus();
                }, 300);
            }
            
            // Enter key to submit
            var passwordField = document.querySelector('input[name="password"]');
            if (passwordField) {
                passwordField.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        document.querySelector('input[type="submit"]').click();
                    }
                });
            }
            
            // Loading state for submit button
            var form = document.forms.login;
            if (form) {
                form.addEventListener('submit', function() {
                    var submitBtn = this.querySelector('input[type="submit"]');
                    if (submitBtn) {
                        var originalText = submitBtn.value;
                        submitBtn.value = 'Connecting...';
                        submitBtn.disabled = true;
                        
                        // Reset after 10 seconds if still on page
                        setTimeout(function() {
                            if (submitBtn.disabled) {
                                submitBtn.value = originalText;
                                submitBtn.disabled = false;
                            }
                        }, 10000);
                    }
                });
            }
        });
        
        // ===== SAFE FALLBACK MD5 FUNCTION =====
        // This will ONLY be used if /md5.js fails to load
        if (typeof hexMD5 === 'undefined') {
            console.warn('MD5.js not loaded. Creating safe placeholder.');
            window.hexMD5 = function(str) {
                console.error('MD5 function called but md5.js not loaded!');
                console.error('String to hash:', str.substring(0, 20) + '...');
                
                // Show user-friendly error
                setTimeout(function() {
                    var errorDiv = document.createElement('div');
                    errorDiv.style.cssText = 'position:fixed; top:20px; left:50%; transform:translateX(-50%); background:#dc3545; color:white; padding:15px; border-radius:5px; z-index:9999; max-width:90%;';
                    errorDiv.innerHTML = '<strong>Authentication Error:</strong> Please refresh the page or contact administrator.';
                    document.body.appendChild(errorDiv);
                    
                    setTimeout(function() {
                        if (errorDiv.parentNode) {
                            errorDiv.parentNode.removeChild(errorDiv);
                        }
                    }, 5000);
                }, 100);
                
                // Return dummy hash that will fail auth (safest option)
                return '00000000000000000000000000000000';
            };
        }
    </script>
</body>
</html>`;
                
                templateCache = html;
                document.getElementById('output').value = html;
                
                // Update preview
                const iframe = document.getElementById('previewFrame');
                iframe.srcdoc = html;
                
                showLoading(false);
            }
            
        } catch (err) {
            console.error('Error generating HTML:', err);
            document.getElementById('output').value = 'Error generating code: ' + err.message;
            showLoading(false);
        }
    }, 300);
}

function getDefaultLogo(type, companyName) {
    switch(type) {
        case 'text':
            return `<div style="text-align:center; margin-bottom:20px;">
                        <div style="font-size:32px; font-weight:bold; color:#3b82f6; margin-bottom:5px;">${companyName.substring(0, 2).toUpperCase()}</div>
                        <div style="font-size:14px; color:#94a3b8;">HOTSPOT LOGIN</div>
                    </div>`;
        
        case 'none':
            return '';
            
        default:
            return `<svg class="logo" viewBox="0 0 174 42" style="max-width:200px; display:block; margin:0 auto 20px;">
                        <path fill="#3b82f6" d="M7.32 13.66L0 41.74 3.12 41.74 9.49 15.94 9.58 15.94 15.01 41.74 18.22 41.74 36.86 16.34 36.95 16.34 30.02 41.74 33.18 41.74 40.4 13.66 35.73 13.66 17.23 38.87 11.99 13.66 7.32 13.66zM43.43 21.45L38.19 41.74 41.16 41.74 46.4 21.45 43.43 21.45zM50.68 21.45L45.5 41.74 48.47 41.74 50.36 34.39 55.55 30.77 62.02 41.74 65.27 41.74 57.91 29.28 69.43 21.45 65.46 21.45 51.21 31.36 51.12 31.28 53.66 21.45 50.68 21.45z"/>
                        <path d="M71.18 21.45L65.94 41.74h3l2.74-10.62c1-3.81 3.82-7.39 9.16-7.47.56 0 1.13 0 1.7 0l.66-2.48c-.52 0-1.09 0-1.61 0-4.34 0-6.94 2-8.82 5h-.1l1.23-4.68zM103.8 28.8c0-5-4-7.94-9.63-7.94-8.69 0-13.59 6.37-13.59 13 0 5.07 3.44 8.45 9.72 8.45 9 0 13.5-6.68 13.5-13.53m-3 .52c0 4.72-3.44 10.93-9.95 10.93-5 0-7.32-2.68-7.32-6.61 0-4.76 3.59-10.7 10.1-10.7 4.77 0 7.17 2.6 7.17 6.38M132.33 21.43L134.26 13.66 105.19 13.66 103.27 21.45 112.59 21.45 112.59 21.45 122.99 21.45 122.99 21.45 132.33 21.43zM111.67 25.17L107.55 41.74 117.93 41.74 122.06 25.17 122.06 25.16 111.67 25.16 111.67 25.17zM134 25.17l-4.11 16.57h9.35l4.1-16.57zm10.28-3.73l1.94-7.78h-9.34l-2 7.79zM150.09 13.66L143.11 41.74 152.45 41.74 153.91 35.92 156.04 34.34 159.34 41.74 169.49 41.74 163.26 29.55 174.26 21.33 163.07 21.33 156.18 27.3 156.09 27.3 159.44 13.66 150.09 13.66zM47.45 0c1.14 7.93 5.39 12.74 14.07 13.14A10.69 10.69 0 0 1 47.45 0" fill="#3b82f6" fill-rule="evenodd"/>
                        <path d="M42.91,1.4c.1,0,.11,0,.12.11A16.55,16.55,0,0,0,48.26,13a16.6,16.6,0,0,0,12,4.66c-10,4-20.55-5.6-17.33-16.28" fill="#3b82f6" fill-rule="evenodd"/>
                    </svg>`;
    }
}

function hexToRgba(hex, alpha = 1) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
