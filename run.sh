#!/usr/bin/env bash
set -eo pipefail

serve -p 3000 -s . 

# case $1 in
#   start)
#     # The '| cat' is to trick Node that this is an non-TTY terminal
#     # then react-scripts won't clear the console.
#     yarn start | cat
#     ;;
#   build)
#     yarn build
#     ;;
#   #serve)
#   #  serve -p 3000 -s . 
#   #  ;;
#   test)
#     yarn test $@
#     ;;
#   *)
#     exec "$@"
#     ;;
# esac