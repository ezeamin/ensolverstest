@echo.
@echo To-Do List App by Ezequiel Amin
@echo.
@echo Attention: You are about to install the to-do list application. You'll need to have a mySQL database instance ready or running on your computer or on the cloud, and internet connection for downloading dependencies. If you don't have a DB yet, you can download one from http://www.mysql.com/downloads/ or host it on https://www.clever-cloud.com/. If you have a database server running, you can proceed with the installation. Otherwise, you shall exit this program and install the database server first.
@echo.
@pause
@cls
@set mypath=%~dp0
@echo.
@echo Step 1: Database variables configuration
@echo.
@set /p DB_NAME=Database name: 
@set /p DB_HOST=Database host (localhost if local): 
@set /p DB_USER=Database username: 
@set /p DB_PASSWORD=User password: 
@cls
@echo off
    echo DB_NAME = ^%DB_NAME%>"%mypath%\server\.env"
    echo DB_HOST = ^%DB_HOST%>>"%mypath%\server\.env"
    echo DB_USER = ^%DB_USER%>>"%mypath%\server\.env"
    IF [%DB_PASSWORD%]==[] (
        echo DB_PASSWORD = >>"%mypath%\server\.env"
    ) ELSE (
        echo DB_PASSWORD = ^%DB_PASSWORD%>>"%mypath%\server\.env"
    )
    echo.>>"%mypath%\server\.env"
    echo SECRET_KEY = ensolvers2022>>"%mypath%\server\.env"
@echo on
@echo.
@echo Created .env file with DB data.
@echo You can manually modify these attributes from /server/.env file.
@echo.
@echo Step 2: Dependencies
@echo Dependencies are about to be installed. This may take a while. Please make sure you have a stable internet connection.
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
@echo.
@echo Installation finished. The app is about to start automatically.
@echo.
@echo MAKE SURE YOUR SQL DATABASE IS UP AND RUNNING BEFORE YOU CONTINUE.
@echo Otherwise, you can now exit this app.
@echo.
@pause
@cls
@call "%mypath%\win-start.bat"
