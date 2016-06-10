#!/bin/bash
gem install jekyll html-proofer
jekyll build
htmlproofer ./_site --allow-hash-href
