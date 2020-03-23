```
kubectl create namespace nginx
helm upgrade --install sonic stable/nginx-ingress --namespace nginx --set controller.config.client-max-body-size="1m"
```