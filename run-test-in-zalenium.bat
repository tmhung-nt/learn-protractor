@echo off

cls

echo "Pull latest elgalu/selenium image"
call docker pull elgalu/selenium

echo "start zalenium hub"
call docker-compose -f .\zalenium-compose.yml up -d hub

echo "Start execution..."
call docker-compose -f .\zalenium-compose.yml run  e2e

echo "Clean up after execution"
call docker-compose -f .\zalenium-compose.yml down
