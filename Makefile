docker_build:
	docker build -t 9626320431/adidas-frontend-app:$(tag) .
docker_push: docker_build     
	docker push 9626320431/adidas-frontend-app:$(tag)
start_app:
	npm start
test_app:
	npm test	
build_app:
	npm run build