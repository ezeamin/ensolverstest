function pause() {
  read -p "$*"
}

echo
echo To-Do List App by Ezequiel Amin
echo
echo Attention: You are about to install the to-do list application. You'll need to have a mySQL database instance ready or running on your computer or on the cloud, and internet connection for downloading dependencies. If you don't have a DB yet, you can download one from http://www.mysql.com/downloads/ or host it on https://www.clever-cloud.com/. If you have a database server running, you can proceed with the installation. Otherwise, you shall exit this program and install the database server first.
echo
pause Press [Enter] key to continue...
clear
export mypath=$PWD
echo
echo Step 1: Database variables configuration
echo
read -p "Database name: " dbname
read -p "Database host (localhost if local): " dbhost
read -p "Database user: " dbuser
read -p "Database password: " dbpass
clear
set +v
    echo "DB_NAME = $dbname" > "${mypath}/server/.env"
    echo "DB_HOST = $dbhost" >> "${mypath}/server/.env"
    echo "DB_USER = $dbuser" >> "${mypath}/server/.env"
    echo "DB_PASS = $dbpass" >> "${mypath}/server/.env"
    echo >> "${mypath}/server/.env"
    echo "SECRET_KEY = ensolvers2022" >> "${mypath}/server/.env"
echo
echo Created .env file with DB data.
echo You can manually modify these attributes from /server/.env file.
echo
pause Press [Enter] key to continue...
echo
echo Step 2: Dependencies
echo Dependencies are about to be installed. This may take a while. Please make sure you have a stable internet connection.
echo
pause Press [Enter] key to continue...
npm install 
cd server
npm install
cd ..
cd client
npm install
cd ..
clear
echo
echo Installation finished. The app is about to start automatically.
echo
echo MAKE SURE YOUR SQL DATABASE IS UP AND RUNNING BEFORE YOU CONTINUE.
echo Otherwise, you can now exit this app.
echo
pause Press [Enter] key to continue...
clear
"${mypath}\sh-start.sh"
