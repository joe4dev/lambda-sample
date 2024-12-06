.PHONY: install build deploy
all: install build deploy

SAM ?= samlocal

install:
	npm install

build:
	$(SAM) build

deploy:
	$(SAM) deploy

delete:
	$(SAM) delete
