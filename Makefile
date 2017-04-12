
.PHONY: all
all: npm-0-stamp

npm-0-stamp:
	npm install
	touch $@

.PHONY: check
check: npm-0-stamp
	@./node_modules/.bin/jshint lib/progbar.js
