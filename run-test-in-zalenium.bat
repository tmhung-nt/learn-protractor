@echo off

cls

echo "Pull latest elgalu/selenium image"
call docker pull elgalu/selenium

echo "Remove protractor-demo_e2e image to force rebuild"
call docker rmi protractor-demo_e2e

echo "start zalenium hub"
call docker-compose -f .\zalenium-compose.yml up -d hub

echo "Start execution..."
call docker-compose -f .\zalenium-compose.yml run  e2e

echo "Clean up after execution"
call docker-compose -f .\zalenium-compose.yml down
