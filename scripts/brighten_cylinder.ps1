Add-Type -AssemblyName System.Drawing

$path = "E:\Dointech\task\public\images\cta\cta-cylinder-white.png"
$bytes = [System.IO.File]::ReadAllBytes($path)
$ms = New-Object System.IO.MemoryStream($bytes, 0, $bytes.Length)
$src = [System.Drawing.Bitmap]::FromStream($ms)
$dst = New-Object System.Drawing.Bitmap($src.Width, $src.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $src.Height; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        $p = $src.GetPixel($x, $y)
        if ($p.A -gt 0) {
            # Grayscale luminance
            $lum = (0.299 * $p.R + 0.587 * $p.G + 0.114 * $p.B)
            # Brighten so the body is crisp pure white like the white cone
            $val = [Math]::Min(255, [int]($lum * 1.48))
            $dst.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, $val, $val, $val))
        } else {
            $dst.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$src.Dispose()
$ms.Dispose()

$tmpPath = "E:\Dointech\task\public\images\cta\cta-cylinder-white-bright.png"
$dst.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Png)
$dst.Dispose()

Move-Item -Path $tmpPath -Destination $path -Force
Write-Host "Processed cta-cylinder-white.png to pure brilliant white"
