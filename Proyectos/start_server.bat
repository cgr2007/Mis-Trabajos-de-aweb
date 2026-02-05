@echo off
title Arma Reforger Dedicated Server

REM === RUTA DEL EJECUTABLE DEL SERVIDOR ===
set SERVER_EXE="D:\ArmaReforgerServerCGR\ArmaReforgerServer.exe"

REM === PERFIL OFICIAL (NO CAMBIAR) ===
set PROFILE_DIR="C:\Users\%USERNAME%\Documents\My Games\ArmaReforgerServer"

REM === ARRANQUE ===
%SERVER_EXE% ^
 -profile %PROFILE_DIR% ^
 -config %PROFILE_DIR%\profiles\config.json ^
 -logfile %PROFILE_DIR%\server.log ^
 -maxFPS 60

pause