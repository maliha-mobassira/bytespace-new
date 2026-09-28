Add-Type -AssemblyName System.Drawing

$src = "C:\Users\mdj52\.gemini\antigravity-ide\brain\6041cec1-c829-44a1-b091-4315847a690a\.user_uploaded\media_1790612310934.png"
$img = [System.Drawing.Image]::FromFile($src)
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
