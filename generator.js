// MikroTik Hotspot Login Generator - Main Logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize color value displays
    const colorInputs = document.querySelectorAll('input[type="color"]');
    colorInputs.forEach(input => {
        const id = input.id + 'Value';
        const span = document.getElementById(id);
        if (span) {
            span.textContent = input.value;
            input.addEventListener('input', function() {
                span.textContent = this.value;
                generateHTML();
            });
        }
    });
    
    // Initialize range value displays
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        const id = input.id + 'Value';
        const span = document.getElementById(id);
        if (span) {
            span.textContent = input.value + (input.id.includes('Radius') ? 'px' : 'px');
            input.addEventListener('input', function() {
                span.textContent = this.value + (this.id.includes('Radius') ? 'px' : 'px');
                generateHTML();
            });
        }
    });
    
    // Add event listeners to all controls
    const controls = document.querySelectorAll('input, select, textarea');
    controls.forEach(control => {
        if (control.id && !control.id.includes('output')) {
            control.addEventListener('input', generateHTML);
            control.addEventListener('change', generateHTML);
        }
    });
    
    // Add logo upload handler
    const logoUpload = document.getElementById('logoUpload');
    if (logoUpload) {
        logoUpload.addEventListener('change', generateHTML);
    }
    
    // Initialize
    setTimeout(() => {
        generateHTML();
    }, 500);
});

function refreshPreview() {
    generateHTML();
}

function openPreviewInNewTab() {
    const output = document.getElementById('output').value;
    if (!output.trim()) {
        alert('Please generate code first!');
        return;
    }
    
    const blob = new Blob([output], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.classList.add('active');
    } else {
        loading.classList.remove('active');
    }
}

function copyCode() {
    const output = document.getElementById('output');
    if (!output.value.trim()) {
        alert('Please generate the code first!');
        return;
    }
    
    output.select();
    output.setSelectionRange(0, 99999);
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            // Show success message
            const copyBtn = document.querySelector('button[onclick="copyCode()"]');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #047857 100%)';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
            }, 2000);
        } else {
            // Fallback to clipboard API
            navigator.clipboard.writeText(output.value).then(() => {
                alert('Code copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy code. Please select and copy manually.');
            });
        }
    } catch (err) {
        // Use Clipboard API as fallback
        navigator.clipboard.writeText(output.value).then(() => {
            alert('Code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy code. Please select and copy manually.');
        });
    }
}

function exportZIP() {
    const output = document.getElementById('output').value;
    if (!output.trim()) {
        alert('Please generate the code first!');
        return;
    }
    
    showLoading(true);
    
    try {
        const zip = new JSZip();
        
        // Add login.html
        zip.file("login.html", output);
        
        // Add CSS file with animations
        const cssContent = `/* MikroTik Hotspot Login Page - Additional Styles */
/* This file contains animation definitions */

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInDown {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes zoomIn {
    from {
        transform: scale(0.5);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes bounceIn {
    0% {
        transform: scale(0.3);
        opacity: 0;
    }
    50% {
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes flipInX {
    from {
        transform: perspective(400px) rotateX(90deg);
        opacity: 0;
    }
    to {
        transform: perspective(400px) rotateX(0);
        opacity: 1;
    }
}

@keyframes flipInY {
    from {
        transform: perspective(400px) rotateY(90deg);
        opacity: 0;
    }
    to {
        transform: perspective(400px) rotateY(0);
        opacity: 1;
    }
}

@keyframes rotateIn {
    from {
        transform: rotate(-180deg);
        opacity: 0;
    }
    to {
        transform: rotate(0);
        opacity: 1;
    }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.fadeIn { animation-name: fadeIn; }
.slideInDown { animation-name: slideInDown; }
.zoomIn { animation-name: zoomIn; }
.bounceIn { animation-name: bounceIn; }
.flipInX { animation-name: flipInX; }
.flipInY { animation-name: flipInY; }
.rotateIn { animation-name: rotateIn; }
.pulse { animation-name: pulse; }
.shake { animation-name: shake; }

/* Responsive styles */
@media (max-width: 768px) {
    .wrap {
        padding: 20px !important;
        margin: 10px !important;
    }
    
    .company-title {
        font-size: 24px !important;
    }
    
    input[type="text"],
    input[type="password"] {
        font-size: 14px !important;
        padding: 10px 10px 10px 40px !important;
    }
    
    input[type="submit"] {
        padding: 12px !important;
        font-size: 14px !important;
    }
}

@media (max-width: 480px) {
    .wrap {
        padding: 15px !important;
    }
    
    .company-title {
        font-size: 20px !important;
    }
    
    .info {
        font-size: 12px !important;
    }
}`;
        
        zip.file("animations.css", cssContent);
        
        // Add README file
        const readme = `MikroTik Hotspot Login Page
================================

Generated by MikroTik Hotspot Login Generator v2.0

Files Included:
1. login.html - Main login page file
2. animations.css - Additional CSS animations

Installation Instructions:
=========================

1. Upload the files to your MikroTik router:
   - Method 1: Using WinBox/WebFig
     - Go to Files
     - Upload login.html and animations.css to hotspot directory
   
   - Method 2: Using FTP/SCP
     - Connect to your router via FTP/SCP
     - Upload files to /hotspot directory

2. Configure Hotspot Server:
   -------------------------
   /ip hotspot profile
   set [find] html-directory=hotspot
   
   /ip hotspot
   set hotspot-name html-directory-override=hotspot

3. Set the login page:
   -------------------
   /ip hotspot profile
   set [find] login-page=login.html

4. For CHAP authentication:
   ------------------------
   Make sure /md5.js is accessible in your hotspot directory.
   If missing, download it from MikroTik resources or use:
   https://github.com/mikrotik/hotspot/tree/master/files

Important Notes:
===============
- The HTML file contains MikroTik variables (\$(variable)) that are processed by the router
- CHAP authentication requires md5.js file
- Test the page on your hotspot before production use
- Customize colors and styles in the HTML file as needed

Troubleshooting:
===============
1. If page shows "404 Not Found":
   - Check file location in hotspot directory
   - Verify hotspot profile settings
   
2. If CHAP authentication fails:
   - Ensure md5.js is in hotspot directory
   - Check browser console for JavaScript errors
   
3. If styling doesn't work:
   - Check CSS paths are correct
   - Verify all CSS is embedded in HTML

Support:
========
For issues or questions, please check:
- MikroTik Documentation
- MikroTik Forum
- RouterOS Manual

Generated on: ${new Date().toLocaleDateString()}
`;
        
        zip.file("README.txt", readme);
        
        // Add sample md5.js file
        const md5js = `// MD5 Library for MikroTik Hotspot CHAP authentication
// This is a simplified version for testing
// In production, use the official md5.js from MikroTik

function hexMD5(str) {
    // Simplified MD5 implementation for demo
    // IMPORTANT: In production, use the full MD5 implementation
    // from MikroTik's official md5.js file
    
    console.log('MD5 function called for CHAP authentication');
    console.log('Input length:', str.length);
    
    // For demo purposes - returns a mock hash
    // Replace with actual MD5 implementation
    var hash = '';
    for (var i = 0; i < 32; i++) {
        hash += Math.floor(Math.random() * 16).toString(16);
    }
    return hash;
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { hexMD5 };
}`;
        
        zip.file("md5-demo.js", md5js);
        
        // Add configuration backup script
        const configScript = `# MikroTik Hotspot Configuration Script
# Save this as .rsc file and import to RouterOS

# Hotspot Profile Configuration
/ip hotspot profile
add name=CustomHotspot html-directory=hotspot login-page=login.html

# Hotspot Server Configuration
/ip hotspot
set [find] profile=CustomHotspot

# Files setup
/file print
# Upload login.html to hotspot directory
# Upload animations.css to hotspot directory (optional)
# Upload md5.js for CHAP authentication

# Test configuration
:put "Hotspot configuration complete"
:put "Upload HTML files to hotspot directory"
:put "Test login page at http://hotspot-address/login.html"`;
        
        zip.file("hotspot-config.rsc", configScript);
        
        // Generate and download ZIP
        zip.generateAsync({type: "blob"})
            .then(function(content) {
                const link = document.createElement('a');
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
                const filename = `hotspot-login-${timestamp}.zip`;
                
                link.href = URL.createObjectURL(content);
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                showLoading(false);
                
                // Show success message
                const exportBtn = document.querySelector('button[onclick="exportZIP()"]');
                const originalText = exportBtn.innerHTML;
                exportBtn.innerHTML = '<i class="fas fa-check"></i> Exported!';
                exportBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #047857 100%)';
                
                setTimeout(() => {
                    exportBtn.innerHTML = originalText;
                    exportBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #047857 100%)';
                }, 3000);
            })
            .catch(function(err) {
                showLoading(false);
                console.error('Error creating ZIP:', err);
                alert('Error creating ZIP file: ' + err.message);
            });
            
    } catch (err) {
        showLoading(false);
        console.error('Error in exportZIP:', err);
        alert('Error: ' + err.message);
    }
}

// Initialize the application
window.addEventListener('load', function() {
    console.log('MikroTik Hotspot Login Generator loaded');
    console.log('Version: 2.0');
    console.log('Features: CHAP support, animations, responsive design');
});
