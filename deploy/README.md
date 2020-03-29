# Create regcred
```
DOCKER_SERVER="https://index.docker.io/v1/"
DOCKER_USER="aa512ron"
DOCKER_EMAIL="aaron@puente.tech"
kubectl create secret docker-registry regcred \
  --docker-server=${DOCKER_SERVER} \
  --docker-username=${DOCKER_USER} \
  --docker-password=${DOCKER_PASS} \
  --docker-email=${DOCKER_EMAIL}
```