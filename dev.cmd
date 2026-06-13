@echo off
setlocal
cd /d "%~dp0"
"C:\Users\User-1\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "node_modules\next\dist\bin\next" dev --hostname 127.0.0.1 --port 3000
