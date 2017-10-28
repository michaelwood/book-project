#!/bin/bash 
# Generate the js object definitions for the mini books
# Michael Wood

for j in {1..19}; do

  booknum=$j

  echo "{
  name: \"book-$booknum\",
  pages: [
  "

  for i in `ls book$booknum.*.png | sort -V`; do
    echo "  \"$i\","
  done

  echo "  ]
},"
done
