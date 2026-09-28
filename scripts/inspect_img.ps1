Add-Type -AssemblyName System.Drawing

$src = "e:\Dointech\task\public\images\feature-manage-illustration.png"
$img = [System.Drawing.Image]::FromFile($src)
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
