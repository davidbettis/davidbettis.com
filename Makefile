default:
	bundle exec middleman build

clean:
	rm -rf build

server:
	bundle exec middleman server

deploy:
	aws s3 sync build ${DAVIDBETTIS_S3} --exclude daily-office
