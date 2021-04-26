# run mongoDB through brew:
brew services start mongodb-community@4.4

# shutdown mongoDB through brew:
brew services stop mongodb-community@4.4

# manually run mongoDB (without brew)
mongod --config /usr/local/etc/mongod.conf --fork