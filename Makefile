build:
	docker build -t 9626320431/adidas-frontend-app:$(tag) .
push: build 
	docker push 9626320431/adidas-frontend-app:$(tag)