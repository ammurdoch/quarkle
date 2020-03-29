cd ..
VERSION=$(gitversion | python parse_version.py)
cd backend
echo $(pwd)
docker login -u $DOCKER_USER -p $DOCKER_PASS
echo "Logged in"
docker build . -t "aa512ron/quarkle:api-${VERSION}"
docker push "aa512ron/quarkle:api-${VERSION}"
cd ../frontend
docker build . -t "aa512ron/quarkle:ui-${VERSION}"
docker push "aa512ron/quarkle:ui-${VERSION}"
cd ../deploy
helm upgrade --install legos quarkle \
  --set api.imageVersion=${VERSION} \
  --set ui.imageVersion=${VERSION}
