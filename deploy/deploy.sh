cd ..
VERSION=$(gitversion | python parse_version.py)
cd ../backend
docker login -u $DOCKER_USER -p $DOCKER_PASS
docker build . -t "aa512ron/quarkle:api-${VERSION}"
docker push "aa512ron/quarkle:api-${VERSION}"
cd ../frontend
docker build . -t "aa512ron/quarkle:ui-${VERSION}"
docker push "aa512ron/quarkle:ui-${VERSION}"