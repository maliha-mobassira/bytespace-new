Add-Type -AssemblyName System.Drawing

$src = "C:\Users\mdj52\.gemini\antigravity-ide\brain\6041cec1-c829-44a1-b091-4315847a690a\.user_uploaded\media_1790612310934.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Let's inspect where thumbnails start and end by finding non-white pixels
# In each of the 6 card zones:
# Zone 1 (Row 0, Col 0): x: 0..330, y: 0..330
# Zone 2 (Row 0, Col 1): x: 345..675, y: 0..330
# Zone 3 (Row 0, Col 2): x: 690..1024, y: 0..330
# Zone 4 (Row 1, Col 0): x: 0..330, y: 350..690
# Zone 5 (Row 1, Col 1): x: 345..675, y: 350..690
# Zone 6 (Row 1, Col 2): x: 690..1024, y: 350..690

# Let's crop the actual thumbnails directly:
# In 1024px image:
# Col 0: card starts around x=0, padding ~14px -> thumb x=14, width=290, y=14, height=166
# Col 1: card starts around x=352 -> thumb x=366, width=290, y=14, height=166
# Col 2: card starts around x=704 -> thumb x=718, width=290, y=14, height=166
# Row 1: card starts around y=360 -> thumb y=374, height=166

$boxes = @(
    @{ Name = "course-thumb-1.png"; X = 13; Y = 14; W = 292; H = 166 },
    @{ Name = "course-thumb-2.png"; X = 366; Y = 14; W = 292; H = 166 },
    @{ Name = "course-thumb-3.png"; X = 719; Y = 14; W = 292; H = 166 },
    @{ Name = "course-thumb-4.png"; X = 13; Y = 373; W = 292; H = 166 },
    @{ Name = "course-thumb-5.png"; X = 366; Y = 373; W = 292; H = 166 },
    @{ Name = "course-thumb-6.png"; X = 719; Y = 373; W = 292; H = 166 }
)

foreach ($b in $boxes) {
    $rect = New-Object System.Drawing.Rectangle($b.X, $b.Y, $b.W, $b.H)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $dest = "e:\Dointech\task\public\images\$($b.Name)"
    $cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Saved $($b.Name) size $($b.W)x$($b.H)"
}

$bmp.Dispose()
