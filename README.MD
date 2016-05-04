# Setup

```
npm install -g typescript
npm install -g typings
npm install
typings install
```

# Start

## Home (Laptop)

```
sudo mount -t vboxsf c/src /c
docker run -d --name es -p 9200:9200 -v /c/es-product-proto-node/docker-data/es:/usr/share/elasticsearch/data elasticsearch:2.3.2
```

