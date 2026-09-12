# Captures page screenshots with headless Chrome. Usage: shoot.ps1 -Base http://127.0.0.1:4310 -OutDir .impeccable/review
param(
  [string]$Base = 'http://127.0.0.1:4310',
  [string]$OutDir = '.impeccable/review',
  [int]$Width = 1440,
  [int]$Height = 900,
  [string]$Prefix = 'desktop'
)

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$routes = @{
  home    = '/'
  armory  = '/armory'
  weapon  = '/armory/emberbrand-longsword'
  arena   = '/arena'
  sport   = '/lore'
}

New-Item -ItemType Directory -Force $OutDir | Out-Null

foreach ($name in $routes.Keys) {
  $out = Join-Path (Resolve-Path $OutDir) "$Prefix-$name.png"
  & $chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 `
    --virtual-time-budget=6000 --window-size="$Width,$Height" `
    --screenshot="$out" "$Base$($routes[$name])" 2>$null
  Write-Output "$out"
}
