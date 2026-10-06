# Captures page screenshots with headless Chrome.
# Usage: shoot.ps1 -Base http://localhost:4200 -OutDir public/screenshots
param(
  [string]$Base = 'http://localhost:4200',
  [string]$OutDir = 'public/screenshots',
  [int]$Width = 1440,
  [int]$Height = 900
)

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$profile = Join-Path $env:TEMP 'ssh-chrome-screens'
if (Test-Path $profile) {
  Remove-Item -Recurse -Force $profile
}
New-Item -ItemType Directory -Force $profile | Out-Null
$routes = [ordered]@{
  'home'          = '/'
  'armory'        = '/armory'
  'weapon-detail' = '/armory/emberbrand-longsword'
  'arena'         = '/arena'
  'the-sport'     = '/lore'
}

New-Item -ItemType Directory -Force $OutDir | Out-Null

foreach ($name in $routes.Keys) {
  $out = Join-Path (Resolve-Path $OutDir) "$name.png"
  & $chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 `
    --user-data-dir="$profile" --disable-application-cache --incognito `
    --virtual-time-budget=12000 --window-size="$Width,$Height" `
    --screenshot="$out" "$Base$($routes[$name])" 2>$null
  Write-Output $out
}
