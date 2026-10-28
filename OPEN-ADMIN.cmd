@echo off
cd /d "%~dp0"
set "ECO_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%ECO_NODE%" set "ECO_NODE=node"
"%ECO_NODE%" "%~dp0preview-server.cjs" --admin
if errorlevel 1 pause
