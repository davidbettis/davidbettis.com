default:
	bundle exec middleman build

clean:
	rm -rf build

server:
	bundle exec middleman server
