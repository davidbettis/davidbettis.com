build:
	npm install eleventy
	npm install markdown-it
	npx @11ty/eleventy

server: build
	npx @11ty/eleventy --serve
clean:
	rm -rf _site node_modules

deploy: build
	@if [ -f config.sh ]; then . ./config.sh; fi; \
	aws s3 sync public $${S3_DEPLOY_TARGET} && \
	aws cloudfront create-invalidation --distribution-id $${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"

