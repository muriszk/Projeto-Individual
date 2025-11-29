#!/usr/bin/bash

echo "=== verificando situação atual  ==="
git status 

echo "=== adicione a mensagem"
read -p " Digite a mensagem do commit" msg

echo "=== Adicionando alterações ==="
git add .

echo "=== commitadno ==="
git commit -m " $msg"

echo "=== adicionando ao repositorio remoto, somente a branch main==="
git push origin main

echo "finalizado!"
