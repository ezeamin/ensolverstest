@echo.
@echo To-Do List App by Ezequiel Amin
@echo.
@echo Attention: You are about to install the to-do list application. You'll need to have a mySQL database instance running on your computer or on the cloud, and internet connection for downloading dependencies. If you don't have a DB running, you can download one from http://www.mysql.com/downloads/ or host it on https://www.clever-cloud.com/. If you have a database server running, you can proceed with the installation. Otherwise, you can exit this program and install the database server first.
@echo.
@pause
@cls
@set mypath=%~dp0
@set /p DB_NAME=Database name: 
@set /p DB_HOST=Database host (localhost if local): 
@set /p DB_USER=Database username: 
@set /p DB_PASSWORD=User password: 
if [%DB_PASSWORD%]==[] @set DB_PASSWORD= 
@cls
@echo off
    echo DB_NAME = ^%DB_NAME%>>"%mypath%\server\.env"
    echo DB_HOST = ^%DB_HOST%>>"%mypath%\server\.env"
    echo DB_USER = ^%DB_USER%>>"%mypath%\server\.env"
    echo DB_PASSWORD = ^%DB_PASSWORD%>>"%mypath%\server\.env"
    echo.>>"%mypath%\server\.env"
    echo SECRET_KEY = ensolvers2022>>"%mypath%\server\.env"
@echo on
@echo Created .env file with DB data.
@echo Dependencies are about to be installed. This may take a while.
@echo.
@pause
@call npm install 
@call cd server
@call npm install
@call cd ..
@call cd client
@call npm install
@call cd ..
@cls
@echo Installation finished. The app is about to start automatically.
@echo MAKE SURE YOUR SQL DATABASE IS UP AND RUNNING BEFORE YOU CONTINUE.
@echo.
@pause
@cls
@call "%mypath%\win-start.bat"
