build:
	npm install eleventy
	npm install markdown-it
	npx @11ty/eleventy

server: build
	npx @11ty/eleventy --serve
clean:
	rm -rf _site node_modules

