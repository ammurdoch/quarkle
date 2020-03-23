
Following the docs at https://cert-manager.io/docs/installation/kubernetes/


```
kubectl apply --validate=false -f https://raw.githubusercontent.com/jetstack/cert-manager/v0.13.1/deploy/manifests/00-crds.yaml
kubectl create namespace cert-manager
helm repo add jetstack https://charts.jetstack.io
helm repo update

echo "Using Helm v3+"
helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --version v0.13.1
```

Create issuers and then

```
# issuers.yaml
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    # You must replace this email address with your own.
    # Let's Encrypt will use this to contact you about expiring
    # certificates, and issues related to your account.
    email: aaron@puente.tech
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      # Secret resource used to store the account's private key.
      name: letsencrypt-staging
    # Add a single challenge solver, HTTP01 using nginx
    solvers:
    - http01:
        ingress:
          class: nginx
      selector:
        matchLabels:
          "user-http01-solver": "true"
---
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    # You must replace this email address with your own.
    # Let's Encrypt will use this to contact you about expiring
    # certificates, and issues related to your account.
    email: aaron@puente.tech
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      # Secret resource used to store the account's private key.
      name: letsencrypt-prod
    # Add a single challenge solver, HTTP01 using nginx
    solvers:
    - http01:
        ingress:
          class: nginx
      selector:
        matchLabels:
          "user-http01-solver": "true"
```

and then

```
kubectl apply -f issuers.yaml
```

and finally setup your ingresses like this (note the arrows):

```
# ingress.yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: {{.Values.name}}-api-ingress
  labels:
    app: {{.Values.name}}
    user-http01-solver: "true"  #<-- Required
  annotations:
    kubernetes.io/ingress.class: nginx  #<-- Required
    cert-manager.io/cluster-issuer: letsencrypt-staging #<-- Required (probably try staging first)
    # cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/proxy-body-size: "25m" #<-- Optional, see https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/
spec:
  rules:
  - host: {{.Values.apiUrl}}
    http:
      paths:
      - path: /
        backend:
          serviceName: {{.Values.name}}-svc-api
          servicePort: {{.Values.apiContainerPort}}
  tls:  #<-- This section is required
    - hosts:
      - {{.Values.apiUrl}}
      secretName: {{.Values.name}}-api-ingress-cert
```

To check if it worked

```
kubectl get certificate
```