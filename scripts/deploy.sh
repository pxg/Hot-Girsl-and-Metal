cd /var/www/html/
cp -R hotgirlsandmetal.com backup/files/
rsync -n -av --delete git_hotgirlsandmetal.com/deploy/ hotgirlsandmetal.com/
cd -
