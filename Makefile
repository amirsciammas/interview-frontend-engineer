build:
	docker build -t $(docker_user)/adidas-frontend-app:$(tag) .
push: build 
	docker push $(docker_user)/adidas-frontend-app:$(tag)