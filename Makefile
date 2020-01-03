default: server

build:
	bundle exec middleman build

clean:
	rm -rf build

server:
	bundle exec middleman server

deploy: clean build
	@if [ -z ${DAVIDBETTIS_S3} ]; then echo "S3 target not configured."; else aws s3 sync build ${DAVIDBETTIS_S3} --exclude daily-office; fi
 
