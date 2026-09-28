Add-Type -AssemblyName System.Drawing

$src = "C:\Users\mdj52\.gemini\antigravity-ide\brain\6041cec1-c829-44a1-b091-4315847a690a\.user_uploaded\media_1790616575719.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Crop left cluster (width 160, height 347)
$rectLeft = New-Object System.Drawing.Rectangle(0, 0, 160, $bmp.Height)
$croppedLeft = $bmp.Clone($rectLeft, $bmp.PixelFormat)
$croppedLeft.Save("e:\Dointech\task\public\images\cta-ornaments-left.png", [System.Drawing.Imaging.ImageFormat]::Png)
$croppedLeft.Dispose()

# Crop right cluster (x: 860, width: 164, height: 347)
$rectRight = New-Object System.Drawing.Rectangle(860, 0, ($bmp.Width - 860), $bmp.Height)
$croppedRight = $bmp.Clone($rectRight, $bmp.PixelFormat)
$croppedRight.Save("e:\Dointech\task\public\images\cta-ornaments-right.png", [System.Drawing.Imaging.ImageFormat]::Png)
$croppedRight.Dispose()

$bmp.Dispose()
Write-Host "Re-cropped CTA ornament clusters cleanly without text"
