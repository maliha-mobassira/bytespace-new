Add-Type -AssemblyName System.Drawing

$src = "C:\Users\mdj52\.gemini\antigravity-ide\brain\6041cec1-c829-44a1-b091-4315847a690a\.user_uploaded\media_1790615336334.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Let's inspect the exact left edge of the course card
# In 1024 width, the card's left white border starts around x = 440 or 445.
# Let's search for non-white / border pixels around x=440
$cropX = 440
$cropW = $bmp.Width - $cropX
$cropH = $bmp.Height

$rect = New-Object System.Drawing.Rectangle($cropX, 0, $cropW, $cropH)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$dest = "e:\Dointech\task\public\images\feature-growth-illustration.png"
$cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()

Write-Host "Re-cropped illustration with cropX=440: $cropW x $cropH"
